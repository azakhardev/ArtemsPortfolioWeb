function loadHeader() {
    fetch('/CZ/Header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadHeader);