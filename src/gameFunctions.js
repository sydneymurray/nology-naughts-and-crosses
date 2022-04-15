function handleClick(event){
    const eventClass = event.target.getAttribute("class")

    if (winner || moves === 9) {
        clearTheBoard()
        return
    }

    if(!checkMoveIsLegal(eventClass.slice(eventClass.length-1))) return

    moves++
    
    winnerCheck()
    if (winner) return
    
    if (player === "X") {
        player = "O"
        notificationH2.innerText = "It's the Naught's turn to play" 
    }
    else {
        player = "X" 
        notificationH2.innerText = "It's the Cross's turn to play" 
    }
    if (moves === 9)
        notificationH2.innerText = "STALEMATE: Nobody wins!" 

}

function clearTheBoard(){
    const blocks = document.querySelectorAll(".main-board__block")
    blocks.forEach(block => {
        block.innerHTML = ""
        const blocksClass = block.getAttribute("class")
        block.setAttribute("class","main-board__block main-board__block-" +
            blocksClass.slice(blocksClass.length-1))
    })
    moves = 0
    winner = ""
    player = "X"
    notificationH2.innerText = "It's the Cross's turn to play" 
}

function winnerCheck(){
    rowCheckData.forEach(row => {
        if (checkRow(row[0], row[1], row[2])) highlightWinningRowRed(row[0], row[1], row[2])
    })

    if (winner ==="X") notificationH2.innerText = "The Cross's have won" 
    if (winner ==="O") notificationH2.innerText = "The Naught's have won"     
}

function highlightWinningRowRed(blockOne, blockTwo, blockThree){
    let block = document.querySelector(".main-board__block-" + blockOne)
    block.setAttribute("class", "red-text main-board__block main-board__block-" + blockOne)
    
    block = document.querySelector(".main-board__block-" + blockTwo)
    block.setAttribute("class", "red-text main-board__block main-board__block-" + blockTwo)
    
    block = document.querySelector(".main-board__block-" + blockThree)
    block.setAttribute("class", "red-text main-board__block main-board__block-" + blockThree)
}

function checkRow(blockOne, blockTwo, blockThree){
    let blockOneInnerText = document.querySelector(".main-board__block-" + blockOne).innerText
    let blockTwoInnerText = document.querySelector(".main-board__block-" + blockTwo).innerText
    let blockThreeInnerText = document.querySelector(".main-board__block-" + blockThree).innerText

    if (!blockOneInnerText) return false

    if (blockOneInnerText === blockTwoInnerText && blockOneInnerText === blockThreeInnerText){
        winner = blockOneInnerText 
        console.log(`${blockOneInnerText} ${blockTwoInnerText} ${blockThreeInnerText}`)
        return true
    }
    return false  
}

function checkMoveIsLegal(block){
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