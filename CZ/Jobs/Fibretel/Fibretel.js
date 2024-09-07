const images = document.querySelectorAll('img');
const dialog = document.querySelector('dialog');

if(!sessionStorage.getItem('logged'))
    window.location.href = '../../../index.html';

images.forEach(i => {
    i.addEventListener('click', c=> {
        console.log('opening');
        dialog.querySelector('img').src = i.getAttribute('src');
        dialog.showModal();
    })
})