myName("Jake");

function myName(name) {
	console.log("Your name is " + name);
}




//next example
function priceOfApples(apples, price) {
	return apples * price;
};

var totalPrice = priceOfApples(11, 1.25);
console.log(totalPrice);

totalPrice = priceOfApples(5, 2.00);
console.log(totalPrice);

function rectangleArea(length, width, system) {
	console.log("Area of rectangle is " + (length * width) + system)
};

var area = rectangleArea(11, 1.25, " meters" );

//undefined because no measurement systeme is given (on porpose!)
area = rectangleArea(5, 2.00);


function order() {
	//nothing returned
}
//returns undefined
var chaos = order();
console.log(chaos);

var functionStatement = function() {
	console.log("im a function");
}
console.log(typeof functionStatement);

var functionStatement = function() {
	console.log("im a function");
}
//if you dont use () nothing will happen
functionStatement();



//IF AND SWITCH STATEMENTS
var age = 99.99;
var seniorDiscount = false;

if (age >= 50.00)
	seniorDiscount = true;
	console.log(seniorDiscount);



var topSpeed = 99.99;
var carBaptised;
var speedingTicketPrice;

if (topSpeed >= 100.00) {
	carBaptised = true;
	speedingTicketPrice = 300
}	//dont put semicolor here
else {
	carBaptised = false;
	speedingTicketPrice = 150
}
console.log(carBaptised);


var threatlevel = "yellow";
var responseTeam;

if (threatlevel == "blue")
	responseTeam = "police";
else if (threatlevel == "yellow")
	responseTeam = "SWAT";
else
	responseTeam = "police";

	console.log(responseTeam);

var threatlevel = "yellow";
var responseTeam;

var fiberIntake = "low";
var poopType;

switch (fiberIntake) {
	case "high":
	poopType = "diarrhea";
	break;    //dont forget to break!
	case "low":
	poopType = "constipation";
	break;  
	default:
	poopType = "normal";
}
console.log(poopType);

var orderType = "unknown";
var shipMethod;

switch (orderType) {
	case "business":
	case "personal":
		shipMethod = "Ups Ground";
		break;
	default:    //if there is no default javascript returns undefined
		shipMethod = "USPS";  
}
console.log(shipMethod);

var soldiers = 63
var archers;

switch(true) {
	case soldiers >= 50 && soldiers < 75:
	archers = 10;
	break;
	case soldiers >= 75 && soldiers <100:
	archers = 20;
	break;
	case soldiers >= 100:
	archers = 30;
	break;
	default: archers = 0;
}        
        //NOTICE the true at the top...other languages usually use if/else statements for this situation
console.log(archers)


