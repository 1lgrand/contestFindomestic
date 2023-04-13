
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

function inizialize(){
  currIndex = 0;
  nBonus = 3;
  punteggio = 0;
  document.querySelector("#answersContainer").classList.add("hidden")
  document.querySelector('#modal-box').classList.add("hidden")
  document.querySelector('button').disabled = false
  document.getElementById("question").textContent = ""
  document.body.style.overflow = "visible";
  window.scrollTo(0,0)
  


}

function loadGame(){

  startButton = document.getElementById("button")
  startButton.disabled = true
  console.log("NUMERO DELLE DOMANDE: [" + jsonData.length + "]")
  nextQuestion(0)
  
  document.querySelector("#answersContainer").classList.toggle("hidden")

  var elemento = document.querySelector('#goto');
  
  setTimeout(function() {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }, 50);

}




function nextQuestion(currIndex){


  document.getElementById("bonusRimanenti").innerHTML = nBonus

  domanda = document.getElementById("question")
  domanda.innerHTML = jsonData[currIndex].question

  for (i=0;i<risposte.length;i++){
    document.getElementById(risposte[i]).innerHTML = jsonData[currIndex].answers[i].answer
  }
  
}

function checkAnswer(){

    if(jsonData[currIndex].correctAns == userAnswer){
      punteggio++;
      console.log("[DEBUG] Corretto!" + punteggio)
      if(currIndex+1 == jsonData.length){
        visualizzaPunteggio()
      }else{
        nextQuestion(++currIndex)
      }
      
    }else{
      console.log("[DEBUG] Errato!")
      if(currIndex+1 == jsonData.length){
        visualizzaPunteggio()
      }else{
        nextQuestion(++currIndex)
      }
    }
}

function activeBonus(){
  if(nBonus>0){
    nBonus--;
    punteggio++;
    nextQuestion(++currIndex)
  }else{

  }
}

/**
 * VOTO >= 90 -- WOW | moneyEMJ
 * VOTO <90 && >= -- 60 COMPLIMENTI | linguaEMJ
 * VOTO < 60 >= 40 -- STUDIA MEGLIO | shockEMJ
 * VOTO <40 -- NON CI SIAMO | sadEMJ
 */

function visualizzaPunteggio(){
    console.log(punteggio)

    frase = document.querySelector("#testoComplimenti")
    punteggioHtml = document.querySelector("#points")
    emjHtml = document.querySelector("#emoji")
    document.querySelector('#modal-box').classList.toggle("hidden")

    let perc = Math.round(calcolaPercentuale())

    console.log(perc)

    punteggioHtml.textContent = punteggio.toString()
    document.body.style.overflow = "hidden";
    if(perc >= 90){
      frase.textContent = "WOW"
      emjHtml.src = "game/assets/moneyEMJ.svg"
      emjHtml.alt = "Image1"
    }else if(perc < 90 && perc >= 60){
      frase.textContent = "COMPLIMENTI!"
      emjHtml.src = "game/assets/linguaEMJ.svg"
      emjHtml.alt = "Image2"
    }else if(perc < 60 && perc >= 40){
      frase.textContent = "STUDIA MEGLIO!"
      emjHtml.src = "game/assets/shockEMJ.svg"
      emjHtml.alt = "Image3"
    }else{
      frase.textContent = "NON CI SIAMO"
      emjHtml.src = "game/assets/sadEMJ.svg"
      emjHtml.alt = "Image4"
    }

}


function calcolaPercentuale(){
  return (100*punteggio)/jsonData.length
}

function setAnswer(id){
  userAnswer = document.getElementById(id).textContent
  checkAnswer()
}

function giocaAncora(){
  inizialize()
}