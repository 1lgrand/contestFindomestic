
var risposte = [
  "answer1",
  "answer2",
  "answer3",
  "answer4"
]

var currIndex = 0
var userAnswer
var nBonus = 3;
var punteggio = 0

function loadGame(){

  startButton = document.getElementById("button")
  startButton.disabled = true
  console.log("NUMERO DELLE DOMANDE: [" + jsonData.length + "]")
  nextQuestion(0)
  
  document.querySelector("#answersContainer").classList.toggle("hidden")

  var elemento = document.querySelector('#question');
  
  setTimeout(function() {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }, 50);

}

function activeBonus(){
  if(nBonus>0){
    nBonus--;
    nextQuestion(1)
  }else{

  }
}


function nextQuestion(currIndex){


  document.getElementById("bonusRimanenti").innerHTML = nBonus

  domanda = document.getElementById("question")
  domanda.innerHTML = jsonData[currIndex].question

  console.log(jsonData[currIndex].question) 
  for (i=0;i<risposte.length;i++){
    document.getElementById(risposte[i]).innerHTML = jsonData[currIndex].answers[i].answer
  }

}

function checkAnswer(){

  if(currIndex+2 > jsonData.length){
    alert("FINE DEL QUIZ")
  }else{
    if(jsonData[currIndex].correctAns == userAnswer){
      punteggio++;
      console.log("[DEBUG] Corretto!" + punteggio)
      nextQuestion(++currIndex)
    }else{
      console.log("[DEBUG] Errato!")
      nextQuestion(++currIndex)
    }
  }

  }


function useBonus(){
  console.log("Bonus Usato")
}

function setAnswer(id){
  userAnswer = document.getElementById(id).textContent
  checkAnswer()
}