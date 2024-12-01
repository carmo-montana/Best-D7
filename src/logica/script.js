const submitBtn = document.getElementById("submitBtn");
const senhaInput = document.getElementById("senha");

submitBtn.addEventListener("click", () => {
    const senha = senhaInput.value;

    if (senha === "1337") {
        window.location.href = "enigmaImg.html"
    } else {
        alert("Senha incorreta.")
    }
})


// const botao = document.addEventListener("DOMContentLoaded", () => {
//     const senhaInput = document.getElementById("senha");

//     senhaInput.addEventListener("submit", (e) => {
//         e.preventDefault();
//         senhaInput.classList.add("sending");
//     })

//     setTimeout(() => {
//         senhaInput.reset();
//         senhaInput.remove("sending");
//         alert("Você conseguiu parabéns.")
//     }, 2000)
// })