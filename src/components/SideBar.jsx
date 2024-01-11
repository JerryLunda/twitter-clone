import GroupeIcon from "./GroupeIcon"

import twiter_bird from "../assets/twiter_bird.svg"
import home_plain from "../assets/home_plain.svg"
import group from "../assets/group.svg"
import notification from "../assets/notification.svg"
import envelop from "../assets/envelop.svg"
import book_mark from "../assets/book_mark.svg"
import burger_plain from "../assets/burger_plain.svg"
import user from "../assets/user.svg"
import more from "../assets/more.svg"

const groupeIcons = [
    {icon:twiter_bird, label:""},
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
        <div className=" w-6/12 ">
            {groupeIcons.map((item)=>(<GroupeIcon source={item["icon"]} text={item["label"]}></GroupeIcon>))}
            <button type="button" className="bg-[#1D9BF0] py-2 m-3 w-10/12 rounded-3xl">Tweet</button>
        </div>
    )       
}