
var mainWeather = {
      init : function(){
          $("#submitWeather2").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput1").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data1) {
                var wrapper1 = $("#WeatherWrapper1");
                
                wrapper1.append("<div class='city'> <p>Place: " + data1.name + ", " + data1.sys.country + "</p></div>");
                wrapper1.append(mainWeather.createWeatherWidg(data1));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data1) {
	var a=(data.main.temp).toFixed(2) - 273.15;
        return "<div class='pressure'> <p>Temperature in "+data1.name+": " + (data1.main.temp - 273.15).toFixed(2) + " C</p></div>";
                
    }
}
//mainWeather.init();
$("#submitWeather2").click(function () {
	console.log("hi");
	mainWeather.getWeather();	
                    
            });