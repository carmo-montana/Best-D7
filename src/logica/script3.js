const submitBtn = document.getElementById("submitBtn");
const senhaInput = document.getElementById("senha");

submitBtn.addEventListener("click", () => {
    const senha = senhaInput.value;

    if (senha === "SOFTWAREhouse") {
        window.location.href = "https://defcon.org/"
    } else {
        alert("Tente mais uma vez eu sei que você consegui.")
    }
})