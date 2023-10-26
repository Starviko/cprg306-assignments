"use client"
import Link from 'next/link'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items.json";
import { useState } from "react";

export default function Home(){

    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };
    return (
        <main className="text-2xl font-bold m-5  text-red-400">         
            <h1 className='text-orange-600 text-4xl mb-3'>Shopping List
            <Link className='text-xl p-2' href="/">(HomePage)</Link></h1>
            <h2 className='text-orange-600 text-2xl'>Add New Item</h2>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />                
        </main>
      )
}