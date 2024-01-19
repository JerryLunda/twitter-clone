import IconLabel from "./IconLabel"

import logo from "../assets/logo.svg";
import home_plain from "../assets/home_plain.svg"
import group from "../assets/group.svg"
import notification from "../assets/notification.svg"
import envelop from "../assets/envelop.svg"
import book_mark from "../assets/book_mark.svg"
import burger_plain from "../assets/burger_plain.svg"
import user from "../assets/user.svg"
import more from "../assets/more.svg"
import { NavLink } from "react-router-dom";

const ICON_LABEL = [
    {icon:logo, label:""},
    {icon:home_plain, label:"Home"},
    {icon:group, label:"Explore"},
    {icon:notification, label:"Notifications"},
    {icon:envelop, label:"Messages"},
    {icon:book_mark, label:"Bookmarks"},
    {icon:burger_plain, label:"Lists"},
    {icon:user, label:"Profile"},
    {icon:more, label:"More"}
]

export default function SideBar() {
    return(
        <div className="flex flex-col fixed w-4/12 items-center">
            {ICON_LABEL.map((item)=>(<IconLabel source={item["icon"]} text={item["label"]}/>))}
            <NavLink to={"twits"} className="bg-[#1D9BF0] p-2 my-2 mr-3 w-4/12 rounded-3xl hidden lg:block">Tweet</NavLink>
        </div>
    )       
}