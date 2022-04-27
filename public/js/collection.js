(()=>{

	"use strict";
    const sliderCon = document.querySelector("#sliderCon"),
          btnLeft = document.querySelector("#btnLeft"),
          btnRight = document.querySelector("#btnRight");

    function slideLeft() {
            //get left value, remove "px", and convert to int
            // this should be in one line (instead of multiple steps)
        let positionNumber = Number(`${sliderCon.style.left.replace(/px/g, '')}`);  
            console.log(positionNumber);
        if (positionNumber > -1) {
            console.log("cannot move left");
        } else {
            sliderCon.style.left = `${ positionNumber + 299}px`;
        }
    }

    function slideRight() {
            //get left value, remove "px", and convert to int
            // this should be in one line (instead of multiple steps)
        let positionNumber = Number(`${sliderCon.style.left.replace(/px/g, '')}`);  
            console.log(positionNumber);
        if (positionNumber < -1195) {
            console.log("cannot move right");
        } else {
            sliderCon.style.left = `${ positionNumber - 299}px`;
        }
    }

    btnLeft.addEventListener('click', slideLeft);
    btnRight.addEventListener('click', slideRight);


})();