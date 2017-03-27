
var mainWeather = {
      init : function(){
          $("#submitWeather2").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput4").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data4) {
                var wrapper4 = $("#WeatherWrapper4");
                
                wrapper4.append("<div class='city'> <p>Place: " + data4.name + ", " + data4.sys.country + "</p></div>");
                wrapper4.append(mainWeather.createWeatherWidg(data4));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data4) {
	var d=(data4.main.temp).toFixed(2) - 273.15;
        return "<div class='pressure'> <p>Temperature in "+data4.name+": " + (data4.main.temp - 273.15).toFixed(2) + " C</p></div>";
		
		
                
    }
}
//mainWeather.init();
$("#submitWeather2").click(function () {
	console.log("hi");
	mainWeather.getWeather();	
                    
            });