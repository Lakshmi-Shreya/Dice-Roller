

document.querySelector(".btn").addEventListener("click",result);
  function result(){
    var person1=Math.floor(Math.random()*6)+1;

    var img1Src="dice"+ person1 +".png";
    document.querySelector("#img1").setAttribute("src",img1Src);
    
    var person2=Math.floor(Math.random()*6)+1;
    var img2Src="dice"+ person2 +".png";
    document.querySelector("#img2").setAttribute("src",img2Src);

    if(person1>person2){
        document.querySelector("h1").innerHTML="PLAYER 1 WINS";
    }
    else if(person2>person1){
        document.querySelector("h1").innerHTML="PLAYER 2 WINS";
    }
    else{
        document.querySelector("h1").innerHTML="GAME DRAWS";
    }
    
}

