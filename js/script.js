$(function(){
  console.log('hey')
  $('.link').on('click', function(){
    $('.first').html('');
    getReddit($(this).text());
  })
getReddit('');
});

function getReddit(enter){
  var apiUrl = 'https://www.reddit.com/'+enter+'/.json';


  $.ajax({
    url: apiUrl,
    method: 'GET',
    datatype: 'json',
      data: {}
  })


  .done(function(response){
    var list = response.data.children;
    console.log('success', response);
    for (var i=0; i<list.length; i++) {
    var pic = list[i].data.thumbnail;
    var url = list[i].data.url;
    var title = list[i].data.title;
    var author = list[i].data.author
    $('.first').append('<img height="150px" width="150px alt="no-pic" src="'+pic+'"/>');
    $('.first').append('<p class="title">"'+title+'"</p>');
    $('.first').append('<p class="author">"'+author+'"</p>');
    $('.first').append('<p><a href="'+url+'"/></p>');
  }
})

  .fail(function(error){
    console.log('error', error);
  })
  .always(function(){
    console.log("I always work!");
  });
}
