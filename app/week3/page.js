import Link from 'next/link'
import ItemList from './item-list'
export default function Home(){
    return (
        <main className="text-2xl font-bold m-5  text-red-400">         
            <h1 className='text-orange-600 text-4xl'>Shopping List</h1>
            {/* <p><Link href="../page.js">Main</Link></p> */}
            <ItemList />                
        </main>
      )
}