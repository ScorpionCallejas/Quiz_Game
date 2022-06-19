// Cargar pregunta
let indexQuestion = 0;
let score = 0;

loadQuestion(indexQuestion);

function loadQuestion(index) {
  objectQuestion = baseQuestions[index];
  options = [...objectQuestion.Options];
  options.push(objectQuestion.response);
  for (let i = 0; i < 4; i++) {
    options.sort(() => Math.random() - 0.5);
  }
  document.getElementById("question").innerHTML = objectQuestion.question;
  document.getElementById("img-question").src = objectQuestion.image;
  document.getElementById("option-1").innerHTML = options[0];
  document.getElementById("option-2").innerHTML = options[1];
  document.getElementById("option-3").innerHTML = options[2];
  document.getElementById("option-4").innerHTML = options[3];
}

async function selectionResponse(index) {
  let correctResponse = options[index] == objectQuestion.response;
  if (correctResponse) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    score++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: "Estudia un poco más",
      icon: "error",
    });
  }

  indexQuestion++;
  if (indexQuestion >= baseQuestions.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: "${score}/${baseQuestions.length}"`,
    });
    indexQuestion = 0;
    score = 0;
  }
  loadQuestion(indexQuestion);
}