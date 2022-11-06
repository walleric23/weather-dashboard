document.querySelector(".search-Btn").addEventListener("click", function () {
  var city = document.querySelector(".search-text").value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=443d8e5cf520868251c1f1b535dc5a64&units=imperial`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".city-name").innerText = city;
      document.querySelector(".date").innerText = moment
        .unix(data.dt)
        .format("MMM Do YY");
      document.querySelector(
        ".icon"
      ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".temp").innerText =
        "Temp " + data.main.temp + "F";
      document.querySelector(".wind").innerText =
        "Wind " + data.wind.speed + "MPH";
      document.querySelector(".humidity").innerText =
        "Humidity " + data.main.humidity + "%";
      var fivedayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=443d8e5cf520868251c1f1b535dc5a64&units=imperial`;
      fetch(fivedayURL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          for (var i = 7; i < data.list.length; i += 7) {
            var date = document.createElement("p");
            date.innerText = moment.unix(data.list[i].dt).format("MMM Do YY");
            document.querySelector(".fiveDay").appendChild(date);
          }
        });
    });
});
