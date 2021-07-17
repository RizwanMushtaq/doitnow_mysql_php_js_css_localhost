function showLoginPage(){
    console.log('in showlogin page func')
    document.querySelector(".loginBenutzerInput").value = ''
    document.querySelector(".loginPasswortInput").value = ''

    document.querySelector(".welcomePage").style.display = 'none'
    document.querySelector(".loginPage").style.display = 'grid'
    document.querySelector(".appPage").style.display = 'none'
    // window.location="login.html"
}
function showWelcomePage(){
    console.log('in welcome page func')
    document.querySelector(".welcomePage").style.display = 'grid'
    document.querySelector(".loginPage").style.display = 'none'
    document.querySelector(".appPage").style.display = 'none'
    // window.location="index.html"

    //Clean all dialog Viewer
    document.querySelector('.Heute_todo_ListWithoutOrdnerJS').innerHTML = ''
    document.querySelector('.Heute_todo_ListWithOrdnerJS').innerHTML = ''
    document.querySelector('.Woche_todo_ListWithoutOrdnerJS').innerHTML = ''
    document.querySelector('.Woche_todo_ListWithOrdnerJS').innerHTML = ''
    document.querySelector('.todoFormOutputContainer').innerHTML = ''
    document.querySelector('.ordnerDataFromDB').innerHTML = ''

}
function showAnmeldenForm(){
    console.log('in showAnmeldenForm func')
    document.querySelector(".loginBenutzerInput").value = ''
    document.querySelector(".loginPasswortInput").value = ''

    document.querySelector('.loginFormContainer').style.display = 'block'
    document.querySelector('.registrationFormContainer').style.display = 'none'
    document.querySelector('.buttonBottomLineLogin').style.display = 'block'
    document.querySelector('.buttonBottomLineRegister').style.display = 'none'
}
function showRegistrierenForm(){
    console.log('in showRegistrierenForm func')
    document.querySelector(".registrationBenutzerInput").value = ''
    document.querySelector(".registrationEmailInput").value = ''
    document.querySelector(".registrationPasswortInput").value = ''
    
    document.querySelector('.loginFormContainer').style.display = 'none'
    document.querySelector('.registrationFormContainer').style.display = 'block'
    document.querySelector('.buttonBottomLineLogin').style.display = 'none'
    document.querySelector('.buttonBottomLineRegister').style.display = 'block'
}
function showToDoViewer(){
    console.log('in showToDoViewer func')
    document.querySelector('.buttonBottomLineKalenderJS').style.display = 'none'
    document.querySelector('.buttonBottomLineTodoJS').style.display = 'block'
    document.querySelector('.buttonBottomLineOrdnerJS').style.display = 'none'

    document.querySelector('.kalenderViewer').style.display = 'none'
    document.querySelector('.todoViewer').style.display = 'flex'
    document.querySelector('.ordnerViewer').style.display = 'none'
}
function showOrdnerViewer(){
    console.log('in showToDoViewer func')
    document.querySelector('.buttonBottomLineKalenderJS').style.display = 'none'
    document.querySelector('.buttonBottomLineTodoJS').style.display = 'none'
    document.querySelector('.buttonBottomLineOrdnerJS').style.display = 'block'

    document.querySelector('.kalenderViewer').style.display = 'none'
    document.querySelector('.todoViewer').style.display = 'none'
    document.querySelector('.ordnerViewer').style.display = 'flex'
}
function showKalenderViewer(){
    console.log('in showToDoViewer func')

    document.querySelector('.buttonBottomLineKalenderJS').style.display = 'block'
    document.querySelector('.buttonBottomLineTodoJS').style.display = 'none'
    document.querySelector('.buttonBottomLineOrdnerJS').style.display = 'none'

    document.querySelector('.kalenderViewer').style.display = 'flex'
    document.querySelector('.todoViewer').style.display = 'none'
    document.querySelector('.ordnerViewer').style.display = 'none'
    showHeuteDialog()
    loadKalender()
}


function showHeuteDialog(){
    console.log('In showHeuteDialog function')

    document.querySelector(".Heute_ListContainer").style.display = 'flex'
    document.querySelector(".Woche_ListContainer").style.display = 'none'

    document.querySelector(".HeuteBottomLine").style.display = 'block'
    document.querySelector(".WocheBottomLine").style.display = 'none'
}
function showWocheDialog(){
    console.log('In showWocheDialog function')

    document.querySelector(".Heute_ListContainer").style.display = 'none'
    document.querySelector(".Woche_ListContainer").style.display = 'flex'

    document.querySelector(".HeuteBottomLine").style.display = 'none'
    document.querySelector(".WocheBottomLine").style.display = 'block'
}

function showPasswortVergessionDiv(){
    document.querySelector(".passwortVergessenBenutzerInputJS").value = ''
    document.querySelector(".passwortVergessenPasswortInputJS").value = ''

    document.querySelector('.lowerHalfDiv').display = 'none'
    document.querySelector('.passwortVergessenDialog').display = 'flex'
}

function backToLogin(){
    console.log('In function backToLogin')
    document.querySelector(".loginBenutzerInput").value = ''
    document.querySelector(".loginPasswortInput").value = ''

    document.querySelector('.lowerHalfDiv').style.display = 'flex'
    document.querySelector('.passwortVergessenDialog').style.display = 'none'
}