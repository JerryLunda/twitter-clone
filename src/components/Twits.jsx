import GroupeIcon from "./GroupeIcon";

import comment from "../assets/message.svg"
import retweet from "../assets/retweet.svg"
import react from "../assets/react.svg"
import share from "../assets/share.svg"
import groupok from "../assets/groupok.svg"

export default function Twit({item}) {
    const REPLIES = parseInt(parseInt(item.replies)/1000)
    const RETWEET = parseInt(parseInt(item.retweets)/1000)
    const FAVORITES = parseInt(parseInt(item.favorites)/1000)
    return(
        <div className="flex justify-center pl-2 border border-y border-gray-800">
            <div className="py-2 w-12 mx-2"><img src={item.author_avatar} alt={item.source} className="size-10 rounded-full"/></div>
            <div className="py-2 w-[500px] flex flex-col gap-2">
                <span className="flex items-center flex-wrap">    
                    <strong>{item.source}</strong> {item.isVerified && <img src={groupok} alt="cnn" className="size-4"/>} <span> @ {item.source} . {item.date}</span>   
                </span>
                <p className="text-base w-[97%]">{item.text}</p>
                {item.image && <img src={item.image} alt="" className="rounded-3xl h-60 w-11/12 border border-y border-gray-800"/>}
                <div>
                <div className="flex justify-between text-slate-700">
                    <div className="flex justify-start ">
                        {REPLIES>=1 && <GroupeIcon source={comment} text={REPLIES+"k"}></GroupeIcon>}
                        {REPLIES==0 && <GroupeIcon source={comment} text={item.replies}></GroupeIcon>}
                        {RETWEET>=1 && <GroupeIcon source={retweet} text={RETWEET+"k"}></GroupeIcon>}
                        {RETWEET==0 && <GroupeIcon source={retweet} text={item.retweets}></GroupeIcon>}
                        {FAVORITES>=1 && <GroupeIcon source={react} text={FAVORITES+"k"}></GroupeIcon>}
                        {FAVORITES==0 && <GroupeIcon source={react} text={item.favorites }></GroupeIcon>}
                        {<GroupeIcon source={share} text={""}></GroupeIcon>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}