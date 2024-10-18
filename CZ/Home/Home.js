const button = document.querySelector('#downloadButton');
const tooltip = document.querySelector('#downloadButtonTooltip');
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
        const invisibleTimeout = setTimeout(() => {
            button.style.visibility = 'hidden';
            clearTimeout(invisibleTimeout);
        }, 1500)
    }
})

function setShake() {

    tooltip.style.visibility = 'hidden';
    clearInterval(tooltipInterval);
    buttonInterval = setInterval(() => {
        button.classList.toggle('buttonShake');
    }, 7500)
    buttonShakeSet = true;

}