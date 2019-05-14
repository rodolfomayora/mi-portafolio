/**
 * @fileoverview funcionalidade del sitio
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */
const burger = document.getElementById( 'burger' );
const navigation = document.getElementById( 'navigation' );
const content = document.querySelectorAll( '.content' );

burger.addEventListener( 'click', function () {

	burger.classList.toggle( 'burger--active' );

	navigation.classList.toggle( 'navigation--visible' );
	content[ 0 ].classList.toggle( 'blur' );
	content[ 1 ].classList.toggle( 'blur' );
	content[ 2 ].classList.toggle( 'blur' );
} )