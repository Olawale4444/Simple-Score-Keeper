var Button1 = document.querySelector("#p1") ;
var Button2 = document.querySelector("#p2") ;
var reset = document.querySelector("#reset");
var p1Display= document.querySelector("#p1Display");
var p2Display= document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

 var gameOver = false ;
 var winningScore = 5;

Button1.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score===winningScore){
			p1Display.classList.add("winner");

			gameOver= true ;
		} 
	p1Display.textContent= p1Score;
	}

	
}) ;

Button2.addEventListener("click", function(){
	if (!gameOver){
		p2Score++ ;
		if (p2Score=== winningScore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
	p2Display.textContent = p2Score;
	}

	
});

// reset.addEventListener("click", function(){

// // 	p1Display.textContent= 0;
// // 	p2Display.textContent= 0;
// // })

// // var x = document.querySelector("#p1");
// // x.addEventListener("click", function(){alert("hola")});

