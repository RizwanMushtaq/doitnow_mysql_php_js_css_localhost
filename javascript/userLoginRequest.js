function userLoginRequest(){
    
      let loginFormValidation = checkLoginFormInputs();
      console.log('form validation is ' + loginFormValidation)
      if(!loginFormValidation){return false}

      let username = document.querySelector(".loginBenutzerInput").value
      let password = document.querySelector(".loginPasswortInput").value

      console.log('user enter ' + username + ' and ' + password)
      loginValidation()

}

//Verify user information in database
function loginValidation(){

  console.log('In login Validation function')
  
  let benutzer = document.querySelector(".loginBenutzerInput").value
  let passwort = document.querySelector(".loginPasswortInput").value

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../php/verifyUser.php", false); 
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Response
      let response = this.responseText;
      // console.log(response)
     if(response === 'incorrect_passwort'){
        console.log('Incorrect Passwort')
        alert('Incorrect Passwort')
      }else if(response === 'incorrect_benutzer') {
        console.log('Incorrect Benutzer')
        alert('Incorrect Benutzer')
      }else{
        console.log('Success')
        B_ID = response
        console.log('B_ID = ' + B_ID)
        document.querySelector(".loginBenutzerInput").value = ''
        document.querySelector(".loginPasswortInput").value = ''
        setTimeout(() => alert('Login is Successful.'), 0);

        //Show appPage
        document.querySelector(".welcomePage").style.display = 'none'
        document.querySelector(".loginPage").style.display = 'none'
        document.querySelector(".appPage").style.display = 'grid'
        document.querySelector('.kalenderViewer').style.display = 'flex'
        document.querySelector('.todoViewer').style.display = 'none'
        document.querySelector('.ordnerViewer').style.display = 'none'
        showHeuteDialog()

        setTimeout(() => fetch_todoTableFromDB(), 10)
        setTimeout(() => update_ordnerViewerDialog(), 10)
        setTimeout(() => update_todoViewerDialog(), 10)
        setTimeout(() => update_heuteViewerDialog(), 10)
        setTimeout(() => update_WocheViewerDialog(), 10)
        setTimeout(() => loadKalender(), 10)
        setTimeout(() => deleteFolder(), 10)
      }
    }
  };
  var data = {Benutzer:benutzer, Passwort: passwort};
  xhttp.send(JSON.stringify(data));

}

//Check login form input if emty or not
function checkLoginFormInputs(){
  if(document.querySelector(".loginBenutzerInput").value === ''){
    console.log('benutzer value null')
    document.querySelector(".benutzerContainerLogin").style.border = 'red 2px solid'
    return false
  }else{
    document.querySelector(".benutzerContainerLogin").style.border = 'black 1px solid'
  } 
  
  if(document.querySelector(".loginPasswortInput").value === ''){
    console.log('passwort value null')
    document.querySelector(".passwortContainerLogin").style.border = 'red 2px solid'
    return false
  }else{
    document.querySelector(".passwortContainerLogin").style.border = 'black 1px solid'
  }
  return true
}