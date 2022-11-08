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
          }
          document.querySelector(".date1").innerText = moment()
            .add(1, "days")
            .format("MMM Do YY");
          document.querySelector(".temp1").innerText =
            "Temp " + data.list[0].main.temp + "F";
          document.querySelector(".wind1").innerText =
            "Wind " + data.list[0].wind.speed + "MPH";
          document.querySelector(".humidity1").innerText =
            "Humidity " + data.list[0].main.humidity + "%";
          document.querySelector(".date2").innerText = moment()
            .add(2, "days")
            .format("MMM Do YY");
          document.querySelector(".temp2").innerText =
            "Temp " + data.list[7].main.temp + "F";
          document.querySelector(".wind2").innerText =
            "Wind " + data.list[7].wind.speed + "MPH";
          document.querySelector(".humidity2").innerText =
            "Humidity " + data.list[7].main.humidity + "%";
          document.querySelector(".date3").innerText = moment()
            .add(3, "days")
            .format("MMM Do YY");
          document.querySelector(".temp3").innerText =
            "Temp " + data.list[15].main.temp + "F";
          document.querySelector(".wind3").innerText =
            "Wind " + data.list[15].wind.speed + "MPH";
          document.querySelector(".humidity3").innerText =
            "Humidity " + data.list[15].main.humidity + "%";
          document.querySelector(".date4").innerText = moment()
            .add(4, "days")
            .format("MMM Do YY");
          document.querySelector(".temp4").innerText =
            "Temp " + data.list[23].main.temp + "F";
          document.querySelector(".wind4").innerText =
            "Wind " + data.list[23].wind.speed + "MPH";
          document.querySelector(".humidity4").innerText =
            "Humidity " + data.list[23].main.humidity + "%";
          document.querySelector(".date5").innerText = moment()
            .add(5, "days")
            .format("MMM Do YY");
          document.querySelector(".temp5").innerText =
            "Temp " + data.list[31].main.temp + "F";
          document.querySelector(".wind5").innerText =
            "Wind " + data.list[31].wind.speed + "MPH";
          document.querySelector(".humidity5").innerText =
            "Humidity " + data.list[31].main.humidity + "%";
        });
    });
});
