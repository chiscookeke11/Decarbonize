"use client"

import Link from "next/link";
import Button from "./Button";




export default function Navbar() {
    return (
        <nav className=" bg-red-900 py-8 w-[70%] mx-auto flex items-center justify-between gap-10 " >
            <Link href={"/"}>Logo</Link>

            <ul>
                <li className="font-pptelegraph" >List</li>
            </ul>



            <Button aria-label="download" onClick={() => alert("Clicked!")}>Download</Button>

        </nav>
    )
}