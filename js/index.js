/**
 * @fileoverview gestion del codigo inicial para index.html; se añadira un escuchador
 *  del evento escroll solo cuando el sitio se visualice en pantallas superiores a los
 *  768px de ancho
 * @author rodolfo < rodolfomayora96@gmail.com>
 */

const navigation2 = document.getElementById( 'navigation' );

// mediaqueires en javascript GENIAL!!!
let mediaQuery = window.matchMedia('(min-width: 768px)');

/**
 * @function
 * @name eventMenuNormal
 * @description alterna una clases css dependiendo del scroll
 */
function eventMenuNormal () {

	if ( window.pageYOffset === 0 ) {
		//console.log( 'no sticky' );
		navigation2.classList.toggle( 'navigation--moved' )
	} 

	if ( window.pageYOffset > 0 ) {
		if ( ! navigation2.classList.contains( 'navigation--moved' ) )
		{
			//console.log( 'sticky' );
			navigation2.classList.toggle( 'navigation--moved' );
		}
	}
}

/**
 * @function
 * @name menuNormal
 * @descrition añade o quita un evento de scroll a todo el documento web
 * @param {Object MediaQueryList} mql
 */
function menuNormal ( mql ) {

	mql.matches
		? document.addEventListener( 'scroll', eventMenuNormal )
		: document.removeEventListener( 'scroll', eventMenuNormal );
}

menuNormal( mediaQuery );

mediaQuery.addListener( menuNormal );

// ahora puedo tener codigo que se ejecuta dependiando del aquipo!