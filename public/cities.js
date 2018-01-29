/* global $ cities*/
$(function(){
    $.get('/cities', appendToList);
    
    function appendToList(cities){
        var list = [];
        var content, city;
        for (var i in cities){
            city = cities[i];
            content = '<a href="/cities/'+city+'">'+city+'</a>';
            list.push($('<li>', {text: cities[i]}));
        }
        console.log(list);
        $('.cityList').append(list);
    }
    
    $('form').on('submit', function(event){
        event.preventDefault();
        var form = $(this);
        var cityData = form.serialize();
        
    $.ajax({
        type: 'POST', url: '/cities', data: cityData}).done(function(cityNameFixed){
        appendToList([cityNameFixed]);
        form.trigger('reset');
    });
    });
});