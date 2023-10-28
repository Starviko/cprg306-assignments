import StudentInfo from "../StudentInfo"
import Link from "next/link"

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
        
        <div class="z-10 max-w-5xl w-full ">
          <h1 class="text-4xl">My Shopping List</h1>
          <Link href="/">HOME</Link> 
          <div className="mt-6"><StudentInfo /></div>         
        </div> 
         
        
      </main>
    )
  }

