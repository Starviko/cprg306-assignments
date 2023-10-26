
export default function Item({name, quantity, category, onSelect}) {
    return (

        
        <div className="border border-sky-500 bg-red-100 w-full max-w-xs m-4 p-2 hover:bg-orange-300 cursor-pointer "
             onClick={onSelect}  >
            <p className=" text-orange-500">{name}</p>
            <p className="text-xl">{quantity+category}</p>
            
        </div>
    )
}
