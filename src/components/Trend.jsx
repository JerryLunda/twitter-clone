import search from "../assets/search.svg"

export default function Trend() {
    return(
        <div className="fixed flex flex-col gap-2">
        <label class="fixed ">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={search} class=""/>
            </span>
            <input class=" placeholder: text-gray-300/45 block bg-[#202327] w-full border  rounded-2xl py-1 pl-9 pr-3 " placeholder="Search Twitter" type="text" name="search"/>
          </label>
        </div>
    )
}