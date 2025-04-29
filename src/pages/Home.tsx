// src/pages/Home.tsx
import React from "react";
import bookingURL from "../shared/bookingURL";
import { FaCar, FaTint, FaSoap } from "react-icons/fa";
import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 bg-cream text-charcoal">
        <motion.div
          className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Professional Mobile Detailing
              <br />
              Serving South Jersey & Philadelphia
            </h1>
            <p className="mt-4 max-w-md mx-auto lg:mx-0">
              We bring showroom shine to your doorstep. From surface cleaning
              to ceramic coatings, experience the ultimate care for your
              vehicle without leaving home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-8">
              <a
                href="#quote"
                className="bg-tan text-white font-semibold py-2 px-6 sm:px-8 rounded-full shadow-md hover:bg-tan-dark transform transition"
              >
                Get a Quote
              </a>
              <a
                href={bookingURL}
                className="border-2 border-tan text-tan font-semibold py-2 px-6 sm:px-8 rounded-full shadow-md hover:bg-tan hover:text-white transform transition"
              >
                Book Now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <motion.img
              src="/dan-the-detailer.jpg"
              alt="Car Detailer Hero"
              className="object-contain shadow-2xl rounded-xl w-full max-w-md sm:max-w-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 text-charcoal">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <div className="flex justify-center mb-8">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="block w-3 h-3 bg-tan rounded-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: FaCar,
                title: "Exterior Detailing",
                desc: "Restore shine and protect your paint.",
              },
              {
                icon: FaTint,
                title: "Interior Cleaning",
                desc: "Deep clean upholstery, carpets & trim.",
              },
              {
                icon: FaSoap,
                title: "Ceramic Coating",
                desc: "Long-lasting protection & gloss.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={serviceVariants}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-tan rounded-2xl shadow hover:shadow-lg hover:bg-tan-dark transition"
              >
                <service.icon className="text-cream text-5xl sm:text-6xl mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-charcoal">
                  {service.title}
                </h3>
                <p className="text-charcoal">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-charcoal">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                quote: "Absolutely incredible service! My car looks brand new.",
                name: "Sarah M.",
              },
              {
                quote: "Prompt, professional, and meticulous. Highly recommend!",
                name: "John D.",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className="bg-tan p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg hover:bg-tan-dark transition"
              >
                <p className="italic mb-4">“{t.quote}”</p>
                <footer className="font-semibold">— {t.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-To-Action */}
      <section className="py-16 bg-tan text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ride?</h2>
          <p className="mb-8">Experience premium mobile detailing today.</p>
          <motion.a
            href={bookingURL}
            className="inline-block bg-cream text-charcoal font-semibold py-2 px-6 sm:px-8 rounded-full shadow hover:bg-tan-dark transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Book Your Appointment
          </motion.a>
        </div>
      </section>
    </>
  );
}
