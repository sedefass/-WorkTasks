var PAPER_COUNT = 3;
var COUNT_TOP_PLAYERS = 5;
var paperColected = 0;

var startTime = new Date();


function closeContainer(id){
	document.getElementById(id).style.background = "url(images/empty.png) no-repeat";
}

function allowDrop(ev) {
    ev.preventDefault();
    document.getElementById('container').style.background = "url(images/full.png) no-repeat";
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    var element = document.getElementById(data);
    element.parentNode.removeChild( element );
    paperColected++;

    if(paperColected == PAPER_COUNT){
    	var finishTime = new Date();
    	var score = finishTime - startTime;
    	var nickname = prompt("Your score is: " + score + " \nEnter your nickname:  ");
    	localStorage.setItem(nickname, score);
    	console.log(localStorage);
    }
}

function viewTopScores(){
	if(localStorage.length > 0){
		var localStorageArray = new Array();
		for (i = 0; i < localStorage.length; i++){
			localStorageArray[i] = localStorage.getItem(localStorage.key(i));
		}
	}
	var sortedArray = localStorageArray.sort();

	var topCharString = "Top Players: \n";
	for (var i = 0; i < COUNT_TOP_PLAYERS; i++) {
		for (j = 0; j< localStorage.length; j++){
			if(sortedArray[i] == localStorage.getItem(localStorage.key(j))){
				topCharString += localStorage.getItem(localStorage.key(j)) + "  " + localStorage.key(j) + '\n';
				break;
			}
		}
	}
	alert(topCharString);
}
