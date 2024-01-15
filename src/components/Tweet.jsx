import comment from "../assets/message.svg"
import retweet from "../assets/retweet.svg"
import react from "../assets/react.svg"
import share from "../assets/share.svg"
import groupok from "../assets/groupok.svg"

import { useState } from "react"

function showInteraction(nbreInteraction) {
    return nbreInteraction>=1000 ? <span>{parseInt(nbreInteraction/1000)} k</span> : <span>{nbreInteraction} </span> ;
}

export default function Tweet({item}) {
    const [like, setLike] = useState(item.favorites)

    const liker = ()=>(setLike(parseInt(like) + 1));
    return(
        <div className="flex justify-center pl-2 border-y border-gray-800 mr-2">
            <div className="py-2 w-12 mx-2"><img src={item.author_avatar} alt={item.source} className="size-10 rounded-full"/></div>
            <div className="py-2 w-[500px] flex flex-col gap-2">
                <span className="flex items-center flex-wrap">    
                    <strong>{item.source}</strong> {item.isVerified && <img src={groupok} alt="cnn" className="size-4"/>} <span className="text-[#6E767D]"> @ {item.source} . {item.date}</span>   
                </span>
                <p className="text-base w-[97%]">{item.text}</p>
                {item.image && <img src={item.image} alt="" className="rounded-3xl h-60 border border-y border-gray-800"/>}
                <div>
                <div className="flex text-slate-700 gap-3">
                    
                       
                    <div className="flex gap-3 "><img src={comment}/> {showInteraction(item.replies)}</div> 
                    <div className="flex gap-3 "><img src={retweet}/> {showInteraction(item.retweets)}</div> 
                    <div className="flex gap-3 "><img src={react} onClick={liker}/> {showInteraction(like)}</div> 
                    <div className="flex gap-3 "><img src={share}/> </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}