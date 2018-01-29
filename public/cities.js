/* global $ cities*/
$(function(){
    $.get('/cities', appendToList);
    
    $('form').on('submit', function(event){
        event.preventDefault();
        var form = $(this);
        var cityData = form.serialize();
        
    $.ajax({
        type: 'POST', url: '/cities', data: cityData
        }).done(function(cityNameFixed){
        appendToList([cityNameFixed]);
        form.trigger('reset');
        });
    });
    
    $('.cityList').on('click', 'a[cityData]', function(event){
        if(!confirm('Are you sure?')) {
            return false;
        }
        
        var target = $(event.currentTarget);
        
        $.ajax({
            type: 'DELETE', url: '/cities/' + target.data('city')
        }).done(function() {
            target.parents('li').remove();
        });
    });
    
        function appendToList(cities){
        var list = [];
        var content, city;
        for (var i in cities){
            city = cities[i];
            content = '<a href="/cities/'+city+'">'+city+'</a>' + '<a href="#" cityData="'+city+'"><img src="delete.png"></a>';
            list.push($('<li>', {html: content}));
        }
        console.log(list);
        $('.cityList').append(list);
    }
});