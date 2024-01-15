import search from "../assets/search.svg"
import setting from "../assets/setting.svg"

import Trend from "./Trend"
import TRENDS from "../data/trends"


export default function Trends() {
    return(
        <div className="fixed flex flex-col gap-2 m-3 w-80">
          <div className="relative ">
            <label class="fixed w-80">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src={search} class="size-4"/>
              </span>
              <input class="border-none block bg-[#202327] w-full   rounded-2xl py-1.5 pl-9 pr-3  placeholder: text-gray-300/45 " placeholder="Search Twitter" type="text" name="search"/>
            </label>
          </div>
          <div className="flex flex-col bg-[#202327] mt-10 w-full rounded-2xl">
              <div className="flex justify-between w-full p-3">
                <h2>Trends for you</h2> <img src={setting} alt="setting " />
              </div>
              <div className="p-3">
                {TRENDS.map((item)=>(<Trend trend={item}></Trend>)
                  
                )}
                <a href="#" className="text-blue-600">Show more</a>
              </div>
              
          </div>
        </div>
    )
}