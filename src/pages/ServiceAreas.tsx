// src/pages/ServiceAreas.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AreaKey = keyof typeof AREAS;
const AREAS = {
  philadelphia: {
    name: "Philadelphia, PA",
    img: "/philly.webp",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.04577094008!2d-75.11801455000001!3d40.00249795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1745899066233!5m2!1sen!2sus",
  },
  southjersey: {
    name: "South Jersey, NJ",
    img: "/haddonfield.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116713.07515516452!2d-75.03709901170113!3d39.76238448767728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1745903155261!5m2!1sen!2sus",
  },
};

export default function ServiceAreas() {
  const [area, setArea] = useState<AreaKey>("philadelphia");
  const current = AREAS[area];

  return (
    <main className="max-w-6xl mx-auto py-16 px-6 bg-cream text-charcoal">
      <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12">
        proudly serving these cities and surrounding areas
      </h2>

      {/* Area Thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mb-12">
        {Object.entries(AREAS).map(([key, { img, name }]) => {
          const isActive = key === area;
          return (
            <button
              key={key}
              onClick={() => setArea(key as AreaKey)}
              aria-pressed={isActive}
              className="focus:outline-none"
            >
              <img
                src={img}
                alt={name}
                className={`w-64 h-40 object-cover rounded-lg shadow-md transition-transform ${
                  isActive ? "scale-105 border-4 border-tan" : "hover:scale-105"
                }`}
              />
              <span className="mt-3 block text-center font-semibold">
                {name.split(",")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Embedded Google Map */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.iframe
            key={area}
            src={current.map}
            title={current.name}
            className="w-full h-[600px] min-h-[400px]"
            allowFullScreen
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </main>
  );
}
