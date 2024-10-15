const nameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('button');


button.addEventListener('click', async c => {
    c.preventDefault();

    //Přišel jsi na moje loginování, dobře ty (nefunguje API :( )
    if(nameInput.value === "guest" && passwordInput.value === "0000"){
        sessionStorage.setItem("logged", "true");
        window.location.href = 'CZ/Home/Home.html';
    }

    const user = {
        username: nameInput.value,
        password: passwordInput.value
    };

    const response = await fetch('http://localhost:5239/MyPortfolioAPI/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const responseJSON = await response.json();

    sessionStorage.setItem("logged", responseJSON);

    if(responseJSON)
        window.location.href = 'CZ/Home/Home.html';

})