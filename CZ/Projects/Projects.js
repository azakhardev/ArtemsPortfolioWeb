const arrowPrev = document.querySelector('#btnPrev')
const arrowNext = document.querySelector('#btnNext')
const projectTitles = document.querySelector('.projectTitles');
const projectDescriptions = document.querySelector('.description');
const projectPhotos = document.querySelector('.photos');
const dialogEl = document.querySelector('dialog');
const closeDialogBtn = document.querySelector('.close');
const asideElement = document.querySelector('aside');

let projectsCount = 0;
let currentProject = 1;
let timeoutActive = false;
const asideInitialOffset = -asideElement.offsetWidth + 20;
dialogEl.style.height = "0px";

dialogEl.querySelector('img').style.display = "none";
dialogEl.querySelector('video').style.display = "none";

asideElement.style.left = asideInitialOffset+"px"

 asideElement.addEventListener('mouseover', e => {
     asideElement.style.left = "0px"
 })

 asideElement.addEventListener('mouseleave', e=>{
     asideElement.style.left = asideInitialOffset+"px"
 })

projectPhotos.querySelectorAll('.slide').forEach(slide => {
    const mainPhoto = slide.querySelector('.mainPhoto');
    const video = slide.querySelector('.video');


    if (mainPhoto != null) {
        slide.querySelectorAll('div:not(.mainPhoto)').forEach(d => {
            d.addEventListener('click', c => {
                mainPhoto.querySelector('img').src = d.querySelector('img').src;
                mainPhoto.querySelector('img').title = d.querySelector('img').title;

                if(window.innerWidth <= 1285){
                    dialogEl.querySelector('img').style.display = "inline";
                    dialogEl.querySelector('div img').src = d.querySelector('img').src;
                    dialogEl.style.height = "100vh";
                    dialogEl.showModal();
                }
            });
        });

        mainPhoto.addEventListener('click', c => {
            dialogEl.querySelector('img').style.display = "inline";
            dialogEl.querySelector('div img').src = mainPhoto.querySelector('img').src;
            dialogEl.style.height = "100vh";
            dialogEl.showModal();
        });
    } else {
        video.querySelector('video').addEventListener('click', c => {
            dialogEl.querySelector('video').style.display = "inline";
            dialogEl.querySelector('div video source').src = video.querySelector('source').getAttribute('src');
            dialogEl.querySelector('video').load();
            dialogEl.style.height = "100vh";
            dialogEl.showModal();
        });
    }
})

projectTitles.querySelectorAll('div').forEach(d => {
    projectsCount += 1;
})

arrowPrev.addEventListener('click', c => {
    if (currentProject > 1 && !timeoutActive) {
        timeoutActive = true;
        const div = projectTitles.querySelector('div');
        div.style.marginLeft = (div.offsetLeft + div.offsetWidth - projectTitles.offsetLeft) + "px";
        currentProject--;
        showCurrentInfo();
        showCurrentPhotos();
        setTimeout(() => {
            timeoutActive = false
        }, 1000)
    }
})

arrowNext.addEventListener('click', c => {
    if (projectsCount > currentProject && !timeoutActive) {
        timeoutActive = true;
        const div = projectTitles.querySelector('div');
        // console.log("marginLeft: ", div.style.marginLeft, " offsetWidth:", div.offsetWidth, " div offsetLeft:", div.offsetLeft)
        div.style.marginLeft = (div.offsetLeft - div.offsetWidth - projectTitles.offsetLeft) + "px";
        currentProject++;
        showCurrentInfo();
        showCurrentPhotos();
        setTimeout(() => {
            timeoutActive = false
        }, 1000)
    }
})

closeDialogBtn.addEventListener('click', c => {
    closeDialog();
})

dialogEl.addEventListener('close', c=>{
    closeDialog();
})

function closeDialog(){
    dialogEl.querySelector('img').style.display = "none";
    dialogEl.querySelector('video').style.display = "none";
    dialogEl.style.height = "0px";

    if(dialogEl.querySelector('source').src !== ""){
        dialogEl.querySelector('video').pause();
    }

    dialogEl.close();
}

function showCurrentInfo() {
    let counter = 1;

    projectDescriptions.querySelectorAll('div').forEach(div => {
        if (counter === currentProject) {
            div.style.opacity = "0";
            setTimeout(() => {
                div.classList.remove('noDisplay');
                div.style.opacity = "1";
            }, 500)

        } else {
            if (!div.classList.contains('noDisplay')) {
                div.style.opacity = "0";
                setTimeout(() => {
                    div.classList.add('noDisplay')
                }, 500)
            }
        }
        counter++;
    })
}

function showCurrentPhotos() {
    let counter = 1;
    projectPhotos.querySelectorAll('.slide').forEach(slide => {

        if (counter === currentProject) {
            slide.style.opacity = "0";
            setTimeout(() => {
                slide.classList.remove('noDisplay');
                slide.style.opacity = "1";
            }, 500)

        } else {
            if (!slide.classList.contains('noDisplay')) {
                slide.style.opacity = "0";
                setTimeout(() => {
                    slide.classList.add('noDisplay')
                }, 500)
            }
        }
        counter++;
    })

}