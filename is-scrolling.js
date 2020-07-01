{
	'use strict';

	let elements = document.querySelectorAll('.xxx');
	window.addEventListener('scroll', function() {
		for(let i=0; i<elements.length; i++){
		if(elements[i].scrollTop < 50) {
			
			elements[i].classList.add('partiallyVisible');
		}
		else{
			elements[i].classList.remove('partiallyVisible');
		}
	}
	})
}