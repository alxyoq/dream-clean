// src/pages/Services.tsx
import React from 'react';
import bookingURL from '../shared/bookingURL';
import { motion } from 'framer-motion';

// Animation variants for services
const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

// Highlighted detail packages with individual themes
const detailPackages = [
  {
    title: 'Showroom Signature',
    description:
      'Exterior: wash, clay towel, stage one paint correction, wheels & tires, windows, engine bay; Interior: vacuum, wipe down, heavy shampoo, windows, door jams, ozone treatment; third-row SUVs & crew cab trucks +$29',
    price: '$450.00',
    duration: '5 hr',
    theme: 'bg-yellow-100 border-4 border-yellow-500',
  },
  {
    title: 'Bronze Interior Package',
    description:
      'Vacuum floors & trunk, wipe mats, vacuum & wipe seats, clean console, cup holders, vents, dash & UV protect, interior trim & plastics, condition door panels, clean door jambs & glass',
    price: '$150.00',
    duration: '2 hr 30 min',
    theme: 'bg-amber-100 border-4 border-amber-500',
  },
  {
    title: 'Silver Interior Package',
    description:
      'Everything in Bronze, plus shampoo mats & carpeting, shampoo cloth seats, deep clean & condition leather seats',
    price: '$225.00',
    duration: '4 hr 30 min',
    theme: 'bg-gray-200 border-4 border-gray-500',
  },
  {
    title: 'Gold Interior Package',
    description:
      'Everything in Silver, plus clean headliner, shampoo cabin & trunk carpets, ozone treatment for high traffic',
    price: '$300.00',
    duration: '6 hr',
    theme: 'bg-yellow-200 border-4 border-yellow-600',
  },
  {
    title: 'Deluxe Package',
    description:
      'Exterior: wash, wheels/tires, windows; Interior: vacuum, wipe down, windows, doors & jams; third-row SUVs & crew cab trucks +$29',
    price: '$250.00',
    duration: '4 hr 30 min',
    theme: 'bg-green-100 border-4 border-green-500',
  },
  {
    title: 'Premium Detail Package',
    description:
      'Exterior: wash & spray wax, wheels/tires, windows; Interior: vacuum, wipe down, windows, doors & jams, shampoo; third-row SUVs & crew cab trucks +$29',
    price: '$300.00',
    duration: '4 hr',
    theme: 'bg-indigo-100 border-4 border-indigo-500',
  },
  {
    title: 'Motorcycle Package',
    description: '',
    price: '$450.00',
    duration: '3 hr',
    theme: 'bg-pink-100 border-4 border-pink-500',
  },
];

// Grouped service categories
const categories = [
  {
    name: 'Exterior Services',
    services: [
      { title: 'Basic Wash', description: 'Exterior: $12/ft; Interior: $19/ft' },
      { title: 'Wash & Wax', description: 'Exterior: $15/ft; Interior add: $20/ft' },
      { title: 'Paint Correction', price: '$25.00/ft', duration: '30 min' },
      {
        title: 'Engine Bay Dressing',
        description: 'Wash and degrease engine bay; shine engine bay',
        price: '$100.00',
        duration: '2 hr 30 min',
      },
      {
        title: 'Headlight Restoration',
        description: 'Sand, compound, polish & protect (price varies by condition)',
        price: '$200.00',
        duration: '1 hr 30 min',
      },
      { title: 'Scratch Removal', description: 'Remove minor scratches', price: '$90.00', duration: '30 min' },
      { title: 'Hand Wax', price: '$90.00', duration: '1 hr' },
      { title: 'Ceramic Coating (Wheels)', price: '$300.00', duration: '2 hr' },
    ],
  },
  {
    name: 'Interior & Add-Ons',
    services: [
      {
        title: 'Interior Basic Wash',
        description: 'Spray wax plus $25; Iron remover $65',
        price: '$45.00',
        duration: '2 hr 30 min',
      },
      { title: 'Seat & Carpet Shampoo', price: '$100.00', duration: '1 hr 30 min' },
      { title: 'Vinyl Lettering Removal', description: 'Book for estimate', price: 'Estimate', duration: '30 min' },
      {
        title: 'Glass Cleaning',
        description: 'Glass cleaning plus protection coating',
        price: '$75.00',
        duration: '1 hr 30 min',
      },
      { title: 'Steam Ventilation Decon / Cabin Filter', price: '$75.00', duration: '45 min' },
      { title: 'Spray Wax', price: '$25.00', duration: '30 min' },
      {
        title: 'Level 1 Paint Correction',
        description: 'Paint decontamination; 1-stage polish/gloss (50% defect removal; no wax)',
        price: '$150.00',
        duration: '1 hr 30 min',
      },
      {
        title: 'Level 2 Paint Correction',
        description: 'Paint decontamination; 2-step compound & polish (75% defect removal; no wax)',
        price: '$299.00',
        duration: '4 hr 30 min',
      },
      {
        title: 'Level 3 Paint Correction',
        description: 'Paint decontamination; 3-stage compound/polish/wax (90% defect removal)',
        price: '$450.00',
        duration: '6 hr 30 min',
      },
    ],
  },
  {
    name: 'Seasonal & Other',
    services: [
      {
        title: 'Christmas Light/Govee Estimate',
        description: 'Price varies; book appointment for estimate',
        price: 'Estimate',
        duration: '30 min',
      },
      { title: 'Christmas Light Service', price: '$30.00/hr', duration: '5 hr' },
      { title: 'Christmas Light Removal', price: '$100.00', duration: '1 hr' },
      { title: 'Gutter Clean Out Estimate', description: 'Price varies', price: 'Estimate', duration: '30 min' },
      { title: 'Leaf Removal Estimate', description: 'Price varies', price: 'Estimate', duration: '30 min' },
      { title: 'Tint Removal', price: 'Price varies', duration: '30 min' },
      { title: 'Estimate', price: 'Price varies', duration: '10 min' },
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-cream text-charcoal" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <div className="flex justify-center mb-12">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="block w-3 h-3 bg-tan rounded-full"
          />
        </div>

        {/* Detail Packages Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Detail Packages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailPackages.map((pkg, i) => (
              <div key={i} className={`p-6 rounded-2xl shadow-lg transition ${pkg.theme}`}>
                <h4 className="text-2xl font-semibold mb-2">{pkg.title}</h4>
                {pkg.description && <p className="mb-4">{pkg.description}</p>}
                <p className="font-semibold mb-4">
                  {pkg.price} ・ {pkg.duration}
                </p>
                <a
                  href={bookingURL}
                  className="inline-block bg-charcoal text-cream font-semibold py-2 px-6 rounded-full shadow hover:bg-black transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Other Grouped Categories */}
        {categories.map((cat, ci) => (
          <div key={ci} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{cat.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.services.map((svc, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={serviceVariants}
                  className="p-6 bg-tan rounded-2xl shadow hover:shadow-lg hover:bg-tan-dark transition"
                >
                  <h4 className="text-xl font-semibold mb-2">{svc.title}</h4>
                  {svc.description && <p className="mb-2">{svc.description}</p>}
                  {(svc.price || svc.duration) && (
                    <p className="font-semibold mb-4">
                      {svc.price}
                      {svc.price && svc.duration && ' ・ '}
                      {svc.duration}
                    </p>
                  )}
                  <a
                    href={bookingURL}
                    className="inline-block bg-charcoal text-cream font-semibold py-2 px-6 rounded-full shadow hover:bg-black transition"
                  >
                    Book Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
