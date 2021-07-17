function deleteItemInDB(e){
    console.log('In deleteItemInDB function')
    
    
    let itemString = '' 
    let dateString = ''
    let ordnerString = ''

    console.log(e.target.parentElement.previousElementSibling.firstElementChild.innerHTML)
    itemString = e.target.parentElement.previousElementSibling.firstElementChild.innerHTML

    let datefromClassNameArray = e.target.parentElement.previousElementSibling.className.split(' ')
    console.log('Array with class names of item'+ datefromClassNameArray)

    dateString = datefromClassNameArray[datefromClassNameArray.length-1]


    for(let i = 0; i<todoTableDataArray.length; i++){
        if(todoTableDataArray[i].B_ID === B_ID){
            if(todoTableDataArray[i].Todo === itemString){
                ordnerString = todoTableDataArray[i].Ordner
                break
            }
        }
    }

    console.log('item is ' + itemString)
    console.log('item date is ' + dateString)
    console.log('item Ordner is' + ordnerString)
    


    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../php/deleteItemInDB.php", true); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Response
        let response = this.responseText;
        console.log('response of Delete Item request is  ' +response);

        setTimeout(() => fetch_todoTableFromDB(), 100)
        setTimeout(() => update_ordnerViewerDialog(), 100)
        setTimeout(() => update_todoViewerDialog(), 100)
        setTimeout(() => update_heuteViewerDialog(), 100)
        setTimeout(() => update_WocheViewerDialog(), 100)
        
      }
    };
    var data = {B_ID:B_ID, Todo:itemString, Ordner:ordnerString, Datum:dateString};
    xhttp.send(JSON.stringify(data));
}