const abas = document.querySelectorAll(".aba"); //Pegamos os elementos que representa as abas.

abas.forEach(aba => {

  //Criamos o evento de 'CLICK'.
  aba.addEventListener("click", function () {

    //Primeiro e feito uma validação, caso a aba ja esteja selecionada retornar.
    if (aba.classList.contains("selecionado")){
      return;
    }

    selecionarAba(aba)
    mostrarInformacaoAba(aba)
  
  });

});

function selecionarAba(aba) {
  //Pegamos atraves do document a aba que esta selecionada para remover o selecionado.
  const abaSelecionada = document.querySelector(".aba.selecionado"); 
  abaSelecionada.classList.remove("selecionado");

  //Atribuimos a classe selecionado na aba que foi clicada.
  aba.classList.add("selecionado");
}

function mostrarInformacaoAba(aba) {

  informacaoSelecionado = document.querySelector(".informacao.selecionado");  
  informacaoSelecionado.classList.remove("selecionado");

  //Criamos uma const para concaternar a informacao- com o id da aba.
  const idDoElementoDeInformacao = `informacao-${aba.id}`; 

  //Fazemos o processo de adicionar o selecionado atraves do id gerado pela const idDoElementoDeInformacao.
  const informacaoAserMostrada = document.getElementById (idDoElementoDeInformacao);
  informacaoAserMostrada.classList.add("selecionado");
}