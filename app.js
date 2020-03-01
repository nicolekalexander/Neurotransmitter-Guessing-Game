// //jquery selections connecting javascript to html
var score = 0;
$("#start").on("click", () => {
    startQuiz({})
})


console.log($("#start"))
// //for-loop for moving through the game question by question

function startQuiz(){

    for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("Sorry, that's incorrect")
        }
    }
    alert("You got " + score + "/" + questions.length)
}
