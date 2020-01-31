"use strict";
  // ============================burger menu===========================
let burgMenu = document.getElementById('burgerMenu'),
	header = document.querySelector('.header'),
	headerNavBurger = document.querySelector('.headerNavBurger'),
	middleLine = document.querySelector('.middleLine'),
	topLine = document.querySelector('.topLine'),
	bottomLine = document.querySelector('.bottomLine');

window.addEventListener("resize", function(){
	if (innerWidth > 1365 ) headerNavBurger.style.display ='none',

	middleLine.style = `
		display:block;
	`,

	topLine.style =`
		top: 20%;
    	left: 50%;
		transform: translate(-50%, -20%);
	`,

	bottomLine.style =`
		bottom: 20%;
    	left: 50%;
		transform: translate(-50%, -20%) ;
	` ;
});
function closeMenu (){
	middleLine.style = `
		display:block;
	`;
	topLine.style =`
		top: 20%;
    	left: 50%;
		transform: translate(-50%, -20%);
	`;
	bottomLine.style =`
		bottom: 20%;
    	left: 50%;
		transform: translate(-50%, -20%) ;
	`
	headerNavBurger.style = `
		right:-50%;
	`
}
function openMenu(){
	middleLine.style = `
		display:none;
	`
	topLine.style =`
		top: 50%;
    	left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
	`
	bottomLine.style =`
		top: 50%;
    	left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
	`
	headerNavBurger.style = `
		right:15%;
	`
}

burgMenu.addEventListener("click",(
		function (){
			let statusMenu = false
			return function(event){
				statusMenu ? closeMenu() : openMenu ()
				statusMenu = !statusMenu
			}
		}
	)()
); 

//=======================left sliders=========================

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
//=======================right sliders================================
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
//===========================open popup===========================
let openPopUp = document.getElementById('join');
let openPopUp2 = document.getElementById('join2')
let closePopUp = document.getElementById('closePopUp');
let popUpDiv = document.getElementById('popUpBg');
openPopUp.onclick = function(event) {
	popUpDiv.style.display = 'block';
}
closePopUp.onclick = function (event) {
	popUpDiv.style.display = 'none';
}
openPopUp2.onclick = function(event) {
	popUpDiv.style.display = 'block';
}
closePopUp.onclick = function (event) {
	popUpDiv.style.display = 'none';
}
//====================form========================================
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
	const writeUserInfo = async (url,method) => {
		let user = await (await fetch(url,method)).json()
		console.log(user)
	}
	writeUserInfo(`https://garevna-rest-api.glitch.me/user/${userInfo.name}`,{
		method : 'POST',
		headers : {
			'Content-Type' :'application/json'
		},
		body : JSON.stringify(userInfo)
	})
}
///=====================
// fetch(`https://garevna-rest-api.glitch.me/user/${userInfo.name}`,{
// 		method:"POST",
// 		headers:{
// 			"Content-Type":"application/json"
// 		},
// 		body: JSON.stringify(userInfo)
// 	})
// 		.then(response => response.json())
// 			.then(response => console.log(response))
//================================= sign up ===========================
let signUp = document.getElementById('signUp'),
	signUp2 = document.getElementById('signUp2'),
	popUpBg2 = document.getElementById('popUpBg2'),
	closePopUp2 = document.querySelector('.closePopUp2')

signUp.onclick = function(event) {
	popUpBg2.style.display = 'block';
}

signUp2.onclick = function(event) {
	popUpBg2.style.display = 'block';
}

closePopUp2.onclick = function(event) {
	popUpBg2.style.display = 'none'; 
}
//=======================================form sign up==================================

const userInfoSignUp = {}

let login = document.getElementById('login'),
	passwordUp1 = document.getElementById('pass1'),
	passwordUp2 = document.getElementById('pass2'),
	submit2 = document.getElementById('submit2');


login.oninput = function (event) {
		event.target.value.length > 8 || event.target.value.length === 0?
			 event.target.style.color ='red' :
				 event.target.style.color = 'white'
};	
login.onchange = function (event) {
	userInfoSignUp.login = event.target.value
};
passwordUp1.oninput = function ( event ) {
    let pass = event.target.value
    event.target.valid = pass.length > 6 && !!pass.match ( /\d/ ) && !!pass.match ( /\D/ )
    event.target.style.color = event.target.valid ? "green" : "red"
    
    passwordUp2.disabled = !event.target.valid
}

passwordUp2.oninput = function ( event ) {
    event.target.valid = event.target.value === passwordUp1.value
    event.target.style.color = event.target.valid ? "green" : "red"
}

passwordUp2.onchange = function ( event ) {
    event.target.valid ?
       	userInfoSignUp.password = Sha256.hash ( event.target.value ) : null
}
submit2.onclick = function (event) {
	const writeUser = async (url,method) => {
		let response = await fetch(url,method)
		//console.log(response)
		if (response.ok) {
			document.cookie = `login = ${userInfoSignUp.login}`
			document.cookie = `password = ${userInfoSignUp.password}`
		}
		else throw new  Error('invalid fetch')
	}
	writeUser(`https://garevna-rest-api.glitch.me/user/${userInfoSignUp.login}`,{
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body: JSON.stringify(userInfoSignUp)
	})
	popUpBg2.style.display ='none';		
}

///=============================
// fetch(`https://garevna-rest-api.glitch.me/user/${userInfoSignUp.login}`,{
// 		method:"POST",
// 		headers:{
// 			"Content-Type":"application/json"
// 		},
// 		body: JSON.stringify(userInfoSignUp)
// 	})
// 		.then(
// 			response => {
// 			console.log(response.ok)
// 			if (response.ok) {
// 				document.cookie = `login = ${userInfoSignUp.login }`
// 				document.cookie = `password = ${userInfoSignUp.password}`
// 			}
// 		})
///================================sign in =============================================
let signIn = document.getElementById('signIn'),
	openSignInMenu = document.getElementById('popUpBg3'),
	closeSignIn = document.querySelector('.closePopUp3'),
	loginSignIn = document.getElementById('loginSignIn'),
	passSignIn = document.getElementById('passSignIn'),
	submitSignIn = document.getElementById('submitSignIn'),
	openPopUpSignIn = document.getElementById('signIn2');

openPopUpSignIn.onclick = function(event) {
	openSignInMenu.style.display = 'block'	
}

signIn.onclick = function (event) {
	openSignInMenu.style.display = 'block'
}
closeSignIn.onclick = function (event) {
	openSignInMenu.style.display = 'none'
}	
loginSignIn.onchange = function(event) {
	let loginSign = event.target.value
		passSignIn.onchange = function(eve) {
			let passwordSignIn = Sha256.hash(eve.target.value)
			submitSignIn.onclick = function (e) {
				const getUser = async (url) => {
					let user = await (await fetch(url)).json()
					user.login === loginSign && 
						user.password === passwordSignIn ?
							console.log('ok') :
								console.log('wrong password or login')
				}
				getUser(`https://garevna-rest-api.glitch.me/user/${loginSign}`)
				//openSignInMenu.style.display = 'none'
				
			}
		}

}
// window.addEventListener("resize", function(){
// 	console.log(innerWidth)
// })	

//========
// fetch(`https://garevna-rest-api.glitch.me/user/${loginSign}`)
// 					.then(response => response.json())
// 						.then(
// 							response => response.login === loginSign &&
// 								response.password === passwordSignIn ? console.log('ok') :
// 									console.log('wrong password or login') 
										
// 						)