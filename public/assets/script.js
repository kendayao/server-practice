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
            $("#id").text(data.name);


            pEl=$("<p>")
            pEl.text(data.role)
            $(".stats-container").append(pEl)

            pEl=$("<p>")
            pEl.text(data.age)
            $(".stats-container").append(pEl)

            pEl=$("<p>")
            pEl.text(data.forcePoints)
            $(".stats-container").append(pEl)








        }
    })
})

