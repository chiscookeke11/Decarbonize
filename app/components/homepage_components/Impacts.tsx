


export default function Impacts() {


    return (
        <section
            id="impact"
            className="w-full max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto rounded-lg overflow-hidden text-[#e1e4d8] relative bg-no-repeat bg-cover bg-center md:mt-28 my-20 font-pptelegraph"
            style={{ backgroundImage: 'url("/home-page-images/impact.webp")' }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* Content container */}
            <div className="relative z-20 py-24 px-6 flex flex-col items-center justify-center gap-5 min-h-125 md:min-h-150 ">
                <div className="text-center max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-medium mb-4">
                        Your Actions, Our Planet
                    </h2>
                    <p className=" text-lg md:text-xl ">
                        Every digital habit counts. See how your energy-saving actions
                        contribute to a greener world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">

                    <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xs border border-white/10 flex flex-col items-center">
                        <h3 className=" text-2xl md:text-3xl font-bold mb-2">1.2kg</h3>
                        <p className="opacity-80 text-base md:text-xl text-center">CO₂ saved per week</p>
                    </div>

                    <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xs border border-white/10 flex flex-col items-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">15 kWh</h3>
                        <p className="opacity-80 text-base md:text-xl text-center">Energy reduced by users</p>
                    </div>

                    <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xs border border-white/10 flex flex-col items-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">1200+</h3>
                        <p className="opacity-80 text-base md:text-xl text-center">Users actively reducing footprints</p>
                    </div>

                    <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xs border border-white/10 flex flex-col items-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">50+</h3>
                        <p className="opacity-80 text-base md:text-xl text-center">Trees planted through offsets</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
