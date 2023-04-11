/**
 * Funcion para obtener el valor de la carta
 * @constructor
 * @param {String} carta - Carta a obtener el valor
 * @returns {Number} - Devuelve el valor de la carta como number
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : parseInt(valor);
}