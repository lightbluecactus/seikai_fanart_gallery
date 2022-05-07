(()=>{

	"use strict";
	console.log("javascript is linked up");

 	AOS.init();

	const illustration = document.querySelectorAll(".illustration"),
		  imageLightbox = document.querySelector(".imageLightbox"),
		  imageCloseBtn = document.querySelector(".imageCloseBtn"),
		  imageViewer = document.querySelector(".imageViewer"),
		  authorName = document.querySelector(".authorName");


	function showImageLightbox(event) {
		imageLightbox.classList.add('showingImageLightbox');
		// position property = absolute
		imageLightbox.style.top = `${document.documentElement.scrollTop}px`;

		// set image source
		imageViewer.src = `${event.target.src}`;

		// set author name
		let prompt = event.target.dataset.author;

		switch(prompt) {
			case 'baishuang':
				authorName.textContent = '白霜';
				break;
			case 'chenjuan':
				authorName.textContent = '陈卷';
				break;
			case 'chengmu':
				authorName.textContent = '呈木';
				break;
			case 'chichi':
				authorName.textContent = '赤赤';
				break;
			case 'chuanwu':
				authorName.textContent = '川鹉';
				break;
			case 'chuichui':
				authorName.textContent = '锤锤';
				break;
			case 'chuijiang':
				authorName.textContent = '锤酱';
				break;
			case 'guoshuzhi':
				authorName.textContent = '果蔬汁';
				break;
			case 'jiaojiao':
				authorName.textContent = '尾犯椒椒';
				break;
			case 'jinmao':
				authorName.textContent = '金猫';
				break;
			case 'kingjojoo':
				authorName.textContent = 'Kingjojoo';
				break;
			case 'lanran':
				authorName.textContent = '蓝染';
				break;
			case 'nanaki':
				authorName.textContent = 'Nanaki';
				break;
			case 'qiuheng':
				authorName.textContent = '邱蘅';
				break;
			case 'qiuruo':
				authorName.textContent = '秋若';
				break;
			case 'shisan':
				authorName.textContent = '什仨拾伞';
				break;
			case 'wudong':
				authorName.textContent = '乌冬';
				break;
			case 'xidiaimu':
				authorName.textContent = '西迪埃姆';
				break;
			case 'xiaolv':
				authorName.textContent = '小律';
				break;
			case 'yuluo':
				authorName.textContent = '羽洛';
				break;
			case 'yunche':
				authorName.textContent = '云澈';
				break;

			default:
				authorName.textContent = '佚名';
		}

	}

	function closeImageLightbox() {
		imageLightbox.classList.remove('showingImageLightbox');
	}

	
	illustration.forEach(illust => illust.addEventListener('click', showImageLightbox));
	imageCloseBtn.addEventListener("click", closeImageLightbox);

})();