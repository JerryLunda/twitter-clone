export default function GroupeIcon({source, text}) {
    return(
        <div className="flex gap-x-5 p-3 items-center">
            <a href=""><img src={source} alt={text} /></a>
            <span>{text}</span>
        </div>
    )
}