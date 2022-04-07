function handleClick(event){
    const eventClass = event.target.getAttribute("class")
    if (!eventClass.includes("main-board__block")) return
    
    if(!checkMove(eventClass.slice(eventClass.length-1))) return
    
    if (winnerCheck()) return
    
    if (player === "X") {
        player = "O"
        notificationH2.innerText = "It's the Naught's turn to play" 
    }
    else {
        player = "X" 
        notificationH2.innerText = "It's the Cross's turn to play" 
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
    player = "X"
    notificationH2.innerText = "It's the Cross's turn to play" 
}

function winnerCheck(){
    if (checkRow("a","b","c")) highlightWinningBlocksRed("a","b","c")

    
}

function setWinningRedText(letter){
    let block = document.querySelector(".main-board__block-" + letter)
    block.setAttribute("class", "red-text main-board__block main-board__block-" + letter)
}

function checkRow(blockOne, blockTwo, blockThree){
    let blockOneInnerText = document.querySelector(".main-board__block-" + blockOne).innerText
    let blockTwoInnerText = document.querySelector(".main-board__block-" + blockTwo).innerText
    let blockThreeInnerText = document.querySelector(".main-board__block-" + blockThree).innerText
    if (blockOneInnerText === blockTwoInnerText && blockOneInnerText === blockThreeInnerText)
        winner = blockOneInnerText     
}

function highlightWinningBlocksRed(blockOne, blockTwo, blockThree){

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