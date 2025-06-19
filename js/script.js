const preguntas = document.querySelectorAll('.pregunta');
const botones = document.querySelectorAll('.pregunta button');

let motivacion = 0;
let organizacion = 0;
let estres = 0;

botones.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = '#383e46';
    btn.style.transition = 'background-color 0.3s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = '';
  });
});

function mostrarResultadoFinal(destino) {
  const botonResultado = document.createElement('button');
  botonResultado.textContent = 'Ver resultado';
  botonResultado.style.marginTop = '30px';
  botonResultado.style.marginBottom = '30px';
  botonResultado.style.height = '40px';
  botonResultado.style.width = '150px';
  botonResultado.style.fontSize = '18px';
  botonResultado.style.cursor = 'pointer';
  botonResultado.style.color = 'white';
  botonResultado.style.border = 'none';
  botonResultado.style.borderRadius = '20px';
  botonResultado.style.backgroundColor = '#de9356';

  botonResultado.addEventListener('mouseenter', () => {
    botonResultado.style.backgroundColor = '#cb874fc0';
    botonResultado.style.transition = 'background-color 0.2s';
  });
  botonResultado.addEventListener('mouseleave', () => {
    botonResultado.style.backgroundColor = '#de9356';
  });

  botonResultado.addEventListener('click', () => {
    window.location.href = destino;
  });

  const contenedor = document.querySelector('.encuesta');
  contenedor.appendChild(botonResultado);
  botonResultado.scrollIntoView({ behavior: 'smooth', block: 'center' });

}

function evaluarResultado() {
  const puntajes = [
    { categoria: 'motivacion', valor: motivacion, url: 'motivacion.html' },
    { categoria: 'organizacion', valor: organizacion, url: 'organizacion.html' },
    { categoria: 'estres', valor: estres, url: 'estres.html' }
  ];

  puntajes.sort((a, b) => b.valor - a.valor);

  if (puntajes[0].valor === puntajes[1].valor) {
    const empatados = puntajes.filter(p => p.valor === puntajes[0].valor);
    const elegido = empatados[Math.floor(Math.random() * empatados.length)];
    mostrarResultadoFinal(elegido.url);
  } else {
    mostrarResultadoFinal(puntajes[0].url);
  }
}

preguntas.forEach((pregunta, index) => {
  const botonesPregunta = pregunta.querySelectorAll('button');

  botonesPregunta.forEach(boton => {
    boton.addEventListener('click', () => {
      if (pregunta.dataset.respondida) return;
      pregunta.dataset.respondida = true;

      botonesPregunta.forEach(b => {
        b.disabled = true;
        b.style.opacity = 0.6;
        b.style.cursor = 'default';
      });

      if (boton.classList.contains('m')) {
        motivacion++;
      } else if (boton.classList.contains('o')) {
        organizacion++;
      } else if (boton.classList.contains('e')) {
        estres++;
      }

      const siguiente = preguntas[index + 1];
      if (siguiente) {
        siguiente.classList.remove('none');

        if (index >= 3) {
          const anterior = preguntas[index - 3];
          if (anterior) anterior.classList.add('none');
        }

        setTimeout(() => {
          siguiente.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      } else {
        evaluarResultado();
      }
    });
  });
});