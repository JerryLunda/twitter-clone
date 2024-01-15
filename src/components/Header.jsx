import media from "../assets/media.svg";
import gif from "../assets/gif.svg";
import emoji from "../assets/emoji.svg";
import poll from "../assets/poll.svg";
import schedule from "../assets/schedule.svg";
import timeline_prop from "../assets/timeline_prop.svg";
import logo from "../assets/logo.svg";

import user from "../images/user.jpeg";

export default function Header() {
  const ICON_TOP_TWEETS = [media, gif, poll, emoji, schedule];
  return (
    <div>
      <div className="flex justify-between px-3 py-2 items-center border-solid border-b-2 border-gray-800">
        <h1 className="font-bold text-xl">Home</h1>{" "}
        <img src={logo} alt="change theme" className="md:invisible" />{" "}
        <img src={timeline_prop} alt="change theme" />
      </div>
      <div className="flex gap-x px-3 py-2 border-solid border-b-2 border-gray-800">
        <div className=" w-2/12">
          <img
            src={user}
            alt="profile photo"
            className="rounded-full size-10"
          />
        </div>
        <div className=" w-10/12 flex flex-col">
          <textarea
            id=""
            cols="30"
            placeholder="What's happening?"
            className="mt-2 ms-2 w-11/12 bg-black text-gray-900"
          ></textarea>
          <div className="flex justify-between   w-full ">
            <ul className="flex gap-6 w-full">
              {ICON_TOP_TWEETS.map((icon) => (
                <li className="rounded-full hover:bg-slate-50/15 p-2">
                  <img src={icon} alt={icon} className="size-6 " />{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
