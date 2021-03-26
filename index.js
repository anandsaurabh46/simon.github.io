
function nextLevel() {
	index = 0;
	level++;
	$("h1").text("Level "+level);
	var a = Math.ceil(Math.random()*4);
	seq.push(a);
	console.log(seq);
	setTimeout(function(){
	$("#a"+a).addClass("highlight");
	setTimeout(function() {
		$("#a"+a).removeClass("highlight");
	}, 400);
	}, 2000);
}

function verify(a) {
	$("#a"+a).addClass("highlight");
	setTimeout(function() {
		$("#a"+a).removeClass("highlight");
	}, 400);
	console.log(a);
	if(a==seq[index]) {
		index++;
		if(index==level) nextLevel();
	}
	else newGame();	
}

function newGame() {
	$("h1").text("Game over at level "+level);
	level = 0;
	index = 0;
	seq = [];
	$("button").text("Restart");
	$("button").show();
}

var level = 0;
var seq = [];
var index = 0;

$("button").on("click", function(){
	$("button").hide();
	nextLevel();
});

$("#a1").on("click", function(){

	verify(1);
});
$("#a2").on("click", function(){
	verify(2);
});
$("#a3").on("click", function(){
	verify(3);
});
$("#a4").on("click", function(){
	verify(4);
});
