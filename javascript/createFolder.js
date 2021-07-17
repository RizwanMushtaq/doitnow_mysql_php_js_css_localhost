function createFolder(){
    console.log('In create Folder function')

    if(document.querySelector('.addFolderInputJS').value === ''){
        alert('Please enter Ordner Name')
    }else{
        const newfolderElement = 
            `<div class="ordnerFormFolderDiv">
                <div class="folder_inputContainer">
                    <div class="folder_logoContainer">
                        <img class="folder_logoContainerImage" src="./images/Ordner.svg" alt="logo">
                    </div>
                    <div class="folder_folderlabel">${document.querySelector('.addFolderInputJS').value}</div>
                    <div class="folder_logoContainerArrowSymbolDiv">
                        <div class="folder_logoContainerArrowSymbol">
                            <img class="folder_logoContainerArrowSymbolImage" src="./images/Pfeilrechts.svg" alt="logo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="folderList_ordnerFormFolderListDiv">
                <div class="folderList_ordnerFormInputDiv">
                    <div class="folderList_inputContainer">
                        <div class="folderList_logoContainer">
                            <input type="checkbox" class="folderList_logoContainerImage" disabled>
                        </div>
                        <input class="folderList_input" type="text" class="">
                    </div>
                </div>
            </div>`

        let ordnerFormFolderContainerDiv = document.createElement('div')
        // ordnerFormFolderContainerDiv.setAttribute('className', 'ordnerFormFolderContainerDiv')
        ordnerFormFolderContainerDiv.setAttribute('className', 'DivstoDelete')
        ordnerFormFolderContainerDiv.innerHTML = newfolderElement

        // document.querySelector('.folderContainerElement').prepend(ordnerFormFolderContainerDiv)
        document.querySelector('.folderDivsToDelete').prepend(ordnerFormFolderContainerDiv)

    }
}

function deleteFolder(){
    document.querySelector('.folderDivsToDelete').innerHTML = ''
}