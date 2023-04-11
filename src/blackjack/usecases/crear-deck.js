import { shuffle } from 'underscore';

/**
 * Funcion para crear el mazo de cartas de manera aleatoria.
 * @constructor
 * @param {Array<String>} tiposDeCarta - Tipos de carta del mazo
 * @param {Array<String>} tiposEspeciales - Cartas especiales del mazo
 * @returns {Array<String>} - Regresa un nuevo deck barajeado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tiposDeCarta) {
        for (const especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return shuffle(deck);
}