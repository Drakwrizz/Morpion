const M1 = document.getElementById("M1");
const M2 = document.getElementById("M2");
const M3 = document.getElementById("M3");
const M4 = document.getElementById("M4");
const M5 = document.getElementById("M5");
const M6 = document.getElementById("M6");
const M7 = document.getElementById("M7");
const M8 = document.getElementById("M8");
const M9 = document.getElementById("M9");
let count;
count = 0;
let m1c;
let m2c;
let m3c;
let m4c;
let m5c;
let m6c;
let m7c;
let m8c;
let m9c;

const showmc = () => {
    console.log(m1c, m2c, m3c);
}


M1.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M1") .style = "background-color : blue";
        m1c = 1
    }
    else{
        document.getElementById("M1") .style = "background-color : red";
        m1c = 0
    }
    showmc();
        

    count++

}
M2.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M2") .style = "background-color : blue";
        m2c = 1
    }
    else{
        document.getElementById("M2") .style = "background-color : red";
        m2c = 0
    }
    showmc();
    count++

}
M3.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M3") .style = "background-color : blue";
        m3c = 1
    }
    else{
        document.getElementById("M3") .style = "background-color : red";
        m3c = 0
    }
    showmc();
    count++

}
M4.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M4") .style = "background-color : blue";
        m4c = 1
    }
    else{
        document.getElementById("M4") .style = "background-color : red";
        m4c = 0
    }
    count++

}
M5.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M5") .style = "background-color : blue";
        m5c = 1
    }
    else{
        document.getElementById("M5") .style = "background-color : red";
        m5c = 0
    }
    count++

    
}
M6.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M6") .style = "background-color : blue";
        m6c = 1
    }
    else{
        document.getElementById("M6") .style = "background-color : red";
        m6c = 0
    }
    count++

}
M7.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M7") .style = "background-color : blue";
        m7c = 1
    }
    else{
        document.getElementById("M7") .style = "background-color : red";
        m7c = 0
    }
    count++

}
M8.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M8") .style = "background-color : blue";
        m8c = 1
    }
    else{
        document.getElementById("M8") .style = "background-color : red";
        m8c = 0
    }
    count++

}
M9.onclick = () => {
    if (count%2 == 0){
        document.getElementById("M9") .style = "background-color : blue";
        m9c = 1
    }
    else{
        document.getElementById("M9") .style = "background-color : red";
        m9c = 0
    }
    count++

}



const loop = () =>
{
    if (m1c === 1 &&
        m2c === 1 &&
        m3c === 1 ){
            alert("blue win");
        }
    if (m1c === 0 &&
        m2c === 0 &&
        m3c === 0 ){
            alert("red win");
        }
    if (m4c === 1 &&
        m5c === 1 &&
        m6c === 1 ){
            alert("blue win");
        }
    if (m4c === 0 &&
        m5c === 0 &&
        m6c === 0 ){
            alert("red win");
        }
    if (m7c === 1 &&
        m8c === 1 &&
        m9c === 1 ){
            alert("blue win");
        }
    if (m7c === 0 &&
        m8c === 0 &&
        m9c === 0 ){
            alert("red win");
        }
    if (m1c === 0 &&
        m4c === 0 &&
        m7c === 0 ){
            alert("red win");
        }
    if (m1c === 1 &&
        m4c === 1 &&
        m7c === 1 ){
            alert("blue win");
        }
    if (m2c === 1 &&
        m5c === 1 &&
        m8c === 1 ){
            alert("blue win");
        } 
    if (m2c === 0 &&
        m5c === 0 &&
        m8c === 0 ){
            alert("red win");
        } 
    if (m3c === 1 &&
        m6c === 1 &&
        m9c === 1 ){
            alert("blue win");
        }
    if (m3c === 0 &&
        m6c === 0 &&
        m9c === 0 ){
            alert("red win");
        }
    if (m1c === 1 &&
        m5c === 1 &&
        m9c === 1 ){
            alert("blue win");
        }
    if (m1c === 0 &&
        m5c === 0 &&
        m9c === 0 ){
            alert("red win");
        }
    if (m3c === 0 &&
        m5c === 0 &&
        m7c === 0 ){
            alert("red win");
        }
    if (m3c === 1 &&
        m5c === 1 &&
        m7c === 1 ){
            alert("blue win");
        }
    if (count === 9){
        alert("draw")
    }
    
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);