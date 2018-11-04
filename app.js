let Applications = [{
    App: "Hangman",
    Image: "./Images/Medieval Hangman.png",
    Title: "Medieval Hangman",
    appURL: "https://andersac88.github.io/Word-Guess-Game/",
    codeURL: "https://github.com/andersac88/Word-Guess-Game"
}, {
    App: "Giftastic",
    Image: "./Images/Simpsons.png",
    Title: "Giftastic Simpsons",
    appURL: "https://andersac88.github.io/GifTastic/",
    codeURL: "https://github.com/andersac88/GifTastic/"
}, {
    App: "Trivia",
    Image: "./Images/WW2 Trivia.png",
    Title: "Medieval Trivia",
    appURL: "https://andersac88.github.io/TriviaGame/",
    codeURL: "https://github.com/andersac88/TriviaGame/"
}, {
    App: "Train Scheduler",
    Image: "./Images/TrainScheduler.png",
    Title: "Train Scheduler",
    appURL: "https://andersac88.github.io/Train-Scheduler/",
    codeURL: "https://github.com/andersac88/Train-Scheduler/"   
}];

function appList() {
    for (let i = 0; i < Applications.length; i++) {
        let a = $("<a>")
        a.html(`<h4 class='myFont'>${Applications[i].App}</h4>`)
        a.addClass("application")
        a.attr("data-title", `${Applications[i].Title}`)
        a.attr("data-URL", `${Applications[i].appURL}`)
        a.attr("data-code", `${Applications[i].codeURL}`)
        a.attr("data-image", `${Applications[i].Image}`)
        $(".app").append(a);
    }
}

function dropList() {
    for (let j = 0; j < Applications.length; j++) {
        let b = $("<a>")
        //b.attr("href", "./portfolio.html")
        b.text(`${Applications[j].App}`)
        b.addClass("dropdown-item application dropItem")
        b.attr("data-title", `${Applications[j].Title}`)
        b.attr("data-URL", `${Applications[j].appURL}`)
        b.attr("data-code", `${Applications[j].codeURL}`)
        b.attr("data-image", `${Applications[j].Image}`)
        $(".drops").append(b);
    }
}

function renderDescription() {
    let applicationTitle = $(this).attr("data-title");
    $(".title").text(applicationTitle);
}


function renderImage () {
    $(".appPicture").empty();
    console.log(this);
    let applicationPic = $(this).attr("data-image")
    let img = $("<img>");
    img.addClass("appPic")
    img.attr("src", applicationPic);
    $(".appPicture").append(img);
}

function renderCodeButton () {
    $(".appBtn").empty();
    let btnCode = $(this).attr("data-code")
    let codeBTN = $("<button>");
    codeBTN.attr("data-code", btnCode)
    codeBTN.addClass("btn btn-outline-dark m-3 coder")
    codeBTN.attr("type", "button");
    codeBTN.text("View Code")
    $(".appBtn").append(codeBTN);
}

function renderAppButton () {
    let btnURL = $(this).attr("data-URL")
    let urlBTN = $("<button>");
    urlBTN.attr("data-URL", btnURL)
    urlBTN.attr("type", "button");
    urlBTN.addClass("btn btn-outline-dark m-3 hyperlink")
    urlBTN.text("Try App")
    $(".appBtn").append(urlBTN);
}


appList();
dropList();
$(document).on("click", ".application", renderImage);
$(document).on("click", ".application", renderDescription);
$(document).on("click", ".application", renderCodeButton);
$(document).on("click", ".application", renderAppButton);
$(document).on("click", ".hyperlink", function(){
    window.location=($(this).attr("data-URL"))
})
$(document).on("click", ".coder", function(){
    window.location=($(this).attr("data-code"))
})