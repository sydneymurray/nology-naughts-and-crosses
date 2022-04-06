function handleClick(event){
    const eventClass = event.target.getAttribute("class")
    if (!eventClass.includes("main-board__block")) return
    
    if(!checkMove(eventClass.slice(eventClass.length-1))) return
    
    if (winnerCheck()) return
    
    if (player === "X") {
        player = "O"
        document.querySelector(".notification").innerText = "It's the Naught's turn to play" 
    }
    else {
        player = "X" 
        document.querySelector(".notification").innerText = "It's the Cross's turn to play" 
    }
}

function clearTheBoard(){
    const blocks = document.querySelectorAll(".main-board__block")
    blocks.forEach(block => {
        block.innerHTML = ""
        const blocksClass = block.getAttribute("class")
        block.setAttribute("class","main-board__block main-board__block-" +
            blocksClass.slice(blocksClass.length-1))
    })
}

function winnerCheck(){
    
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