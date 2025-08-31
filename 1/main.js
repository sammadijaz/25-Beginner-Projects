const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];

const colors = ["red", "green", "gray", "purple", "blue", "orange"];

let indexCount = 0;

btn.addEventListener("click", () => {
    body.style.backgroundColor = colors[indexCount++]
    
    if (indexCount == colors.length) {
        indexCount = 0;
    }
})