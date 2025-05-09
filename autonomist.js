var image = document.getElementById("image")
var text = document.getElementById("text");
var foodLabel = document.getElementById("foodLabel");
var waterLabel = document.getElementById("waterLabel");
var landLabel = document.getElementById("landLabel");

var land = 0;
var food = 0;
var water = 0;
var naturals = 0;
var shelter = 0;

var settled = false;
var settled_land = "";
var waitAction = false;

lands = {
    "1": {
        "name": "Antarctica", 
        "food": 0,
        "water": 4,
        "natural_resources": 0,
        "climate": 0,
        "land": 14_000_000
    },
    "2": {
        "name": "Asia", 
        "food": 8,
        "water": 9,
        "natural_resources": 9,
        "climate": 7,
        "land": 44_579_000
    },
    "3": {
        "name": "North America", 
        "food": 7,
        "water": 8,
        "natural_resources": 7,
        "climate": 6,
        "land": 24_709_000
    },
    "4": {
        "name": "Africa", 
        "food": 9,
        "water": 8,
        "natural_resources": 9,
        "climate": 9,
        "land": 30_370_000
    },
    "5": {
        "name": "South America", 
        "food": 6,
        "water": 7,
        "natural_resources": 8,
        "climate": 6,
        "land": 17_840_000
    },
    "6": {
        "name": "Oceania", 
        "food": 6,
        "water": 4,
        "natural_resources": 5,
        "climate": 5,
        "land": 8_600_000
    },
    "7": {
        "name": "Europe", 
        "food": 7,
        "water": 8,
        "natural_resources": 8,
        "climate": 6,
        "land": 10_180_000
    },
}

function tell(msg) {
    text.innerHTML = msg + "<br>" + text.innerHTML;
}

function chooseAction() {
    tell("Choose an Action. [f: Farming, w: Collect water, m: Mine natural resources, b: Build shelter]")
    waitAction = true;
}

function setFood(newFoodNumber) {
    food = newFoodNumber
    foodLabel.innerHTML = food + " food";
}

function setWater(newWaterNumber) {
    water = newWaterNumber
    waterLabel.innerHTML = water + " water";
}

function setLand(newLandNumber) {
    land = newLandNumber;
    landLabel.innerHTML = land + " km^2";
}

document.addEventListener('keydown', function(event) {
    var key = event.key;
    if (key in lands && !settled) {
        tell("Settled in " + lands[key]["name"] + ".");
        image.src = "images/farming.jpg";
        settled = true;
        settled_land = key;
        setLand(lands[settled_land]["land"])
        chooseAction();
    }
    if (key == "f" && waitAction) {
        tell("Farming...");
        setFood(food + lands[settled_land]["food"]);
        chooseAction();
    }
    if (key == "w" && waitAction) {
        tell("Collecting water...")
        setWater(water + lands[settled_land]["water"])
        chooseAction();
    }
});
