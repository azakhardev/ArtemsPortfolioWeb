const body = document.querySelector('body');
const themeButton = document.querySelector('.themeButton');

const theme = sessionStorage.getItem('theme')

if(theme === null){
    sessionStorage.setItem('theme', 'light')
}else if(theme === "dark"){
    body.classList.add('dark-mode');
}

themeButton.addEventListener('click', e => {
    if (body.classList.contains("dark-mode")) {
        sessionStorage.setItem('theme', "light");
    } else {
        sessionStorage.setItem('theme', "dark");
    }
    body.classList.toggle('dark-mode');
})