let Applications = [
	{
		App: 'Hangman',
		Image: './Assets/Images/Medieval Hangman.png',
		Title: 'Medieval Hangman',
		appURL: 'https://andersac88.github.io/Word-Guess-Game/',
		codeURL: 'https://github.com/andersac88/Word-Guess-Game',
		Details:
			'<p>This is your standard game of hangman but with a medieval theme</p><p>Users start the game by pressing any letter key, which will be the first guess</p><p>Each subsequent key stroke will be logged as either a correct or incorrect guess</p><Correct guesses will be input into the guess word. Incorrect guesses will be logged and one will be deducted from your remaining guesses.</p><p>If you run out of guesses, you lose the round, if you guess the word you win.</p>',
		Technology: '<p>Javascript, Google Fonts, HTML and CSS</p>',
	},
	{
		App: 'Giftastic',
		Image: './Assets/Images/Simpsons.png',
		Title: 'Giftastic Simpsons',
		appURL: 'https://andersac88.github.io/GifTastic/',
		codeURL: 'https://github.com/andersac88/GifTastic/',
		Details:
			"<p>This is a program to run gifs from the Giphy API</p><p>By clicking the name of a Simpsons character in the top row 10 still images will be displayed below. If the name is double clicked, 20 images will be displayed.</p><p>If you click on one of the still images, they will become animated. If clicked again, it will freeze.</p><p>If you would like to see Gifs of a character that is not included, simply type their name in the search bar under 'Add a Character' and click submit. A button will populate above and if clicked, 10 stills will be displayed below and if double clicked, 20 stills will be displayed. As referenced above, if you click on the stills they will become animated.</p><p>To add a gif to favorites, double cick on it. To display the favorites, click on the favorites button, to remove a gif from this lists click on the image.</p>",
		Technology:
			'<p>Giphy API, jQuery, Google Fonts, Bootstrap, HTML and CSS</p>',
	},
	{
		App: 'Trivia',
		Image: './Assets/Images/WW2 Trivia.png',
		Title: 'WWII Trivia',
		appURL: 'https://andersac88.github.io/TriviaGame/',
		codeURL: 'https://github.com/andersac88/TriviaGame/',
		Details:
			'<p>This is a timed trivia game.</p><p>Users are presented with a question and four answers. They are given 15 seconds to select an answer.</p><p>If an incorrect answer is selected, the user is notified that their selection was incorrect and the correct answer will be displayed along with an image related to the correct answer. If a correct answer is selected, the user is notified that they were correct and an image related to the correct answer will be display. If the user fails to make a selection within the alloted 15 seconds, they will be notified that time has expired and the correct answer, along with an image related to the correct answer, will be displayed.</p><p>Once the user has been presented with all of the questions the game ends and the total number of correct answers, incorrect answers and unanswered questions will be displayed, along with a replay button.</p>',
		Technology: '<p>jQuery, Google Fonts, Bootstrap, HTML and CSS</p>',
	},
	{
		App: 'Train Scheduler',
		Image: './Assets/Images/TrainScheduler.png',
		Title: 'Train Scheduler',
		appURL: 'https://andersac88.github.io/Train-Scheduler/',
		codeURL: 'https://github.com/andersac88/Train-Scheduler/',
		Details:
			"<p>This application is a fictional train scheduling app</p><p>You input a 'Train Name', a 'Destination', the time of the first train and their frequency. The app will then output when the next tain will arrive and how many minutes that is from the current time, which is displayed in the Jumbotron.</p><p>Trains can also be deleted by clicking the respective Delete button.</p>",
		Technology:
			'<p>Firebase, moment JS, Google Fonts, CSS, Bootstrap, HTML and jQuery</p>',
	},
	{
		App: 'LIRI Bot',
		Image: './Assets/Images/liribot.png',
		Title: 'Language Interpretation and Recognition Interface Bot',
		appURL: '#',
		codeURL: 'https://github.com/andersac88/LIRI_Bot',
		Details:
			'<p>This is a a command line node application that takes in specific parameters [concert-this, spotify-this-song, movie-this & do-what-it-says] and gives back information pulled from various APIs.</p>',
		Technology: '<p>jsNode, javascript, NPMs and APIs</p>',
	},
	{
		App: 'Bamazon',
		Image: './Assets/Images/Bamazon.png',
		Title: 'Bamazon - MySQL Inquirer',
		appURL: '#',
		codeURL: 'https://github.com/andersac88/Node.js-MySQL',
		Details:
			'<p>This is a MySQL based application that pulls displays data pulled from a database on the command line which users interact with using the inquirer NPM.</p>',
		Technology: '<p>jsNode, javascript, NPMs and MySQL</p>',
	},
	{
		App: 'Friend Finder',
		Image: './Assets/Images/friendfinder.png',
		Title: 'Friend Finder',
		appURL: 'https://warm-fortress-99870.herokuapp.com/',
		codeURL: 'https://github.com/andersac88/Friend_Finder',
		Details:
			'<p>This is a full-stack web application that takes user input in the form of a survey and matches you with another user by comparing survey answers.</p>',
		Technology:
			'<p>jsNode, javascript, jQuery, Bootstrap, express and Heroku</p>',
	},
	{
		App: 'Concert Buddy',
		Image: './Assets/Images/ConcertBuddy.png',
		Title: 'Concert Budddy',
		appURL: 'https://concertbuddy2.herokuapp.com',
		codeURL: 'https://github.com/andersac88/ConcertBuddy',
		Details:
			"<p>This is a full-stack web application allows users to find like-minded individuals to attend concerts with. Just search for your concert, click I'm going! and voila! You're now connected to everyone else that's also riding solo and looking for a pal. A real-time chat room is active for every event and makes connecting a breeze. </p>",
		Technology:
			'<p>Node & Express MySQL DB and Sequelize Both GET and POST routes Deployed with Heroku Passport for authentication Google Maps API SongKick API Socket.IO for chatting Handlebars Bootstrap, CSS, HTML</p>',
	},
	{
		App: 'Political Scraper',
		Image: './Assets/Images/NewsScraper.png',
		Title: 'Political Scraper',
		appURL: 'https://political-scraper.herokuapp.com/',
		codeURL: 'https://github.com/andersac88/News_Scraper',
		Details:
			'<p>Web Application that scrapes political articles from www.politicalwire.com and stores these articles on a Mongo database.</p><p>These articles are then pulled from the database and displayed so that users can comment on each article.</p>',
		Technology:
			'<p>MongoDB, Mongoose, Node, Express, Handlebars, Axios, Cheerio, Javascript, CSS, HTML, Bootstrap, Heroku</p>',
	},
	{
		App: 'Peerless Vending',
		Image: './Assets/Images/Peerless.png',
		Title: 'Peerless Vending',
		appURL: 'https://www.peerlessvending.com/',
		codeURL: 'https://github.com/andersac88/PeerlessVending',
		Details:
			'<p>React website for a small business that has a contact form which utilizes nodemailer.</p>',
		Technology:
			'<p>Nodemailer, Node, Express, Axios, Javascript, CSS, HTML, Bootstrap, Heroku</p>',
	},
];

function appList() {
	for (let i = 0; i < Applications.length; i++) {
		let a = $('<a>');
		a.html(`<h4 class='unders myFont'>${Applications[i].App}</h4>`);
		a.addClass('application');
		a.attr('data-title', `${Applications[i].Title}`);
		a.attr('data-description', `${Applications[i].Details}`);
		a.attr('data-URL', `${Applications[i].appURL}`);
		a.attr('data-tech', `${Applications[i].Technology}`);
		a.attr('data-code', `${Applications[i].codeURL}`);
		a.attr('data-image', `${Applications[i].Image}`);
		$('.app').append(a);
	}
}

function dropList() {
	for (let j = 0; j < Applications.length; j++) {
		let b = $('<a>');
		b.text(`${Applications[j].App}`);
		b.addClass('dropdown-item application dropItem');
		b.attr('href', './portfolio.html');
		b.attr('data-title', `${Applications[j].Title}`);
		b.attr('data-description', `${Applications[j].Details}`);
		b.attr('data-tech', `${Applications[j].Technology}`);
		b.attr('data-URL', `${Applications[j].appURL}`);
		b.attr('data-code', `${Applications[j].codeURL}`);
		b.attr('data-image', `${Applications[j].Image}`);
		$('.drops').append(b);
	}
}

function renderText(scope) {
	$('.tech').empty();
	$('.details').empty();
	let applicationTitle = $(scope).attr('data-title');
	localStorage.setItem('title', applicationTitle);
	$('.title').text(applicationTitle);
	let c = $('<div>');
	let applicationDescription = $(scope).attr('data-description');
	localStorage.setItem('description', applicationDescription);
	c.html(applicationDescription);
	$('.details').append(c);
	let d = $('<div>');
	let applicationTechnology = $(scope).attr('data-tech');
	localStorage.setItem('tech', applicationTechnology);
	d.html(applicationTechnology);
	$('.tech').append(d);
}

function renderImage(scope) {
	$('.appPicture').empty();
	let applicationPic = $(scope).attr('data-image');
	let img = $('<img>');
	localStorage.setItem('image', applicationPic);
	img.addClass('appPic');
	img.attr('src', applicationPic);
	$('.appPicture').append(img);
}

function renderCodeButton(scope) {
	$('.appBtn').empty();
	let btnCode = $(scope).attr('data-code');
	let codeBTN = $('<button>');
	localStorage.setItem('code', btnCode);
	codeBTN.attr('data-code', btnCode);
	codeBTN.addClass('btn btn-light m-3 coder');
	codeBTN.attr('type', 'button');
	codeBTN.text('View Code');
	$('.appBtn').append(codeBTN);
}

function renderAppButton(scope) {
	$('[data-toggle="popover"]').popover();
	let btnURL = $(scope).attr('data-URL');
	let urlBTN = $('<button>');
	localStorage.setItem('link', btnURL);
	if (btnURL === '#') {
		urlBTN.attr('data-URL', btnURL);
		urlBTN.attr('type', 'button');
		urlBTN.attr('data-toggle', 'popover');
		urlBTN.attr('data-trigger', 'focus');
		urlBTN.attr('data-placement', 'right');
		urlBTN.attr(
			'data-content',
			'This is a node based application and cannot be run through the browser.'
		);
		urlBTN.addClass('btn btn-light m-3 hyperlink');
		urlBTN.text('Try App');
		$('.appBtn').append(urlBTN);
		$('[data-toggle="popover"]').popover();
	} else {
		urlBTN.attr('data-URL', btnURL);
		urlBTN.attr('type', 'button');
		urlBTN.addClass('btn btn-light m-3 hyperlink');
		urlBTN.text('Try App');
		$('.appBtn').append(urlBTN);
	}
}

appList();
dropList();
$(document).on('click', '.application', function () {
	let scope = this;
	localStorage.clear();
	renderImage(scope);
	renderText(scope);
	renderCodeButton(scope);
	renderAppButton(scope);
});

$(document).on('click', '.hyperlink', function () {
	window.location = $(this).attr('data-URL');
});

$(document).on('click', '.coder', function () {
	window.location = $(this).attr('data-code');
});
