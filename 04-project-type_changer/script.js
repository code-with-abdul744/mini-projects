const h1 = document.querySelector('h1');

window.addEventListener('keydown', function (evt) {
    if (evt.key === " ") {
        h1.textContent = 'Space';
    } else {
        h1.textContent = evt.key;
        console.dir(evt.key);
    }
});