var radioButtons = [
  document.getElementById("rb1"),
  document.getElementById("rb2"),
  document.getElementById("rb3"),
  document.getElementById("rb4")
]

var risposte = [
  "answer1",
  "answer2",
  "answer3",
  "answer4"
]

var currIndex = 0

function loadGame(){

  startButton = document.getElementById("button")
  startButton.style.disabled

  nextQuestion()
  
  game = document.getElementById("gameDiv")
  game.style.visibility = 'visible'
}




function nextQuestion(){


  domanda = document.getElementById("question")
  domanda.innerHTML = jsonData[currIndex].question

  for (i=0;i<4;i++){
    document.getElementById(risposte[i]).innerHTML = jsonData[currIndex].answers[i].answer
  }

  currIndex++

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