var mcqQues=[
    {
        question : "Is JS easy?",
        options : ["YES","NO","AOT","NOT"],
        answer : "b"
    },
    {
        question : "Is HTML easy?",
        options : ["YES","NO","AOT","NOT"],
        answer : "a"
    },
    {
        question : "Is CSS easy?",
        options : ["YES","NO","AOT","NOT"],
        answer : "b"
    },
]
var score =0
function showQuiz(){
    for(var i =0 ; i<mcqQues.length;i++){
        var userInput =prompt(`
            Question ${i+1}: ${mcqQues[i].question}
            a)${mcqQues[i].options[0]}
            b)${mcqQues[i].options[1]}
            c)${mcqQues[i].options[2]}
            d)${mcqQues[i].options[3]}

            `)
        if(userInput.toLowerCase() == mcqQues[i].answer){
            score+=1
        }
    }
    alert(`Your score is ${score}`)
}
showQuiz()






