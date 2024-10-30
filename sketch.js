let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();  
}

function palavraAleatoria(){
  let palavras = ["Manuely", "miqueletto"];
  return random(palavras);
}

function inicializaCores(){
  background("#DCC5E0");
  fill("#795548");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
  
  
  
  
  
  /* if (mouseX < 50){
   let palavra= "M";
  text(palavra, 200, 200); 
  } else if (mouseX < 100) {
    let palavra = "Mi";
    text(palavra, 200, 200);
  } else if (mouseX < 150) {
    let palavra = "Miq";
    text(palavra, 200, 200);
  } else if (mouseX < 200) {
    let palavra = "Miqu";
    text(palavra, 200, 200);
  } else if (mouseX < 250) {
    let palavra = "Mique";
    text(palavra, 200, 200);
  } else if (mouseX < 300) {
    let palavra = "Miquel";
    text(palavra, 200, 200);
  } else if (mouseX < 350) {
    let palavra = "Miquele";
    text(palavra, 200, 200);
  } else if (mouseX < 400) {
    let palavra = "Miquelet";
    text(palavra, 200, 200);
  } else if (mouseX < 450) {
    let palavra = "Miquelett";
    text(palavra, 200, 200);
  } else if (mouseX < 500) {
    let palavra = "Miqueletto";
    text(palavra, 200, 200);
    
  }*/
  
}