// Nivel 1: Ofimática

// Base de preguntas
let baseQuestions = [
  {
    question: "¿Qué es el software?",
    image: "/assets/images/software.webp",
    response: "Parte logica del sistema",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/hardware.webp",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/texto_decorativo.webp",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "Atajo rapido para guardar un archivo de word",
    image: "/assets/images/guardar_archivo.webp",
    response: "Ctrl + G",
    Options: ["Ctrl + S", "Alt + F4", "Windows + E"],
  },
  {
    question:
      "Atajo rapido para abrir el explorador de archivos",
    image: "/assets/images/explorador_de_archivos.webp",
    response: "Windows + E",
    Options: ["Ctrl + S", "Ctrl + G", "Alt + F4"],
  },
  {
    question:
      "Formato de imagen que generalmente está animada o tiene movimiento",
    image: "/assets/images/imagenes.jpg",
    response: "GIF",
    Options: ["JPEG", "JPG", "PNG"],
  },
  {
    question:
      "El grafico que me permite mostrar la distribución de los datos agrupados en rango es...",
    image: "/assets/images/graficos.webp",
    response: "Barras",
    Options: ["Lineas", "Dispersión", "Histograma"],
  },
  {
    question:
      "Para que una imagen o texto aparezca de forma dinámica en la presentación, se debe a la función",
    image: "/assets/images/animaciones.webp",
    response: "Animaciones",
    Options: ["WordArt", "Transiciones", "Graficos"],
  },
  {
    question:
      "¿Cuál de los siguientes programas es un procesador de texto que sirve para crear documentos?",
    image: "/assets/images/paqueteria_de_office.webp",
    response: "Microsoft Word",
    Options: ["Microsoft Excel", "Microsoft Power Point", "Microsoft Access"],
  },
];

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
  document.getElementById("question1").innerHTML = objectQuestion.question;
  document.getElementById("img-question1").src = objectQuestion.image;
  document.getElementById("option-1").innerHTML = options[0];
  document.getElementById("option-2").innerHTML = options[1];
  document.getElementById("option-3").innerHTML = options[2];
  document.getElementById("option-4").innerHTML = options[3];
}

async function selectionResponse1(index) {
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

// Nivel 2: Informática

// Base de preguntas
let baseQuestions2 = [
  {
    question: "Informática",
    image: "/assets/images/software.jpg",
    response: "Parte logica del",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/hardware.jpg",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
];

// Cargar pregunta
let indexQuestion2 = 0;
let score2 = 0;

loadQuestion2(indexQuestion2);

function loadQuestion2(index) {
  objectQuestion = baseQuestions2[index];
  options = [...objectQuestion.Options];
  options.push(objectQuestion.response);
  for (let i = 0; i < 4; i++) {
    options.sort(() => Math.random() - 0.5);
  }
  document.getElementById("question2").innerHTML = objectQuestion.question;
  document.getElementById("img-question2").src = objectQuestion.image;
  document.getElementById("option2-1").innerHTML = options[0];
  document.getElementById("option2-2").innerHTML = options[1];
  document.getElementById("option2-3").innerHTML = options[2];
  document.getElementById("option2-4").innerHTML = options[3];
}

async function selectionResponse2(index) {
  let correctResponse = options[index] == objectQuestion.response;
  if (correctResponse) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    score2++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: "Estudia un poco más",
      icon: "error",
    });
  }

  indexQuestion2++;
  if (indexQuestion2 >= baseQuestions2.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: "${score2}/${baseQuestions2.length}"`,
    });
    indexQuestion2 = 0;
    score2 = 0;
  }
  loadQuestion2(indexQuestion2);
}

// Nivel 3: Programación

// Base de preguntas
let baseQuestions3 = [
  {
    question: "Programación",
    image: "/assets/images/software.jpg",
    response: "Parte logica del sistema",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/hardware.jpg",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
];

// Cargar pregunta
let indexQuestion3 = 0;
let score3 = 0;

loadQuestion3(indexQuestion3);

function loadQuestion3(index) {
  objectQuestion = baseQuestions3[index];
  options = [...objectQuestion.Options];
  options.push(objectQuestion.response);
  for (let i = 0; i < 4; i++) {
    options.sort(() => Math.random() - 0.5);
  }
  document.getElementById("question3").innerHTML = objectQuestion.question;
  document.getElementById("img-question3").src = objectQuestion.image;
  document.getElementById("option3-1").innerHTML = options[0];
  document.getElementById("option3-2").innerHTML = options[1];
  document.getElementById("option3-3").innerHTML = options[2];
  document.getElementById("option3-4").innerHTML = options[3];
}

async function selectionResponse3(index) {
  let correctResponse = options[index] == objectQuestion.response;
  if (correctResponse) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    score3++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: "Estudia un poco más",
      icon: "error",
    });
  }

  indexQuestion3++;
  if (indexQuestion3 >= baseQuestions3.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: "${score3}/${baseQuestions3.length}"`,
    });
    indexQuestion3 = 0;
    score3 = 0;
  }
  loadQuestion3(indexQuestion3);
}

// Nivel 4: Redes

// Base de preguntas
let baseQuestions4 = [
  {
    question: "Redes",
    image: "/assets/images/software.jpg",
    response: "Parte logica del sistema",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/hardware.jpg",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
];

// Cargar pregunta
let indexQuestion4 = 0;
let score4 = 0;

loadQuestion4(indexQuestion4);

function loadQuestion4(index) {
  objectQuestion = baseQuestions4[index];
  options = [...objectQuestion.Options];
  options.push(objectQuestion.response);
  for (let i = 0; i < 4; i++) {
    options.sort(() => Math.random() - 0.5);
  }
  document.getElementById("question4").innerHTML = objectQuestion.question;
  document.getElementById("img-question4").src = objectQuestion.image;
  document.getElementById("option4-1").innerHTML = options[0];
  document.getElementById("option4-2").innerHTML = options[1];
  document.getElementById("option4-3").innerHTML = options[2];
  document.getElementById("option4-4").innerHTML = options[3];
}

async function selectionResponse4(index) {
  let correctResponse = options[index] == objectQuestion.response;
  if (correctResponse) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    score4++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: "Estudia un poco más",
      icon: "error",
    });
  }

  indexQuestion4++;
  if (indexQuestion4 >= baseQuestions4.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: "${score4}/${baseQuestions4.length}"`,
    });
    indexQuestion4 = 0;
    score4 = 0;
  }
  loadQuestion4(indexQuestion4);
}

// Nivel 5: Ciberseguridad

// Base de preguntas
let baseQuestions5 = [
  {
    question: "Ciberseguridad",
    image: "/assets/images/software.jpg",
    response: "Parte logica del sistema",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/hardware.jpg",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/hardware.jpg",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
];

// Cargar pregunta
let indexQuestion5 = 0;
let score5 = 0;

loadQuestion5(indexQuestion5);

function loadQuestion5(index) {
  objectQuestion = baseQuestions5[index];
  options = [...objectQuestion.Options];
  options.push(objectQuestion.response);
  for (let i = 0; i < 4; i++) {
    options.sort(() => Math.random() - 0.5);
  }
  document.getElementById("question5").innerHTML = objectQuestion.question;
  document.getElementById("img-question5").src = objectQuestion.image;
  document.getElementById("option5-1").innerHTML = options[0];
  document.getElementById("option5-2").innerHTML = options[1];
  document.getElementById("option5-3").innerHTML = options[2];
  document.getElementById("option5-4").innerHTML = options[3];
}

async function selectionResponse5(index) {
  let correctResponse = options[index] == objectQuestion.response;
  if (correctResponse) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    score5++;
  } else {
    await Swal.fire({
      title: "Respuesta incorrecta",
      text: "Estudia un poco más",
      icon: "error",
    });
  }

  indexQuestion5++;
  if (indexQuestion5 >= baseQuestions5.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: "${score5}/${baseQuestions5.length}"`,
    });
    indexQuestion5 = 0;
    score5 = 0;
  }
  loadQuestion5(indexQuestion5);
}