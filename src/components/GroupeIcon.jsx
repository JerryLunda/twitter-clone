export default function GroupeIcon({source, text}) {
    return(
        <div className=" hover:bg-slate-50/5 rounded-3xl">
            <a href="#" className="flex gap-x-5 p-3 items-center"><img src={source} alt={text} /> <span>{text}</span></a>
            
        </div>
    )
}