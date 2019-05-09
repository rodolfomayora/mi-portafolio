/**
 * @fileoverview funcionalidade del sitio
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */
const burger = document.getElementById( 'burger' );
const navigation = document.getElementById( 'navigation' );
const content = document.querySelectorAll( '.content' );
let burgerButton = true;


burger.addEventListener( 'click', function () {

	if ( burgerButton ) {
		burger.setAttribute( "src", "img/clear.png" )
		burgerButton = ! burgerButton;
	} else {
		burger.setAttribute( "src", "img/menu.png" );
		burgerButton = ! burgerButton;
	}

	burger.classList.toggle( 'burger--active' );

	navigation.classList.toggle( 'navigation--visible' );
	content[ 0 ].classList.toggle( 'blur' );
	content[ 1 ].classList.toggle( 'blur' );
	content[ 2 ].classList.toggle( 'blur' );
} )