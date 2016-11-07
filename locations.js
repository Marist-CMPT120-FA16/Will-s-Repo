function locationCenter(){
	var message = "You are in the Center."
	updateDisplay(message);
	document.getElementById("Eastbutton").disabled = false;
	document.getElementById("Westbutton").disabled = false;
	document.getElementById("Northbutton").disabled = false;
	document.getElementById("Southbutton").disabled = false;	
	
}	


function locationGreaterSouth(){
	var message = "You are now in the Greater South."
	updateDisplay(message);
	document.getElementById("Eastbutton").disabled = true;
	document.getElementById("Westbutton").disabled = true;
	document.getElementById("Southbutton").disabled = true;
	document.getElementById("Northbutton").disabled = false;
	if (greaterSouthitem == false){
	updateDisplay("There is a Greater South item.")
	}if (visitedGreaterSouth == false){
		points += 5
		updateScore();
		visitedGreaterSouth = true;
	 }	
    
}	


function locationGreaterNorth(){
	var message = "You are now in the Greater North."
	updateDisplay(message);
	document.getElementById("Eastbutton").disabled = true;
	document.getElementById("Westbutton").disabled = true;
	document.getElementById("Southbutton").disabled = false;
	document.getElementById("Northbutton").disabled = false;
	if (greaterNorthitem == false){
	updateDisplay("There is a Greater North item.")
	}if (visitedGreaterNorth == false){
		points += 5
		updateScore();
		visitedGreaterNorth = true;
	 }
    
}


function locationWest(){
    var message = "You are now in the West."
	updateDisplay(message);
	document.getElementById("Northbutton").disabled = true;
	document.getElementById("Southbutton").disabled = true;
	document.getElementById("Eastbutton").disabled = false;
	document.getElementById("Westbutton").disabled = false;
	if (visitedWest == false){
		points += 5
		updateScore();
		visitedWest = true;
	 }
     
}

function locationEast(){
	var message = "You are now in the East."
	updateDisplay(message);
	 document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = true;
	 document.getElementById("Eastbutton").disabled = false;
	 document.getElementById("Westbutton").disabled = false;
	if (visitedEast == false){
		points += 5
		updateScore();
		visitedEast = true;
	 }	 
    
}

function locationSouth() {
		var message = "You are now in the South."
		updateDisplay(message);
	    document.getElementById("Eastbutton").disabled = true;
	     document.getElementById("Westbutton").disabled = true;
		 document.getElementById("Northbutton").disabled = false;
	     document.getElementById("Southbutton").disabled = false;
		if (visitedSouth == false){
			points += 5
			updateScore();
			visitedSouth = true;
	 }
    
}

function locationNorth(){
	 var message = "You are now in the North."
	 updateDisplay(message);
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = false;
	 document.getElementById("Southbutton").disabled = false;
	 if (visitedNorth == false){
		points += 5
		updateScore();
		visitedNorth = true;
	 }
  
}

function locationGreaterWest(){
	 var message = "You are now in the Greater West."
	 updateDisplay(message);
	 document.getElementById("Eastbutton").disabled = false;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = true;
	 if (greaterWestitem ==false){
	 updateDisplay("There is a Greater West item.")
	 }if (visitedGreaterWest == false){
		points += 5
		updateScore();
		visitedGreaterWest = true;
	 }
	 
	 
	 
	 
}


function locationGreaterEast(){
	 var message = "You are now in the Greater East."
	 updateDisplay(message);
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = false;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = true;
	 if (greaterEastitem == false){
	updateDisplay("There is a Greater East item.")
	 }if (visitedGreaterEast == false){
		points += 5
		updateScore();
		visitedGreaterEast = true;
	 }

}


function locationEvenGreaterNorth(){
	 var message = "You are now in the Even Greater North."
	 updateDisplay(message);
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = false;
	 if (visitedEvenGreaterNorth == false){
		points += 5
		updateScore();
		visitedEvenGreaterNortht = true;
	 }

	 
	 
	 }

	 function locationGreaterSouth(){
	var message = "You are now in the Greater South."
	updateDisplay(message);
	document.getElementById("Eastbutton").disabled = true;
	document.getElementById("Westbutton").disabled = true;
	document.getElementById("Southbutton").disabled = true;
	document.getElementById("Northbutton").disabled = false;
	if (greaterSouthitem == false){
	updateDisplay("There is a Greater South item.")
	}if (visitedGreaterSouth == false){
		points += 5
		updateScore();
		visitedGreaterSouth = true;
	 }	
    
}	
