let update_ordnerViewerDialog = () => {
    console.log('update_ordnerViewerDialog function')

    let date = document.querySelector('.dateInputOrdnerFormJS').value
    console.log(date)
    
    
    let todoListWithOrdnersOnly = new Array

    todoTableDataArray.forEach(element => {
        if(element.B_ID == B_ID){
            if(element.Datum === date){
                if(element.Ordner){
                    console.log('ordner of todo item = ' + element.Ordner)
                    let todoItemWithOrdner = new TodoItem(element.B_ID, element.Todo, element.Ordner, element.Datum, element.Done)
                    todoListWithOrdnersOnly.push(todoItemWithOrdner)
                }else{
                    console.log('No ordner for this todo item')
                }
            }
        }
        
    })

    console.log(todoListWithOrdnersOnly)

    let duplicateOrdners = []
    let uniqueOrdners = []

    todoListWithOrdnersOnly.forEach((element) => {
        duplicateOrdners.push(element.Ordner)
    })
    
    if(todoListWithOrdnersOnly.length){
        Array.prototype.contains = function(v) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] === v) return true;
            }
            return false;
          };
          
          Array.prototype.unique = function() {
            var arr = [];
            for (var i = 0; i < this.length; i++) {
              if (!arr.contains(this[i])) {
                arr.push(this[i]);
              }
            }
            return arr;
          }
          
        //   var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
        //   var uniques = duplicates.unique(); // result = [1,3,4,2,8]
          
        uniqueOrdners = duplicateOrdners.unique();
        console.log(duplicateOrdners)
        console.log(uniqueOrdners);
    }

    function OrdnerWithTodos(ordner, todos, done) {
        this.ordner = ordner;
        this.todos = todos;
        this.done = done;
    }
    let finalOrdnerList = []

    //Finding todos for each ordner
    uniqueOrdners.forEach( (element) => {
        let list01 = []
        let list02 = []

        todoListWithOrdnersOnly.forEach( (item) => {
            if(item.Ordner === element){
                list01.push(item.Todo)
                list02.push(item.Done)
            }
        })
        let obj = new OrdnerWithTodos(element, list01, list02)
        finalOrdnerList.push(obj)
    })
    console.log(finalOrdnerList)
    
    let divOrdnerElementArray = []
    let divInputElementArray = []
    let divtodoElementArray = []
    finalOrdnerList.forEach( (element) => {



        divOrdnerElementArray.push( 
            `<div class="ordnerFormFolderDiv">
                <div class="folder_inputContainer">
                    <div class="folder_logoContainer">
                        <img class="folder_logoContainerImage" src="./images/Ordner.svg" alt="logo">
                    </div>
                    <div class="folder_folderlabel">${element.ordner}</div>
                    <div class="folder_logoContainerArrowSymbolDiv">
                        <div class="folder_logoContainerArrowSymbol">
                            <img class="folder_logoContainerArrowSymbolImage" src="./images/Pfeilrechts.svg" alt="logo">
                        </div>
                    </div>
                </div>
            </div>`
        )
        
        divInputElementArray.push(
            `<div class="folderList_ordnerFormInputDiv">
                <div class="folderList_inputContainer">
                    <div class="folderList_logoContainer">
                        <input type="checkbox" class="folderList_logoContainerImage" disabled>
                    </div>
                    <input class="folderList_input" type="text" class="">
                </div>
            </div>`
        )
        
        
        let todosString = ''
        for(let i = 0; i<element.todos.length; i++){
            if(element.done[i] === 'true'){
                todosString +=
                `<div class="ordner_todoItemDiv">
                    <div class="ordner_itemContainer">
                        <div class="ordner_logoContainer">
                            <input type="checkbox" checked class="ordner_img" disabled>
                        </div>
                        <div class="ordner_label">${element.todos[i]}</div>
                    </div>
                </div>`
            }else{
                todosString +=
                `<div class="ordner_todoItemDiv">
                    <div class="ordner_itemContainer">
                        <div class="ordner_logoContainer">
                            <input type="checkbox" class="ordner_img" disabled>
                        </div>
                        <div class="ordner_label">${element.todos[i]}</div>
                    </div>
                </div>`
            }
        }
        divtodoElementArray.push(todosString)
        

    })
    // console.log(divOrdnerElementArray)
    // console.log(divInputElementArray)
    // console.log(divtodoElementArray)
    
    let folderInputAndListElementArray = []
    let folderList_ordnerFormFolderListDiv = document.createElement('div')
    folderList_ordnerFormFolderListDiv.setAttribute('class', 'folderList_ordnerFormFolderListDiv')

    let finalString01 = ''

    for(let i=0; i<divOrdnerElementArray.length; i++){
        let folderInputAndListElementString = divInputElementArray[i] + divtodoElementArray[i];
        let stringHeader01 = `<div class="folderList_ordnerFormFolderListDiv">`
        let finalStringWithHeader01 = stringHeader01.concat(folderInputAndListElementString)
        let stringFooter01 = `</div>`
        let finalStringWithHeaderFooter01 = finalStringWithHeader01.concat(stringFooter01)

        let stringWithOrdner = divOrdnerElementArray[i] + finalStringWithHeaderFooter01

        folderInputAndListElementArray.push(stringWithOrdner)
        folderList_ordnerFormFolderListDiv.innerHTML += folderInputAndListElementArray[i]
        finalString01 += folderInputAndListElementArray[i]
    }

    console.log(finalString01)
    document.querySelector('.ordnerDataFromDB').innerHTML = finalString01

}