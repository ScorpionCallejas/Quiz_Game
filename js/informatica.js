// Nivel 2: Informática

// Base de preguntas
let baseQuestions2 = [
  {
    question: "¿Qué es el software?",
    image: "/assets/images/ofimática/software.webp",
    response: "Parte logica del sistema",
    Options: ["Mouse", "Parte tangible de la pc", "Paqueteria Office"],
  },
  {
    question: "¿Qué es el hardware?",
    image: "/assets/images/ofimática/hardware.webp",
    response: "Parte tangible del sistema",
    Options: ["Mouse", "Parte logica de la pc", "Paqueteria Office"],
  },
  {
    question:
      "Indique cuál de los siguientes elementos forma parte del software de un ordenador:",
    image: "/assets/images/ofimática/SO.webp",
    response: "Sistema operativo",
    Options: ["Memoria RAM", "Disco óptico", "Disco duro"],
  },
  {
    question:
      "En un documento de Word, se pretende insertar un texto decorativo. ¿Con cuál de las siguientes herramientas de dibujo se podrá hacer?",
    image: "/assets/images/ofimática/texto_decorativo.webp",
    response: "WordArt",
    Options: ["TextArt", "Autoformas", "Diagrama"],
  },
  {
    question:
      "Atajo rapido para guardar un archivo de word",
    image: "/assets/images/ofimática/guardar_archivo.webp",
    response: "Ctrl + G",
    Options: ["Ctrl + S", "Alt + F4", "Windows + E"],
  },
  {
    question:
      "Atajo rapido para abrir el explorador de archivos",
    image: "/assets/images/ofimática/explorador_de_archivos.webp",
    response: "Windows + E",
    Options: ["Ctrl + S", "Ctrl + G", "Alt + F4"],
  },
  {
    question:
      "Formato de imagen que generalmente está animada o tiene movimiento",
    image: "/assets/images/ofimática/imagenes.webp",
    response: "GIF",
    Options: ["JPEG", "JPG", "PNG"],
  },
  {
    question:
      "El grafico que me permite mostrar la distribución de los datos agrupados en rango es...",
    image: "/assets/images/ofimática/graficos.webp",
    response: "Barras",
    Options: ["Lineas", "Dispersión", "Histograma"],
  },
  {
    question:
      "Para que una imagen o texto aparezca de forma dinámica en la presentación, se debe a la función",
    image: "/assets/images/ofimática/animaciones.webp",
    response: "Animaciones",
    Options: ["WordArt", "Transiciones", "Graficos"],
  },
  {
    question:
      "¿Cuál de los siguientes programas es un procesador de texto que sirve para crear documentos?",
    image: "/assets/images/ofimática/paqueteria_de_office.webp",
    response: "Microsoft Word",
    Options: ["Microsoft Excel", "Microsoft Power Point", "Microsoft Access"],
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
    deleteGame2();
  }
  loadQuestion2(indexQuestion2);

  function deleteGame2() {
    let display2 = document.getElementById("delete2");
    display2.classList.add("deleteGame");
    loadQuestion2(indexQuestion2);
  };
}