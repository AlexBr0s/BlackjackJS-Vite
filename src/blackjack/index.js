import Swal from 'sweetalert2';
import 'animate.css';

import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from "./usecases";

let deck = [];
const   tipos       = ['C', 'D', 'H', 'S'],
        especiales  = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias del html
const btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small'),
      divCartasJugadores = document.querySelectorAll('.divCartas');


// Esta funcion inicializa el juego      
const inicializarJuego = (numJugadores = 2) => {

  Swal.fire({
    title: 'COMENZAR JUEGO',
    html: 'El primer jugador que alcance una suma de 21 puntos o se acerque más sin pasarse, ganará la partida. <br> <br> <b> ¡Buena suerte! </b>',
    confirmButtonText: 'JUGAR',
    padding: '2em',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });

  deck = crearDeck(tipos,especiales);

  puntosJugadores = [];

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  btnDetener.disabled = false;
  btnPedir.disabled = false;


  puntosHTML.forEach(elem => elem.innerText = 0);
  divCartasJugadores.forEach(elem => elem.innerHTML = '');
  
}


// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(0, carta, puntosJugadores, puntosHTML);

  const cartaHTML = crearCarta(carta);
  divCartasJugadores[0].append(cartaHTML);

  if (puntosJugador > 21) {
    console.warn('Perdiste ):');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador,puntosJugadores, deck, divCartasJugadores, puntosHTML);
  } else if (puntosJugador === 21) {
    console.warn('21!!! GENIAL');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosJugadores, deck, divCartasJugadores, puntosHTML);
  }
});

btnDetener.addEventListener('click', () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  turnoComputadora(puntosJugadores[0], puntosJugadores, deck, divCartasJugadores, puntosHTML);
});

btnNuevo.addEventListener('click', () => {
  inicializarJuego();
});

inicializarJuego();