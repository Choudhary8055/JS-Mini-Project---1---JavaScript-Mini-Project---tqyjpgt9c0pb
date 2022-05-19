// function validate(){
//     var username = documentById("email").value;
//     var password = documentById("password").value;
//     if(username)
// }

const form = document.getElementById('form');
const username = document.getElementById('name');
const phoneno = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
// 	// e.preventDefault();
	
// 	checkInputs();
// });


   
// function checkInputs() {
	form.addEventListener('submit',()=>{
	const usernameValue = username.value.trim();
	const phoneValue = phoneno.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	// trim to remove the whitespaces
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if(phoneValue === '') {
		setErrorFor(phoneno, 'Phone No. cannot be blank');
	} else {
		setSuccessFor(phoneno);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
	});

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}




function addData(){
	let name = document.getElementById('name').value;
	let email1 = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let password1 = document.getElementById('password').value;

   window.localStorage.setItem('name',name);
	window.localStorage.setItem('email1',email1);
	window.localStorage.setItem('phone',phone);
	window.localStorage.setItem('password1',password1);


	let dataForm1 = window.localStorage.getItem('name');
	let dataForm2 = window.localStorage.getItem('email1');
	let dataForm3 = window.localStorage.getItem('phone');
	let dataForm4 = window.localStorage.getItem('password1');

	console.log(dataForm1 , dataForm2 , dataForm3 , dataForm4);
	
}

// function loginFn(){
// let email =document.getElementById('email').value;
// let password =document.getElementById('password').value;

// let email01=localStorage.getItem('email1');
// let password01=localStorage.getItem('password1');

// if(email===email01 && password===password01){
//           alert('Login Succesful....')
// }else{
// 	alert('Login email and Password wrong....')
// }

// }
