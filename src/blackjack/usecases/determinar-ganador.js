import Swal from 'sweetalert2';

/**
 * Funcion para determinar quien es el jugador ganador
 * @param {Array<Number>} puntosJugadores - Arreglo con los puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;
  
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        Swal.fire({
          title: 'Nadie gana o.O',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      } else if (puntosMinimos > 21 || ((puntosComputadora > puntosMinimos) && (puntosComputadora <= 21))) {
        Swal.fire({
          title: 'Computadora ha ganado x.X',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
  
      } else if (puntosComputadora > 21) {
        Swal.fire({
          title: 'Jugador ha ganado u.u',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }
    }, 100);
  }