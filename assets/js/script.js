var startbutton = document.getElementById("start")

var questionsEl = document.getElementById("questions")
var endScreenEl = document.getElementById("end-screen")
var startScreenEl = document.getElementById("start-screen")
var questionTitle = document.getElementById("question-title")
var optionsList = document.querySelectorAll(".options")
var qno = 0
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