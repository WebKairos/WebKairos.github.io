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

const btns = document.querySelectorAll('.btns');

btns.forEach(boton => {
    
    boton.addEventListener('mouseenter', () =>{
        boton.classList.add('active');
    });
    boton.addEventListener('mousedown', () => {
        boton.classList.add('active');
    });
    boton.addEventListener('mouseup', () => {
        boton.classList.remove('active');
    });
    boton.addEventListener('mouseleave', () => {
        boton.classList.remove('active');
    });
});



