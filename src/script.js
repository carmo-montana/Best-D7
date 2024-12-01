const alterar = document.getElementById("text");
const link = document.getElementById("hos-link");


alterar.addEventListener("mouseover", () => {
    link.style.display = "block";
})

alterar.addEventListener("mouseout", () => {
    link.style.display = "none";
})