$(function() {

  // your code will go here
  $.ajax({
    url: "https://www.codeschool.com/users/4346082",
    contentType: "jsonp",
    success: function(response){
      response.courses.completed.forEach(element => {
        $("#badges").append('<div class="course"><h3>'+ element.title +'</h3><img src="' + element.badge + '" /><a href="'+ element.url +'" target="_blank" class="btn btn-primary"></a></div>');
      });
    }
  });
});
