var
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