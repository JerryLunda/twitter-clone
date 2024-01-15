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

const ICON_LABEL = [
    {icon:logo, label:""},
    {icon:home_plain, label:"Home"},
    {icon:group, label:"Explore"},
    {icon:notification, label:"Notofications"},
    {icon:envelop, label:"Messages"},
    {icon:book_mark, label:"book_marks"},
    {icon:burger_plain, label:"Lists"},
    {icon:user, label:"Profile"},
    {icon:more, label:"More"}
]

export default function SideBar() {
    return(
        <div className="flex flex-col fixed w-4/12 items-center">
            {ICON_LABEL.map((item)=>(<IconLabel source={item["icon"]} text={item["label"]}/>))}
            <button type="button" className="bg-[#1D9BF0] py-2 w-5/12 rounded-3xl hidden lg:block">Tweet</button>
        </div>
    )       
}