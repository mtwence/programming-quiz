// variables linked to html using web api 
var startButton = document.querySelector("#strtbtn")
var startScreen = document.querySelector("#startcard")
var quizQuestions = document.querySelector("#quizcard")
var quizOver = document.querySelector("#gameover")
var highScore = document.querySelector("#highscore")

// Start game event listener 
startButton.addEventListener("click", function () {
    startScreen.style.display = "none"
    quizQuestions.style.display = "block"
} )

// Question Object to use in conjjunction with fucntion to populate quizcard
var questionBank = [
    {
      question: "JavaScript is a ___ -side programming language.",
      choices: ["Client", "Server", "Both", "Neither"],
      answer: "Both",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript",
        choices:["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
        answer: "Math.min(x,y)"
    },
    {
        question: "Which of the following will write the message “Hello Michael!” in an alert box?",
        choices: ["alertBox(“Hello Michael!”)","alert(Hello Michael!);", " msgAlert(“Hello Michael!”);", "alert(“Hello Michael!”);"],
        answer: "alert(“Hello DataFlair!”);"
    }
    {
        question: "Which of the following is an event listener in JavaScript?",
        choices: ["onclick", "blur", "click", "Click()"],
        answer: "click"
    }
    {
        question: "What is the correct JavaScript syntax to print “DataFlair” in the console?",
        choices: "print(“DataFlair”);", "console.print(“DataFlair”);", "log.console(“DataFlair”);","console.log(“DataFlair”);",
        answer: "console.log(“DataFlair”);"
    }
]

// Function to play the actual Game

// Function to change display of html cards 

// Function for Timer 

// For loop to create answer button for each array item 

// Function to check if choice is right or wrong, then move to next question

// Function to decrement timer if choice is incorrect 

// Function to end game 

// Function to change to highscore card

// Function to add players highscore to localStorage table