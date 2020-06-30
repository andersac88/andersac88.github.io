    // Capture Button Click
    $(document).on("click", ".blogPost", populateBlog);

    function populateBlog () {
        let text = $(this).attr("data-text");
        let date = $(this).attr("data-date");
  
        // Clear localStorage
        //localStorage.clear();
  
        // Store all content into localStorage
        localStorage.setItem("text", text);
        localStorage.setItem("date", date);
      };
