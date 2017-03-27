
var mainWeather = {
      init : function(){
          $("#submitWeather2").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput2").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data2) {
                var wrapper2 = $("#WeatherWrapper2");
               
                wrapper2.append("<div class='city'> <p>Place: " + data2.name + ", " + data2.sys.country + "</p></div>");
                wrapper2.append(mainWeather.createWeatherWidg(data2));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data2) {
	var b=(data2.main.temp).toFixed(2) - 273.15;
        return "<div class='pressure'> <p>Temperature in "+data.name+": " + (data2.main.temp - 273.15).toFixed(2) + " C</p></div>";
                
    }
}
//mainWeather.init();
$("#submitWeather2").click(function () {
	console.log("hi");
	mainWeather.getWeather();	
                    
            });