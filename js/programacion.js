// Nivel 3: Programación

// Base de preguntas
let baseQuestions3 = [
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
    deleteGame3();
  }
  loadQuestion3(indexQuestion3);

  function deleteGame3() {
    let display3 = document.getElementById("delete3");
    display3.classList.add("deleteGame");
    loadQuestion3(indexQuestion3);
  };
}