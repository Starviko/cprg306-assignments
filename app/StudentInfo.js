import Link from "next/link"
export default function StudentInfo() {
    return (
        <ul>
            <li>Student Name: Viko</li>
            <li>Course Section: CPRG 306 C</li>
            <li><Link href="https://github.com/Starviko/cprg306-assignments">My GitHub Link</Link></li>
        </ul>
    )
}