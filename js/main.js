(() => {
	// stub
	console.log('fired');

	const 	pictures 		= document.querySelectorAll('.pictures'),
			pic1 	= document.querySelector('.pic1'),
			pic2	= document.querySelector('.pic2'),
			lightbox 	= document.querySelector('.lightbox'),
			box1 	= document.querySelector('.box1'),
			box2 	= document.querySelector('.box2'),
			image		= document.querySelector('img'),
			closeButton1 = document.querySelector('.closeButton1');
			closeButton2 = document.querySelector('.closeButton2');

	function openLightbox1() {
		box1.classList.add('box1-on');
	}

	function openLightbox2() {
		box2.classList.add('box2-on');
	}
	
	function closeLightbox1() {
		box1.classList.remove('box1-on');
	}

	function closeLightbox2() {
		box2.classList.remove('box2-on');
	}


	pic1.addEventListener('click', openLightbox1);
	pic2.addEventListener('click', openLightbox2);
	closeButton1.addEventListener('click', closeLightbox1);
	closeButton2.addEventListener('click', closeLightbox2);


})();

