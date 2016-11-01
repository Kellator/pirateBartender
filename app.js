
var state = {
	questions: [
	//liquor
		new Question("Which friend are ye drinking with tonight?",
			["I'm sailin' with the Captain", "Ah! Mi Amigo es Jose'", "Me buddy Jack and I are passing through on our way to Tennessee", "Goose is my first-mate tonight", "Have ye met me ol' lady, Shirley?"]),
		//ice
		new Question("Do ye like yer drinks chilled?",
 			["Perhaps on the rocks, just like me ol' ship. Surprise me!", "I'll be takin' me grog straight-up like me mast, har har har."]),
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
			"On the rocks",
			"Frozen",
			"Chilled"
		]),
		sweetIngredients: new Ingredients([
			"Drop of pineapple juice", 
			"Squeeze of orange juice", 
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
			"Swizzle straw"
		]),
	},
	cocktailAdjectives: ["Drunken", "Crazy", "Dirty", "Sexy", "Sissy"],
	cocktailNouns: ["Sea Dog", "Cabin boy", "Cannon ball", "Cutlass", "Siren"], 

	route: "start",

	currentQuestionIndex: 0,
	mixerRandom: 0,
	namerRandom: 0,
	drinkName: "",
	useMixer: false,
	mixerTypes: [ ],
	liquorMixer: ""
};
console.log(state.pantry.liquorIngredients.mixers[1]);
console.log(state.mixerTypes);
//access items in the pantry through above ^
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
//logs user input to questions and pushes corresponding mixer to mixerType array
function logUserResponse(state, answer) {
	var currentQuestion = state.questions[state.currentQuestionIndex];
	var currentQuestionChoice =  currentQuestion.choices;
	var index = parseInt(answer);
	var mixerIngredients = state.pantry.liquorIngredients.mixers;
	var mixerTypes = state.mixerTypes;
	console.log(mixerTypes);
	if (state.currentQuestionIndex === 0) {
		console.log(mixerIngredients[index]);
		console.log(index);
		//needs to use logged response to select index of ingredients and push to mixerTypes list.
		mixerTypes.push(mixerIngredients[index]);
		
		// switch(index)
		// {
		// 	case 0 : 
		// 		mixerTypes.push(mixer);
		// 		break;
		// 	case 1 :
		// 		mixerTypes.push(mixer);
		// 		break;
		// 	default:
		// 		console.log("stop");

		// };
	}
	else {
		//triggers randomizer function
		if (index === 0) {
			chooseMixer(state);
			useMixer = true;
			console.log(useMixer);
		}
		else if (index === 1) {
			useMixer = false;
			setRoute(state,"question");
			console.log(useMixer);
		}
	}
};
//uses math module to select random integer 0-4 for drink names
function randomNamer(state) {
	state.namerRandom = Math.floor(Math.random() * 5);
}
//uses math module to select random number for mixer - returns random integer from 0-2
function randomMixer(state) {
	state.mixerRandom = Math.floor(Math.random() * 3);
	console.log(state.mixerRandom);
};
//triggers the random number generator and selects corresponding ingredient
function chooseMixer(state, element) {
	randomMixer(Ingredients);
	setRoute(state, "question");
};
//should take the mixerRandom array and choose one
function renderMixerResult(state, element) {
	var text = "mixer result";
	return text;
	console.log("mixer result");
};
//displays name of mixed drink
function displayMixedDrink(state, element) {
	//uses namerRandom to select drinkAdjective and drinkNoun
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
		elements[route].hide();
	});
	elements[state.route].show();

	var route = state.route
	switch(route) 
	{
		case "start" : 
			renderStartPage(state, elements[state.route]);
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
//renders the question text and the choices for user
function renderQuestionsPage(state, element) {
	renderQuestionText(state, element.find(".question_text"));
	renderChoices(state, element.find(".choices"));
	renderNextButtonText(state, element.find(".submit_choice"));
};
//function renders the drink page once all questions have been asked and answer
function renderDrinkPage(state, element) {
	var text = "Yer drink be ready.  Here's yer" + "drinkName" + ", ya parrot-lovin' scoundrel.  "  +
	"It be made of " + mixerTypes + ".";//separated list?	
	displayMixedDrink(state, element.find(".drink_name"));
	renderMixerResult(state, element.find(".drink_recipe"));
	element.text(text);
	console.log(mixerTypes);
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
//  	var drinkName = "";
//  	var drinkText = ""
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
		setRoute(state, "question");
		renderApp(state, page_elements);
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
		logUserResponse(state, answer);
		nextQuestion(state);	
		renderApp(state, page_elements);
	});
});
//document ready function - encasing events within the doc ready or having it at the end work the same
// $(function() {renderApp(state, page_elements);});