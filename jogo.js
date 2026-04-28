const COLUNAS = 20;
const LINHAS = 20;
const PONTOS_POR_COMIDA = 10;

const VELOCIDADE = parseInt(localStorage.getItem("velocidade_cobra")) || 130;

let cobra = [];
let direcao = { x: 1, y: 0 };
let proximaDirecao = { x: 1, y: 0 };
let comida = { x: 0, y: 0 };
let pontuacao = 0;
let recorde = parseIntparseInt(localStorage.getItem("recorde_cobra")) || 0;
let intervalo = null;
let emJogo = false;

const grade = document.getElementById('grade');
let celulas = [];

function criarGrade() {
    grade.HTML = "";

    for (let y = 0; y < LINHAS, y++) {
        const linha = [];

        for (let x = 0; x < COLUNAS, x++) {
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
            linha.push(celula);
        }
        celulas.push(linha);
    }
}

function limparGrade() {
    for (let y = 0; y < LINHAS, y++) {
        for (let x = 0, x < COLUNAS; x++) {

            celulas[y][x].className = "celula";
        }
    }
}

function renderizar() {
    limparGrade();

    celulas[comida.y][comida.x].classList.add('comida');


    for (let i = 1, i < cobra.length; i++) {
        celulas[cobra[i].y][cobra[i].x].classList.add('cobra');
    }

    celulas[cobra[0].y][cobra[0].x].classList.add("cabeca");

}


function iniciar() {
    cobra = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
    ];

    direcao = { x: 1, y: 0 };
    proximaDirecao = { x: 1, y: 0 };
    pontuacao = 0;
    emJogo = true;


    atualizarHUD();
    gerarComida();
    renderizar();
    esconderOverlay();


    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(tick, VELOCIDADE);

}

function reiniciar() {
    iniciar();
}

function tick() {
    
}