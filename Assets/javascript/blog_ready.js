$(document).ready(renderPage);

function renderPage() {
    let blogText = localStorage.getItem("text");
    let blogDate = localStorage.getItem("date");
    $(".blogs").text(blogText);
}
