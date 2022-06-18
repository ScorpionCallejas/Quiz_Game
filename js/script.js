// Cargar pregunta
loadQuestion(0)

function loadQuestion(index){
    let objectQuestion = baseQuestions[index]
    let options = [...objectQuestion.options]
    options.push(objectQuestion.response)
    document.getElementById("question").innerHTML = objectQuestion.Question
    document.getElementById("option-1").innerHTML = objectQuestion.Question
}