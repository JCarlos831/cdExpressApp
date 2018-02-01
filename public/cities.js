/* global $ cities*/
$(function(){
    $.get('/cities', appendToList);
    
    function appendToList(cities){
        var list = [];
        for (var i in cities){
<<<<<<< HEAD:public/cities.js
            list.push($('<option>', {text: cities[i]}));
=======
            list.push($('<li>', {text: cities[i]}));
>>>>>>> level3:public/cities.js
        }
        console.log(list);
        $('.cityList').append(list);
    }
});