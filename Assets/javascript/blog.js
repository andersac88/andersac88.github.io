let blogPosts = [{
    Date: "June 18, 2020",
    Text: "This is my first attempt at a blog post and I am not sure what to say however with everything going on in the world "
}, {
    Date: "June 18, 2020",
    Text: "This is my first attempt at a blog post and I am not sure what to say however with everything going on in the world "
}]

function blogDrop() {
    for (let i = 0; i < blogPosts.length; i++) {
        let a = $("<a>")
        a.text(`${blogPosts[i].Date}`)
        a.addClass("dropdown-item blogPost dropItem")
        a.attr("href", "./blog.html")
        a.attr("data-date", `${blogPosts[i].Title}`)
        a.attr("data-text", `${blogPosts[i].Details}`)
        $(".blog").append(a)
}

}

function renderBlog() {
    for (let j = 0; j < blogPosts.length; j++) {
        let entry = $(`<div class="row my-5">
                            <div class="col-4">${blogPosts[j].Date}</div>
                            <div class="col-8">${blogPosts[j].Text}</div>
                        </div>`)
        $(".blogs").append(entry);
        
    }

}

blogDrop();
renderBlog();