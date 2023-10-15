import Link from 'next/link'
import ItemList from './item-list'
export default function Home(){
    return (
        <main className="text-2xl font-bold m-5  text-red-400">         
            <h1 className='text-orange-600 text-4xl mb-3'>Shopping List
            <Link className='text-xl p-2' href="/">(HomePage)</Link></h1>
             
            <ItemList />                
        </main>
      )
}