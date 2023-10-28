"use client"
import { useState } from "react"

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert("Item added: " + name + " " + quantity + " " + category);
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return(
        <main className="flex w-full">
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
            onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input required value={name} placeholder="Item name"
                     className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    onChange={handleNameChange} />
                </div>
                <div className="flex justify-between">
                    <input required type="number" value={quantity} min={1} max={99} 
                    className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={handleQuantityChange} />
                
                    <select value={category} 
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={handleCategoryChange}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>                        
                    </select>
                </div>
                <button type="submit" class="w-full mt-4 py-2 
                px-4 bg-blue-500 text-white font-semibold rounded-lg 
                shadow-md hover:bg-blue-700 focus:outline-none 
                focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add</button>
            </form>
        </main>
    )

}