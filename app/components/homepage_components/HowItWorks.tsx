"use client"

import Image from "next/image";
import Button from "../ui/Button";
import HexagonOutline from "./HexagonOutline";

export default function HowItWorks() {
    return (
        <section className="w-full flex flex-col md:flex-row py-32 px-6 bg-[#072d2d] items-center justify-center gap-16 font-pptelegraph my-16 md:my-36 ">

            {/* Left: Visual */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative ">
                <HexagonOutline className="w-[60%] h-auto absolute left-10 " />
                <div className="relative w-full  md:max-w-md h-90 rounded-3xl overflow-hidden border-8 border-[#ffffff4d] ">
                    <Image
                        src="/home-page-images/how-it-works.webp"
                        alt="How it works illustration"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-[#e1e4d8]">

                <h2 className="text-3xl md:text-5xl font-medium font-pptelegraph">
                    How it works
                </h2>

                <p className="opacity-80 max-w-lg text-xl md:text-2xl ">
                    De-Carbonize works quietly in the background, helping you understand and reduce
                    the carbon impact of your digital life.
                </p>

                <ul className="flex flex-col gap-5 md:gap-8 mt-4">

                    <li className="flex gap-4 items-start">
                        <span className="text-[#00BFA6] font-semibold text-2xl md:text-3xl">01</span>
                        <div>
                            <h4 className="text-lg md:text-xl font-medium mb-2 ">Install & Connect</h4>
                            <p className="opacity-80 text-sm md:text-base">
                                Install the app or extension and let it run seamlessly in the background.
                            </p>
                        </div>
                    </li>

                    <li className="flex gap-4 items-start">
                        <span className="text-[#00BFA6] font-semibold text-2xl md:text-3xl">02</span>
                        <div>
                            <h4 className="text-lg md:text-xl font-medium mb-2">Track Digital Activity</h4>
                            <p className="opacity-80 text-sm md:text-base">
                                Your digital actions are analyzed to estimate energy use and emissions.
                            </p>
                        </div>
                    </li>

                    <li className="flex gap-4 items-start">
                        <span className="text-[#00BFA6] font-semibold text-2xl md:text-3xl">03</span>
                        <div>
                            <h4 className="text-lg md:text-xl font-medium mb-2">Get Insights & Tips</h4>
                            <p className="opacity-80 text-sm md:text-base">
                                Receive real-time insights and simple suggestions to reduce impact.
                            </p>
                        </div>
                    </li>

                    <li className="flex gap-4 items-start">
                        <span className="text-[#00BFA6] font-semibold text-2xl md:text-3xl">04</span>
                        <div>
                            <h4 className="text-lg md:text-xl font-medium mb-2">Earn Rewards & Offset</h4>
                            <p className="opacity-80 text-sm md:text-base">
                                Build sustainable habits, earn rewards, and learn how to offset emissions.
                            </p>
                        </div>
                    </li>

                </ul>

                <Button
                    className="font-medium text-sm md:text-lg flex items-center justify-center mt-2 md:mt-10 "
                    aria-label="download"
                    onClick={() => alert("Clicked!")}
                >
                    Install Extension
                </Button>
            </div>

        </section>
    );
}
