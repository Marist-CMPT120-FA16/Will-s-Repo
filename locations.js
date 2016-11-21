function locationCenter(){
	currentLocation = "center"
	document.getElementById("Eastbutton").disabled = false;
	document.getElementById("Westbutton").disabled = false;
	document.getElementById("Northbutton").disabled = false;
	document.getElementById("Southbutton").disabled = false;	
	
}	


function locationGreaterSouth(){
	document.getElementById("Eastbutton").disabled = true;
	document.getElementById("Westbutton").disabled = true;
	document.getElementById("Southbutton").disabled = false;
	document.getElementById("Northbutton").disabled = false;
	if (visitedGreaterSouth == false){
		points += 5
		updateScore();
		visitedGreaterSouth = true;
	 }	
    
}	


function locationGreaterNorth(){
	document.getElementById("Eastbutton").disabled = true;
	document.getElementById("Westbutton").disabled = true;
	document.getElementById("Southbutton").disabled = false;
	document.getElementById("Northbutton").disabled = false;
	if (visitedGreaterNorth == false){
		points += 5
		updateScore();
		visitedGreaterNorth = true;
	 }
    
}


function locationWest(){
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
	 document.getElementById("Eastbutton").disabled = false;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = true;
	 if (visitedGreaterWest == false){
		points += 5
		updateScore();
		visitedGreaterWest = true;
	 }
	 
	 
	 
	 
}


function locationGreaterEast(){
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = false;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = true;
	 if (visitedGreaterEast == false){
		points += 5
		updateScore();
		visitedGreaterEast = true;
	 }

}


function locationEvenGreaterNorth(){
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = true;
	 document.getElementById("Southbutton").disabled = false;
	 if (visitedEvenGreaterNorth == false){
		points += 5
		updateScore();
		visitedEvenGreaterNorth = true;
	 }

	 
	 
	 }

function locationEvenGreaterSouth(){
	 document.getElementById("Eastbutton").disabled = true;
	 document.getElementById("Westbutton").disabled = true;
     document.getElementById("Northbutton").disabled = false;
	 document.getElementById("Southbutton").disabled = true;
	 if (visitedEvenGreaterSouth == false){
		points += 5
		updateScore();
		visitedEvenGreaterSouth = true;
	 }
}





function item(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description; 
	this.taken = false;
	this.toString = function () {
		return this.description;
	}
}




function Location(id, name, description, item, handler) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	this.visited = false;
	this.handler = handler;
	this.toString = function () {
		return this.description;
	}

}



var inventory = new Array();



//items
var items = new Array("Greater North item", "Greater South item", "Greater East item", "Greater West item.");

var GreaterNorthitem = new item("GreaterNorthitem", "Greater North item", "There is a Greater North item.");

var GreaterSouthitem = new item("GreaterSouthitem", "Greater South item", "There is a Greater South item.");

var GreaterEastitem = new item("GreaterEastitem", "Greater East item", "There is a Greater East item.");

var GreaterWestitem = new item("GreaterWestitem", "Greater West item", "There is a Greater West item.");


//locations
var locations = new Array( "center", "north", "south", "east", "west", "greaternorth", "greatersouth", "greatereast", "greaterwest", "evengreaternorth", "evengreatersouth");

var locationCenter = new Location("center", "center", "You are in the Center." , undefined , locationCenter);

var locationNorth = new Location("north", "north", "You are in the North.", "There is a North item", locationNorth);

var locationSouth = new Location("south", "south", "You are in the South." , undefined, locationSouth);

var locationEast = new Location("east", "east", "You are in the East.", undefined, locationEast);

var locationWest = new Location("west", "west", "You are in the West.", undefined, locationWest);

var locationGreaterNorth = new Location("GreaterNorth", "GreaterNorth", "You are in the Greater North." , GreaterNorthitem , locationGreaterNorth);

var locationGreaterSouth = new Location("GreaterSouth", "GreaterSouth", "You are in the Greater South.", GreaterSouthitem, locationGreaterSouth);

var locationGreaterEast = new Location("GreaterEast", "GreaterEast", "You are in the Greater East." , GreaterEastitem, locationGreaterEast);

var locationGreaterWest = new Location("GreaterWest" , "GreaterWest", "You are in the Greater West." , GreaterWestitem, locationGreaterWest);

var locationEvenGreaterNorth = new Location("EvenGreaterNorth", "EvenGreaterNorth", "You are in the Even Greater North.", undefined, locationEvenGreaterNorth);

var locationEvenGreaterSouth = new Location("EvenGreaterSouth", "EvenGreaterSouth", "You are in the Even Greater South.", undefined, locationEvenGreaterSouth);



var locationObject = {
	"greaterNorth": locationGreaterNorth ,
	"greaterSouth": locationGreaterSouth ,
	"greaterEast": locationGreaterEast , 
	"greaterWest": locationGreaterWest ,
	"north": locationNorth ,
	"south": locationSouth ,
	"east": locationEast ,
	"west" : locationWest , 
	"evenGreaterNorth" : locationEvenGreaterNorth ,
	"evenGreaterSouth" : locationEvenGreaterSouth ,
	"center" : locationCenter 
}
