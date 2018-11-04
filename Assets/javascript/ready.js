$(document).ready(renderPage);

function renderPage() {
    let appTitle = localStorage.getItem("title");
    $(".title").text(appTitle);
    let appPic = localStorage.getItem("image");
    let img = $("<img>");
    img.addClass("appPic")
    img.attr("src", appPic);
    $(".appPicture").append(img);
    let buttonCode = localStorage.getItem("code");
    let codeButton = $("<button>");
    codeButton.attr("data-code", buttonCode);
    codeButton.addClass("btn btn-outline-dark m-3 coder")
    codeButton.attr("type", "button");
    codeButton.text("View Code")
    $(".appBtn").append(codeButton);
    let buttonLink = localStorage.getItem("link");
    let linkBTN = $("<button>");
    linkBTN.attr("data-URL", buttonLink);
    linkBTN.addClass("btn btn-outline-dark m-3 hyperlink")
    linkBTN.attr("type", "button");
    linkBTN.text("Try App")
    $(".appBtn").append(linkBTN);
    let appDescript = localStorage.getItem("description");
    let appDescription = $("<div>");
    appDescription.html(appDescript);
    $(".details").append(appDescription);
    let appTech = localStorage.getItem("tech");
    let appTechnology = $("<div>");
    appTechnology.html(appTech);
    $(".tech").append(appTechnology);
}

