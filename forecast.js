$(document).ready(function(){
    $("#submitForecast").click(function(){
        return getForecast();
    });
});

function getForecast(){
    var city=$("#city").val();
    
    if(city!=''){
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=metric" + "&APPID=826b1bda8fb8d0616b7c55be7cf78718",
            type:"GET",
            dataType:"jsonp",
            success:function(data){
                var table='';
                var header='<h2 style="font-weight:bold; font-size:30px;">Weather forecast for '+data.city.name+', '+data.city.country+'</h2>'
                
                for(var i=0;i<data.list.length;i++){
                    
                    table+="<tr>";
                    table+="<td>"+data.list[i].dt_txt+"</td>";
                    table+="<td><img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
                    table+="<td>"+data.list[i].weather[0].main+"</td>";
                    table+="<td>"+data.list[i].weather[0].description+"</td>";
                    table+="<td>"+data.list[i].main.temp+"&deg;C</td>";
                    table+="<td>"+data.list[i].main.feels_like+"&deg;C</td>";
                    table+="<td>"+data.list[i].main.temp_min+"&deg;C</td>";
                    table+="<td>"+data.list[i].main.temp_max+"&deg;C</td>";
                    table+="<td>"+data.list[i].main.pressure+" hpa</td>"
                    table+="<td>"+data.list[i].main.humidity+"%</td>"
                    table+="<td>"+data.list[i].wind.speed+" metres/sec</td>"
                    table+="<td>"+data.list[i].wind.deg+"&deg;C</td>"
                    table+="</tr>"
                }
                $("#forecastWeather").html(table);
                $("#header").html(header);
                $("#city").val('');
                
            }
        });
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City or Days field cannot be empty</div>");
    }
}