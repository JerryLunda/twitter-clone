import Tweet from "../components/Tweet";
import Trends from "../components/Trends";
import Header from "../components/Header";
import TWEET_DATAS from "../data/tweets"
import { useState } from "react";

export default function Home() {
    const [TWEETS, setTweet] = useState(TWEET_DATAS)

    return(
        <div className="w-12/12 flex">
            <div className="w-full flex-col  md:border-solid md:border-x-2 md:border-gray-800 md:w-9/12 md:justify-center lg:w-6/12 ">
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
        </div>
    )
}