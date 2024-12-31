var rand1=Math.floor(Math.random()*6)+1;
document.getElementsByClassName("image")[0].setAttribute("src","./assets/dice"+rand1+".png");
var rand2=Math.floor(Math.random()*6)+1;
document.getElementsByClassName("image")[1].setAttribute("src","./assets/dice"+rand2+".png");
if(rand1>rand2){
    document.querySelector("h1").textContent="Player1 Wins";
}else if(rand2>rand1){
    document.querySelector("h1").textContent="Player2 Wins";
}if(rand1===rand2){
    document.querySelector("h1").textContent="It's a Draw";
}

