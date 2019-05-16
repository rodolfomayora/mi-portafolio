
var 
	navigation2 = document.getElementById('navigation'),
	mediaQuery = window.matchMedia('(min-width: 768px)');

function eventMenuNormal() {
  if (window.pageYOffset === 0) {
    navigation2.classList.toggle('navigation--moved');
  }

  if (window.pageYOffset > 0) {
    if (!navigation2.classList.contains('navigation--moved')) {
      navigation2.classList.toggle('navigation--moved');
    }
  }
}

function menuNormal(mql) {
  mql.matches ? document.addEventListener('scroll', eventMenuNormal) : document.removeEventListener('scroll', eventMenuNormal);
}

menuNormal(mediaQuery);
mediaQuery.addListener(menuNormal);