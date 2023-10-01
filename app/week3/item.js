
export default function Item({name, quantity, category}) {
    return (
        <div className="border border-sky-500 bg-red-100 w-full max-w-xs m-4 p-2">
            <p className=" text-orange-500">{name}</p>
            <p className="text-xl">{quantity}</p>
            <p className="font-mono text-3xl">{category}</p>
        </div>
    )
}
