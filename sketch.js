//desenvolvido por Jânyo Edson
//anduando de C&T 2019.
var lixoH = 640 - 120,
    sorteioIni, dista, pontos = 0,
    vidap = 5,
    lixeira = 1,
    estado = 1,
    velocidade = 5,
    recorde, todosrecordes = [];
var ini1 = false,
    ini1X = 0,
    ini1Y = -80,
    iniAma = false;
var ini2 = false,
    ini2X = 0,
    ini2Y = -80,
    iniazul = false;
var ini3 = false,
    ini3X = 0,
    ini3Y = -80,
    iniverd = false;
var ini4 = false,
    ini3X = 0,
    ini3Y = -80,
    ini
var imgLixeira, imgLixeiraAma, imgLixeiraAzul, imgLixeiraVerd, imglixeira = []; // Declare variable 'img'.
var imgLatinha1, imgLatinha2, metal = 0;
var imgPapel, imgCopo;
var imgBrilho = [],
    j = 1,
    brilho = false;
var R, G, B;
var musJogo, mussad, contusoes = [];
var sort;
var background1, background2, background3, background4, imgV = [],
    imbB;


function preload() {
    soundFormats('mp3', 'ogg');
    musJogo = loadSound('musicas/Hyperspeed.ogg');
    mussad = loadSound("musicas/Mussad.mp3");
    imgLixeiraAma = loadImage('lixeiraAma.png');
    imgLixeiraAzul = loadImage('lixeiraAzul.png');
    imgLixeiraVerd = loadImage('lixeiraverd.png');
    imgLatinha1 = loadImage('latinha1.png');
    imgLatinha2 = loadImage('latinha2.png');
    imgPapel = loadImage('papel.png');
    imgCopo = loadImage('copo.png');
    background1 = loadImage('fundo.png');
    background2 = loadImage('fundo2.png');
    background3 = loadImage('fundo3.png');
    background4 = loadImage('fundo4.png');


    for (i = 0; i < 6; i++) {
        contusoes[i] = loadSound('musicas/contusao' + i + '.mp3');
    }
    for (i = 16; i < 34; i++) {
        imgV[i] = loadImage('img/' + i + '.jpg');
    }
    for (i = 1; i < 5; i++) {
        imgBrilho[i] = loadImage('img/brilhofram' + i + '.png');
    }

}


////////para testes
var x1 = 0;
var y1 = 0;
////////

function setup() {

    imgVB =imgV[int(random(16, 34))];

    recorde = localStorage.getItem("recorde");
    if (recorde == null) {
        recorde = 0;

    }
    createCanvas(480, 640);
    //  createCanvas(windowWidth, windowHeight);//

    imgLixeira = imgLixeiraVerd;
    frameRate(60);
    textSize(20);


}


function draw() {
    background(0);
    if (velocidade <= 15) {
        velocidade += 1 / 800;
    }
    if (estado == 1) {
        background(background1);
        quadradoSelecionavel("Iniciar", 0, 0, 200, 40, 2, );
        quadradoSelecionavel("Como jogar", 0, 50, 200, 40, 4);
    }
    if (estado == 2) { //jogando
        if (musJogo.isPlaying() == false) {
            musJogo.setVolume(0.1);
            musJogo.play();
        }
        if (int(velocidade / 5) == 1) {
            background(background2);
        } else if (int(velocidade / 5) == 2) {
            background(background3);
        } else {
            background(background4);
        }


        if (vidap < 0) {
            estado = 3;
        }
        if (iniverd == true) {
            if (ini1X == 0) {
                ini1X = random(20, 460);
                ini1Y = 0;
            }
            ini1Y += velocidade;
            fill(0, 255, 0);

            //ellipse(ini1X,ini1Y, 40, 40);
            image(imgCopo, ini1X - 20, ini1Y - 20, 40, 40);

            dista = int(dist(ini1X, ini1Y, mouseX, lixoH + 30));
            //text(dista + " pixeis.", 300, 400); //para teste
            if (dista <= 20 && lixeira == 1) {
                iniverd = false;
                pontos += 1;
                ini1Y = 0;
                ini1X = 0;
                contusoes[int(random(6))].play();
            }
            if (ini1Y > 650) {
                ini1 = false;
                ini1Y = 0;
                ini1X = 0;
                iniverd = false;
                vidap -= 1
            }
            if (dista > 20 && ini3X > mouseX - 40 && ini3X < mouseX + 40 && ini3Y > lixoH) { //dentro do retângulo e fora do círculo
                fill(255);
                textAlign(CENTER);
                text("Errou!", width / 2, height / 2);
            }
        }

        if (iniAma == true) {
            if (metal == 0) {
                metal = imgLatinha1;
            }
            if (metal == 1) {
                metal = imgLatinha2;
            }
            if (ini3X == 0) {
                ini3X = random(20, 460);
                ini3Y = 0;
            }
            ini3Y += velocidade;
            fill(255, 255, 0);
            //ellipse(ini3X,ini3Y, 40, 40);
            image(metal, ini3X - 20, ini3Y - 20, 40, 40);
            dista = int(dist(ini3X, ini3Y, mouseX, lixoH + 30));
            //text(dista + " pixeis.", 300, 400);
            if (dista <= 20 && lixeira == 3) {
                iniAma = false;
                pontos += 1;
                ini3Y = 0;
                ini3X = 0;
                metal = int(random(2));
                contusoes[int(random(6))].play();
            }
            if (ini3Y > 650) {
                ini3 = false;
                ini3Y = 0;
                ini3X = 0;
                iniAma = false;
                vidap -= 1;
                metal = int(random(2));
            }
        }
        if (iniazul == true) {
            if (ini2X == 0) {
                ini2X = random(20, 460);
                ini2Y = 0;
            }
            ini2Y += velocidade;
            fill(0, 0, 255);
            //ellipse(ini2X,ini2Y, 40, 40);
            image(imgPapel, ini2X - 20, ini2Y - 20, 40, 40);
            dista = int(dist(ini2X, ini2Y, mouseX, lixoH + 30)); //ditancia até a elipse do lixo.
            //text(dista + " pixeis.", 300, 400); //apenas para teste
            if (dista <= 20 && lixeira == 2) {
                iniazul = false;
                pontos += 1;
                ini2Y = 0;
                ini2X = 0;
                contusoes[int(random(6))].play();
            }
            if (ini2Y > 650) {
                ini2 = false;
                ini2Y = 0;
                ini2X = 0;
                iniazul = false;
                vidap -= 1;
            }
        }
        if (iniAma != true && iniazul != true && iniverd != true) {
            sorteioIni = parseInt(random(4));
            if (sorteioIni == 0) {
                iniAma = true;
            }
            if (sorteioIni == 1) {
                iniazul = true;
            }
            if (sorteioIni == 2) {
                iniverd = true;
            }
            if (sorteioIni == 3) {
                iniverd = true;
            }
        }
        rect(114, 57, 10, 15);
        fill(255, 255, 255);
        textAlign(LEFT);
        text("proximo:", 25, 70);
        text("Tempo: " + int(frameCount / 60) + "s", 25, 40);
        textSize(20);
        if (vidap >= 0) {
            text("Vidas:  " + vidap, 360, 40);
        } else {
            textAlign(RIGHT);
            text("Vidas:  " + 0, 360, 40);
        }
        text("Pontos: " + pontos, 360, 70);
        text("velocidade: " + int(velocidade / 5), 330, 100);

        if (lixeira == 1) {
            R = 0;
            G = 255;
            B = 0;
            imgLixeira = imgLixeiraVerd;
        }
        if (lixeira == 2) {
            R = 0;
            G = 0;
            B = 255;
            imgLixeira = imgLixeiraAzul;
        }
        if (lixeira == 3) {
            R = 255;
            G = 255;
            B = 0;
            imgLixeira = imgLixeiraAma;
        }
        //fill(R,G,B);
        //ellipse(mouseX, lixoH, 80, 80);     //rect(mouseX-40,lixoH, 80, 120);
        //rect(mouseX-40,lixoH, 80, 120);
        if (mouseX > 580) {
            mouseX = 580;
        }
        image(imgLixeira, mouseX - 40, lixoH, 80, 120);
        if (brilho) {
            image(imgBrilho[j], mouseX - 40, lixoH, 80, 120);
            j++;
            if (j > 4) {
                j = 1;
                brilho = false;
            }
        }

        if (pontos > recorde) {
            localStorage.setItem("recorde", pontos);
            recorde = pontos;
        }
        if (todosrecordes.lengh < 10) {
            todosrecordes.push = pontos;
            todosrecordes.sort();
        } else {
            if (todosrecordes[9] < pontos) {
                todosrecordes[9] = pontos;
            }
        }

    }
    if (estado == 3) {

        if(musJogo.isPlaying()){
            musJogo.stop();
        }
        background(imgVB);
        if (mussad.isPlaying() == false) {
            mussad.setVolume(0.1);
            mussad.play();
        }
        
        fill(255);
        textAlign(CENTER);
        text("Recorde: " + recorde, width / 2, height / 2 - 270);
        fill(255);
        textAlign(CENTER);
        text("Fim de jogo.", width / 2, height / 2 - 80);
        quadradoSelecionavel("jogar novamente", 0, 0, 200, 40, 2, resetar(), mussad.stop());
        quadradoSelecionavel("Menu inicial", 0, 50, 200, 40, 1, mussad.stop());

    }
    if (estado == 4) {
        background(255);
        quadradoSelecionavel("voltar", 0, 135, 200, 40, 1);
        fill(0, 200, 0);
        rect(50, 130, 355, 120);
        fill(255, 255, 255);
        textAlign(LEFT);
        text("Use as teclas \421\42, \422\42 e \423\42 para trocar \nde lixeira respectivamente para a \nverde , azul e amarela.\nUse o cursor para controlar a lixeira.", 60, 160);
    }
    /*
  //////////////////para testes
    fill(125);

  var x2 = mouseX;
  var y2 = mouseY;

  line(x1, y1, x2, y2);
  ellipse(x1, y1, 7, 7);
  ellipse(x2, y2, 7, 7);

  var d = int(dist(x1, y1, x2, y2));
  textSize(20);
  text("A distancia entre os pontos é " + d + " pixeis."+"\nno x: " + x2 + "\nno y: "+ y2, 80, 400);
/////////////////////
 */
}

function keyPressed() {
    if (keyCode === 49) {
        lixeira = 1;
        brilho = true;
        x=x+1;
    }
    if (keyCode === 50) {
        lixeira = 2;
        brilho = true
    }
    if (keyCode === 51) {
        lixeira = 3;
        brilho = true;

    }
        if (keyCode === 52) {
            
        

    }
}
//funcoes do jogo
function resetar() {
    vidap = 5;
    frameCount = 0;
    velocidade = 5;
    pontos = 0;


}

function quadradoSelecionavel(texto, distCentx, distCenty, tamx, tamy, valor, acao, acao2) { //origem sendo o centro do canvas, valor atribuido para estado
    fill(0, 200, 0);
    rect(width / 2 - 100 + distCentx, height / 2 - 20 + distCenty, tamx, tamy);
    textAlign(CENTER);
    fill(255, 255, 255);
    text(texto, width / 2 + distCentx, height / 2 + 5 + distCenty);
    if (mouseX > width / 2 - 100 + distCentx && mouseX < width / 2 + 100 + distCentx && mouseY > height / 2 - 20 + distCenty && mouseY < height / 2 + 20 + distCenty) {
        fill(0, 0, 255);
        rect(width / 2 - 100 + distCentx, height / 2 - 20 + distCenty, tamx, tamy);
        fill(255, 255, 255);
        text(texto, width / 2 + distCentx, height / 2 + 5 + distCenty);
    }

    if (mouseIsPressed && mouseX > width / 2 - 100 + distCentx && mouseX < width / 2 + 100 + distCentx && mouseY > height / 2 - 20 + distCenty && mouseY < height / 2 + 20 + distCenty) {
        estado = valor;
        acao;
        acao2;
        mouseIsPressed = false; //evitar duplo clique
    }

}