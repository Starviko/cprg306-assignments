"use client"
import Link from 'next/link'
import { useUserAuth } from "./_utils/auth-context";

const Week8Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
    <h1 className='text-orange-600 text-4xl mb-3'>Shopping List App
    <Link className='text-xl p-2' href="/">(HomePage)</Link></h1>
    <div>
      {user ? (
        <div>
          <p className='text-lg'>Welcome, {user.displayName} ({user.email})</p>
          <button className='text-lg hover:underline' onClick={firebaseSignOut}>Sign Out</button>         
          <p className='text-lg hover:underline'><Link href="/week8/shopping-list">
            Continue To Your Shopping List</Link></p>
        </div>
      ) : (
        
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        
        
        
      )}
    </div>
    </main>
  );
};

export default Week8Page;