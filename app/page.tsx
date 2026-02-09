import Link from "next/link";
import InfiniteCarousel from "./carousel";

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
      <ProgressiveBlur position="top" backgroundColor="#f5f4f3" />
      <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" />

      {/* Scrollable content */}
      <div className="h-full w-full overflow-y-auto flex justify-center">
        <div className="w-full max-w-lg pt-32 space-y-10 md:px-0 px-3">
          <h1 className="text-3xl font-medium tracking-tight max-w-md">
            We design brands & build websites that actually work.
          </h1>

          <div className="max-w-md text-neutral-500 font-medium space-y-3">
            <p>
              A web design and development agency that helps brands build a strong
              digital presence.
            </p>
            <p>
              We work on everything from logos and visual identity to website design
              and development, making sure each project looks good, feels right, and
              works smoothly.
            </p>
          </div>

          <div>
            <Link href='/works'>
              <InfiniteCarousel />
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            {[
              "Brand Identity",
              "Website Design",
              "Web Development",
              "UI/UX Design",
              "Creative Visuals",
            ].map((item) => (
              <div
                key={item}
                className="text-lg font-medium tracking-tight pb-3 border-b border-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col justify-center items-center pb-32">
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
