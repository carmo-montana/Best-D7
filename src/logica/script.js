const submitBtn = document.getElementById("submitBtn");
const senhaInput = document.getElementById("senha");
const mensagem = document.querySelector(".message");


// submitBtn.addEventListener("keypress", () => {
//     const senha = senhaInput.value;

//     if (senha === "1337") {
//         window.location.href = "enigmaImg.html"
//     } else {
//         alert("Senha incorreta.")
//     }

// })

senhaInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const password = senhaInput.value;

        if (checksenha(password)) {
            window.location.href = "enigmaImg.html"
        } else {
            mensagem.textContent = "Senha incorreta. Tente novamente.";
            mensagem.style.color = "#fff"
            senhaInput.value = '';

            setTimeout(() => {
                mensagem.style.block = "none";
            }, 3000)
        }
    }
})


function checksenha(password) {
    return password === "1337";
}