function addTodoFromOrdnerInDataBase(){
    console.log('In addTodoFromOrdnerInDataBase function')

    let todoItemArray = []
    let inputListFromOrdner = document.querySelectorAll('.folderList_input')

    inputListFromOrdner.forEach((item)=>{
        if(item.value === ''){
            //do nothing
        }else{

            let ordner
            let folderList_ordnerFormFolderListDiv = item.parentElement.parentElement.parentElement
            // console.log(folderList_ordnerFormFolderListDiv.classList)
            let ordnerFormFolderDiv = folderList_ordnerFormFolderListDiv.previousElementSibling.firstElementChild.children
            // console.log(ordnerFormFolderDiv[1].innerHTML)
            ordner = ordnerFormFolderDiv[1].innerHTML

            let date = document.querySelector('.dateInputOrdnerFormJS').value

            // let doneBoolean1 = item.parentElement.firstElementChild.firstElementChild.checked
            // console.log(doneBoolean1)

            let doneBoolean = item.parentElement.firstElementChild.firstElementChild.checked
            let done = ''
            if(doneBoolean){
                done = 'true'
            }else{
                done = 'false'
            }

            let todoItem = new TodoItem(B_ID, item.value, ordner, date, done)
            todoItemArray.push(todoItem)
        }
    })
    // console.log(todoItemArray)
    if(todoItemArray.length === 0){
        alert('Enter Todo Item')
    }

    for(let i = 0; i<todoItemArray.length; i++){
        console.log(todoItemArray[i])
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "../php/postTodoFromOrdnerViewer.php", true); 
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Response
            let response = this.responseText;
            console.log('response of post request is  ' +response);
            // alert('Datum erfolgreich')
            
            // setTimeout(() => alert('Datum erfolgreich, Updating Viewer'), 100);
            
        }
        };
        var data = {B_ID:todoItemArray[i].B_ID, Todo: todoItemArray[i].Todo, Ordner: todoItemArray[i].Ordner, Datum: todoItemArray[i].Datum, Done: todoItemArray[i].Done};
        xhttp.send(JSON.stringify(data));

    }

    
    setTimeout(() => alert('Datum erfolgreich, Updating Viewer'), 100);
    document.querySelector('.addFolderInputJS').value = ''
    document.querySelectorAll('.folderList_input').forEach((element) => {
        element.value = ''
    })
    setTimeout(() => fetch_todoTableFromDB(), 100)
    setTimeout(() => update_ordnerViewerDialog(), 100)
    setTimeout(() => update_todoViewerDialog(), 100)
    setTimeout(() => update_heuteViewerDialog(), 100)
    setTimeout(() => update_WocheViewerDialog(), 100)
    deleteFolder()
    // fetch_todoTableFromDB()
    // update_ordnerViewerDialog()
    // update_todoViewerDialog()
    
}

