const question = document.getElementById('question');
const choices =  Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {}; //going to be an object.
let availableQuestions = []; // empty Array we will take out avaiable questions out of array when we use them so we can give unique questions to the user. 
let score = 0;
let questionCounter = 0; // what question are you on.
let acceptingAnswers = false;



let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Markup Language",
        choice2: "Hyper Text Markup Laguna",
        choice3: "Hyper Text Markup Letsgo",
        choice4: "Hyper Text Makeup Language",
        answer: 1
    },
    
    {
        question: "What does CSS stand for?",
        choice1: "Cascading Style Steak",
        choice2: "Cascading Style Straw",
        choice3: "Cascading Style Sheet",
        choice4: "Cascading Style Soup",
        answer: 3
    },
    {
        question: "What is JavaScript?",
        choice1: "Javascript is a scripting languages, primarily used on the Web.",
        choice2: "Javascript is not found in HTML.",
        choice3: "JavaScript is a script from Microsoft.",
        choice4: "javascript founded JambaJuice",
        answer: 1
    },
];

// some constants to play the game
const correct_bonus = 10; 
const max_questionsforuser = 3;

startGame = () => {
    questionCounter = 0; // making sure its starting at 0. Using this for a reset.
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions)
    getNewQuestion();
}
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >=max_questionsforuser){
        return window.location.assign("/code quiz.html");
    }
   questionCounter++;
   var questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
   choices.forEach( choice => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number];
   });
   availableQuestions.splice(questionIndex, 1);
   acceptingAnswers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return; //if we are not accepting answers, we going to return we will ignore their answer.
 
       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];

       const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
       console.log(classToApply);

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( ()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);


       
       

    })
})
startGame();   

