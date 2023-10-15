"use client"
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    //Use JavaScript's sort function to sort the items array based on the sortBy state variable.
    //If sortBy is "name", sort the items by their name property.
    //If sortBy is "category", sort the items by their category property.
    //Hint: use the String localeCompare method to compare strings.
    const sortedItems = itemsData.sort((a, b) => 
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
             onClick={() => setSortBy("name")}>Sort by Name</button>

            <button className="bg-orange-300 p-1 m-2 w-29 hover:bg-red-300" 
             onClick={() => setSortBy("category")}>Sort by Category</button>
        </div>
        <ul>
          {sortedItems.map((item) => (
            <li key={item.id}>
              <Item name={item.name} quantity={"Buy "+item.quantity+" in "} category={item.category} />
            </li>))}
        </ul>
      </>
    )
}