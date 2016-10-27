"use strict";
var state = {
	var questions = {
		liquor: new Question("Which friend are ye drinking with tonight?",
			["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing through on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"]),

		rocks: new Question("Do ye like yer drinks on the rocks or frozen?",
 			["On the rocks, just like me ol' ship", "I'll take me grog frozen like me heart."]),

		sweet: new Question("Will ye be having a wee bit o' sweetness in your grog this evening?",
			["Aye!", "I think I'm sweet enough"]),

		salty: new Question("Would ye like yer grog with a salty tang?",
			["Aye, I like me drinks like a like me sea!", "No! I've had quite enough bilgewater, thank you."]),

		bitter: new Question("Would you be a Son of a Biscuit Eater who be likin' 'is drinks a bit bitter?",
			["Aye, you know me well", "Bitter, aye perhaps I am, but not for me drink"]),

		garnish: new Question("Are ye a scallywag who likes a little extra booty to decorate yer drink?",
			["Aye. load 'er up!", "No! Don't you be scuttlin' me drink with your garrrrnishes!"]),
		}
//creates pantry and fills with ingredients for each type of mixer 
	var pantry = {
		liquorIngredients: new Ingredients([
			"Swig of Rum", 
			"Shot of Tequila", 
			"Dram of Whiskey", 
			"Pour of Vodka", 
			"Spritz of Soda"
		]),
		rocksOrFrozen: new Ingredients([
			"On the rocks",
			"Frozen"
		]),
		sweetIngredients: new Ingredients([
			"Drop of pineapple juice", 
			"Squeeze of orange juice", 
			"Drizzle of raspberry puree swirl", 
			"Bit of coconut liqueur", 
			"Splash of sweet and sour mix"
		]),
		saltyIngredients: new Ingredients([
			"Olive on a tiny sword", 
			"Salt-rimmed glass", 
			"Pickle brine"
		]),
		bitterIngredients: new Ingredients([
			"Shake of bitters", 
			"Squirt of tonic", 
			"Twist of Lemon"
		]),
		garnishIngredients: new Ingredients([
			"Wedge of lime", 
			"Slice of orange", 
			"A cherry on top", 
			"Swizzle straw"
		]),
	},
	//pantryItems: new Pantry([liquorIngredients, rocksOrFrozen, sweetIngredients, saltyIngredients, bitterIngredients, garnishIngredients]),

	route: "start",
	currentQuestionIndex: 0,
	mixerRandom: 0,
	questionAnswered: false,
	drinkName: "",
	liquorMixer: "",
	iceMixer: "",
	sweetMixer: "",
	saltyMixer: "",
	bitterMixer: "",
	garnishMixer: ""
};

//constructor functions

//questions constructor function (does this need to have index as an argument too?)
function Question(text, choices) {
	this.text = text;
	this.choices = choices;
};
//ingredients constuctor function
function Ingredients(mixers) {
	this.mixers = mixers;
};
//pantry constructor function
function Pantry(supplies) {
	this.supplies = supplies;
};

Question.prototype.ask = askQuestions;
//should show and remove question text - replace span with new question
function askQuestions() {
	$(".question").remove();
	$(".question_text").append("<span class='question'>" + this.question + "</span>");
}
function 

//function triggered with questions button (switch method?)