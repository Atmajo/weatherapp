import React from "react";
import {IoSearchOutline} from "react-icons/io5"
import o1d from '../assests/01d.png'
import humidity from '../assests/humidity.png'
import wind from '../assests/wind.png'

const App = () => {

  return (
    <div className="w-[340px] flex flex-col justify-center align-middle m-auto mt-20 bg-zinc-200 rounded-xl">
      <div className="flex gap-5 my-10 p-5 bg-green-300 rounded-lg">
        <h1 className="font-mono">WEATHER</h1>
        <div className="flex gap-2">
          <input type="text" className="font-mono border-none outline-none rounded-lg"/>
          <button>
            <IoSearchOutline className="rounded-xl"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-5 p-5 bg-green-300 rounded-lg">
        <div className="gap-5 flex">
          <div>
            <img src={o1d} alt="" />
          </div>
          <div className="py-5">
            <h1 className="text-5xl">20℃</h1>
            <p className="text-xl">Clear Sky</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div>
              <img src={humidity} alt="" />
              <div>
                
              </div>
            </div>
            <div>
             <img src={wind} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;