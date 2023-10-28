import React from 'react';
import NewItem from './new-item';
import Link from 'next/link';

export default function Home() {
    return(
        <main>
            <h1 className='flex text-4xl m-5 justify-center w-full'>Adding New Items </h1>
            <Link className='flex text-xl justify-center w-full' href="/">(HomePage)</Link> 
            <NewItem />
        </main>
    )
}