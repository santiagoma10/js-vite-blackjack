import _ from 'underscore';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} TiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo Deck de cartas
 */ 
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('TiposDeDatos es obligatorio como un arreglo de String');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;