
var risposte = [
  "answer1",
  "answer2",
  "answer3",
  "answer4"
]
var currIndex = 0
var userAnswer


function loadGame(){

  startButton = document.getElementById("button")
  startButton.style.disabled

  nextQuestion(0)
  
  game = document.getElementById("gameDiv")
  game.style.visibility = 'visible'
}




function nextQuestion(currIndex){


  domanda = document.getElementById("question")
  domanda.innerHTML = jsonData[currIndex].question

  console.log(jsonData[currIndex].question) 
  for (i=0;i<risposte.length;i++){
    document.getElementById(risposte[i]).innerHTML = jsonData[currIndex].answers[i].answer
    console.log(jsonData[currIndex].answers[i].answer)
  }

}

function checkAnswer(){

  console.log(jsonData[currIndex].correctAns + " " + userAnswer)

  if(jsonData[currIndex].correctAns == userAnswer){
    alert('Corretto');
    nextQuestion(++currIndex)
  }else{
    alert("Sbagliato")
    nextQuestion(++currIndex)
  }
  

}

function useBonus(){
  console.log("Bonus Usato")
}

function setAnswer(id){
  userAnswer = document.getElementById(id).textContent
  console.log(userAnswer)
  checkAnswer()
}