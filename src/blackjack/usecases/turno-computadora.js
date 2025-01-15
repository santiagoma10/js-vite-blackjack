import { pedirCarta, valorCarta, crearCartaHTML } from './'

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos de la compuntadora
 * @param {HTMLElement} divCartasComputadora HTML para mostrar los puntos de la compuntadora
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if( !puntosHTML ) throw new Error('PuntosHTML es necesario como argumneto');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        //TODO: Crear carta
        const imgCarta = crearCartaHTML( carta );

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}