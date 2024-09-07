const images = document.querySelectorAll('img');
const dialog = document.querySelector('dialog');
images.forEach(i => {
    i.addEventListener('click', c=> {
        console.log('opening');
        dialog.querySelector('img').src = i.getAttribute('src');
        dialog.showModal();
    })
})