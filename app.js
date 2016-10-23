"use strict"
//state of the app
var state = {
	questions:[
	{	
		text: "Do ye like yer drinks on the rocks or frozen?",
		choices: ["On the rocks, just like me ol' ship", "I'll take me grog frozen like me heart."],
	}
	{
		text: "Which friend are ye drinking with tonight?",
		choices: ["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing thorugh on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"],
	}
	{
		text: "Will ye be having a wee bit o' sweetness in your grog this evening?",
		choices: ["Aye!", "I think I'm sweet enough"],
	}
	{
		text: "Would you like your grog with a salty tang?",
		choices: ["Aye, I like me drinks like a like me sea!", "No! I've had quite enough bilgewater, thank you."],
	}
	{
		text: "Would you be a Son of a Biscuit Eater who be likin' 'is drinks a bit bitter?",
		choices: ["Aye, you know me well", "Bitter, aye perhaps I am, but not for me drink"],
	}
	{
		text: "Are ye a scallywag who likes a little extra booty to decorate yer drink?",
		choices: ["Aye. load 'er up!", "No! Don't you be scuttlin' me drink with your garrrrnishes!"],
	}
	],

	liquorIngredients: ["Swig of Rum", "Shot of Tequila", "Dram of Whiskey", "Pour of Vodka", "Spritz of Soda"],
	sweetIngredients: ["Drop of pineapple juice", "Squeeze of orange juice", "Drizzle of raspberry puree swirl", "Bit of coconut liqueur", "Splash of sweet and sour mix"],
	saltyIngredients: ["Olive on a tiny sword", "Salt-rimmed glass", "Pickle brine"],
	bitterIngredients: ["Shake of bitters", "Squirt of tonic", "Twist of Lemon"],
	garnishIngredients: ["Wedge of lime", "Slice of orange", "A cherry on top", "Swizzle straw"],

	route: "start",
	currentQuestionIndex: 0,
}

//constructor functions

//questions constructor function (does this need to have index as an argument too?)
function questions(text, choices) {
	this.text = text;
	this.choices = choices;
}
//ingredients constuctor function
function ingredients(mixers) {
	this.mixers = mixers;
}
//pantry constructor function
function pantry(supplies) {
	this.supplies = supplies;
}