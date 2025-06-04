let contador = 0;
const galletita = document.getElementById('galletita');
const contadorSpan = document.getElementById('contador');
const barraProgreso = document.getElementById('barra-progreso');
const mensaje = document.getElementById('mensaje');

galletita.addEventListener('click', () => {
  if (contador < 10) {
    contador++;
    contadorSpan.textContent = contador;
    barraProgreso.style.width = (contador * 10) + '%';

    if (contador === 10) {
      mensaje.classList.remove('oculto');
      galletita.style.pointerEvents = 'none';
      galletita.style.opacity = '0.5';
      barraProgreso.style.backgroundColor = '#ff6347'; // Cambia color al completar
    }
  }
});