$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't'              : $('input[name=t]').val(),
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,
      dataType: "json",   
      success: function(response) {     
        console.log(response);  
        $("#movie-title").html("Title : "+response.Title);   
        $("#poster").attr("src", response.Poster);
        $("#genre").html("Genrer : "+response.Genre);  
        $("#year").html("Year : "+response.Year);
        $("#actors").html("Actors : "+response.Actors);
      } 
    });
  });
});

function myFunction() {

    var formData = {
      't'              : $('input[name=t]').val(),
    };
    //alert($( "usrinput" ).length);
    //if (document.getElementById("usrinput").length == 3){
      
      $.ajax({   
        url: "http://www.omdbapi.com/?",   
        data: formData,
        dataType: "json",   
        success: function(response) {     
          console.log(response);  
          $("#movie-title").html("Title : "+response.Title);   
          $("#poster").attr("src", response.Poster);
          $("#genre").html("Genrer : "+response.Genre);  
          $("#year").html("Year : "+response.Year);
          $("#actors").html("Actors : "+response.Actors);
        } 
      });
    //}
}
