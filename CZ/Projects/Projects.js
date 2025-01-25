const projectsInfo = document.querySelectorAll('.slide');
const dialogEl = document.querySelector('dialog');
const closeDialogBtn = document.querySelector('.close');
const asideElement = document.querySelector('aside');
const projects = document.querySelector('aside').querySelectorAll('button');

const asideInitialOffset = -asideElement.offsetWidth + 20;

let currentProject = 0;

dialogEl.querySelector('img').style.display = "none";
dialogEl.querySelector('video').style.display = "none";

const asideTimerId = setTimeout(()=>{
    asideElement.style.left = asideInitialOffset + "px"
},2000)


asideElement.addEventListener('mouseover', e => {
    if(asideTimerId){
        clearTimeout(asideTimerId)
    }
    asideElement.style.left = "0px"
    asideElement.style.opacity = "1"
})

asideElement.addEventListener('mouseleave', e => {
    asideElement.style.left = asideInitialOffset + "px"
    asideElement.style.opacity = "0.5"
})

projects.forEach((proj, key) => {
    proj.addEventListener('click', e => {
        if (currentProject !== key) {
            document.querySelector('h2').innerText = proj.innerText;
            currentProject = key;
            showCurrentInfo();
        }
    })
})

closeDialogBtn.addEventListener('click', c => {
    closeDialog();
})

dialogEl.addEventListener('close', c => {
    closeDialog();
})

function closeDialog() {
    dialogEl.querySelector('img').style.display = "none";
    dialogEl.querySelector('video').style.display = "none";

    if (dialogEl.querySelector('source').src !== "") {
        dialogEl.querySelector('video').pause();
    }

    dialogEl.close();
}

projectsInfo.forEach((slide) => {
    const photos = slide.querySelector('.photos')
    const gallery = slide.querySelector('.gallery');
    const video = slide.querySelector('.video');

    if (gallery !== null) {
        const mainPhoto = photos.querySelector('.mainPhoto');
        gallery.querySelectorAll('div').forEach((div, i) => {
            // if (mainPhoto != null) {
            div.addEventListener('click', c => {
                mainPhoto.querySelector('img').src = div.querySelector('img').src;
                mainPhoto.querySelector('img').title = div.querySelector('img').title;

                if (window.innerWidth <= 1285) {
                    dialogEl.querySelector('img').style.display = "inline";
                    dialogEl.querySelector('div img').src = div.querySelector('img').src;
                    dialogEl.style.height = "100vh";
                    dialogEl.showModal();
                }
            });

            mainPhoto.addEventListener('click', c => {
                dialogEl.querySelector('img').style.display = "inline";
                dialogEl.querySelector('div img').src = mainPhoto.querySelector('img').src;
                dialogEl.style.height = "100vh";
                dialogEl.showModal();
            });
            // } else {
            //
            // }
        })
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


function showCurrentInfo() {
    projectsInfo.forEach((slide, counter) => {
        slide.style.opacity = "0";
        setTimeout(() => {
            slide.classList.add('noDisplay')
            if (counter === currentProject) {
                slide.classList.remove('noDisplay');
                setTimeout(() => {
                    slide.style.opacity = "1.0";
                }, 100)
            }
        }, 500)
    })
}
