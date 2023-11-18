"use client"
import {useState, useEffect} from 'react'

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals || []);
        console.log('data  '+data.message);
        
    }


    useEffect(() => {
        fetchMealIdeas();
    }, [ingredient]);


    return (
        <main className="text-xl m-1  text-red-400"> 
            <div>       
                <h1 className='text-orange-600 text-3xl mb-3'>Meal Ideas</h1>
                {meals.length > 0 ? (
                <ul>
                    <p>Meal ideas for {ingredient}:</p>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} 
                            className='p-1 m-1 max-w-sm hover:bg-orange-800 cursor-pointer'>                            
                            {meal.strMeal}                           
                        </li>
                    ))}
                </ul>) : (<p>No meal ideas found for {ingredient}</p>)
                }
            </div> 
        </main>
    )

}