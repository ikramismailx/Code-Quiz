var startbutton = document.getElementById("start")

var questionsEl = document.getElementById("questions")
var endScreenEl = document.getElementById("end-screen")
var startScreenEl = document.getElementById("start-screen")
var questionTitle = document.getElementById("question-title")
var optionsList = document.querySelectorAll(".options")
var result = document.getElementById("result")
var time = document.getElementById("time")
var qno = 0
var score = 0
var timeSeconds = 20
var timerObject;
startbutton.addEventListener("click",function(){
  questionsEl.classList.remove("hide") 
  startScreenEl.classList.add("hide") 
  displayquestion()
  timerObject = setInterval(function(){
    time.textContent = timeSeconds
    if (timeSeconds <= 0){
        time.textContent = "Time up"
        endScreenDisplay()
    }else{
        timeSeconds--
    }
  },1000)
})
function displayquestion(){
    questionTitle.textContent = questionsList[qno].question
    for(let i=0;i<4;i++){
        optionsList[i].textContent =  questionsList[qno].choices[i]
    }
}

function checkAnswer(event){
    var userText = event.target.textContent
    if (userText == questionsList[qno].answer){
        score += 5
        result.textContent ="You got it right"
    }else{
        result.textContent ="You got it wrong"
    }
    if(qno<questionsList.length-1){
        qno++
        displayquestion()
    }else{
        endScreenDisplay()
    }
}

function endScreenDisplay(){
    clearInterval(timerObject)
    questionsEl.classList.add("hide") 
    endScreenEl.classList.remove("hide") 
}

for(let i=0;i<4;i++){
    optionsList[i].addEventListener("click",checkAnswer)
}