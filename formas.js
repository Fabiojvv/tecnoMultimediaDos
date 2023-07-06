class Formas {
  constructor() {
    //------------------------------------------------- DATOS
    this.STEP = 15;
    this.valor;
    this.dato = random(0.01, 0.02);
    setInterval(this.cambioValor.bind(this), 2000);
  }
  dibujarFormas() {
    //........................................... CONFIGURACIÓN VOZ
    let voz = 30 - amp * 50;
    this.STEP = voz * 0.01;
    let tamf = map(this.STEP, 0.01, 1, 20, 5);
    //............................................................ DIBUJO
    for (let x = 8; x <= width; x += tam) {
      for (let y = 8; y <= height; y += tam) {
        let noiseValue = noise(x * this.valor, y * this.valor);
        push();
        translate(x, y);
        fill(0);
        if (noiseValue < 0.25) {//...........................cuadrados
          rect(0, 0, tamf, tamf);
        } else if (noiseValue < 0.35) {//....................circulos
          ellipse(tamf / 2, tamf / 2, tamf, tamf);
        } else if (noiseValue < 0.45) {//....................rombo
          quad(0, tamf / 2, tamf / 2, 0, tamf, tamf / 2, tamf / 2, tamf);
        } else if (noiseValue < 0.65) {//....................triangulos
          triangle(tamf / 2, 0, tamf, tamf, 0, tamf);
        } else if (noiseValue < 0.85) {//....................rect sin fill
          strokeWeight(4);
          fill(0, 0);
          rect(0, 0, tamf, tamf);
        } else {//....................circulo sin fill
          strokeWeight(3);
          fill(0, 0);
          ellipse(tamf / 2, tamf / 2, tamf, tamf);
        }
        pop();
      }
    }
  }
 //.......................................................... CAMBIO DE FORMAS
  cambioValor() {
    this.valor = random(0.01, 0.05);
  }
}