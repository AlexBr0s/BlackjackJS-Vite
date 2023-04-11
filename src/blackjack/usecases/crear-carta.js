/**
 * Funcion para crear una carta nueva en una etiqueta IMG
 * @param {String} carta - Carta que se creara
 * @returns {HTMLInputElement} - Devuelve una <img> con la carta dada
 */
export const crearCarta = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}