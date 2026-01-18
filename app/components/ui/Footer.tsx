import { navLinks } from "@/public/data/navlinks";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full bg-[#001f1f] text-[#e1e4d8] px-6 py-20 font-pptelegraph rounded-t-4xl ">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium font-pptelegraph">
                            Decarbonize
                        </h3>
                        <p className="opacity-80 text-sm">
                            Helping people reduce the carbon footprint of their digital lives
                            through awareness, action, and rewards.
                        </p>
                    </div>

                    {/* Navigation (Mapped) */}
                    <div>
                        <h4 className="font-medium mb-4">Product</h4>
                        <ul className="flex flex-col gap-2 text-sm opacity-80">
                            {navLinks.map((link, index) => (
                                <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out " key={index}>
                                    <Link
                                        href={link.path}
                                        className="hover:opacity-100 transition-opacity"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-medium mb-4">Resources</h4>
                        <ul className="flex flex-col gap-2 text-sm opacity-80">
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out " ><Link href="#">Privacy Policy</Link></li>
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">Terms & Conditions</Link></li>
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">FAQ</Link></li>
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="font-medium mb-4">Community</h4>
                        <ul className="flex flex-col gap-2 text-sm opacity-80">
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">GitHub</Link></li>
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">X (Twitter)</Link></li>
                            <li className="text-[#e1e4d8] hover:text-lime-400 transition-all duration-200 ease-in-out "><Link href="#">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
                    <p>© {new Date().getFullYear()} De-Carbonize. All rights reserved.</p>
                    <p>Supporting SDG 12 & SDG 13</p>
                </div>

            </div>
        </footer>
    );
}
