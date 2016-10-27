"use strict";
var state = {
	questions: [
		//liquor
		new Question("Which friend are ye drinking with tonight?",
			["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing through on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"]),
		//ice
		new Question("Do ye like yer drinks on the rocks or frozen?",
 			["On the rocks, just like me ol' ship", "I'll take me grog frozen like me heart."]),
		//sweet
		new Question("Will ye be having a wee bit o' sweetness in your grog this evening?",
			["Aye!", "I think I'm sweet enough"]),
		//salty
		new Question("Would ye like yer grog with a salty tang?",
			["Aye, I like me drinks like a like me sea!", "No! I've had quite enough bilgewater, thank you."]),
		//bitter
		new Question("Would you be a Son of a Biscuit Eater who be likin' 'is drinks a bit bitter?",
			["Aye, you know me well", "Bitter, aye perhaps I am, but not for me drink"]),
		//garnish 
		new Question("Are ye a scallywag who likes a little extra booty to decorate yer drink?",
			["Aye. load 'er up!", "No! Don't you be scuttlin' me drink with your garrrrnishes!"]),
	],
//creates pantry and fills with ingredients for each type of mixer 
	pantry: {
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
	route: "start",
	currentQuestionIndex: 0,
	mixerRandom: 0,
	questionAnswered: false,
	drinkName: "",
	lastQuestionAsked: false
	//mixerTypes = []
	// liquorMixer: "",
	// iceMixer: "",
	// sweetMixer: "",
	// saltyMixer: "",
	// bitterMixer: "",
	// garnishMixer: ""
};

//constructor functions
console.log(state.questions.length);
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
//randomMixer for each ingredient - triggered by specific question
function renderMixerResult(state, element) {
 	var currentQuestion = state.questions[state.currentQuestionIndex];
 	var choices = currentQuestion.choices.map(function(choice,index) {
 		var text = choices[Math.floor(state.mixerRandom * choices.length)];
 		element.text(text);
 		console.log(choices.length);
 	});
};
 //- empty array to story results in?
//store results of random?  for loop? - ex:  for (var i =0l i < questions.length; i++) { mixerTypes.push(?);}
//questions not defined? 
// function storeMixers(state) {
//  	for (var i = 0; i < questions.length; i++) {
//  		mixerTypes.push(questions[i].choices);
//  	}
// };
// storeMixers();


//asks the questions and stores the answers from user
function askQuestion(state, answer) {
	var currentQuestion = state.questions[state.currentQuestionIndex];
	//any response as long as input is entered
	//state.questionAnswered = currentQuestion.questionAnswered === True;
	console.log(currentQuestionIndex);
};
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
	Object.keys(elements).forEach(function(route) {
		elements[state.route].hide();
	});
	elements[state.route].show();
	var route = state.route
	switch(route) 
	{
		case "start" : renderStartPage(state, elements[state.route]);
		break;
		case "question" : renderQuestionsPage(state,elements[state.route]);
		break;
		case "drinks" : renderDrinkPage(state, elements[state.route]);
		break;
		default: renderStartPage(state, elements[state.route]);
	}
	// if(state.route === "start") {
	// 	renderStartPage(state, elements[state.route]);
	// }
	// else if (state.route === "question") {
	// 	renderQuestionsPage(state, elements[state.route]);
	// }
	// else if (state.route === "drink") {
	// 	renderDrinkPage(state, elements[state.route]);
	// }
};
//renders the start_page
function renderStartPage(state, element) {
	setRoute(state, "start");
};
//renders the question text and the choices for user
function renderQuestionsPage(state, element) {
	renderQuestionText(state, element.find(".question_text"));
	renderChoices(state, element.find(".choices"));
	renderNextButtonText(state, element.find(".submit_choice"))
};
//function renders the drink page once all questions hae been asked and answer
function renderDrinkPage(state, element) {
	var text = "Yer drink be ready.  Here's yer" + "drinkName" + ", ya parrot-lovin' scoundrel.  "  +
	"It be made of " + "mixerTypes" + ".";//separated list?	
	element.text(text);
};

//function renders the text that appears as the questions asked by the bartender
function renderQuestionText(state, element) {
	var currentQuestionText = state.questions[state.currentQuestionIndex];
	element.text(currentQuestionText.text);
};  

//write the html for the input
function renderChoices(state, element) {
	var currentQuestion = state.questions[state.currentQuestionIndex];
	var choices = currentQuestion.choices.map(function(choice, index) {
		return (
			"<li>" +
				"<input type='radio' name='user_answer' value='" + index + "'required>" +
				"<label>" + choice + "</label></input>" +
			"</li>"
		);
	});
	element.html(choices);
};  
//changes text to be displayed in the next question button based on whether bartender has additional questions or drink is ready to be mixed
function renderNextButtonText(state, element) {
	var text = state.currentQuestionIndex < state.questions.length -1 ? "Anymore questions, bartender?" : "Ok, mix me drink already!";
 	element.text(text);
};
function displayMixedDrink(state, element) {
	var drinkName = "";

}
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
//document ready function
$(function() {renderApp(state, page_elements);});