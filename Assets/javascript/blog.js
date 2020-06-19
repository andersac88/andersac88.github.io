let blogPosts = [{
    Date: "June 18, 2020",
    Text: "Test"
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

blogDrop();