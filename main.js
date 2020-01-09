//left sliders

let slideIndex = 1 ,
	slides = document.querySelectorAll('.sliderItem'),
	dotsWrap = document.querySelector('.sliderDots'),
	dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides (n) {
	if (n > slides.length) slideIndex = 1; 
	
	if (n < 1) slideIndex = slides.length;

	slides.forEach(item => item.style.display = 'none');
	dots.forEach(item => item.classList.remove('dot-active'));
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}	
 
function plusSlides (n) {
	showSlides(slideIndex += n);
} 

function currentSlide (n) {
	showSlides(slideIndex = n)
}

dotsWrap.onclick = function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
			currentSlide(i)
		}
	}
}
//right sliders
let slideIndex2 = 1 ,
	slides2 = document.querySelectorAll('.sliderItem2'),
	dotsWrap2 = document.querySelector('.sliderDots2'),
	dots2 = document.querySelectorAll('.dot2');

showSlides2(slideIndex2);

function showSlides2 (n) {
	if (n > slides2.length) slideIndex2 = 1; 
	
	if (n < 1) slideIndex2 = slides2.length;

	slides2.forEach(item => item.style.display = 'none');
	dots2.forEach(item => item.classList.remove('dot-active2'));
	slides2[slideIndex2 - 1].style.display = 'block';
	dots2[slideIndex2 - 1].classList.add('dot-active2');
}	
 
function plusSlides2 (n) {
	showSlides2(slideIndex2 += n);
} 

function currentSlide2 (n) {
	showSlides2(slideIndex2 = n)
}

dotsWrap2.onclick = function (event) {
	for (let i = 0; i < dots2.length + 1; i++) {
		if (event.target.classList.contains('dot2') && event.target == dots2[i-1]) {
			currentSlide2(i)
		}
	}
}

let openPopUp = document.getElementById('join');
let closePopUp = document.getElementById('closePopUp');
let popUpDiv = document.getElementById('popUpBg');
openPopUp.onclick = function(event) {
	popUpBg.style.display = 'block';
}
closePopUp.onclick = function (event) {
	popUpBg.style.display = 'none';
}

//====================form
const userInfo = {};

let name = document.getElementById('userName'),
	lastName = document.getElementById('lastName'),
	phoneNum = document.getElementById('phoneNumber'),
	email = document.getElementById('mail'),
	submit = document.getElementById('submit'),
	iconPhone = document.getElementById('phoneIcon');

name.oninput = function (event) {
	event.target.value.match(/\d/) || typeof event.target.value !== 'string' ?
		name.style.color = 'red' :
			name.style.color = 'white'
};

phoneNum.onmouseover = function (event) {
	iconPhone.style.display = 'none';
};

phoneNum.onmouseout = function (event) {
	iconPhone.style.display = 'block';
};

name.onchange = function (event) {
	userInfo.name = event.target.value
};

lastName.oninput = function (event) {
	event.target.value.match(/\d/) || typeof event.target.value !== 'string' ?
		lastName.style.color = 'red' :
			lastName.style.color = 'white'
};

lastName.onchange = function (event) {
	userInfo.lastName = event.target.value
};


phoneNum.oninput = function (event) {
	event.target.value.match(/[A-Z]/) ||
		event.target.value.match(/[a-z]/) || 
			event.target.value.length < 10 ||
				event.target.value.length >13 ?
					phoneNum.style.color = 'red' :
						phoneNum.style.color = 'white'
};

phoneNum.onchange = function (event) {
	userInfo.phoneNumber = event.target.value
}

email.oninput = function (event) {
	event.target.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ?
		email.style.color = 'white' :
				email.style.color = 'red'
};

email.onchange = function (event) {
	userInfo.email = event.target.value
}

submit.onclick = function (event) {
	fetch(`https://garevna-rest-api.glitch.me/user/${userInfo.name}`,{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body: JSON.stringify(userInfo)
	})
		.then(response => response.json())
			.then(response => console.log(response))
}