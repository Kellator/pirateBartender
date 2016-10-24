"use strict"
//app will ask a series of questions.  For each answer provided by user,
//app will chose and store a random ingredient for each type of mixer 
//all stored ingredients will be returned in the drink_page as a recipe for the drink
//app will chose random name for returned drink recipe - list of names currently located on drink_names.md
//state of the app
var state = {
	questions:[
	{
		text: "Which friend are ye drinking with tonight?",
		choices: ["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing through on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"],
	},
	{	
		text: "Do ye like yer drinks on the rocks or frozen?",
		choices: ["On the rocks, just like me ol' ship", "I'll take me grog frozen like me heart."],
	},
	{
		text: "Will ye be having a wee bit o' sweetness in your grog this evening?",
		choices: ["Aye!", "I think I'm sweet enough"],
	},
	{
		text: "Would ye like yer grog with a salty tang?",
		choices: ["Aye, I like me drinks like a like me sea!", "No! I've had quite enough bilgewater, thank you."],
	},
	{
		text: "Would you be a Son of a Biscuit Eater who be likin' 'is drinks a bit bitter?",
		choices: ["Aye, you know me well", "Bitter, aye perhaps I am, but not for me drink"],
	},
	{
		text: "Are ye a scallywag who likes a little extra booty to decorate yer drink?",
		choices: ["Aye. load 'er up!", "No! Don't you be scuttlin' me drink with your garrrrnishes!"],
	},
	],
//lists of mixer ingredients for each question 
	liquorIngredients: [
		"Swig of Rum", 
		"Shot of Tequila", 
		"Dram of Whiskey", 
		"Pour of Vodka", 
		"Spritz of Soda"
	],
	rocksOrFrozen: [
		"On the rocks",
		"Frozen"
	],
	sweetIngredients: [
		"Drop of pineapple juice", 
		"Squeeze of orange juice", 
		"Drizzle of raspberry puree swirl", 
		"Bit of coconut liqueur", 
		"Splash of sweet and sour mix"
	],
	saltyIngredients: [
		"Olive on a tiny sword", 
		"Salt-rimmed glass", 
		"Pickle brine"
	],
	bitterIngredients: [
		"Shake of bitters", 
		"Squirt of tonic", 
		"Twist of Lemon"
	],
	garnishIngredients: [
		"Wedge of lime", 
		"Slice of orange", 
		"A cherry on top", 
		"Swizzle straw"
	],

	route: "start",
	currentQuestionIndex: 0,
	mixerRandom: 0,
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
function questions(text, choices) {
	this.text = text;
	this.choices = choices;
};
//ingredients constuctor function
function ingredients(mixers) {
	this.mixers = mixers;
};
//pantry constructor function
function pantry(supplies) {
	this.supplies = supplies;
};

//functions that affect state
//start drink mixer and determine where is program user is (i.e. at start_page, questions_page, or drink_page)
function setRoute (state, route) {
	state.route = route;
};
//reset the questions and mix a new drink
function resetBartender (state) {
	state.currentQuestionIndex = 0;
	setRoute(state, "start");
};
//selects random ingredients from mixers lists
function selectMixer(state) {
	state.mixerRandom= Math.random();
};

//asks the questions and stores the answers from user
//moves through the questions and sets page_element
function nextQuestion(state) {
	state.currentQuestionIndex++;
	if (state.currentQuestionIndex === state.questions.length) {
		setRoute(state, "drink");
	}
	else {
		setRoute(state, "question");
	}
};

//render functions
//renderApp defaults to hide all routes and shows only the current route
function renderApp(state, elements) {
	object.keys(elements).forEach(function(route) {
		elements[route].hide();
	});
	elements[state.route].show();
	if(state.route === "start") {
		renderStartPage(state, elements[state.route]);
	}
	else if (state.route === "question") {
		renderQuestionsPage(state, elements[state.route]);
	}
	else if (state.route === "drink") {
		renderDrinkPage(state, elements[state.route]);
	}
};
//renders the start_page - should be loaded in HTML
function renderStartPage() {
	setRoute(state, "start");
};
//renders the question text and the choices for user
function renderQuestionsPage() {
	renderQuestionText(state, element.find(".question_text"));
	renderChoices(state, element.find(".choices"));
};
//function renders the drink page once all questions hae been asked and answer
function renderDrinkPage(state, element) {
	var text = "Yer drink be ready.  Here's yer" + drinkName + ", ya parrot-lovin' scoundrel.  " ;
	//variables to represent all the stored mixers  - "It's made with,"+ liquorMixer, iceMixer, sweetMixer, saltyMixer, +" with a " + bitterMixer + " and a " + garnishMixer + ".";
	element.text(text);
};

//function renderQuestionText() {};  

	//write the html for the input
//function renderChoices() {};  

	//changes text to be displayed in the next question button based on whether bartender has additional questions or drink is ready to be mixed
//function renderNextButtonText(state, element) {
// 	var text = state.currentQuestionIndex < state.questions.length -1 ? "Anymore questions, bartender?" : "Ok, mix me drink already!";
// 	element.text(text);
// };



//event listeners

var page_elements = {
	"start": $(".start_page"),
	"question": $(".questions_page"),
	"drink": $(".drink_page")
};
//bartender start button listener
$("form[name='start_mixing']").submit(function(event) {
	event.preventDefault();
	setRoute(state, "question");
	renderApp(state, page_elements);
});
//reset bartender listener
$(".reset_questions").click(function(event){
	event.preventDefault();
	resetBartender(state);
	renderApp(state, page_elements);
});
//answer submit listener
$(".submit_choice").click(function(event) {
	event.preventDefault();
	nextQuestion(state);
	renderApp(state, page_elements);
});

$(function() {renderApp(state, page_elements);});