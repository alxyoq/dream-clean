// components/GallerySection.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TransformationSlider } from "./TransformationSlider";

const galleryTransformations = [
  {
    id: 1,
    beforeImage: "/before1.jpg",
    afterImage:  "/after1.jpg",
    label:       "Headliner",
    description: "Stain removal & re‐conditioning",
    orientation: "horizontal" as const,
    isCombinedImage: false
  },
  {
    id: 2,
    beforeImage: "/before2.jpg",
    afterImage:  "/after2.jpg",
    label:       "Back Seats",
    description: "Deep clean & debris extraction",
    orientation: "horizontal" as const,
    isCombinedImage: false
  },
  {
    id: 3,
    beforeImage: "/before3.jpg",
    afterImage:  "/after3.jpg",
    label:       "Center Console",
    description: "Cup-holder & trim detail",
    orientation: "horizontal" as const,
    isCombinedImage: false
  },
];

export const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const dirRef = useRef(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const currentItem = galleryTransformations[current];

  const variants = {
    container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } },
    item:      { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    slide: {
      enter: (d: number) => ({ x: d > 0 ? 500 : -500, opacity: 0, scale: 0.9 }),
      center:{ x: 0,              opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
      exit:  (d: number) => ({ x: d < 0 ? 500 : -500, opacity: 0, scale: 0.9, transition: { duration: 0.3 } }),
    }
  };

  const prev = () => { dirRef.current = 1;  setCurrent(i => (i - 1 + galleryTransformations.length) % galleryTransformations.length); };
  const next = () => { dirRef.current = -1; setCurrent(i => (i + 1) % galleryTransformations.length); };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants.container}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={variants.item} className="text-3xl font-bold mb-4">
            Our Detail Gallery
          </motion.h2>
          <motion.p variants={variants.item} className="mb-8 text-gray-600">
            Slide each photo to see the “before” and “after” of our full interior detail.
          </motion.p>

          <motion.div variants={variants.item} className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={dirRef.current} mode="wait">
              <motion.div
                key={current}
                custom={dirRef.current}
                variants={variants.slide}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <TransformationSlider
                  beforeImage={currentItem.beforeImage}
                  afterImage={ currentItem.afterImage }
                  altText={ currentItem.label }
                  isCombinedImage={ currentItem.isCombinedImage }
                  orientation={ currentItem.orientation }
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={variants.item} className="mt-6">
            <h3 className="text-2xl font-semibold mb-1">{currentItem.label}</h3>
            <p className="text-gray-600">{currentItem.description}</p>
          </motion.div>

          <motion.div variants={variants.item} className="flex justify-center gap-4 mt-4">
            <button
              onClick={prev}
              className="px-4 py-2 bg-[#46aebe] text-white rounded-full hover:bg-[#3a8d9c]"
            >
              ← Previous
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-[#f9a280] text-white rounded-full hover:bg-[#e88f6d]"
            >
              Next →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
