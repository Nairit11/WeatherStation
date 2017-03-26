//console.log("Hello");
var mainWeather = {
      init : function(){
          $("#submitWeather2").click(function () {
                    getWeather1();
		getWeather2();
		getWeather3();
		getWeather4();
            }
        );
      },
 
    getWeather1: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput1").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper2");
                wrapper.empty();
                wrapper.append("<div class='city'> <p>Place: " + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg1(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
    getWeather2: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput2").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper2");
                wrapper.empty();
                wrapper.append("<div class='city'> <p>Place: " + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg2(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
    getWeather3: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput3").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper2");
                wrapper.empty();
                wrapper.append("<div class='city'> <p>Place: " + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg3(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
    getWeather4: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput4").val() + "," + $("#countryInput1").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper2");
                wrapper.empty();
                wrapper.append("<div class='city'> <p>Place: " + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg4(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    }, 
      
       createWeatherWidg1: function (data) {
	var a=data.main.temp;
        return "<div class='pressure'> <p>Temperature at City1: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>";
                
    },
       createWeatherWidg2: function (data) {
	var b=data.main.temp;
        return "<div class='pressure'> <p>Temperature at City2: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>";
                
    },
       createWeatherWidg3: function (data) {
	var c=data.main.temp;
        return "<div class='pressure'> <p>Temperature at City3: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>";
    },
       createWeatherWidg4: function (data) {
	var d=data.main.temp;
        return "<div class='pressure'> <p>Temperature at City4: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>"+
		"<p>Average Temperature: "+(a+b+c+d).toFixed(2)+ "C</p>";
                
    }
}
//mainWeather.init();
$("#submitWeather2").click(function () {
	console.log("hi");	
                    mainWeather.getWeather1();
			mainWeather.getWeather2();
			mainWeather.getWeather3();
			mainWeather.getWeather4();
            });