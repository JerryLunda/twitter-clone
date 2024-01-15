import "../css/App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import TWEET_DATAS from "../data/tweets"

import Tweet from "./Tweet";
import Trends from "./Trends";
import { useState } from "react";


function App() {

  const [TWEETS, setTweet] = useState(TWEET_DATAS)

  return (
    <>
      <div className="invisible md:w-2/12 md:visible flex justify-center lg:w-3/12 xl:">
        <div className="w-full relative flex justify-start">
          <SideBar></SideBar>
        </div>
      </div>
      <div className="w-full flex-col  md:border-solid md:border-x-2 md:border-gray-800 md:w-9/12 md:justify-center lg:w-5/12 ">
        <Header></Header>
        <div>
          {TWEETS.map((data)=>(<Tweet item={data}/>))}
        </div>
        
      </div>

      <div className="hidden lg:block lg:w-4/12 ">
        <div className="relative w-5/12">
          <Trends></Trends>
        </div>
      </div>
    </>
  );
}

export default App;
