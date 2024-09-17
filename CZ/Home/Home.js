const download = document.querySelector('.downloadButton');


console.log(window.innerWidth)
loadHtml2PdfLibrary();

download.addEventListener('click', c => {
    if (window.innerWidth < 1440) {
        alert('Stahování je povoleno pouze z počítače nebo laptopu');
    } else {
        window.scrollTo({top: 0,});
        downloadPDF();
    }
})

function loadHtml2PdfLibrary() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    document.head.appendChild(script);
}

function downloadPDF() {
    var main = document.querySelector('main');

    html2pdf(main, {
        margin: 0,
        filename: 'Zacharcenko_Artem-zivotopis.pdf',
        image: {type: 'png', quality: 0.5},
        html2canvas: {scale: 0.98},
        jsPDF: {
            unit: 'cm',
            format: [main.offsetWidth * 2.54 / 96, (main.offsetHeight + 100) * 2.54 / 96],
            orientation: 'landscape'
        }
    });
}