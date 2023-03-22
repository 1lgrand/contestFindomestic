var radioButtons = [
  document.getElementById("rb1").value,
  document.getElementById("rb2").value,
  document.getElementById("rb3").value,
  document.getElementById("rb4").value
]

var answers = [
  document.getElementById("answer1").textContent,
  document.getElementById("answer2").textContent,
  document.getElementById("answer3").textContent,
  document.getElementById("answer4").textContent
]



function loadGame(){

  startButton = document.getElementById("button")
  startButton.style.disabled

  nextQuestion()
  
  game = document.getElementById("gameDiv")
  game.style.visibility = 'visible'
}




function nextQuestion(){


  domanda = document.getElementById("question")
  domanda.innerHTML = jsonData[0].question

  answers[0] = "nuova risposta";

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