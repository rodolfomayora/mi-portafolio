/**
 * @fileoverview funcionalidade del sitio
 * @author Rodolfo < rodolfomayora96@gmail.com >
 * @
 * @
 */
const burger = document.getElementById( 'burger' );
const navigation = document.getElementById( 'navigation' );
const items = document.getElementsByClassName( 'navigation__item' );
const content = document.querySelector( '.content' );
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
	content.classList.toggle( 'blur' );
} )