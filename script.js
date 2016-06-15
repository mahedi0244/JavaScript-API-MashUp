$(document).ready(function()
{
  $("#search").on("submit",function(e)
  {
    e.preventDefault();
    var formData = 
    {
      's': $('input[name=t]').val(),
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,
      dataType: "json",   
      success: function(response, callback) 
      {     
        $("#starter").html("");
        // $(".multimedia").empty();
        // $(".movie-title").empty();
        // $(".poster").empty();
        // $(".year").empty();


        for(var i = 0; i < response.Search.length; i++)
        {
          console.log(response.Search[i]);  
          var t = $("<div class='multimedia'> " + 
                    "<h2 class='movie-title'>" + response.Search[i].Title + "</h2>" +
                    "<img class='poster' src=' " + response.Search[i].Poster + "'/>" + 
                    "<h3 class='year'>Year: " + response.Search[i].Year + "</h3>" + 
                  "</div");
        $("#starter").append(t);
      }
        /*$("#multimedia").append(function()
         { 
              $("#movie-title").html("Title : "+response.Search[i].Title);   
              $("#poster").attr("src", response.Search[i].Poster);
              $("#genre").html("Genre : "+response.Genre);  
              $("#year").html("Year : "+response.Search[i].Year);
              $("#actors").html("Actors : "+response.Search[i].Actors);
              $("#plot").html("Plot : " + response.Search[i].Plot);
        })*/
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
          $("#genre").html("Genre : "+response.Genre);  
          $("#year").html("Year : "+response.Year);
          $("#actors").html("Actors : "+response.Actors);
          $("#plot").html("Plot : " + response.Plot);
        } 
      });
    //}
}