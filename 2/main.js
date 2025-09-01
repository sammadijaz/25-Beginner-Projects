const btn = document.getElementById("btn");
const span = document.getElementById("hex-code");
const body = document.getElementsByTagName("body")[0];


chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


btn.addEventListener("click", () => {
    
    
    let hexCode = "";


    for (let i = 0; i < 6; i++) {
        let indexCount = Math.floor(Math.random() * chars.length);


        hexCode += chars[indexCount];


        body.style.backgroundColor = `#${hexCode}`;
        span.innerText = hexCode;
    }
})
