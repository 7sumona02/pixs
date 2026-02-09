"use client";

import { motion } from "framer-motion";

export default function InfiniteCarousel() {
  const items = [
    { id: 1, image: "/1.webp" },
    { id: 2, image: "/2.webp" },
    { id: 3, image: "/3.webp" },
    { id: 4, image: "/4.webp" },
    { id: 5, image: "/5.webp" },
    { id: 6, image: "/6.webp" },
  ];

  return (
    <div className="relative overflow-hidden w-full mx-auto">
      <motion.div
        className="flex gap-[8px] items-center"
        style={{
          width: "max-content",
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Original set */}
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex-1 bg-neutral-200 rounded-lg h-48 w-76 overflow-hidden"
          >
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        {/* Duplicate set */}
        {items.map((item) => (
          <div
            key={`dup-${item.id}`}
            className="relative flex-1 bg-neutral-200 rounded-lg h-48 w-76 overflow-hidden"
          >
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}