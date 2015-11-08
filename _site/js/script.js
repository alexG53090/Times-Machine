function loadData() {
    var $body = $('body');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    $nytElem.text("");
    var query=$('#city').val();
    function getInfo(){
      var theArticleUrl="http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+
      query+"&api-key=43efaaebb6ed9f2f4a47c0f7994a7e45:7:73398977";
      $.ajax({
        type:'GET',
        url:theArticleUrl,
        success:function(data){
          console.log("Info Retrieved!");
          console.log(data);
          $('#nytimes-header').append(" About "+query)
          for(var i=0;i<data.response.docs.length;i++){




                  $('#nytimes-articles').append(
                      "<li class='article'><h1><a href=" + data.response.docs[i].web_url+
                      "target=_blank></h1><p>" + data.response.docs[i].headline.main + "</a></p>" +
                      "<p class='snippet'>" + data.response.docs[i].snippet + "</p>" +
                      // "<p class='author'> words by:<em> "  + data.response.docs[i].byline.original + "</em></p>" +
                      "<p class='section'>Section: " +  data.response.docs[i].section_name + "</p>" +
                      "<p class='extras'> News Desk: " +  data.response.docs[i].news_desk +
                      "<p class='extras'>Publication Date: " +  data.response.docs[i].pub_date + "</p>" +
                      "<p class='extras'>Word Count: " + data.response.docs[i].word_count + "</p></li><hr class='end'>"
                      );
                    }
                  }
                });
              }
        getInfo();
    return false;
};

$(document).ready(function(){
$('#form-container').submit(loadData);
});
// loadData();


$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".header").fadeIn(300);
    } else {
        $(".header").fadeOut(300);
    }
    this.previousTop = currentTop;
});
