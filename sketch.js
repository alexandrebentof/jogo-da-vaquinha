




function setup() {
  createCanvas(500,400);
    somDatrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
  
}



