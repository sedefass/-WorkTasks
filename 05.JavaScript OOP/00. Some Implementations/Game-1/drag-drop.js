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
} 
