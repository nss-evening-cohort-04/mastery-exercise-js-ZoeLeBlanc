var treeHeight = document.getElementById("treeHeight");
var treeChar = document.getElementById("treeChar");
var buildTreeBtn = document.getElementById("buildTree");
var treeObj = "";
var widthTree = "";
var spaceTree = "";
var finalTree = "";
var charTree = "";
function getInputs() {
	var treeObj = {
		height: treeHeight.value * 1,
		char: treeChar.value
	}
	console.log(treeObj);
	testInputs(treeObj);
}

buildTreeBtn.addEventListener("click", getInputs);

function testInputs(treeTest) {
	if (isNaN(treeTest.height)) {
		alert("Enter a number");
	} else if (treeTest.char === "") {
		alert("Enter a symbol");
	} else {
		buildTree(treeTest);
	}
}
/*var test = 1;
function testMath(value) {
	for (var i = 0; i < 100; i++){
		value += i + 2;
	}
}
console.log(testMath(test));
*/
function buildTree(value) {
	finalTree = value.char;
	//console.log("widthTree", widthTree);
	
	//for (var l = value.height; l > 0; --l) {
		//spaceTree = value.height - l;
		//console.log("spaceTree", spaceTree);
		for (var i = 0; i < value.height; i++) {
		charTree = (i * 2) - 1;
		//console.log("charTree", charTree);
		spaceTree = value.height - i;
		

	}
	console.log("finalTree", " ".repeat(spaceTree) + finalTree.repeat(charTree));
	
}
		//console.log("spaceTree", spaceTree);
		//var rowTree = spaceTree + charTree;
		//console.log("rowTree", rowTree);
		/*
		for (var k = 0; k <spaceTree * value.char; k++) {
			f
			//console.log(finalTree);
		}
		for (var j = 0; j < charTree; j++) {
			
			
		}*/
		
	//finalTree += "\n"




	/*
	for (var k = value; k > 0; k++){
		var growingTree = [spaceTree[k] + widthTree[k]];
		console.log(growingTree);
	}
	*/
	//console.log("value", value);
	//return widthTree



//var treeSpacer = 
/*
function stackLetters() {
	for (var i = 0; i < alphabetSplit.length; i++) {
		if((i+1) % 6 === 0){
			alphabetSplit.splice(i,0, " ");
		}
	}
	for (var i = 0; i <alphabetSplit.length; i ++) {
		stacker = alphabetSplit.slice(0, i);
		stackString = stacker.toString();
		console.log(stackString);
	}
}
stackLetters(alphabetSplit);

function stackLetters() {
	for (var i = 0; i < alphabetSplit.length; i++) {
		if (i%5 == 0){
			stacker += " " + alphabetSplit[i];
		} else {
			stacker += alphabetSplit[i];
		}
		stackString = stacker.toString();
		console.log(stackString);
	}
     
}
*/