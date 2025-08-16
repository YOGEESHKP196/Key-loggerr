let pressBox = document.getElementById("press");
let releseBox = document.getElementById("relese");

const btnOn  = document.getElementById("btnTurnon");
const btnOff = document.getElementById("btnTurnoff");

btnOn.addEventListener("click", () => {
    document.addEventListener("keydown",pressOut);
    document.addEventListener("keyup", releseOut);
    })

btnOff.addEventListener("click", () => {
    document.removeEventListener("keydown",pressOut);
    document.removeEventListener("keyup", releseOut);
     pressBox.innerHTML = ``;
     releseBox.innerHTML = ``;
    })    

    function pressOut(e){
    let key = e.key;
    pressBox.innerHTML = `<h1>key ${key} is pressed`
}
function releseOut(e){
    let key = e.key;
    releseBox.innerHTML = `<h1>key ${key} is relese</h1>`
}