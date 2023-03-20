
function loadGame(){

  startButton = document.getElementById("button")
  startButton.style.disabled

  loadTable()
  
  game = document.getElementById("gameDiv")
  game.style.visibility = 'visible'
}



function loadTable(){
  
  rb1 = document.getElementById("rb1")
  rb2 = document.getElementById("rb2")
  rb3 = document.getElementById("rb3")
  rb4 = document.getElementById("rb4")

  


}

function checkAnswer(){

    var radioButtons = document.getElementsByName("rb")

    for(let i of radioButtons){
      if(i.checked){
        checkedRb = i
      }
    }

    if(checkedRb.value == "1"){
      alert("Hai vinto")
    }else{
      alert('Hai perso');
    }
}