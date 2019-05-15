/**
 * @fileoverview funcionalidade del sitio
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */

const // referencias de elementos del sitio
	burger = document.getElementById( 'burger' ),
	body = document.getElementById( 'body' ),
	navigation = document.getElementById( 'navigation' ),
	content	= document.querySelectorAll( '.js-content' );

burger.addEventListener( 'click', function () {

	burger.classList.toggle( 'burger--active' );

	navigation.classList.toggle( 'navigation--visible' );
	
	content[ 0 ].classList.toggle( 'blur' );
	content[ 1 ].classList.toggle( 'blur' );
	content[ 2 ].classList.toggle( 'blur' );

	body.classList.toggle( 'scroll-off' );
} )

/**
 * TO DO:
 * - añadir mediar queries para que el menu hamburguesa solo sea referenciado
 *   cuando el sitio carge en pantallas inferiores a los 767px
 */