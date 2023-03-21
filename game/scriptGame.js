
function loadGame(){

  startButton = document.getElementById("button")
  startButton.style.disabled

  nextQuestion()
  
  game = document.getElementById("gameDiv")
  game.style.visibility = 'visible'
}




function nextQuestion(){
  
  


  


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