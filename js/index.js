$(document).ready(function(){
  function loadData(){
    var $wikiElem = $('#wikipedia-links');
    var searchStr = $("#search").val()
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchStr+"&format=json&callback=wikiCallback";
    $wikiElem.text("");  
    $.ajax( {
      url:wikiUrl,
      dataType: 'jsonp',
    }).done(function( response ) {
      console.log(response)
      var articleList = response[1];
      var articleText = response[2];
      for (var i = 0; i < articleList.length; i++) {
       var articleStr = articleList[i];
       var articleGist = articleText[i]
       var url = 'https://en.wikipedia.org/wiki/'+articleStr;
       $wikiElem.append('<li><a href = "' + url + '"><span>'+articleStr+'</span><p>'+articleGist+'</p></a></li>');

     };
   })
    return false;
  };
  $( "#target" ).submit(loadData);
});
