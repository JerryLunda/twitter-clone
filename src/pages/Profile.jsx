import Trends from "../components/Trends"
import { NavLink } from "react-router-dom"
import backspace from "../assets/backspace.svg"

export default function Profile() {
    return(<>
        <div className="w-10/12 flex">
            <div className="w-full flex-col md:border-solid md:border-x-2 md:border-gray-800 md:w-9/12 md:justify-center lg:w-6/12 ">
                <NavLink ><img src={backspace} alt="" /></NavLink>
            </div>

            <div className="hidden lg:block lg:w-4/12 ">
                <div className="relative w-5/12">
                    <Trends></Trends>
                </div>
            </div>
        </div>
    </>)
}