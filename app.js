"use strict";
var state = {
	questions: [
		//liquor
		new Question("Which friend are ye drinking with tonight?",
			["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing through on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"]),
		//ice
		new Question("Do ye like yer drinks on the rocks?",
 			["On the rocks, just like me ol' ship", "I'll be takin' me grog straight-up like me mast, har har har."]),
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
		rocksOrNot: new Ingredients([
			"On the rocks"
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
	lastQuestionAsked: false,
	mixerTypes: [],
	liquorMixer: ""
	// iceMixer: "",
	// sweetMixer: "",
	// saltyMixer: "",
	// bitterMixer: "",
	// garnishMixer: ""
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
function Bartender(drink) {
	this.drink = drink;
};
//functions that affect state
//start drink mixer and determine where is program user is (i.e. at start_page, questions_page, or drink_page)
function setRoute (state, route) {
	state.route = route;
};
//reset the questions and mix a new drink
function resetBartender(state) {
	state.currentQuestionIndex = 0;
	setRoute(state, "start");
};

function logUserResponse(state, answer) {
	var currentQuestion = state.questions[state.currentQuestionIndex];
	var currentQuestionChoice =  currentQuestion.choices;
		console.log(currentQuestion);
		console.log(currentQuestionChoice[answer]);
//if answer = currentQuestionChoice[0] do randomizer function and store results to drink array
//else setRoute(question) - return nothing

};
//selects random ingredients from mixers lists
// function selectMixer(state) {
// 	state.mixerRandom= Math.random();
// 	console.log(state.mixerRandom);
// };
//randomMixer for each ingredient - triggered by specific question
//should take the mixerRandom array and choose one
function renderMixerResult(state, element) {
	var text = "mixer result";
	return text;
	console.log("mixer result");
};
function displayMixedDrink(state, element) {
	var text = "mixed drink";
	return text;
	console.log("mixed drink");
};

function chooseMixer(state, element) {
	var currentQuestion = state.questions[state.currentQuestionIndex];
	state.questionAnswered = currentQuestion.questionAnswered === True;
	mixerRandom(Ingredients);
	setRoute(state, questions_page);
};

//moves through the questions and sets page_element
function nextQuestion(state) {
	state.currentQuestionIndex++;
	if (state.currentQuestionIndex === state.questions.length) {
		setRoute(state, "drink");
	}
	else if (state.currentQuestionIndex === 0) {
		setRoute(state, "friends");
	}
	else {
		setRoute(state, "question");
	}
};

//render functions
//renderApp defaults to hide all routes and shows only the current route
function renderApp(state, elements) {
	Object.keys(elements).forEach(function(route) {
		elements[route].hide();
	});
	elements[state.route].show();

	var route = state.route
	switch(route) 
	{
		case "start" : 
			renderStartPage(state, elements[state.route]);
			break;
		case "friends" :
			renderFriendsPage(state, elements[state.route]);
			break;
		case "question" : 
			renderQuestionsPage(state, elements[state.route]);
			break;
		case "drink" : 
			renderDrinkPage(state, elements[state.route]);
			break;
		default: 
			renderStartPage(state, elements[state.route]);
	}
};
//renders different routes of state
//renders the start_page
function renderStartPage(state, element) {
	setRoute(state, "start");
};
function renderFriendsPage(state, element) {
	renderFriendText(state, element.find(".friend_question_text"));
	renderChoices(state, element.find(".choices"));
	renderNextButtonText(state, element.find(".submit_choice"));

};
//renders the question text and the choices for user
function renderQuestionsPage(state, element) {
	renderQuestionText(state, element.find(".question_text"));
	renderChoices(state, element.find(".choices"));
	renderNextButtonText(state, element.find(".submit_choice"));
};
//function renders the drink page once all questions have been asked and answer
function renderDrinkPage(state, element) {
	//var text = "Yer drink be ready.  Here's yer" + "drinkName" + ", ya parrot-lovin' scoundrel.  "  +
	//"It be made of " + liquorMixer + mixerTypes + ".";//separated list?	
	displayMixedDrink(state, element.find(".drink_name"));
	renderMixerResult(state, element.find(".drink_recipe"));
};
//provides only first question text for multiple choice user input vs true/false input
function renderFriendText(state, element) {
	var currentQuestionText = state.questions[0];
	element.text(currentQuestionText.text);
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
				"<input type='radio' name='user_answer' value='" + index + "'  required>" +
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
// function displayMixedDrink(state, element) {
// 	var drinkName = "";
// }

//event listeners
var page_elements = {
	"start": $(".start_page"),
	"friends": $(".friends_page"),
	"question": $(".questions_page"),
	"drink": $(".drink_page")
};

$(document).ready(function() {
//bartender start button listener
	$("form[name='start_mixing']").submit(function(event) {
		event.preventDefault();
		setRoute(state, "friends");
		renderApp(state, page_elements);
		console.log(page_elements);
	});
//starts yes no question series
	$("form[name='question_one']").click(function(event){
		event.preventDefault();
		setRoute(state, "questions");
		renderApp(state, page_elements);
		console.log(page_elements);
	});
	//reset bartender listener
	$(".reset_questions").click(function(event){
		event.preventDefault();
		resetBartender(state);
		renderApp(state, page_elements);
	});
	//checks user answer
	$("form[name='current_question']").submit(function(event) {
		event.preventDefault();
		var answer = $("input[name='user_answer']:checked").attr("value");
		console.log(answer);
		logUserResponse(state, answer);
		nextQuestion(state);	
		renderApp(state, page_elements);
	});
});
//document ready function - encasing events within the doc ready or having it at the end work the same
// $(function() {renderApp(state, page_elements);});