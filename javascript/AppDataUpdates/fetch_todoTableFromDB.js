function fetch_todoTableFromDB(){
    console.log("In fetch_todoTableFromDB function")

    var xhttp = new XMLHttpRequest()
    xhttp.open("GET", "../../php/fetch_todoTable.php", false)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Response
            let response = this.responseText
            //setting global variable
            todoTableDataArray = JSON.parse(response)
            
            console.log(todoTableDataArray)
            //updating Todo Viewer Dialog
            update_todoViewerDialog()
        }
    };
      xhttp.send()
}
