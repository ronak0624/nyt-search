var search, startYear, endYear, numRecords;

var apiKey = "woj581RvIYanR1pRdG32Uod5Vs6AcjyA";

function newArticle(title, summary, pubDate){
    var article = $("<div>");
    article.attr("class", "card single-article");
    article.append("<h5 class='title'>" + title + "</h5>");
    article.append("<p class='summary'>" + summary + "</p>");
    article.append("<p class='pub-date'>" + pubDate + "</p>");
    $(".articles").append(article);
}

$(".submit-button").click(function () {
    // search = $(".search-input").val();
    // numRecords = $(".num-records").val();
    // startYear = $(".start-year").val();
    // endYear = $(".end-year").val();
    search = "obama"
    numRecords = 0;
    startYear = "201220101"
    endYear = "20121231"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +
        "&begin_date=" + startYear +
        "&end_year=" + endYear +
        "&api-key=" + yourkey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
    });

});