(function () {
	var generateBoxesBtn;

	function onGenerateBoxesButtonClick() {
		var contentDiv = document.getElementById("content"),
			count,
			i,
			div;

		//deletes all the previously generated boxes
		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild);
		}

		//gets the count of boxes (if no count set - an auto-value is set)
		count = (document.getElementById("tb-box-count").value || 5) | 0;

		//creates the divs with their properties
		for (i = 0; i < count; i++) {
			div = document.createElement("div");
			div.className = "colored";
			contentDiv.appendChild(div);
		}
	}
	generateBoxesBtn = document.getElementById("btn-generate-boxes");
	generateBoxesBtn.addEventListener("click", onGenerateBoxesButtonClick);
}());