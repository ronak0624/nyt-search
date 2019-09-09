var search, startYear, endYear, numRecords;

var apiKey = "woj581RvIYanR1pRdG32Uod5Vs6AcjyA";

$(".submit-button").click(function(){
    search = $(".search-input").val();
    numRecords = $(".num-records").val();
    startYear = $(".start-year").val();
    endYear = $(".end-year").val();
    var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + 
                    ""
                    "&api-key=" + yourkey;
                    
});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {


});