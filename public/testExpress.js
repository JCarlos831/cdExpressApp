/* global $ cities*/

$(function(){
    $.get('/cities', appendToList);
    
    function appendToList(cities){
        var list = [];
        for (var i in cities){
            list.push($('<input>', {placeholder: cities[i]}));
        }
        console.log(list);
        $('.cityList').append(list);
    }
});