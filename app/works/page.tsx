import Navbar from "../Navbar";

type ProgressiveBlurProps = {
    className?: string;
    backgroundColor?: string;
    position?: "top" | "bottom";
    height?: string;
    blurAmount?: string;
};

const ProgressiveBlur = ({
    className = "",
    backgroundColor = "#f5f4f3",
    position = "top",
    height = "150px",
    blurAmount = "4px",
}: ProgressiveBlurProps) => {
    const isTop = position === "top";

    return (
        <div
            className={`pointer-events-none absolute left-0 w-full select-none ${className}`}
            style={{
                [isTop ? "top" : "bottom"]: 0,
                height,
                background: isTop
                    ? `linear-gradient(to top, transparent, ${backgroundColor})`
                    : `linear-gradient(to bottom, transparent, ${backgroundColor})`,
                maskImage: isTop
                    ? `linear-gradient(to bottom, ${backgroundColor} 50%, transparent)`
                    : `linear-gradient(to top, ${backgroundColor} 50%, transparent)`,
                WebkitBackdropFilter: `blur(${blurAmount})`,
                backdropFilter: `blur(${blurAmount})`,
                WebkitUserSelect: "none",
                userSelect: "none",
            }}
        />
    );
};

const Page = () => {
    return (
        <div className="relative h-screen w-screen bg-[#f5f4f3] overflow-hidden">
            {/* Progressive blur layers */}
            <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" />

            {/* Scrollable content */}
            <div className="h-full w-full overflow-y-auto flex justify-center md:px-0 px-3">
                <Navbar />

                <div className="w-full max-w-lg md:pt-44 pt-32 space-y-8">
                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/7.webp' className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/5.webp' className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/9.webp' className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/8.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <p className="font-medium">
                                Growbly
                            </p>
                            <div className="flex gap-1.5">
                                <div className="text-sm text-neutral-500 bg-neutral-200/50 px-3 py-1 rounded-md">Branding</div>
                                <div className="text-sm text-neutral-500 bg-neutral-200/50 px-3 py-1 rounded-md">Design</div>
                            </div>
                        </div>
                    </div>

                     <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/10.webp' className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/11.webp' className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/12.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <p className="font-medium">
                                Social Media
                            </p>
                            <div className="flex gap-1.5">
                                <div className="text-sm text-neutral-500 bg-neutral-200/50 px-3 py-1 rounded-md">Design</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/2.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/1.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                     <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/3.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                     <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/6.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-full h-fit rounded-md overflow-hidden">
                                <img src='/4.webp' className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <p className="font-medium">
                                Synctra
                            </p>
                            <div className="flex gap-1.5">
                                <div className="text-sm text-neutral-500 bg-neutral-200/50 px-3 py-1 rounded-md">Design</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center pt-8 pb-32">
            <button className="hover:cursor-pointer">
              <img src="/button.svg" className="w-60" />
            </button>
            <div className="text-xs font-medium flex justify-center items-center">
              <div className="text-neutral-500">
                ©2025 Pix Studio. All rights reserved.
              </div>
            </div>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
