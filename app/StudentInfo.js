import Link from "next/link"
export default function StudentInfo() {
    return (
        <ul className="mb-8">
            <li>Student Name: Viko Guo</li>
            <li>Course Section: CPRG 306 C</li>
            <li className="hover:underline"><Link href="https://github.com/Starviko/cprg306-assignments">My GitHub Link</Link></li>
        </ul>
    )
}