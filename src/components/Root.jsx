import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

export default function Root() {
    return <>
    <div className="invisible md:w-2/12 md:visible flex justify-center lg:w-3/12 xl:">
        <div className="w-full relative flex justify-start">
          <SideBar></SideBar>
        </div>
    </div>
    <div className="w-10/12">
        <Outlet/>
    </div>
    </>
}


