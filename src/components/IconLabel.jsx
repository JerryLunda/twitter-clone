export default function IconLabel({source, text}) {
    return(
        <div className="w-5/12 hover:bg-slate-50/15 rounded-3xl flex ">
            <a href="#" className="flex gap-4 p-3  "><img src={source} alt={text} /> <span className="hidden lg:inline">{text}</span></a>
            
        </div>
    )
}