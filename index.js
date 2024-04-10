const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm');

form.addEventListener('submit', (event)=>{

    validateForm();

      if(isFormValid()==true){
        form.submit();
      }else{
        event.preventDefault();
      }

});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result=true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {

            result = false;
            
        }
        
    });

    return result;



    
}



function validateForm(){
    //USERNAME
    if(usernameInput.value.trim()==''){
        SetError(usernameInput,'Name can not be empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15 ){
        SetError(usernameInput,"Name must not be less than 5 characters")
    }else{
        setSuccess(usernameInput)
    }
    //EMAIL
    if(emailInput.value.trim()==''){
     SetError(emailInput,'Provide email address');
    }else if(isEmailvalid(emailInput.value)){
        setSuccess(emailInput,);

    }else{
        SetError(emailInput,'Provide valid Email');
    }
    //PHONE NUMBER
    if (phoneNumberInput.value.trim()=='') {
        SetError(phoneNumberInput,"Provide Phone Number");
        
    }else if (phoneVerify(phoneNumberInput.value)) {
        setSuccess(phoneNumberInput,"")
        
    } else {
        SetError(phoneNumberInput,"invalid phone number");
        
    }
    //PASSWORD
    if (passwordInput.value.trim()=='') {
        SetError(passwordInput,"create your password");
        
    } else if (passwordVerify(passwordInput.value)) {
        setSuccess(passwordInput,);
        
    } else {

        SetError(passwordInput,"create strong password");
        
    }
   
    //CONFIRM PASSWORD
  if (confirmPasswordInput.value.trim()== '') {
     SetError(confirmPasswordInput,"confirm your password");

    
  } else if (passwordVerify(confirmPasswordInput.value)) {
    setSuccess(confirmPasswordInput,);
    
  } else {
    SetError(confirmPasswordInput,"password must be the same as privious one");
  } {
    
  }
// SUBMIT


    
}

function SetError(element,errorMessage) {
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
    
}

function setSuccess(element) {
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');

    
}

function isEmailvalid(email) {
    const reg = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    return reg.test(email);
    
}
function phoneVerify (number)  {
    const regex = /^[0-9]{10}$/;

    return regex.test(number);
    
};

function passwordVerify(password) {
    const regex = /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
    return regex.test(password) && password.length >= 8;
    
}


