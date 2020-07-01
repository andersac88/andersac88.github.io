let blogPosts = [{
    Date: "June 30, 2020",
    Text: `<p>I have never written a blog before but in light of recent events I feel compelled to write down my thoughts. I hope that this will assist in not only clearing my head, but also in reflecting on my perception of the world that surrounds me... I also hope that this doesn't end up as another webpage dedicated to unintelligible rantings. Let's begin...</p>
    <p>I consider the reluctance to wear face masks to be one of the most absurd happenings in this eternity that is 2020.</p>
    <p>Facts and science aside, basic common sense should be enough to convince someone that masks are beneficial in the fight against a global pandemic.</p>
    <p>I understand that they are uncomfortable but that seems like a small sacrifice if it could in anyway contribute to preventing a needless death. I happened across a posting recently that worded my thoughts quite succinctly... "if the experts are right, wearing a mask could aid in preventing the spread of a deadly contagion. If the experts are wrong, you are wearing a piece of fabric across your face." Honestly, how has this become a discussion? </p></p>
    <p>As for the ludicrous argument that masks are somehow an infringement of one's freedoms, the Supreme Court has already ruled that “liberty” under the Constitution does not give individuals the right to make decisions about their own health in instances when those decisions could endanger others.</p>
    <p>I find solace in the fact that the majority think as I do on this subject. While I am also I live in a State, Illinois, who's response to COVID-19 has appeared effective, as of today, at "flattening the curve"</p>`
}]


function blogDrop() {
    for (let i = 0; i < blogPosts.length; i++) {
        let a = $("<a>")
        a.text(`${blogPosts[i].Date}`)
        a.addClass("dropdown-item blogPost dropItem")
        a.attr("href", "./blog.html")
        a.attr("data-date", `${blogPosts[i].Date}`)
        a.attr("data-text", `${blogPosts[i].Text}`)
        $(".blog").append(a)
}
}

function blogList() {
    for (let j = 0; j < blogPosts.length; j++) {
        let b = $("<a>")
        b.html(`<h4 class='unders myFont'>${blogPosts[j].Date}</h4>`)
        b.addClass("blogPost")
        b.attr("data-date", `${blogPosts[j].Date}`)
        b.attr("data-text", `${blogPosts[j].Text}`)
        $(".column-left").append(b);
    }
}

function renderContent(scope) {
    $(".blogs").empty();
     let blogText = $(scope).attr("data-text");
     let blogDate = $(scope).attr("data-date")
     localStorage.setItem("text", blogText);
     localStorage.setItem("date", blogDate)
     $(".date").text(blogDate);
     $(".blogs").html(blogText);
 }

blogDrop();
blogList();
$(document).on("click", ".blogPost", function(){
    let scope = this
    localStorage.clear();
    renderContent(scope);
 
}); 