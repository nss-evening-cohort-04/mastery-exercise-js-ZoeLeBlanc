var treeHeight = document.getElementById("treeHeight");
var treeChar = document.getElementById("treeChar");
var buildTreeBtn = document.getElementById("buildTree");
var treeObj = "";
var widthTree = "";
var spaceTree = "";
var finalTreeChar = "";
var charTree = "";
var finalTreeHeight = "";

function getInputs() {
	var treeObj = {
		height: treeHeight.value * 1,
		char: treeChar.value
	}
	//console.log(treeObj.height);
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
function buildTree(tree) {
	//finalTreeChar = value.char;
	//console.log("widthTree", widthTree);
	finalTreeHeight = tree.height;
	//for (var l = value.height; l > 0; --l) {
		//spaceTree = value.height - l;
		//console.log("spaceTree", spaceTree);
	for (var i = 1; i < tree.height; i++) {
		spaceTree = (finalTreeHeight - 1) - i;
		charTree = (i * 2) - 1;
		/*
		switch (true) {	
			(i === 0):
			charTree = (i + 1)
			break;
			default:
			charTree = (i * 2) - 1;
			break;
		}
	}
}

		if (i === 0){
			charTree = (i + 1);
		} else {
			charTree = (i * 2) - 1;
		} 
		*/
		//console.log("spaceTree", spaceTree);
		//console.log("charTree", charTree);
		//console.log("charTree", charTree);
		/*var finalTreeBuild = " ".repeat(spaceTree) + tree.char.repeat(charTree) + " ".repeat(spaceTree);
		console.log(finalTreeBuild);*/
		console.log(" ".repeat(spaceTree) + tree.char.repeat(charTree));
	}
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