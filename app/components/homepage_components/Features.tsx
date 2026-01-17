import Image from "next/image";

export default function Features() {
    return (
        <section className="relative w-[96%] max-w-8xl mx-auto px-6 py-24 text-[#e1e4d8] rounded-xl overflow-hidden my-28 ">

            {/* Background image */}
            <Image
                src={"/home-page-images/features-image.webp"}
                fill
                alt="features background"
                className="object-cover object-center z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-medium mb-16 font-pptelegraph">
                    Designed for Sustainable Digital Living
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

                    {/* Digital Carbon Tracking */}
                    <div className="min-h-55 md:col-span-3 lg:col-span-6 rounded-3xl p-8 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-medium mb-2 ">Digital Carbon Tracking</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Track the carbon footprint of your everyday digital activity.
                        </p>
                    </div>

                    {/* Real-Time Insights */}
                    <div className="min-h-55 md:col-span-3 lg:col-span-6 rounded-3xl p-8 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl  font-medium mb-2">Real-Time Insights</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Understand your impact instantly with clear visual insights.
                        </p>
                    </div>

                    {/* Rewards */}
                    <div className="min-h-55 md:col-span-2 lg:col-span-3 rounded-3xl p-6 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl  font-medium mb-2">Rewards</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Earn points for sustainable digital behavior.
                        </p>
                    </div>

                    {/* Privacy */}
                    <div className="min-h-55 md:col-span-2 lg:col-span-3 rounded-3xl p-6 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl  font-medium mb-2">Privacy-First</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Your data stays on your device.
                        </p>
                    </div>

                    {/* Carbon Offset */}
                    <div className="min-h-55 md:col-span-2 lg:col-span-6 rounded-3xl p-6 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl  font-medium mb-2">Carbon Offset Guidance</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Learn how to offset unavoidable emissions responsibly.
                        </p>
                    </div>

                    {/* Sustainability Tips */}
                    <div className="min-h-55 md:col-span-6 lg:col-span-12 rounded-3xl p-8 bg-[#E1e4d826] font-pptelegraph backdrop-blur-xs border border-white/10">
                        <h3 className="text-2xl md:text-3xl  font-medium mb-2">Sustainability Tips</h3>
                        <p className="opacity-90 font-semibold text-base md:text-lg tracking-wide">
                            Simple changes that reduce emissions without disrupting your workflow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
