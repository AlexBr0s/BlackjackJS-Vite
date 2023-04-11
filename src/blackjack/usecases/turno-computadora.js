import { determinarGanador, pedirCarta, crearCarta, acumularPuntos } from './';

/**
 * Funcion para hacer todo el juego correspondiente al turno de la computadora
 * @param {Number} puntosMinimos - Puntos minimos del oponente para que la computadora pueda jugar su turno.
 * @param {Array<Number>} puntosJugadores - Arreglo con los puntos de los jugadores
 * @param {Array<String>} deck - Deck de cartas para jugar
 * @param {Array<HTMLElement>} divCartasJugadores -  Lista con los div en donde se introducira la carta
 * @param {Array<HTMLElement>} puntosHTML - Lista con el html que tiene los puntos de los jugadores
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, deck, divCartasJugadores, puntosHTML) => {
    if (!puntosMinimos || puntosMinimos === 0)
        throw new Error('Se requieren de los puntos minimos para que la computadora pueda jugar');

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta, puntosJugadores, puntosHTML);

        const cartaHTML = crearCarta(carta);
        divCartasJugadores[puntosJugadores.length - 1].append(cartaHTML);


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}