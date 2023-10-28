"use client"
import Link from 'next/link'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";


export default function Home(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = (name) => {
      const removeEmoji = name.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
      const cleanName = removeEmoji.split(',')[0].trim();
      setSelectedItemName(cleanName);
      console.log(cleanName);
    };

    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };
    return (
        <main className="text-2xl font-bold m-5  text-red-400"> 
        {user && ( 
          <div>      
            <h1 className='text-orange-600 text-4xl mb-3'>Shopping List
            <Link className='text-xl p-2' href="/">(HomePage)</Link></h1>           
            <div className="flex">              
                <div className="flex-1 max-w-sm m-2">
                  <h2 className='text-orange-600 text-2xl'>Add New Item</h2>
                  <NewItem onAddItem={handleAddItem} />
                  <ItemList items={items} onItemSelect={handleItemSelect} />
                </div> 
                <div className="flex">
                  <MealIdeas ingredient={selectedItemName} />               
                </div>             
            </div>
            </div> )}
                     
        </main>
      )
}