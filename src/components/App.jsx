import timeline_prop from "../assets/timeline_prop.svg"
import media from "../assets/media.svg"
import gif from "../assets/gif.svg"
import emoji from "../assets/emoji.svg"
import poll from "../assets/poll.svg"
import schedule from "../assets/schedule.svg"
import profile_photo from "../images/profile_photo.png"

import tweetData from "../data/tweets"

import "../css/App.css";

import SideBar from "./SideBar";
import Twit from "./Twits"

const images = [media, gif, poll, emoji, schedule]

export default function App() {
  return (
    <div className="flex">
      <div className="w-4/12 flex justify-end">
        <SideBar></SideBar>
      </div>
      <div className="w-4/12 border-solid border-x-2 border-gray-800 ">
        <div className="flex justify-between px-3 py-2 items-center border-solid border-b-2 border-gray-800">
          <h1 className="font-bold text-xl">Home</h1> <img src={timeline_prop} alt="change theme" />
        </div>

        <div className="flex gap-x px-3 py-2 border-solid border-b-2 border-gray-800">
          <div className=" w-1/12"><img src={profile_photo} alt="profile photo" /></div>
          <div className=" w-11/12 flex flex-col">
            <textarea id="" cols="30" placeholder="What's happening?" className="mt-2 ms-2 w-11/12 bg-black text-gray-900"></textarea>
            <div className="flex justify-between   w-full px-5">
              <span className="flex justify-between gap-3">{images.map((image)=>(<img src={image} alt={image} />))}</span>
              <button type="button" className="bg-[#1D9BF0] py-1 w-20 rounded-3xl">Tweet</button>
            </div>
          </div>
        </div>

        <div>
        {tweetData.map((tweet)=>(
          <Twit item={tweet}/>
        ))}
        </div>
      </div>
      <div className="w-4/12 fixed">
       
      </div>
    </div>
  );
}
