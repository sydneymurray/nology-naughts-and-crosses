function handleClick(event){
    const eventClass = event.target.getAttribute("class")
    if (!eventClass.includes("main-board__block")) return
    
    if(!checkMove(eventClass.slice(eventClass.length-1))) return
    
    winnerCheck()
    if (player === "X") player = "O"
    else player = "X" 
}

function clearTheBoard(){
    const blocks = document.querySelectorAll(".main-board__block")
    blocks.forEach(block => {
        block.innerHTML = ""
    })
}

function winnerCheck(player){

}

function highlightWinningBlocks(){

}

function checkMove(block){
    const blockToBeChecked = document.querySelector(".main-board__block-"+block)
    if (blockToBeChecked.innerText === player){  
        alert("You have already selected that block!")
        return false
    }
    if (blockToBeChecked.innerText === "X" || blockToBeChecked.innerText === "O"){  
        alert("That block has already been selected!")
        return false
    }
    blockToBeChecked.innerText = player
    return true
}