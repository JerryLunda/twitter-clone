import GroupeIcon from "./GroupeIcon";

import comment from "../assets/message.svg"
import retweet from "../assets/retweet.svg"
import react from "../assets/react.svg"
import share from "../assets/share.svg"
import groupok from "../assets/groupok.svg"

export default function Twit({item}) {
        
    return(
        <div className="flex justify-center pl-2 border border-y border-gray-800">
            <div className="py-2 w-12 mx-2"><img src={item.author_avatar} alt={item.source} className="w- rounded-full"/></div>
            <div className="py-2 w-[500px] flex flex-col gap-2">
                <span className="flex items-center">    
                    <strong>{item.source}</strong> {item.isVerified && <img src={groupok} alt="cnn" className="size-4"/>} <span>@{item.source}.{item.date}</span>   
                </span>
                <p className="text-base w-[97%]">{item.text}</p>
                {item.image && <img src={item.image} alt="" className="rounded-3xl w-[97%] h-60 border border-y border-gray-800"/>}
                <div>
                <div className="flex gap-x-10 text-slate-700">
                    <div className="flex gap-x-5 mx-3">
                        <GroupeIcon source={comment} text={item.replies}></GroupeIcon>
                        <GroupeIcon source={retweet} text={item.retweets}></GroupeIcon>
                        <GroupeIcon source={react} text={item.favorites}></GroupeIcon>
                        <GroupeIcon source={share} text={""}></GroupeIcon>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}