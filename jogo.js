let heroi = ['', 0, 0, 0]
let chanceVitoria = 0.7
let chanceVitoriaBoss = 0.5

function IniciarJogo(){
    document.getElementById("telaInicio").style.display = "none";
    document.getElementById("telaJogo").style.display = "block";

    heroi[0] = document.getElementById("name").value; //nome
    heroi[1] = 0; //vitorias
    heroi[2] = 0; //derrotas
    heroi[3] = 100; // vida
    
    exibirVida();

    let apresentacao = document.getElementById("apresentacao");
    apresentacao.innerHTML = `<p>Seja Bem-vindo Herói ${heroi[0]}</p>`
}

function exibirNivel(){
    let saldoVitorias = heroi[1] - heroi[2];

    if (saldoVitorias < 10) {
        nivel = 'Ferro'
    } else if(saldoVitorias >= 11 && saldoVitorias <= 20 ){
        nivel = 'Bronze'
    } else if(saldoVitorias >= 21 && saldoVitorias <= 50 ){
        nivel = 'Prata'
    } else if(saldoVitorias >= 51 && saldoVitorias <= 80 ){
        nivel = 'Ouro'
    } else if(saldoVitorias >= 81 && saldoVitorias <= 90 ){
        nivel = 'Diamante'
    } else if(saldoVitorias >= 91 && saldoVitorias <= 100 ){
        nivel = 'Lendário'
    } else if(saldoVitorias >= 100){
        nivel = 'Imortal'
    }

    let exibicao = document.getElementById("telaResultado")

    exibicao.innerHTML = `<p>O Herói tem de saldoVitorias de *${saldoVitorias}* está no nível de *${nivel}*</p>`
}

function batalha(){
    let vitoria = 1;
    let derrota = 1;
    
    let exibicao = document.getElementById("telaResultado")

    const sorteio = Math.random(); // Gera um número aleatório entre 0 e 1
    
    if (sorteio < chanceVitoria) {
        // Vitória
        heroi[1] += vitoria;
        heroi[3] += 35;

        exibirVida();

        exibicao.innerHTML = `<p>Voce venceu a batalha e ganhou ${35} de vida e ${vitoria} Vitória!</p>`

    } else {
        // Derrota
        let vidaPerdida = Math.floor(Math.random() * 15) + 10;

        heroi[2] -= derrota;
        heroi[3] -= vidaPerdida;

        exibirVida();

        exibicao.innerHTML = `<p>Voce perdeu a batalha e perdeu ${vidaPerdida} de vida e ganhou ${derrota} Derrota!</p>`
    }
}

function desafiarBoss() {
    let vitoria = 1;
    let derrota = 1;

    let exibicao = document.getElementById("telaResultado");

    const sorteio = Math.random(); // Gera um número aleatório entre 0 e 1

    if (sorteio < chanceVitoriaBoss) {
        // Vitória

        heroi[1] += vitoria;
        heroi[3] += 50;

        exibirVida();

        exibicao.innerHTML = `<p> Você ganhou desse Boss fraquinho!! Ganhou ${50} de vida e ${vitoria} vitorias!</p>`;

    } else {
        // Derrota
        let vidaPerdida = Math.floor(Math.random() * 41) + 60;

        heroi[1] -= derrota;
        heroi[3] -= vidaPerdida;

        exibirVida();

        exibicao.innerHTML = `<p>Voce perdeu a batalha contra o Boss e perdeu ${vidaPerdida} de vida e ganhou ${derrota} derrota!</p>`;
    }
}

function exibirVida() {
    let exibirVida = document.getElementById("exibirVida");
    exibirVida.innerHTML = `<p>Voce tem ${heroi[3]} de vida!</p>`;
}

function InformacoesPopup() {
    window.open("info.html", "_blank");
}