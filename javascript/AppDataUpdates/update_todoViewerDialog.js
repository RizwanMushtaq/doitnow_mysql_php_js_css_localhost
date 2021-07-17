let update_todoViewerDialog = () => {
    console.log('In update_todoViewerDialog function')

    let date = document.querySelector('.dateInputTodoFormJS').value
    console.log(date)
    
    let divElementsList = ''

    todoTableDataArray.forEach(element => {
        if(element.B_ID == B_ID){
            if(element.Datum === date){
                let done
                if(element.Done === 'true'){
                    done = true
                    divElementsList += 
                    `<div class="todoFormOutputDiv">
                        <div class="outputContainer">
                            <div class="logoContainer">
                                <input type="checkbox" checked disabled>
                            </div>
                            <div class="todoOuputLabel">${element.Todo}</div>
                        </div>
                    </div>`
                }else{
                    done = false
                    divElementsList += 
                    `<div class="todoFormOutputDiv">
                        <div class="outputContainer">
                            <div class="logoContainer">
                                <input type="checkbox" disabled>
                            </div>
                            <div class="todoOuputLabel">${element.Todo}</div>
                        </div>
                    </div>`
                } 
            }
        }
        
    })

    let containerDiv = document.querySelector('.todoFormOutputContainer')
    containerDiv.innerHTML = divElementsList
    // console.log(divElementsList)
}
