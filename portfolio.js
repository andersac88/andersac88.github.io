    // Capture Button Click
    $(document).on("click", ".application", populatePortfolio);

    function populatePortfolio () {
        let title = $(this).attr("data-title");
        let image = $(this).attr("data-image");
        let code = $(this).attr("data-code");
        let link = $(this).attr("data-URL");

        console.log(title);
        console.log(image);
        console.log(code);
        console.log(link);

  
        // Clear localStorage
        localStorage.clear();
  
        // Store all content into localStorage
        localStorage.setItem("title", title);
        localStorage.setItem("image", image);
        localStorage.setItem("code", code);
        localStorage.setItem("link", link);
      };
  
function amendDropList () {
    $(".dropItem").attr("href", "./portfolio.html")
}
amendDropList();
    