import point from "../assets/point.svg"

export default function Trend({trend}) {
    return(
        <div className="py-3 w-11/12 flex flex-col">
            <div className="flex justify-between w-11/12 "><span className="font-extralight text-[#6E767D]">trend.title</span><img src={point} alt="" /></div>
            <p className="font-bold">{"#"+trend.author}</p>
            <span className="font-extralight text-[#6E767D]">{trend.tweets} Tweets</span>
        </div>
    )
}