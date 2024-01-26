import Trends from "../components/Trends"
import { NavLink } from "react-router-dom"
import backspace from "../assets/backspace.svg"

export default function Profile() {
    return(<>
        <div className="w-10/12 flex">
            <div className="w-full flex-col md:border-solid md:border-x-2 md:border-gray-800 md:w-9/12 md:justify-center lg:w-6/12 ">
                <div className="flex items-center mx-4 gap-x-6">
                    <NavLink className="flex"><img src={backspace} alt="" className="m-auto"/></NavLink>
                    <div className="m-">
                        <h2>Jerry Lunda</h2>
                        <p className="font-thin">1 post</p>
                    </div>
                </div>

                <div className="bg-slate-600 h-48 relative">
                    <img src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.webp?s=1024x1024&w=is&k=20&c=umFtOYrvwG4HIDCAskJ5U-2ncPlSoNXETjog2YbpC10=" alt="" className="rounded-full size-28 border-solid border-2 border-black absolute top-[140px] left-5" />
                </div>
            </div>

            <div className="hidden lg:block lg:w-4/12 ">
                <div className="relative w-5/12">
                    <Trends></Trends>
                </div>
            </div>
        </div>
    </>)
}