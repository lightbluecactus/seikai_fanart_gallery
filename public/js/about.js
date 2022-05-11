(()=>{

	"use strict";
    console.log("javascript is linked up");

    const DMBtn = document.querySelector("#DMBtn"),
          counterBtn = document.querySelector("#counterBtn"),
          contactInfo = document.querySelector("#contactInfo"),
          counterCon = document.querySelector("#counterCon"),
          counter = document.querySelector("#counter");

    function showContactInfo() {
        contactInfo.style.display = "block";
    }

    function clickCounter() {
        counterCon.style.display = "block";
        counter.textContent ++;

    }


    DMBtn.addEventListener("click", showContactInfo);
    counterBtn.addEventListener("click", clickCounter);

})();