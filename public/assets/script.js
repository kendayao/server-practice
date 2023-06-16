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




