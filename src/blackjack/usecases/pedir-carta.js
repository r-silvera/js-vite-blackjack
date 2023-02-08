/**
 * Esta función saca una carta del deck 
 * @param {Array<String>} deck Ejemplo : ['2D', 'JD', '6H', 'AD', 'QH', '5H']
 * @returns {String} Retorna la ultima carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
 }