"use client"

import Image from "next/image";





export default function CarbonOffset() {
    return (
        <section className="w-full py-16 px-6 text-[#062626] bg-[#e1e4d8] font-pptelegraph my-20 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                {/* Heading */}
                <div className="w-full flex-1/2  ">
                    <h2 className="text-3xl md:text-5xl font-bold font-pptelegraph mb-4">
                        Carbon Offset, Done Right
                    </h2>
                    <p className="opacity-90 font-medium text-base md:text-lg mb-10 ">
                        Some emissions are unavoidable. Carbon offset helps balance that impact
                        by supporting projects that remove or reduce carbon from the atmosphere.
                    </p>

                    <div className="flex flex-col items-start  my-5">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">What Is Carbon Offset?</h3>
                        <p className="opacity-80 text-base font-normal">
                            It means compensating for emissions by funding verified environmental
                            projects like reforestation and clean energy.
                        </p>
                    </div>

                    <div className="flex flex-col items-start  my-5">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Reduction Comes First</h3>
                        <p className="opacity-80 text-base font-normal">
                            Offsetting is not a shortcut. Decarbonize prioritizes reducing
                            emissions before recommending offsets.
                        </p>
                    </div>


                    <div className="flex flex-col items-start  my-5">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Trusted & Transparent</h3>
                        <p className="opacity-80 text-base font-normal">
                            We guide users toward credible, verified offset projects with
                            real climate impact.
                        </p>
                    </div>

                </div>





                {/* the globe */}
                <div className="w-full flex-1/2  aspect-square flex items-center justify-center relative ">

                    <Image src={"/home-page-images/globe.png"} alt="globe" fill className=" h-full w-full " />

                </div>




            </div>
        </section>
    );
}
