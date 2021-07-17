function toggelDoneStateOfItem(e){
    console.log('In toggelDoneStateOfItem function')

    let itemState = e.target.checked
    console.log('item state is ' + itemState)


    let stateString = ''
    let itemString = '' 
    let dateString = ''
    let ordnerString = ''
    
    if(itemState){
        stateString = 'true'
    }else{
        stateString = 'false'
    }
    console.log('stateString is ' + stateString)

    console.log(e.target.parentElement.nextElementSibling.firstElementChild.innerHTML)
    itemString = e.target.parentElement.nextElementSibling.firstElementChild.innerHTML

    let datefromClassNameArray = e.target.parentElement.nextElementSibling.className.split(' ')
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
    console.log(todoTableDataArray)


    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../php/toggelDoneStateOfItem.php", true); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Response
        let response = this.responseText;
        console.log('response of toggelDoneStateOfItem request is  ' +response);

        setTimeout(() => fetch_todoTableFromDB(), 100)
        setTimeout(() => update_ordnerViewerDialog(), 100)
        setTimeout(() => update_todoViewerDialog(), 100)
        setTimeout(() => update_heuteViewerDialog(), 100)
        setTimeout(() => update_WocheViewerDialog(), 100)
        
      }
    };
    var data = {B_ID:B_ID, Todo:itemString, Ordner:ordnerString, Datum:dateString, Done:stateString};
    xhttp.send(JSON.stringify(data));

}