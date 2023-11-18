"use client"
import Item from "./item";
import { useState } from "react";


export default function ItemList({items, onItemSelect}) {
    const newData = items;
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = newData.sort((a, b) => 
    {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    
    return(
      <>
        <div>
          <label for="sort">Sort by: </label>
            <button className="bg-orange-300 p-1 m-2 w-29 hover:bg-red-300" 
             onClick={() => setSortBy("name")}>Name</button>

            <button className="bg-orange-300 p-1 m-2 w-29 hover:bg-red-300" 
             onClick={() => setSortBy("category")}>Category</button>
        </div>
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id} >
              <Item 
              name={item.name} 
              quantity={"Buy "+item.quantity+" in "} 
              category={item.category} 
              onSelect={() => onItemSelect(item.name)} />
            </li>))}
        </ul>
      </>
    )
}