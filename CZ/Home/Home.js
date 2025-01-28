const button = document.querySelector('#downloadButton');
const tooltip = document.querySelector('#downloadButtonTooltip');
const dialog = document.querySelector('dialog');
const icons = document.querySelectorAll('.icon');
const news = document.querySelector('#news');
const closeNews = document.querySelector('#newsClose');
const skillsHeadings = document.querySelectorAll('.listHeader');

let tooltipOpacityMax = false;
let buttonShakeSet = false;
let buttonInterval = null;

const tooltipInterval = setInterval(() => {
    if (tooltipOpacityMax)
        tooltip.style.opacity = 0.1;
    else
        tooltip.style.opacity = 1;

    tooltipOpacityMax = !tooltipOpacityMax;
}, 1500)


setTimeout(() => {
    news.style.top = "25px";
}, 1000)


button.addEventListener('mouseover', (e) => {
    if (!buttonShakeSet)
        setShake();
})
tooltip.addEventListener('mouseover', (e) => {
    if (!buttonShakeSet)
        setShake();
})
button.addEventListener('click', (e) => {
    if (buttonInterval) {
        clearInterval(buttonInterval);
    }
    dialog.showModal();
    dialog.querySelector('.wrapper').style.top = "25%";
})

closeNews.addEventListener('click', c => {
    news.style.top = "-200px";
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && dialog.open) {
        e.preventDefault();
        closeDialog();
    }
})

icons.forEach((i) => {
    i.addEventListener('click', () => {
        closeDialog();
    })
})

skillsHeadings.forEach(h => h.addEventListener('click', ()=>{
    const wasActive = h.classList.contains('active');
    skillsHeadings.forEach(heading => heading.classList.remove('active'));
    if(wasActive){
        h.classList.remove('active');
    }else{
        h.classList.add('active');
    }

}))

function setShake() {
    tooltip.style.visibility = 'hidden';
    clearInterval(tooltipInterval);
    buttonInterval = setInterval(() => {
        button.classList.toggle('buttonShake');
    }, 7500)
    buttonShakeSet = true;
}

function closeDialog() {
    dialog.querySelector('.wrapper').style.top = "-50%";

    const dialogTimeout = setTimeout(() => {
        dialog.close();
        clearTimeout(dialogTimeout);
    }, 1000)
}
