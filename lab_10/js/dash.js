document.addEventListener('DOMContentLoaded', async () =>{
    setTimeout(async () => {
        let products = await getAllProducts();
        console.log(products);
        let loader = document.getElementById('loader');
        loader.style.display = 'none';
        let columns = [
            "PRODUCT NAME",
            "CATEGORY",
            "PRICE",
            "CURRENCY"
        ];
        addForm(columns, products);
        drawDynamicTable(columns, products);
        applySelectableRows();
    }, 2000)
    
});

const getAllProducts = async () => {
    let response = await fetch('https://productapi-cosmincartas.c9users.io/get-all');
    let products = await response.json();
    return products;
}
const addForm = (columns, products) =>{
    let formContainer = document.getElementById('add-form');
    formContainer.innerHTML=`
        <h1>Add Product</h1>
        <input type="text" placeholder="Product Name" />
        <select id="dropdown">
            <option>Select Category</option>
            <option>Smartphone</option>
            <option>Laptops</option>
        </select>
        <input type="text" placeholder="Price" />
        <select id="currency">
            <option>Select Currency</option>
            <option>RON</option>
            <option>EUR</option>
        <select>
        <button id="add-product">Add Product</button>
    `
    let addBtn = document.getElementById('add-product');
    let inputs = formContainer.getElementsByTagName('input');
    let selects = formContainer.getElementsByTagName('select');
    let product = {
        name: '',
        category: '',
        price: 0,
        currency: ''
    }
    inputs[0].addEventListener('change', (event) => {
        product.name = event.target.value
    })
    inputs[1].addEventListener('change', (event) => {
        product.price = Number(event.target.value);
    })
    selects[0].addEventListener('change', (event) => {
        product.category = event.target.value
    })
    selects[1].addEventListener('change', (event) => {
        product.currency = event.target.value
    })
    addBtn.addEventListener('click', () => {
        console.log(product);
        products.push(product);
        fetch('https://productapi-cosmincartas.c9users.io/add-product',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }).then((res) => res.json())
            .then((res) => {
                drawDynamicTable(columns, products);
                applySelectableRows();
            });
    });
}

const drawDynamicTable = (columns, source) => {
    let table = document.getElementById('my-table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let oldThead = table.getElementsByTagName('thead')[0];
    let oldTbody = table.getElementsByTagName('tbody')[0];
    if(oldThead || oldTbody){
        table.removeChild(oldThead);
        table.removeChild(oldTbody);
    }
    
    let headers = columns.map((column) => `<th>${column}</th>`).reduce((thead, th) => thead+=th);
    thead.innerHTML = headers;
    let body = source.map(item => {
        return `<tr>${Object.values(item).map(value => `<td>${value}</td>`).reduce((row, td) => row+=td)}</tr>`;
    }).reduce((tbody, tr) => tbody+=tr);
    tbody.innerHTML = body;
    table.appendChild(thead);
    table.appendChild(tbody);
}

const applySelectableRows = () => {
    let listContainer = document.getElementById('list');
    let tableRows = [...document.getElementById('my-table')
                                .getElementsByTagName('tbody')[0]
                                .getElementsByTagName('tr')];
    let tableData = tableRows.map((row) => row.getElementsByTagName('td')[0]);
    tableData.forEach((td) => {
        td.addEventListener('click', (event) => {
            td.style.background = "#000";
            td.style.color = "#fff";
            let elements = [...listContainer.getElementsByTagName('div')];
            let item = document.createElement('div');
            item.innerText = td.innerText;
            if(elements.filter((element) => element.innerText === item.innerText).length === 0){
                listContainer.appendChild(item);
                let oldBtn = listContainer.getElementsByTagName('button')[0];
                if(oldBtn){
                    listContainer.removeChild(oldBtn);
                }
                let btn = document.createElement('button');
                btn.innerText = 'Update Prices';
                listContainer.appendChild(btn);
                btn.addEventListener('click', () => {
                    let container = document.getElementById('list');
                    let items = [...container.getElementsByTagName('div')].map(e => {
                        return {
                            name: e.innerText
                        }
                    });
                    fetch('https://productapi-cosmincartas.c9users.io/update-price',{
                        method: 'PUT',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            products: items
                        })
                        }).then((res) => res.json()).then(products =>{
                            let columns = [
                                "PRODUCT NAME",
                                "CATEGORY",
                                "PRICE",
                                "CURRENCY"
                            ];
                            drawDynamicTable(columns, products);
                            applySelectableRows();
                        })
                    
                });
            }
        });
    })
}