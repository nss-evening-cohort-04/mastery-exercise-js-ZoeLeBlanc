//Define Variables
var treeHeight = document.getElementById("treeHeight");
var treeChar = document.getElementById("treeChar");
var buildTreeBtn = document.getElementById("buildTree");
var spaceTree = "";
var charTree = "";
var finalTreeHeight = "";
//Press Button
buildTreeBtn.addEventListener("click", getInputs);
//Get Inputs from the DOM
function getInputs() {
	var treeObj = {
		height: treeHeight.value * 1,
		char: treeChar.value
	}
	testInputs(treeObj);
}
// Test Inputs to make sure numbers and symbols
function testInputs(treeTest) {
	if (isNaN(treeTest.height)) {
		alert("Enter a number");
	} else if (treeTest.char === "") {
		alert("Enter a symbol");
	} else {
		buildTree(treeTest);
	}
}
// Build Tree & print to Console
function buildTree(tree) {
	finalTreeHeight = tree.height + 1;
	for (var i = 1; i < finalTreeHeight; i++) {
		spaceTree = (finalTreeHeight - 1) - i;
		charTree = (i * 2) - 1;
		console.log(" ".repeat(spaceTree) + tree.char.repeat(charTree));
	}
}
		