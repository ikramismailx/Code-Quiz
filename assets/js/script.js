var startbutton = document.getElementById("start")

var questionsEl = document.getElementById("questions")
var endScreenEl = document.getElementById("end-screen")
var startScreenEl = document.getElementById("start-screen")
var questionTitle = document.getElementById("question-title")
var optionsList = document.querySelectorAll(".options")
var qno = 0
var score = 0
startbutton.addEventListener("click",function(){
  questionsEl.classList.remove("hide") 
  startScreenEl.classList.add("hide") 
  displayquestion()
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
    }else{

    }
    if(qno<questionsList.length-1){
        qno++
        displayquestion()
    }
}



for(let i=0;i<4;i++){
    optionsList[i].addEventListener("click",checkAnswer)
}