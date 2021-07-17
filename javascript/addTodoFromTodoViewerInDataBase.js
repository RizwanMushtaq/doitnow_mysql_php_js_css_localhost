function addTodoFromTodoViewerInDataBase(){
    console.log('In addTodoFromTodoViewerInDataBase function')

    
    let done = ''
    let doneBoolean = document.querySelector('.checkboxInput_TodoViewerJS').checked
    if(doneBoolean){
        done = 'true'
    }else{
        done = 'false'
    }


    let todo = document.querySelector('.todoInput_TodoViewerJS').value
    if(todo === ''){
        alert('Enter todo')
    }else{
        let date = document.querySelector('.dateInputTodoFormJS').value
        console.log(done + todo + date + B_ID)

        
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../php/postTodoFromTodoViewer.php", true); 
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Response
            let response = this.responseText;
            console.log('response of post request is  ' +response);
            alert('Datum erfolgreich')
            
            
        }
        };
        var data = {B_ID:B_ID, Todo:todo, Datum:date, Done:done};
        xhttp.send(JSON.stringify(data));
        

    }

    document.querySelector('.todoInput_TodoViewerJS').value = ''
    setTimeout(() => fetch_todoTableFromDB(), 100)
    setTimeout(() => update_ordnerViewerDialog(), 100)
    setTimeout(() => update_todoViewerDialog(), 100)
    setTimeout(() => update_heuteViewerDialog(), 100)
    setTimeout(() => update_WocheViewerDialog(), 100)
}