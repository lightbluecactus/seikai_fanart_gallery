(()=>{

	"use strict";
	console.log("javascript is linked up");

	const navIcon = document.querySelector("#navIcon"),
	 	  mainNav = document.querySelector("#mainNav");

	const tl = new TimelineLite({paused: true, reversed: true});
								// {paused: true} will STOP playing animation as soon as loading the page 
								// {reversed: true} will FIX the bahave that needing a second click to fire the animation
	tl.to('#container', 0.1, {
			marginLeft: '10%',
			ease: Cubic.easeOut
		})
		.to('nav', 0.3, {
			height: '100%',
			ease: Cubic.easeOut
		},
		'-=0.5')	// to set time offset of the 2nd action - 0.5 means halfway by the first action
		// fromTo describes both initial and end state, the first {} is start point, second {} is the end
		.fromTo('#mainNav', 0.5, {
			opacity: 0,
			x: -100,
			ease: Cubic.easeOut
		},{
			opacity: 0.8,
			x: 0,
			// onComplete = when animation finished, run this function
			onComplete : function(){
			mainNav.getElementsByClassName.pointerEvent = "auto";
			console.log("pointer event enabled")
			}
		}
	);

	function toggleTween(tween){
		// if not reversed, run ?, if reversed, run :
		tween.reversed() ? tween.play() : tween.reverse();
	}

	navIcon.addEventListener("click", () => {
		// to let animation finish and ignore multiple clicking on the button
		if(tl.isActive()){
			// e.preventDefault();
			// e.stopImmediatePropagation();
			return false;
		}
		// fire the toggle process
		toggleTween(tl);
	});



	// const navIcon = document.querySelector("#navIcon"),
	// 	  mainNav = document.querySelector("#mainNav"),
	// 	  container = document.querySelector("#container");

	// let toggle = false;

	
	// function toggleNav() {
	// 	if(toggle){
	// 		toggle = false;
	// 		container.style.marginLeft = "0";
	// 		mainNav.style.display = "none";
	// 		mainNav.style.opacity = "0%";
	// 		mainNav.style.width = "0";
	// 	} else {
	// 		toggle = true;
	// 		container.style.marginLeft = "240px";
	// 		mainNav.style.display = "block";
	// 		mainNav.style.opacity = "80%";
	// 		mainNav.style.width = "240px";
	// 	}
	// }

	// navIcon.addEventListener("click", toggleNav);


})();