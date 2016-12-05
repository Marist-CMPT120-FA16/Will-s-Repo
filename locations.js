//This is where I declare each location to be a number, so I can still refer to them as their names throughout the code. 
var CENTER = 0;
var NORTH = 1;
var SOUTH = 2;
var EAST = 3;
var WEST = 4;
var GREATERNORTH = 5;
var GREATERSOUTH = 6;
var GREATEREAST = 7;
var GREATERWEST = 8;
var EVENGREATERNORTH = 9;
var EVENGREATERSOUTH = 10;


//These functions USED to control points and button enabling/disabling however now they are blank. I decide not to remove them IF I wanted to do something with them in the future. 
function locationCenter(){
}
function locationGreaterSouth(){
}
function locationGreaterNorth(){
}
function locationWest(){
}
function locationEast(){    
}
function locationSouth() {    
}
function locationNorth(){
}
function locationGreaterWest(){ 	 
}
function locationGreaterEast(){
}
function locationEvenGreaterNorth(){	 
}
function locationEvenGreaterSouth(){
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




function Location(id, name, description, item, handler, button) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	this.visited = false;
	this.handler = handler;
	this.button = button;
	this.toString = function () {
		return this.description;
	}

}



var inventory = new Array();



//items
var items = new Array("North item", "Greater North item", "Greater South item", "Greater East item", "Greater West item.");

var Northitem = new item ("Northitem", "coffee", "Cup of coffee." )

var GreaterNorthitem = new item("GreaterNorthitem", "Xiao Long Bao.", "Xiao Long Bao wonton.");

var GreaterSouthitem = new item("GreaterSouthitem", "Milk and Cookies.", "Milk and cookies.");

var GreaterEastitem = new item("GreaterEastitem", "Hockey Stick.", "Hockey stick.");

var GreaterWestitem = new item("GreaterWestitem", "Rugby Ball.", "Rugby ball.");


//locations
var locations = new Array( "center", "north", "south", "east", "west", "greaternorth", "greatersouth", "greatereast", "greaterwest", "evengreaternorth");

var locationCenter = new Location(  CENTER , "Atlantic Ocean", "You are flying somewhere over the Atlantic." , undefined , locationCenter, [false, false, false, false]);

locationCenter.visited = true;

var locationNorth = new Location( NORTH , "Europe", "It's Europe! You make your way across the country sides and into the cities and ensure everyone gets their presents. Be careful flying close to Russian territory, they may just shoot you down. In Swedish culture, the children leave coffee for Santa to keep him awake during his journey, how thoughtful!", Northitem, locationNorth, [false, false, true, true] );

var locationSouth = new Location( SOUTH , "South America/Mexico", " You are heading through South America/Mexico. \u00a1M\u00e1s r\u00e1pido Santa! Presents for todos los ni\u00f1os are delivered."  , undefined, locationSouth, [false, false, true, true]);

var locationEast = new Location( EAST , "United States", "The United States of America! This is one of the larger undertakings of your night, you start at the Big Apple on the East coast and work your way from every suburb, to every city, gorging on cookies and milk along the way. For some reason everyone here asked for tickets to Canada on their list.", undefined, locationEast, [true, true, false, false]);

var locationWest = new Location( WEST , "North Africa", "Here we are in North Africa! You are flying over the deserts, somewhere below you a pride of lions are sleeping. You are careful not to wake them, or children as you go to Cairo, Egypt.", undefined, locationWest, [true, true, false, false]);

var locationGreaterNorth = new Location( GREATERNORTH , "Asia", "Asia! You've got a dense population to go through here, also a dense population of Xiao Long Bao wontons." , GreaterNorthitem , locationGreaterNorth, [false, false, true, true]);

var locationGreaterSouth = new Location( GREATERSOUTH, "Antartica", "No one lives here in Antartica Santa! But wait, you spot a science research station a decide to give them a visit with presents. They must have been expecting you as there are some milk and cookies. ", GreaterSouthitem, locationGreaterSouth, [false, true, true, true]);

var locationGreaterEast = new Location( GREATEREAST, "Canada", "You are in Canada, eh? Instead of food being left out, you are given a hockey stick. You also make sure to go North from here to the more sparsely populated areas." , GreaterEastitem, locationGreaterEast, [true, true, true, false]);

var locationGreaterWest = new Location( GREATERWEST, "South Africa", "You make sure every village is visited, in the country of South Africa you are given a rugby ball." , GreaterWestitem, locationGreaterWest, [true, true, false, true]);

var locationEvenGreaterNorth = new Location( EVENGREATERNORTH, "North Pole", "Congratulations Santa! Another year well done, you go to sleep content knowing you've done your job.", undefined, locationEvenGreaterNorth, [true, true, true, true]);




var locationObject = [ locationCenter, locationNorth, locationSouth, locationEast, locationWest, locationGreaterNorth, locationGreaterSouth, locationGreaterEast, locationGreaterWest, locationEvenGreaterNorth ]
