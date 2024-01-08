export default function Container({width="w-[33%]", children, color}) {
    return <section className={`${width} underline ${color}`}>{children}</section>
}