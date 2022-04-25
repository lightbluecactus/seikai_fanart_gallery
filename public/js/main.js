(()=>{

	"use strict";
	console.log("javascript is linked up");

	const navIcon = document.querySelector("#navIcon"),
	 	  mainNav = document.querySelector("#mainNav"),

		  socialMedia = document.querySelectorAll(".socialMedia"),
		  footerLightbox = document.querySelector(".footerLightbox"),
		  accountCloseBtn = document.querySelector("#accountCloseBtn"),
		  accountType = document.querySelector("#accountType"),
		  accountName = document.querySelector("#accountName"),
		  accountImg = document.querySelector("#accountImg");

	let accountInfo = [
		[`微信公众号`, `@静海动漫社`],
		[`微博`, `@静海动漫社官博`],
		[`哔哩哔哩`, `@首师静海动漫社`],
		[`乐乎`, `@首都师范大学 静海动漫社`],
	]


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


	//=============== Footer Lightbox ===================

	function showFooterLightbox(event) {
		footerLightbox.classList.add('showingFooterLightbox');
				
		let targetAccount = event.target.className.split(" ")[1];
				
		// set image
		let targetAccountSrc = `images/account-${targetAccount}.jpg`;
		accountImg.src = targetAccountSrc;
				
		// set text
		accountType.textContent = accountInfo[event.target.dataset.account][0];
		accountName.textContent = accountInfo[event.target.dataset.account][1];
	}

	function closeFooterLightbox() {
		footerLightbox.classList.remove('showingFooterLightbox');
	}

	socialMedia.forEach(icon => icon.addEventListener('click', showFooterLightbox));
	accountCloseBtn.addEventListener('click', closeFooterLightbox);


})();