"use client"

import Image from "next/image";
import Button from "../ui/Button";
import { ChevronRight } from "lucide-react";




export default function Hero() {
    return (
        <section className="w-full max-w-7xl rounded-3xl relative min-h-125  overflow-hidden my-18 font-pptelegraph mx-auto ">
            <div className="w-full absolute top-0 left-0 h-full bg-black/25 z-10 " />
            <Image
                src={"/home-page-images/geranimo-qzgN45hseN0-unsplash.webp"}
                fill
                alt="hero-image"
                className="object-center object-cover absolute top-0 left-0"
            />

            <div className="w-full h-full absolute top-0 left-0 z-20 py-20 px-6 flex flex-col items-start justify-center gap-4">
                <h1 className=" font-medium text-2xl md:text-5xl lg:text-7xl text-[#e1e4d8] " >Track, Understand, and Reduce Your Digital Carbon Footprint</h1>

                <hr className="w-full border border-[#e1e4d8] mt-8 md:mt-16 " />

                <div className=" w-full flex flex-col items-start lg:flex-row justify-between lg:items-center gap-10 mt-5 " >

                    <p className=" text-lg md:text-xl lg:text-2xl font-medium text-[#e1e4d8] " >
                        Decarbonize tracks your digital energy use, calculates your carbon footprint, and rewards sustainable habits with points and incentives.
                    </p>
                    <Button className="font-medium flex items-center justify-center gap-1 text-lg md:text-lg " onClick={() => alert("Clicked!")}>Learn More <ChevronRight size={25} /> </Button>
                </div>
            </div>
        </section>

    )
}