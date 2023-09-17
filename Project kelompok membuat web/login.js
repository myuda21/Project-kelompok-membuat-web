    const user = document.getElementById('user-details');
    const nama = document.getElementById('nama');
    const email = document.getElementById('mail');
    const hp =document.getElementById('hp');

    user.addEventListener('submit',(e)=>{
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const nameValue = nama.value.trim();
        const emailValue = email.value.trim();
        const hpValue = hp.value.trim();


    if(nameValue === ''){
        setErrorFor(nama,'Name cannot be blank');
    } else {
        setSuccessFor(nama);
    }
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(hpValue === ''){
        setErrorFor(hp);
    } else {
        setSuccessFor(hp);
}
 }

function setErrorFor(input, message) {
    const small = userControl.querySelection('small');
}
function setSuccessFor(input) {
    const userControl = input.parentElement;
    userControl.className = 'user-control success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}

function myFunction() {
    alert("Successfully Subscribe!");
  }