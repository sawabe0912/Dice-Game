let dices = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];

let button = document.getElementById("butto");
let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");


button.addEventListener("click", addWave);
button.addEventListener("click", change);

function addWave(){
    pic1.classList.add("rumble");
    pic2.classList.add("rumble");
   
    setTimeout(function(){
        pic1.classList.remove("rumble");
        pic2.classList.remove("rumble");
    },500)
    
};

function change(){
    let dice1Value = Math.floor(Math.random() * 6) + 1;
    let dice2Value = Math.floor(Math.random() * 6) + 1;
    
    let pic1Name = 'images/' + dice1Value + '.png';
    let pic2Name = 'images/' + dice2Value + '.png';

    document.getElementById("pic1").setAttribute('src', pic1Name);
    document.getElementById("pic2").setAttribute('src', pic2Name);

    if(dice1Value>dice2Value){
        document.getElementById("h3").innerHTML = "Player 1 won!!";
    }else if(dice2Value > dice1Value){
        document.getElementById("h3").innerHTML = "Player 2 won!!";
    }else{
        document.getElementById("h3").innerHTML = "Draw";
    }
}