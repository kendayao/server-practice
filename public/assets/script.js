$("#add-button").on("click", function(event){
    
    event.preventDefault();
    
    var newCharacter = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
    };

    $.post("/api/characters", newCharacter)
    .then(function(data){
        console.log(data)
    });



})



$("#search-button").on("click",function(event){

    event.preventDefault();

    var searchedCharacter = $("#character-name").val().trim();

    $.get("/api/characters/"+searchedCharacter, function(data){
        console.log(data)
        if(data){
            $("stats-container").show()
            $("#name").text(data.name);
            $(".text").empty()

            pEl=$("<p>")
            pEl.text(data.role)
            pEl.attr("class", "text")
            $(".stats-container").append(pEl)

            pEl=$("<p>")
            pEl.text(data.age)
            pEl.attr("class", "text")
            $(".stats-container").append(pEl)

            pEl=$("<p>")
            pEl.text(data.forcePoints)
            pEl.attr("class", "text")
            $(".stats-container").append(pEl)

            $("#character-name").val("")








        }
    })
})

