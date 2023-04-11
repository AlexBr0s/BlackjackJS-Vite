import { valorCarta } from "./";

/**
 * Funcion para acumular los puntos de las cartas
 * @param {Number} turno - Turno dek jugador a sumar puntos
 * @param {String} carta - Carta para obtener sus puntos
 * @param {Array<Number>} puntosJugadores - Lista de los puntos de los jugadores
 * @param {Array<HTMLElement>} puntosHTML - Lista con los objetos html que contienen el texto del puntaje
 * @returns {Number} - Nuevo puntaje acumulado
 */
export const acumularPuntos = (turno, carta, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}