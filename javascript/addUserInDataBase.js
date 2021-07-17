function addUserInDataBase(){

    let formValidation = checkRegistrationFormInputs();
    console.log('form validation is ' + formValidation)
    if(!formValidation){return false}

    let benutzer = document.querySelector(".registrationBenutzerInput").value
    let email = document.querySelector(".registrationEmailInput").value
    let passwort = document.querySelector(".registrationPasswortInput").value

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../php/postUserData.php", true); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Response
        let response = this.responseText;
        console.log('response of post request is  ' +response);
        shownRegistrationSuccessStatus(response)
      }
    };
    var data = {Benutzer:benutzer, EMail: email, Passwort: passwort};
    xhttp.send(JSON.stringify(data));

}

//Check registration form input if emty or not
function checkRegistrationFormInputs(){
    if(document.querySelector(".registrationBenutzerInput").value === ''){
        console.log('benutzer value null')
        document.querySelector(".benutzerContainerRegistration").style.border = 'red 2px solid'
        return false
      }else{
        document.querySelector(".benutzerContainerRegistration").style.border = 'black 1px solid'
      } 
      
      if(document.querySelector(".registrationEmailInput").value === ''){
        console.log('email value null')
        document.querySelector(".emailContainerRegistration").style.border = 'red 2px solid'
        return false
      }else{
        document.querySelector(".emailContainerRegistration").style.border = 'black 1px solid'
      }
      if(document.querySelector(".registrationPasswortInput").value === ''){
        console.log('passwort value null')
        document.querySelector(".passwortContainerRegistration").style.border = 'red 2px solid'
        return false
      }else{
        document.querySelector(".passwortContainerRegistration").style.border = 'black 1px solid'
      }
      return true
}

//shownRegistrationSuccessStatus() function
function shownRegistrationSuccessStatus(response){
  if(response){
    document.querySelector(".registrationBenutzerInput").value = ''
    document.querySelector(".registrationEmailInput").value = ''
    document.querySelector(".registrationPasswortInput").value = ''
    setTimeout(() => alert('Registration is Successful.'), 0);
  }else{
    alert('Registration is not Successful. Try again later')
  }
}
