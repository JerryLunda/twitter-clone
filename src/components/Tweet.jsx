import axios from "axios";
import { useState, useEffect } from "react";
import comment from "../assets/message.svg"
import retweet from "../assets/retweet.svg"
import share from "../assets/share.svg"
import groupok from "../assets/groupok.svg"
import LIKED from "../data/likes"

function showInteraction(nbreInteraction) {
    return nbreInteraction>=1000 ? <span>{parseInt(nbreInteraction/1000)} k</span> : <span>{nbreInteraction} </span> ;
}




export default function Tweet({item}) {
    const baseURL = "https://my-json-server.typicode.com/amare53/twiterdb/users/"+item.userId
    const [user, setUser] = useState(
        axios.get(baseURL)
        .then((response) => {
        setUser(response.data);
    }));

    

    
    const [like, setLike] = useState(item.like)
    const [color, setColor] = useState("https://img.icons8.com/material-outlined/24/737373/filled-like.png")

    const liker = ()=>{
        if (LIKED[0]) {
            setLike(parseInt(like)-1); 
            LIKED[0] = false;
            setColor("https://img.icons8.com/material-outlined/24/737373/filled-like.png")
            
        } else {
            setLike(parseInt(like)+1);
            LIKED[0] = true;
            setColor("https://img.icons8.com/color/48/filled-like.png" )
           
        }
            
    }

    return(
        
        
        <div className="flex justify-center pl-2 border-y border-gray-800 mr-2">
            <div className="py-2 w-12 mx-2"><img src={user.profil} alt={'author tweets'} className="size-10 rounded-full"/></div>
            <div className="py-2 w-[500px] flex flex-col gap-2">
                <span className="flex items-center flex-wrap">    
                    <strong>{user.name}</strong> {true&& <img src={groupok} alt="cnn" className="size-4"/>} <span className="text-[#6E767D]"> @ {user.username} . {"2min"}</span>   
                </span>
                <p className="text-base w-[97%]">{item.title}</p>
                <p className="text-base w-[97%]">{item.body}</p>
                {item.url && <img src={item.url} alt="" className="rounded-3xl h-60 border border-y border-gray-800"/>}
                <div>
                <div className="flex text-slate-700 gap-3">
                    
                       
                    <div className="flex gap-3 "><img src={comment}/> {showInteraction(30)}</div> 
                    <div className="flex gap-3 "><img src={retweet}/> {showInteraction(item.repost)}</div> 
                    <div className="flex gap-3 "><img src={color} className="w-5" onClick={liker}/> {showInteraction(like)}</div> 
                    <div className="flex gap-3 "><img src={share}/> </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}