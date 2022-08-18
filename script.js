var botaoAbrir = document.querySelector("#btn-abrir");
var containerVaporwave = document.querySelector(".container");
var botaoForm = document.querySelector("#submit-btn");
var secaoPedido = document.querySelector(".hackerwoman");
var form = document.querySelector(".pedido-resposta");

botaoAbrir.addEventListener("click", () => {
    containerVaporwave.style.display = "grid";
    botaoAbrir.style.display = "none";
    secaoPedido.style.height = "auto";
    window.scrollTo({
        top: 1500,
        behavior: "smooth"
    });
})

botaoForm.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("#gif-coracao1").src = "imagens/skeleton.gif";
    document.querySelector("#gif-flores").src = "imagens/yay-yes.gif";
    document.querySelector("#foto-hackerwoman").src = "imagens/kid-meme.gif";
    document.querySelector(".gif-coracao-classe").src = "imagens/skeleton.gif";
    document.querySelector(".gif-flores-classe").src = "imagens/yay-yes.gif";
    document.querySelector(".gif-coracao2-classe").src = "imagens/bert.gif";
    document.querySelector(".gif-coracao2-classe").style.width = "200px";
    document.querySelector(".foto-hackerwoman-classe").src = "imagens/kid-meme.gif";
    document.querySelector("#foto-container-vaporwave").src = "imagens/MOSHED-2022-3-11-14-33-5.gif";
    containerVaporwave.style.background = "rgb(247, 107, 130)";
    
    console.log("ELX ACEITOU!");
})