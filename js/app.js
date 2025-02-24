function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagemJogo = jogoSelecionado.querySelector(".dashboard__item__img");
    let botaoJogo = jogoSelecionado.querySelector(".dashboard__item__button");
    let nomeJogo = jogoSelecionado.querySelector(".dashboard__item__name").textContent;



    let confirmacaoEscolha = confirm((`Você deseja alterar o status do jogo ${nomeJogo}?`))



    if (confirmacaoEscolha) {

        let apenasAlterarStatus = confirm(`Deseja apenas alterar o status do jogo ${nomeJogo}?`);

        if (apenasAlterarStatus) {



            imagemJogo.classList.toggle("dashboard__item__img--rented");
            botaoJogo.classList.toggle("dashboard__item__button--return")
            if (botaoJogo.textContent == "Alugar") {
                botaoJogo.textContent = "Devolver";
            } else {
                botaoJogo.textContent = "Alugar";
            }

        } else {





            if (imagemJogo.classList.contains("dashboard__item__img--rented")) {

                let confirmacaoEscolha = confirm(`Você deseja devolver o jogo ${nomeJogo}?`);

                if (confirmacaoEscolha) {

                    imagemJogo.classList.remove("dashboard__item__img--rented");
                    botaoJogo.classList.remove("dashboard__item__button--return");
                    botaoJogo.textContent = "Alugar";
                }



            } else {

                let confirmacaoAluguel = confirm(`Deseja alugar o jogo ${nomeJogo}?`);

                if (confirmacaoAluguel) {
                    imagemJogo.classList.add("dashboard__item__img--rented");
                    botaoJogo.classList.add("dashboard__item__button--return");
                    botaoJogo.textContent = "Devolver";

                }
            }
        }
    }
}




