//-------------------------- CONFIGURACIÓN -----------------------------------------
let mic;
let amp;
let sonidoOn = false;
let ampMin = 0.03;
let ampMax = 0.1;
let clapTime = 0.3; // Duración max del sonido para el aplauso
let startTime = 0;
let clapDetected = false;

// Analizar el nivel de volumen para determinar si el sonido es grave o agudo
let grave = amp > ampMin && amp < ampMax;
let agudo = amp > ampMax;

//........................ clases 
let tam = 30;
let fondo;
let formas;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100); //HSB (color, saturación y brillo)
  
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio(); // para el navigador
  
  fondo = new Fondo(tam);
  formas = new Formas();
}

function draw() {
  amp = mic.getLevel();
  sonidoOn = amp > ampMin;
  if(sonidoOn){
   fondo.dibujaFondo();
   fondo.dibujaFiltros();
   formas.dibujarFormas();
  } else {
  fill(0, 0, 0, 5);
  rect(0, 0, width, height);
  }
  console.log(sonidoOn);
}


