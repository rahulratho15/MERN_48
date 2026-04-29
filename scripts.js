let responseText=document.getElementById("message-el")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("cards")
let cards=[]
let isAlive=false
let sum=0
let message=""

function startGame(){
    isAlive=true
   let val1=randomCard()
    let val2=randomCard()
    sum=val1+val2
    cards=[val1,val2]
    sum=val1+val2
    renderGame()
}
function randomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber===1){randomNumber=11}
    else if(randomNumber>10){randomNumber=10}
    return randomNumber
}
function renderGame(){

    let eachCards=""
    if(sum<21){message="Want to draw a card?"}
    else if(sum===21){message="U won"}
    else{message="U lost"}
    responseText.textContent=message
    sumEl.textContent="Sum: "+sum
    for(let i=0;i<cards.length;i+=1){

        eachCards+= (cards[i]+" ")
    }
    cardEl.textContent="Cards: "+eachCards
    
}
function newCard(){
    if(isAlive && sum<22){
    let newVal=randomCard()
    cards.push(newVal)
    sum+=newVal
    renderGame()
    }
  
}




