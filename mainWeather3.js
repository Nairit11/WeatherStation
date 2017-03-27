
var mainWeather = {
      init : function(){
          $("#submitWeather2").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput3").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data3) {
                var wrapper3 = $("#WeatherWrapper3");
               
                wrapper3.append("<div class='city'> <p>Place: " + data3.name + ", " + data3.sys.country + "</p></div>");
                wrapper3.append(mainWeather.createWeatherWidg(data3));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data3) {
	var c=(data3.main.temp).toFixed(2) - 273.15;
        return "<div class='pressure'> <p>Temperature in "+data3.name+": " + (data3.main.temp - 273.15).toFixed(2) + " C</p></div>";
                
    }
}
//mainWeather.init();
$("#submitWeather2").click(function () {
	console.log("hi");
	mainWeather.getWeather();	
                    
            });