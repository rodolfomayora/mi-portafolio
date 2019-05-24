var navigation2 = document.getElementById('navigation'); // mediaqueires en javascript GENIAL!!!

var mediaQuery = window.matchMedia('(min-width: 768px)');
/**
 * @function
 * @name eventMenuNormal
 * @description alterna una clases css dependiendo del scroll
 */

function eventMenuNormal() {
  if (window.pageYOffset > 0) {
    // sticky menu
    if (!navigation2.classList.contains('navigation--moved')) {
      navigation2.classList.toggle('navigation--moved');
    }
  } else {
    // no sticky menu
    navigation2.classList.toggle('navigation--moved');
  }
}
/**
 * @function
 * @name menuNormal
 * @descrition añade o quita un evento de scroll a todo el documento web
 * @param {Object MediaQueryList} mql
 */


function menuNormal(mql) {
  mql.matches ? document.addEventListener('scroll', eventMenuNormal) : document.removeEventListener('scroll', eventMenuNormal);
}

menuNormal(mediaQuery);
mediaQuery.addListener(menuNormal); // ahora puedo tener codigo que se ejecuta dependiando del aquipo!