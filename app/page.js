import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li><Link href="/week2">week2</Link></li>
          <li><Link href="/week3">week3</Link></li>
          <li><Link href="/week4">week4</Link></li>
          <li><Link href="/week5">week5</Link></li>
          <li><Link href="/week6">week6</Link></li>
        </ul>        
    </main>
  )
}
