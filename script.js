document.getElementById("btn-tu-nombre").addEventListener("click", function () {
    let div = document.getElementById("div-tu-nombre");
    div.style.backgroundColor = getRandomColor();
    div.style.color = getRandomColor();
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
