import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {

  const [currentWeather, setCurrentWeather] = useState([]);
  const [currentLocation, setLocation] = useState([]);
  const [value, setValue] = useState("");

  const fetchWeather = (e) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=cd8ab197a16b48e595a50816231410&q=${value}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data.current);
        setLocation(data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeValue = (event) => {
    const { value } = event.target;
    setValue(value);
  }

  return(
    <div>
      <div className="h-[836px] mx-64 my-10 p-20 flex justify-center align-middle bg-zinc-300 rounded-xl">
        <div className="flex flex-col">
          <div className="w-[572px] h-[60px] bg-green-400 rounded-xl">
            <div className="flex flex-row justify-evenly text-center my-4">
              <h3 className="text-black text-2xl text-center font-normal font-['Monotxt']">
                WEATHER
              </h3>
              <form className="flex" onSubmit={fetchWeather}>
                <input
                  onChange={changeValue}
                  type="text"
                  placeholder="Search"
                  className="px-10 bg-zinc-300 rounded-[20px]  font-normal font-['Monotxt']"
                  value={value}
                />
                <button type="submit">
                  <AiOutlineSearch className="flex text-lg gap-3"/>
                </button>
              </form>
            </div>
          </div>
          <div className="w-[573px] h-[550px] my-10 py-10 bg-green-400 rounded-xl ">
            <h1 className="text-5xl font-san text-left px-5">{value? currentWeather.temp_c+"℃": "20℃"}</h1>
            
            <div className="flex px-5 flex-col py-2">
              <h1 className="text-lg">{value? currentWeather.condition.text: ""}</h1>
              <p className=" text-sm pt-2">{value? currentLocation.name +","+ currentLocation.region: ""}</p>
              <p className=" text-sm ">{value? currentLocation.tz_id: ""}</p>
            </div>

            <div className="px-5 py-5 flex justify-center gap-10">
              <div className="rounded-xl bg-gray-600 bg-opacity-50 p-10 text-center">
                <h1 className="font-bold ">UV</h1>
                <p>{value? currentWeather.uv: ""}</p>
              </div>
              <div className="rounded-xl bg-gray-600 bg-opacity-50 p-10 text-center">
                <h1 className="font-bold ">Humidity</h1>
                <p>{value? currentWeather.humidity+"%": ""}</p>
              </div>
            </div>
            <div className="px-5 py-5 flex justify-center gap-10">
              <div className="rounded-xl bg-gray-600 bg-opacity-50 p-10 text-center">
                <h1 className="font-bold ">Wind</h1>
                <p>{value? currentWeather.wind_kph+"kph":""}</p>
              </div>
              <div className="rounded-xl bg-gray-600 bg-opacity-50 p-10 text-center">
                <h1 className="font-bold ">Degree</h1>
                <p>{value? currentWeather.wind_degree: ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
