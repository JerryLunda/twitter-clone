import error_page from "../images/error_page.png"
import { NavLink } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit py-9 self-center">
        <p className="text-4xl">Page not found</p>
        <div className="m"><img src={error_page} alt="" className="size-full mx-auto"/></div>
        <NavLink to={"home"} className="m-auto"><button type="button" className=" py-3 px-6 rounded-2xl border-solid border-2 border-white">GO HOME</button></NavLink>
    </div>
  );
}
