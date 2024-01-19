import { NavLink } from "react-router-dom";

export default function IconLabel({source, text}) {
    return(
        <div className="w-4/12 hover:bg-slate-50/15 rounded-3xl flex ">
            <NavLink className="flex gap-4 p-3  " to={text.toLowerCase()}><img src={source} alt={text} /> <span className="hidden lg:inline">{text}</span></NavLink>
            
        </div>
    )
}