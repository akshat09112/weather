$(document).ready(function(){
    $("#submitCity").click(function(){
        return getWeather();
    });
});

function getWeather(){
    var city=$("#city").val();
    if(city!=''){
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather?q=' + city +"&units=metric"+"&APPID=826b1bda8fb8d0616b7c55be7cf78718",type:"GET",dataType:"jsonp",success:function(data){
            var widget=showResults(data)
            $("#showWeather").html(widget);

            $("#city").val('');
            }
        });
    }else{
        $("#error").html("<div>City field cannot be empty</div>");
    }
}

function showResults(data){
    return "<p>Temperature: "+data.main.temp+" &deg;C</p>"+"<p>Pressure: "+data.main.pressure+"</p>"+
    "<p>Humidity: "+data.main.humidity+"</p>"+"<p>Min Temperature: "+data.main.temp_min+"</p>"+
    "<p>Max Temp: "+data.main.temp_max+"</p>"+"<p>Wind Speed: "+data.wind.speed+"</p>";
}