"use client"

import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel02Icon, MenuSquareIcon } from "@hugeicons/core-free-icons"
import { useEffect, useRef, useState } from "react"
import { navLinks } from "@/public/data/navlinks"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (navRef.current) {
            setNavbarHeight(navRef.current.offsetHeight)
        }

        const handleResize = () => {
            if (navRef.current) {
                setNavbarHeight(navRef.current.offsetHeight)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <nav
            ref={navRef}
            className="py-5 px-5 w-[96%] lg:w-[70%] mx-auto flex items-center justify-between gap-10 text-[#072d2d] font-pptelegraph relative"
        >
            {/* Logo */}
            <Link href={"/"}>
                <Image src={"/logos/logo.png"} alt="logo" height={500} width={500} priority className="w-16 md:w-22.5" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex text-lg items-center justify-evenly md:gap-5 lg:gap-7 font-semibold">
                {navLinks.map((link, index) => (
                    <li key={index} className="cursor-pointer hover:text-lime-800 ">
                        <Link href={link.path} >{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Desktop button */}
            <Button
                className="font-medium text-sm md:text-lg hidden md:flex items-center justify-center"
                aria-label="download"
                onClick={() => alert("Clicked!")}
            >
                Install Extension
            </Button>

            {/* Mobile menu button */}
            <button
                aria-label={showMenu ? "close menu" : "open menu"}
                onClick={() => setShowMenu(!showMenu)}
                 className="md:hidden block cursor-pointer">
                <HugeiconsIcon
                    icon={showMenu ? Cancel02Icon : MenuSquareIcon}
                    size={20}
                    color="#072d2d"
                    strokeWidth={1.8}
                    className="w-10 h-10"
                />
            </button>



            {/* Mobile dropdown menu */}
            <div
                style={{
                    top: `${navbarHeight}px`,
                    height: showMenu ? `calc(100vh - ${navbarHeight}px)` : "0px",
                }}
                className="absolute left-0 right-0  bg-background md:hidden overflow-hidden transition-all duration-300 ease-in-out z-30"
            >
                <ul className={`flex flex-col items-center gap-10 px-6 font-semibold ${showMenu ? "py-10" : "py-0"}`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="cursor-pointer text-lg font-medium" onClick={() => setShowMenu(false)}>
                            <Link href={link.path} >{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <Button
                    className="font-medium text-lg flex items-center justify-center mx-auto"
                    aria-label="download"
                    onClick={() => alert("Clicked!")}
                >
                    Install Extension
                </Button>

            </div>
        </nav>
    )
}
