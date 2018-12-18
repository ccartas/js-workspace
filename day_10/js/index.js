document.addEventListener('DOMContentLoaded', () => {
    let user = {
        user: '',
        password: ''
    };
    let loginBtn = document.getElementById('login-btn');
    let inputs = document.getElementsByTagName('input');
    inputs[0].addEventListener('change', (event) => {
        user.user = event.target.value;
    });
    inputs[1].addEventListener('change', (event) => {
        user.password = event.target.value;
    });
    loginBtn.addEventListener('click', () => {
        console.log(`Trying to authenticate with: ${user.user} ${user.password}`);
        fetch('https://productapi-cosmincartas.c9users.io/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then((res) => res.json()).then((res) => {
            if(res.role){
                console.log('Found admin user');
                window.location.href='./pages/dashboard.html';
            } else {
                window.location.href='./pages/notfound.html';
            }
        });
    });
});