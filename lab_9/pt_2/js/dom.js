document.addEventListener('DOMContentLoaded', () => {
    let textInput = document.getElementById('my-text');
    textInput.addEventListener('keydown', (event) =>{
        console.log(event.target.value);
        console.log(event.keyCode);
    });
    let numberInput = document.getElementById('my-number');
    numberInput.addEventListener('change', (event) => {
        console.log(event.target.value);
    });

    let dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', (event) => {
        console.log(event.target.value);
    });
    let check = document.getElementById('ckbox1');
    check.addEventListener('click', (event) => {
        console.log(event.target.value);
    });

    let btn = document.createElement('button');
    btn.innerText = 'Click me';
    btn.style.border = '2px solid #000';
    btn.style.borderRadius = '15px';
    btn.style.lineHeight = '1.5em';
    
    btn.addEventListener('click', ()=>{
        console.log('Stop clicking me!');
    })
    let container = document.getElementById('my-container');
    container.appendChild(btn);
});