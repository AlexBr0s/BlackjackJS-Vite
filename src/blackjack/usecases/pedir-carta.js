/**
 * Funcion para tomar una carta
 * @constructor
 * @param {Array<String>} deck - Deck de cartas
 * @returns {String} - Devuelve la ultima carta del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'Ya no hay cartas en el deck';
    }
    return deck.pop();
}