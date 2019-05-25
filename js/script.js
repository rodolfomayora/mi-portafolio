/**
 * @fileoverview funcionalidade del sitio
 * @author Rodolfo < rodolfomayora96@gmail.com >
 */
const // referencias de elementos del DOM
	burger = document.getElementById( 'burger' ),
	body = document.getElementById( 'body' ),
	navigation = document.getElementById( 'navigation' ),
	sticky = navigation.offsetTop,
	content	= document.querySelectorAll( '.js-content' );

let mediaQuerie2 = window.matchMedia( '(max-width: 767px)' );


/**
 * @function
 * @name switchMenu
 * @Description gestiona las clases necesarias para el menu de navegacion movil
 */
function eventToMovile () {

	burger.classList.toggle( 'burger--active' );

	navigation.classList.toggle( 'navigation--visible' );
	
	content[ 0 ].classList.toggle( 'blur' );
	content[ 1 ].classList.toggle( 'blur' );
	content[ 2 ].classList.toggle( 'blur' );

	body.classList.toggle( 'scroll-off' );	
}

/**
 * @function
 * @name switchMenu
 * @Description gestiona las clases para el menu de navegacion de escritorio
 */
function eventToDesktop () {

	if ( window.pageYOffset >= sticky ) {

		navigation.classList.add( 'navigation--moved-2' );
	} else {

		navigation.classList.remove( 'navigation--moved-2' );
	}
}


/**
 * @function
 * @name switchMenu
 * @Description gestiona los eventos depediendo del dispositivo
 * @param {Object MediaQueryList} mql
 */
function switchMenu ( mql ) {

	if ( mql.matches ) {

		document.removeEventListener( 'scroll', eventToDesktop );
	} else {
		
		document.addEventListener( 'scroll', eventToDesktop );
	}
}

switchMenu( mediaQuerie2 );

mediaQuerie2.addListener( switchMenu );

burger.addEventListener( 'click', eventToMovile );