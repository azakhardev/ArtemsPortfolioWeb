// const formEl = document.querySelector('form');
const nameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('button');
//window.location.href = 'CZ/Home/Home.html';

button.addEventListener('click', async c => {
    c.preventDefault();

    const user = {
        username: nameInput.value,
        password: passwordInput.value
    }

    const response = await fetch('http://localhost:5239/MyPortfolioAPI/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJSON = await response.json();

    sessionStorage.setItem("logged", responseJSON)

    if(responseJSON)
        window.location.href = 'CZ/Home/Home.html'

})