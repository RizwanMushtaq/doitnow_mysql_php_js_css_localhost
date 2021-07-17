let update_heuteViewerDialog = () => {
    console.log('In update_heuteViewerDialog function')

    let date = getTodayDate()
    console.log(date)
    
    let divElementsList = ''

    todoTableDataArray.forEach(element => {
        if(element.B_ID == B_ID){
            if(element.Ordner == null){
                if(element.Datum === date){
                    
                    if(element.Done === 'true'){
                        divElementsList += 
                            `<div class="todo_ListItem">
                                <div class="todo_checkboxDiv">
                                    <input type="checkbox" checked class="todoCheckboxInputJS">
                                </div>
                                <div class="todo_item ${date}">
                                    <div class="todoItemJS">${element.Todo}</div>
                                </div>
                                <div class="todo_deleteDiv">
                                    <img src="/images/Papierkorb.svg" alt="" class="todoDeleteDivJS">
                                </div>
                            </div>`
                    }else{
                        divElementsList += 
                            `<div class="todo_ListItem">
                                <div class="todo_checkboxDiv">
                                    <input type="checkbox" class="todoCheckboxInputJS">
                                </div>
                                <div class="todo_item ${date}">
                                    <div class="todoItemJS">${element.Todo}</div>
                                </div>
                                <div class="todo_deleteDiv">
                                    <img src="/images/Papierkorb.svg" alt="" class="todoDeleteDivJS">
                                </div>
                            </div>`
                    } 
                }
            }
        }
         
    })

    document.querySelector('.Heute_todo_ListWithoutOrdnerJS').innerHTML = divElementsList

    //Getting items data with Folders

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
    let divtodoElementArray = []
    finalOrdnerList.forEach( (element) => {
        
        divOrdnerElementArray.push( 
            `<div class="todo_FolderHeader">
            <div class="todo_FolderDiv">
                <img src="/images/Ordner.svg" alt="">
            </div>
            <div class="todo_FolderName">
                <div>${element.ordner}</div>
            </div>
            <div class="todo_ArrowDiv">
                <img src="/images/Pfeilrechts.svg" alt="">
            </div>
        </div>`
        )
        
        
        let todosString = ''
        for(let i = 0; i<element.todos.length; i++){
            if(element.done[i] === 'true'){
                todosString +=
                `<div class="todo_ListItem">
                    <div class="todo_checkboxDiv">
                        <input type="checkbox" checked class="todoCheckboxInputJS">
                    </div>
                    <div class="todo_item ${date}">
                        <div class="todoItemJS">${element.todos[i]}</div>
                    </div>
                    <div class="todo_deleteDiv">
                        <img src="/images/Papierkorb.svg" alt="" class="todoDeleteDivJS">
                    </div>
                </div>`
            }else{
                todosString +=
                `<div class="todo_ListItem">
                    <div class="todo_checkboxDiv">
                        <input type="checkbox" class="todoCheckboxInputJS">
                    </div>
                    <div class="todo_item ${date}">
                        <div class="todoItemJS">${element.todos[i]}</div>
                    </div>
                    <div class="todo_deleteDiv">
                        <img src="/images/Papierkorb.svg" alt="" class="todoDeleteDivJS">
                    </div>
                </div>`
            }
        }
        divtodoElementArray.push(todosString)
        
    })
    console.log(divOrdnerElementArray)
    console.log(divtodoElementArray)
    
    // let folderInputAndListElementArray = []
    // let folderList_ordnerFormFolderListDiv = document.createElement('div')
    // folderList_ordnerFormFolderListDiv.setAttribute('class', 'folderList_ordnerFormFolderListDiv')

    let finalString01 = ''

    for(let i=0; i<divOrdnerElementArray.length; i++){
        let divtodoElementString = divtodoElementArray[i];
        let stringHeader01 = `<div class="todo_FolderContent">`
        let finalStringWithHeader01 = stringHeader01.concat(divtodoElementString)
        let stringFooter01 = `</div>`
        let finalStringWithHeaderFooter01 = finalStringWithHeader01.concat(stringFooter01)

        let stringWithOrdner = divOrdnerElementArray[i] + finalStringWithHeaderFooter01


        let stringHeader02 = `<div class="todo_FolderItem">`
        let finalStringWithHeader02 = stringHeader02.concat(stringWithOrdner)
        let stringFooter02 = `</div>`
        let finalStringWithHeaderFooter02 = finalStringWithHeader02.concat(stringFooter02)

        // folderInputAndListElementArray.push(stringWithOrdner)
        // folderList_ordnerFormFolderListDiv.innerHTML += folderInputAndListElementArray[i]
        // finalString01 += folderInputAndListElementArray[i]

        finalString01 += finalStringWithHeaderFooter02
    }

    // console.log(finalString01)
    document.querySelector('.Heute_todo_ListWithOrdnerJS').innerHTML = finalString01
}