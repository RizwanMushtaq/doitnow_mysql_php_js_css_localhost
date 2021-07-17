window.onload = function(){
    console.log('running and up in window onload function')

    loadKalender()
    //Global variables
    let B_ID
    let todoTableDataArray = []

    let todayDate = getTodayDate()

    // setTodayDateInApp(todayDate)
    // console.log('date is '+todayDate)
    
    document.querySelector(".dateInputTodoFormJS").value = todayDate
    document.querySelector(".dateInputOrdnerFormJS").value = todayDate
    // document.querySelector(".todoFormOutputDiv").innerHTML = todayDate
    // console.log(document.querySelector(".dateInputTodoFormJS"))

    document.querySelector("#registrationFormSubmission").addEventListener("click", function(event){
        event.preventDefault()
        console.log('RegistrierenButtonAction pressed')
        addUserInDataBase()
    })

    document.querySelector("#loginFormSubmission").addEventListener("click", function(event){
      event.preventDefault()
      console.log("form submission requested")
      userLoginRequest()
    })

    document.querySelector(".addFolderButtonJS").addEventListener('click', function(event){
      event.preventDefault()
      console.log("folder creation requested")
      createFolder()
    })

    document.querySelector(".addTodoButtonFromOrdnerJS").addEventListener('click', function(event){
      event.preventDefault()
      console.log("add todo from ordner viewer requested")
      addTodoFromOrdnerInDataBase()
    })

    document.querySelector(".addTodoButtonFromTodoViewerJS").addEventListener('click', function(event){
      event.preventDefault()
      console.log("add todo from Todo viewer requested")
      addTodoFromTodoViewerInDataBase()
    })

    //updating date in Todo Viewer Dialog
    document.querySelector(".dateInputTodoFormJS").oninput = () => {
      console.log("input date change in todo viewer dialog")
      update_todoViewerDialog()
    }
    //updating date in Ordner Viewer Dialog
    document.querySelector(".dateInputOrdnerFormJS").oninput = () => {
      console.log("input date change in Ordner viewer dialog")
      update_ordnerViewerDialog()
    }

    document.querySelector('.passwortVergessenLabel').addEventListener('click', (event)=>{
      console.log('Passwort Vergession Label clicked')
      document.querySelector(".passwortVergessenBenutzerInputJS").value = ''
      document.querySelector(".passwortVergessenPasswortInputJS").value = ''
      document.querySelector('.lowerHalfDiv').style.display = 'none'
      document.querySelector('.passwortVergessenDialog').style.display = 'flex'
      
    })
    

    //Update State of todo item
    document.addEventListener('click', (e) => {
      if(hasClass(e.target, 'todoCheckboxInputJS')){
        console.log('user clicked on element = ')
        console.log(e.target)
        toggelDoneStateOfItem(e)
      }else if(hasClass(e.target, 'todoDeleteDivJS')){
        console.log('user clicked on element = ')
        console.log(e.target)
        deleteItemInDB(e)
      }
    })

}

function hasClass(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}

