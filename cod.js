var zenaide = { nome: "Zenaide", win: 0, draw: 0, loser: 0, points: 0 };
var yuri = { nome: "Yuri", win: 0, draw: 0, loser: 0, points: 0 };
var rebecca = { nome: "Rebecca", win: 0, draw: 0, loser: 0, points: 0 };
var players = [zenaide, yuri, rebecca]; // ao final do projeto, verificar se faz sentido criar a variavel dentro da funcao load

/* funcao criada para calcular os pontos, recebe o parametro players... Neste contexto, as funcoes sao importantes para serem chamadas no momento que desejado,
dessa forma, nao ficamos retidos a execucao de todo script ao inicializar a pagina.  */

function calcpoint(players) {
    for (var i = 0; i < players.length; i++) {
        players[i].points = players[i].win * 3 + players[i].draw;
    }
    //return fpoints; /*essa declaracao finaliza a execucao da funcao, retorna o valor encontrado na funcao, para quem a chamou.*/
}

//zenaide.points = calcpoint(zenaide) caso fosse utilizar o return para executar a funcao e receber o valor de retorno

function loadHtml(players) {
    var load = document.getElementById("tabelaJogadores"); //encurta a chamada do html

    load.innerHTML = ""; //reload table sempre que e adicionado algum novo valor (win, draw, loser)

    for (var i = 0; i < players.length; i++) {
        load.innerHTML =
            load.innerHTML +
            "<tr><td>" +
            players[i].nome +
            "</td><td>" +
            players[i].win +
            "</td><td> " +
            players[i].draw +
            "</td><td> " +
            players[i].loser +
            "</td><td> " +
            players[i].points +
            " </td>" +
            "<td class='acoes'> <button onClick='adicionarVitoria(" +
            i +
            ")'>Vitória</button></td>" +
            "<td class='acoes'><button onClick='adicionarEmpate(" +
            i +
            ")'>Empate</button></td>" +
            "<td class='acoes'> <button onClick='adicionarDerrota(" +
            i +
            ")'>Derrota</button></td>" +
            "<td class='acoes'> <button onClick='reset(" +
            i +
            ")'>Reset</button></td></tr>";
    }
}
loadHtml(players);

function adicionarVitoria(i) {
    players[i].win++;
    calcpoint(players);
    loadHtml(players);
}

function adicionarEmpate(i) {
    players[i].draw++;
    calcpoint(players);
    loadHtml(players);
}

function adicionarDerrota(i) {
    players[i].loser++;
    calcpoint(players);
    loadHtml(players);
}

function reset(i) {
    players[i].loser = 0;
    players[i].draw = 0;
    players[i].win = 0;
    calcpoint(players);
    loadHtml(players);
}

function allReset2(players) {
    for (var i = 0; i < players.length; i++) {
        players[i].points = 0;
        players[i].loser = 0;
        players[i].win = 0;
        players[i].draw = 0;
    }
    calcpoint(players);
    loadHtml(players);
}

function addPlayer(players) {
    var newplayer = document.getElementById("newplayer").value;

    var player = {
        nome: newplayer,
        win: 0,
        draw: 0,
        loser: 0,
        points: 0,
    };

    players.push(player);
    loadHtml(players);
    console.log(players);
    document.getElementById("newplayer").value = "";

    //return player;
}

function editResults() {
    var table = document.getElementsByTagName("table")[0]; // seleciona a primeira tabela da página
    var header = table.getElementsByTagName("th")[5]; // seleciona o cabeçalho da tabela
    var cells = table.querySelectorAll("td.acoes"); // seleciona o range que quero alterar, nesse caso, todas as cells (td) com a classe acoes

    if (header.style.display === "none") {
        // exibe a coluna (retorna ao valor padrão de display)
        header.style.display = "";
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.display = "";
        }
    } else {
        // oculta a coluna
        header.style.display = "none";
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.display = "none";
        }
    }
}


// desafios:

// - calcular os pontos de acordo com os resultados OK
// - carregar os dados no html  OK
// - manipular os resultados pelos botoes da pagina OK
// - implementar o for para calcular os pontos dentro da funcao OK
// - testar chamada de funcao e em seguida funcão return (para devolver um valor depois da função ser chamada) OK
// - botao pra zerar pontos da tabela e zerar por jogador OK
// - adicionar jogador por botao OK
// - Botao de editar para habilitar o modo de alteracao OK
