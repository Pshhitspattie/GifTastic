var topics = [
    "Shameless",
    "The Office",
    "The Good Place",
    "Broad City",
    "The Handmaid's Tale",
    "Parks and Recreation",
    "Gossip Girl",
    "Stranger Things" ];



    for(var i = 0; i < topics.length; i++) {
        var button = $("<button>").text(topics[i]);
        button.attr("data-tv", topics[i]);
        button.addClass("tv-button");
        $("#button-group").append(button);
    }
    
    
    $(document).on("click", ".tv-button", function() {
        var tv = $(this).attr("data-tv");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            tv + "&api_key=zC95o1xGUhHziFhRt7gjJ56asNrqJa1x&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            var results = response.data;
            // console.log(results);
    
           var resultsContainerSection = $("<section class='results-container'>");
    
            for(var i = 0; i < results.length; i++) {
                var singleResultDiv = $("<div class='result-container'>");
                
                var rating = results[i].rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                var tvImg = $("<img class='result'>");
               tvImg.attr("src", results[i].images.fixed_height_still.url);
                tvImg.attr("data-state", "still");
                tvImg.attr("data-still", results[i].images.fixed_height_still.url);
               tvImg.attr("data-animate", results[i].images.fixed_height.url);
    
                singleResultDiv.prepend(tvImg);
                singleResultDiv.prepend(p);
    
                resultsContainerSection.prepend(singleResultDiv);
            }
    
            $("#tv-group").prepend(resultsContainerSection);
        });
    });
    
    $(document).on("click", ".result", function() {
        var state = $(this).attr("data-state");
    
        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");


        } if (state === 'animate') {

                $(this).attr('src' , $(this).attr('data-still'));
                $(this).attr('data-still' , 'still');

            }
        })
    