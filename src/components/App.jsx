import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import humid from "./assests/humidity.png";
import win from "./assests/wind.png";
import uv from "./assests/uv.png";
import feel from "./assests/feels.png";
import { BsFillMoonFill } from "react-icons/bs";

const App = () => {
  const api = "a0e9da674faffcda28aede6a39250e7e";

  const [darkMode, setDarkMode] = useState(false);
  const [icon, setIcon] = useState("01d");

  const humidity = document.getElementsByClassName("humidity");
  const wind = document.getElementsByClassName("wind");
  const low = document.getElementsByClassName("low");
  const feels = document.getElementsByClassName("feels");
  const temp = document.getElementsByClassName("temp");
  const type = document.getElementsByClassName("type");
  const place = document.getElementsByClassName("place");

  useEffect(() => {
    const options = {
      enableHighAccuracy: true
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.log("Geolocation not supported");
    }

    function error(GeolocationPositionError){
      console.log(GeolocationPositionError.message);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`;

      fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          setIcon(data.weather[0].icon);

          humidity[0].innerHTML = Math.ceil(data.main.humidity) + "%";
          wind[0].innerHTML = Math.ceil(data.wind.speed) + "kph";
          low[0].innerHTML = Math.ceil(data.main.temp_min) + "°";
          feels[0].innerHTML = Math.ceil(data.main.feels_like) + "°";

          temp[0].innerHTML = Math.floor(data.main.temp) + "°";
          type[0].innerHTML = data.weather[0].main;

          place[0].innerHTML = data.name;
        });
    }
  }, []);

  const search = async () => {
    const input = document.getElementsByClassName("input");
    if (input[0].value === "") {
      return 0;
    } else {
      const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&q=${input[0].value}&units=metric`;
      const response = await fetch(URL);
      const data = await response.json();

      humidity[0].innerHTML = Math.ceil(data.main.humidity) + "%";
      wind[0].innerHTML = Math.ceil(data.wind.speed) + "kph";
      low[0].innerHTML = Math.ceil(data.main.temp_min) + "°";
      feels[0].innerHTML = Math.ceil(data.main.feels_like) + "°";

      temp[0].innerHTML = Math.floor(data.main.temp) + "°";
      type[0].innerHTML = data.weather[0].main;

      place[0].innerHTML = data.name;

      setIcon(data.weather[0].icon);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-[360px] flex flex-col justify-center align-middle m-auto mt-20 shadow-2xl bg-gradient-to-bl from-green-300 to-yellow-200 rounded-xl dark:from-slate-200 dark:to-slate-400 dark:text-white select-none">
        <div className="w-[340px] m-auto">
          <div className="flex gap-7 my-10 p-5 shadow-xl bg-green-400 dark:bg-slate-500 rounded-xl">
            <li className="font-mono text-2xl list-none">
              <BsFillMoonFill
                className="cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <div className="flex gap-7">
              <input
                type="text"
                className="input font-mono dark:text-black border-none outline-none rounded-lg"
              />
              <button>
                <IoSearchOutline className="text-2xl" onClick={search} />
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-5 p-5 shadow-xl bg-green-400 dark:bg-slate-500 rounded-xl">
            <div className="gap-5 flex">
              <div>
                <img className="iconmg" src={`icons/${icon}.png`} alt="" />
              </div>
              <div className="py-5">
                <h1 className="temp text-5xl">20°</h1>
                <p className="type text-xl">Clear Sky</p>
                <p className="place text-xl">India</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-between my-5 p-5 gap-8">
                <div className="flex gap-2">
                  <img src="" alt="" />
                  <img className="h-[42px]" src={humid} alt="" />
                  <div>
                    <h1 className="humidity text-xl">51%</h1>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img className="h-[42px]" src={win} alt="" />
                  <div>
                    <h1 className="wind text-xl">18kph</h1>
                    <p>Wind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-between my-5 p-5 gap-14">
                <div className="flex gap-2">
                  <img className="h-[42px]" src={uv} alt="" />
                  <div>
                    <h1 className="low text-xl">3°</h1>
                    <p>Lowest</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img className="h-[42px]" src={feel} alt="" />
                  <div>
                    <h1 className="feels text-xl">25°</h1>
                    <p>Feels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
