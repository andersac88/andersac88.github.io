    // Capture Button Click
    $(document).on("click", ".application", populatePortfolio);

    function populatePortfolio () {
        let title = $(this).attr("data-title");
        let image = $(this).attr("data-image");
        let code = $(this).attr("data-code");
        let link = $(this).attr("data-URL");
        let descript = $(this).attr("data-description");
        let tech = $(this).attr("data-tech");

  
        // Clear localStorage
        localStorage.clear();
  
        // Store all content into localStorage
        localStorage.setItem("title", title);
        localStorage.setItem("image", image);
        localStorage.setItem("code", code);
        localStorage.setItem("link", link);
        localStorage.setItem("description", descript);
        localStorage.setItem("tech", tech);
      };
