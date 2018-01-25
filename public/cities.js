/* global $ cities*/
$(function(){
    $.get('/cities', appendToList);
    
    function appendToList(cities){
        var list = [];
        for (var i in cities){
            list.push($('<option>', {text: cities[i]}));
        }
        console.log(list);
        $('.cityList').append(list);
    }
});