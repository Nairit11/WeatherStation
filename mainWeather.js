//console.log("Hello");
var mainWeather = {
      init : function(){
          $("#submitWeather").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput").val() + "," + $("#countryInput").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper");
                wrapper.empty();
                wrapper.append("<div class='city'> <p><b>Place: </b>" + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data) {
//console.log("hi");
        return "<div class='pressure'> <p><b>Temperature:</b> " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>"+
                "<div class='description'> <p><b>Title:</b> " + data.weather[0].main + "</p></div>" +
                "<div class='description'> <p><b>Description:</b> " + data.weather[0].description + "</p></div>" +
                "<div class='wind'> <p><b>Wind Speed: </b>" + data.wind.speed + "</p></div>" +
                "<div class='humidity'> <p><b>Humidity:</b> " + data.main.humidity + "%</p></div>" +
                "<div class='pressure'> <p><b>Pressure: </b>" + data.main.pressure + " hpa</p></div>";
		"alert('hi');"
    }
}
//mainWeather.init();
$("#submitWeather").click(function () {
	console.log("hi");	
                    mainWeather.getWeather();
            });