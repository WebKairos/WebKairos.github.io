const helpBtn = document.getElementById('help');
const modal = document.getElementById('infoModal');
const cerrarBtn = document.getElementById('cerrarModalBtn');

helpBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});