const formEl = document.querySelector('form');
const buttonSend = document.querySelector('button');

buttonSend.addEventListener('click', async (c)=>{
    c.preventDefault();

    alert('Omlouvám se, ale zatím jsem nepřišel na způsob, jak distribuovat moje API mimo můj počítač, tudíž se Vaše zprávy naukládají do mé databáze, proto mne prosím kontaktujte prostřednictvím emailu na úvodní stránce.');

    const message ={
        name: formEl.querySelector('#name').value,
        surname: formEl.querySelector('#surname').value,
        email: formEl.querySelector('#email').value,
        message: formEl.querySelector('#message').value
    };

    const response = await fetch('http://localhost:5239/MyPortfolioAPI/request', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //const responseJSON = await response.json();
    //console.log('created: ', responseJSON);
    formEl.reset();
});