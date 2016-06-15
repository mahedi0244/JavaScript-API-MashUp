$(document).ready(function()
{
  $("#search").on("submit",function(e)
  {
    e.preventDefault();
    var searchTerm = $("input[name=t]").val();
    var formData = 
    {
      's': searchTerm
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,
      dataType: "json",   
      success: function(response, callback) 
      {     
        $("#starter").html("");

        for(var i = 0; i < response.Search.length; i++)
        {
          //console.log(response.Search[i]);  
          var t = $("<div class='multimedia'> " + 
                    "<h2 class='movie-title'>" + 
                    response.Search[i].Title + "</h2>" +
                    "<img class='poster' src=' " + 
                    response.Search[i].Poster + "'/>" + 
                    "<h3 class='year'>Year: " + 
                    response.Search[i].Year + "</h3>" + 
                  "</div");
          $("#starter").append(t);
        }
      } 
    });
  });
});

function myFunction() {

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
          $("#genre").html("Genre : "+response.Genre);  
          $("#year").html("Year : "+response.Year);
          $("#actors").html("Actors : "+response.Actors);
          $("#plot").html("Plot : " + response.Plot);
        } 
      });
    //}
}
