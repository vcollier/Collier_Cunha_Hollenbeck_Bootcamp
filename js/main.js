
(() => {
	// stub
	console.log('fired');

	const 	pictures 		= document.querySelectorAll('.pictures'),
			pic1 	= document.querySelector('.pic1'),
			pic2	= document.querySelector('.pic2'),
			pic3   = document.querySelector('.pic3'),
			lightbox 	= document.querySelector('.lightbox'),
			box1 	= document.querySelector('.box1'),
			box2 	= document.querySelector('.box2'),
			box3    = document.querySelector('.box3'),
			image		= document.querySelector('img'),
			closeButton1 = document.querySelector('.closeButton1'),
			closeButton2 = document.querySelector('.closeButton2'),
			closeButton3 = document.querySelector('.closeButton3'),
			teamVideo = document.querySelector('.teamVid'),
			pauseButton = document.querySelector(".pauseButton"),
    		playButton = document.querySelector(".playButton"),
    		rewind = document.querySelector(".replayButton");

	function openLightbox1() {
		box1.classList.add('box1-on');
	}

	function openLightbox2() {
		box2.classList.add('box2-on');
	}

	function openLightbox3() {
		box3.classList.add('box3-on');
	}
	
	function closeLightbox1() {
		box1.classList.remove('box1-on');
	}

	function closeLightbox2() {
		box2.classList.remove('box2-on');
	}

	function closeLightbox3() {
		box3.classList.remove('box3-on');
	}

	function pauseVideo() {
    	teamVideo.pause();
	}

	function playVideo() {
		teamVideo.play();
	}

	function rewindVideo() {
		teamVideo.currentTime = 0;
		playVideo();
	}


	
	pauseButton.addEventListener("click", pauseVideo);

	playButton.addEventListener("click", playVideo);

	rewind.addEventListener("click", rewindVideo);

	pic1.addEventListener('click', openLightbox1);

	pic2.addEventListener('click', openLightbox2);

	pic3.addEventListener('click', openLightbox3);

	closeButton1.addEventListener('click', closeLightbox1);

	closeButton2.addEventListener('click', closeLightbox2);

	closeButton3.addEventListener('click', closeLightbox3);


})();

