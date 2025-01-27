const body = document.querySelector('body');
const themeButton = document.querySelector('.themeButton');
const switchButton = document.querySelector('.switch');
const moonIcon = document.querySelector('box-icon[name="moon"]');
const sunIcon = document.querySelector('box-icon[name="sun"]');

const theme = sessionStorage.getItem('theme');


if(theme === null){
    sessionStorage.setItem('theme', 'light')
}else if(theme === "dark"){
    body.classList.add('dark-mode');
    switchButton.style.justifyContent = 'end';
}

if (window.innerWidth <= 768) {
    moonIcon.setAttribute("size", "28px");
    sunIcon.setAttribute("size", "28px");
} else{
    moonIcon.setAttribute("size", "36px");
    sunIcon.setAttribute("size", "36px");
}

themeButton.addEventListener('click', e => {
    if (body.classList.contains("dark-mode")) {
        sessionStorage.setItem('theme', "light");
        switchButton.style.justifyContent = 'start';
    } else {
        sessionStorage.setItem('theme', "dark");
        switchButton.style.justifyContent = 'end';
    }
    body.classList.toggle('dark-mode');
})
