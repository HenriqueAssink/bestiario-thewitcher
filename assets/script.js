let ativo = false;
let barra = document.getElementById("menu");
let contato = document.getElementById("menu1");
let sobre = document.getElementById("menu2");
let home = document.getElementById("menu3");
let cabecario = document.getElementById("cabecario");
let pagina = document.getElementById("pag");
let imagem = document.getElementById("img1");
let especie = document.getElementById("especie");
let pagina1 = document.getElementById("pag1");
let pagina2 = document.getElementById("pag2");
let rodape = document.getElementById("rodape");
let butao = document.getElementById("slider-image");
let final = document.getElementById("final");
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let especializacao = document.getElementById("especializacao");
let experiencia = document.getElementById("experiencia");
let op0 = document.getElementById("op0");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let enviarBtn = document.getElementById("formbut");
var recarregarBtn = document.getElementById("VoltarBtn");


function changeBackground() {

    let container = document.querySelector(".background");
    if (ativo) {
        container.style.backgroundImage = "url('imagens/witcher_claro.jpg')";
        ativo = false;
    } else {
        container.style.backgroundImage = "url('imagens/fundo_the_witcher.jpg')";
        ativo = true;
    }

    if (pagina.classList.contains("pag_claro")) {

        barra.classList.add("pag_escuro");
        barra.classList.remove("pag_claro");

        contato.classList.add("A_escuro");
        contato.classList.remove("A_claro");

        sobre.classList.add("A_escuro");
        sobre.classList.remove("A_claro");

        home.classList.add("A_escuro");
        home.classList.remove("A_claro");

        cabecario.classList.add("pag_escuro");
        cabecario.classList.remove("pag_claro");

        pagina.classList.add("pag_escuro");
        pagina.classList.remove("pag_claro");

        pagina1.classList.add("pag_escuro");
        pagina1.classList.remove("pag_claro");

        pagina2.classList.add("pag_escuro");
        pagina2.classList.remove("pag_claro");

        final.classList.add("pag_escuro");
        final.classList.remove("pag_claro");

        rodape.classList.add("pag_escuro");
        rodape.classList.remove("pag_claro");

        imagem.src = "imagens/animais2.png";

        butao.src = "imagens/lua.png";

        nome.classList.add("escuro");
        nome.classList.remove("input_line");

        idade.classList.add("escuro");
        idade.classList.remove("input_line");

        especializacao.classList.add("escuro");
        especializacao.classList.remove("input_line");

        experiencia.classList.add("escuro");
        experiencia.classList.remove("input_line");

        op0.classList.add("option_escuro");
        op0.classList.remove("option_claro");

        op1.classList.add("option_escuro");
        op1.classList.remove("option_claro");

        op2.classList.add("option_escuro");
        op2.classList.remove("option_claro");

        op3.classList.add("option_escuro");
        op3.classList.remove("option_claro");

        op4.classList.add("option_escuro");
        op4.classList.remove("option_claro");


        ativo = true;
    }

    else {
        barra.classList.add("pag_claro");
        barra.classList.remove("pag_escuro");

        contato.classList.add("A_claro");
        contato.classList.remove("A_escuro");

        sobre.classList.add("A_claro");
        sobre.classList.remove("A_escuro");

        home.classList.add("Ag_claro");
        home.classList.remove("A_escuro");

        cabecario.classList.add("pag_claro");
        cabecario.classList.remove("pag_escuro");

        pagina.classList.add("pag_claro");
        pagina.classList.remove("pag_escuro");

        pagina1.classList.add("pag_claro");
        pagina1.classList.remove("pag_escuro");

        pagina2.classList.add("pag_claro");
        pagina2.classList.remove("pag_escuro");

        final.classList.add("pag_claro");
        final.classList.remove("pag_escuro");

        rodape.classList.add("pag_claro");
        rodape.classList.remove("pag_escuro");

        imagem.src = "imagens/animais.png";

        butao.src = "imagens/sol.png";

        nome.classList.add("input_line");
        nome.classList.remove("escuro");

        idade.classList.add("input_line");
        idade.classList.remove("escuro");

        especializacao.classList.add("input_line");
        especializacao.classList.remove("escuro");

        experiencia.classList.add("input_line");
        experiencia.classList.remove("escuro");

        op0.classList.add("option_claro");
        op0.classList.remove("option_escuro");

        op1.classList.add("option_claro");
        op1.classList.remove("option_escuro");

        op2.classList.add("option_claro");
        op2.classList.remove("option_escuro");

        op3.classList.add("option_claro");
        op3.classList.remove("option_escuro");

        op4.classList.add("option_claro");
        op4.classList.remove("option_escuro");

    }
}


function exibirRespostas() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var especializacao = document.getElementById("especializacao").value;
    var experiencia = document.getElementById("experiencia").value;

    if (nome === "" || idade === "" || especializacao === "" || experiencia === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    var jubirildo = "Nome: " + "<br>" + nome + "<br>" + "<br>";
    jubirildo += "Idade: " + "<br>" + idade + "<br>" + "<br>";
    jubirildo += "Especialização: " + "<br>" + especializacao + "<br>" + "<br>";
    jubirildo += "Experiência: " + "<br>" + experiencia + " anos";


    var resposta = "Caro(a) " + nome + " ,Agradecemos por aceitar o nosso contrato para auxiliar na busca pelos soldados desaparecidos." +
        "<br>" + " Sua experiência e habilidades como um bruxo serão de grande valia nessa missão." + 
        "<br>" +
        "Com base nas informações que temos, acreditamos que os soldados podem ter sido atacados por um monstro." +
        "<br>" +
        " Recomendamos que esteja preparado para enfrentar situações perigosas e desafiadoras durante a sua busca." +
        "<br>" +
        "Como prometido, disponibilizamos a recompensa generosa para quem entregar a cabeça da criatura responsável pelo ataque. Além disso, forneceremos informações adicionais sobre o incidente para auxiliá-lo em sua empreitada.Tenha em mente que sua contribuição será essencial para trazer justiça aos nossos companheiros perdidos." + "<br>" +
        " Confiamos em sua capacidade de rastrear e enfrentar os desafios que encontrar pelo caminho."+ 
        "<br>"+ 
        "<br>"+"-Milan Noran, comandante da divisão posicionada em Oreton"


        document.getElementById("jubiraumraumrau").innerHTML = jubirildo;
    document.getElementById("respostas").innerHTML = resposta;

     // Exibir o botão "VoltarBtn"
     document.getElementById("VoltarBtn").style.display = "block";
}
recarregarBtn.addEventListener("click", function() {
    location.reload();
});