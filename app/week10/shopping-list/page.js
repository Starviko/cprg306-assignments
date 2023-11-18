"use client"
import Link from 'next/link'
import ItemList from './item-list'
import NewItem from './new-item'
import { useState } from "react";
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from '../_services/shopping-list-service'; 
import { useEffect } from 'react';


export default function Home(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    //Get the shopping list,Create an async function loadItems. Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. Use setItems to set the state of items to the result of getItems.
    const loadItems = async () => {
      const items = await getItems(user.uid);
      setItems(items);
    };
    //Add the useEffect hook,Add the useEffect hook to the ShoppingList component. The useEffect hook will call the loadItems function when the component is mounted. Determine what the dependencies should be for the useEffect hook.
    useEffect(() => {
      loadItems();
    }, [user]);

    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = (name) => {
      const removeEmoji = name.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
      const cleanName = removeEmoji.split(',')[0].trim();
      setSelectedItemName(cleanName);
      console.log(cleanName);
    };

    //Handle adding an item,Update the handleAddItem function to call the addItem function to add the item to the shopping list. Use user.uid as the userId parameter. Use the id returned from addItem to set the id of the new item. Use setItems to set the state of items to include the new item.
    const handleAddItem = async (newItem) => {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, data: newItem }]);
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