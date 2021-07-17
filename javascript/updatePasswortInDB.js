function updatePasswortInDB(){
    console.log('In updatePasswortInDB function')

    let formValidation = checkPasswortVergessionFormInputs();
    console.log('form validation is ' + formValidation)
    if(!formValidation){return false}

    let benutzer = document.querySelector(".passwortVergessenBenutzerInputJS").value
    let neuPasswort = document.querySelector(".passwortVergessenPasswortInputJS").value

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../php/updatePasswort.php", true); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Response
        let response = this.responseText;
        console.log('response of update Passwort request is  ' +response);
        shownPasswortUpdateSuccessStatus(response)
      }
    };
    var data = {Benutzer:benutzer, Passwort: neuPasswort};
    xhttp.send(JSON.stringify(data));

}

//Check form input if emty or not
function checkPasswortVergessionFormInputs(){
    if(document.querySelector(".passwortVergessenBenutzerInputJS").value === ''){
        console.log('benutzer value null')
        document.querySelector(".passwortVergessenBenutzerInputContainerJS").style.border = 'red 2px solid'
        return false
      }else{
        document.querySelector(".passwortVergessenBenutzerInputContainerJS").style.border = 'black 1px solid'
      } 
      
      if(document.querySelector(".passwortVergessenPasswortInputJS").value === ''){
        console.log('passwort value null')
        document.querySelector(".passwortVergessenPasswortInputContainerJS").style.border = 'red 2px solid'
        return false
      }else{
        document.querySelector(".passwortVergessenPasswortInputContainerJS").style.border = 'black 1px solid'
      }
      return true
}

//shownRegistrationSuccessStatus() function
function shownPasswortUpdateSuccessStatus(response){
    if(response){
      document.querySelector(".passwortVergessenBenutzerInputJS").value = ''
      document.querySelector(".passwortVergessenPasswortInputJS").value = ''
      
      setTimeout(() => alert('Neu Passwort Update Successful.'), 0);
    }else{
      alert('Neu Passwort Update is not Successful.')
    }
  }