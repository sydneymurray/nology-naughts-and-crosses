function handleClick(event){
    const eventClass = event.target.getAttribute("class")
    
    if (winner) {
        clearTheBoard()
        return
    }

    if(!checkMoveIsLegal(eventClass.slice(eventClass.length-1))) return
    
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
}

function clearTheBoard(){
    const blocks = document.querySelectorAll(".main-board__block")
    blocks.forEach(block => {
        block.innerHTML = ""
        const blocksClass = block.getAttribute("class")
        block.setAttribute("class","main-board__block main-board__block-" +
            blocksClass.slice(blocksClass.length-1))
    })
    winner = ""
    player = "X"
    notificationH2.innerText = "It's the Cross's turn to play" 
}

function winnerCheck(){
    if (checkRow("a","b","c")) highlightWinningRowRed("a","b","c")
    if (checkRow("a","e","i")) highlightWinningRowRed("a","e","i")
    if (checkRow("a","d","g")) highlightWinningRowRed("a","d","g")
    if (checkRow("b","e","h")) highlightWinningRowRed("b","e","h")
    if (checkRow("c","f","i")) highlightWinningRowRed("c","f","i")
    if (checkRow("c","e","g")) highlightWinningRowRed("c","e","g")
    if (checkRow("d","e","f")) highlightWinningRowRed("d","e","f")
    if (checkRow("g","h","i")) highlightWinningRowRed("g","h","i")

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
    else return false  
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