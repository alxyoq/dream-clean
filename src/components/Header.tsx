import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const bookingURL =
  "https://book.squareup.com/appointments/4n5ksms38sadup/location/HE59YBWJWJYDC/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar (hidden on mobile) */}
      <div className="hidden md:flex w-full bg-[hsl(var(--tan))] text-white text-sm py-2 px-6 justify-center items-center gap-x-20">
        <div className="font-semibold text-center">
          24/7 Online Scheduling - Serving South Jersey and Philadelphia
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+18565628381"
            className="flex items-center gap-1 hover:underline"
          >
            <FaPhoneAlt className="text-white" size={12} />
            (856) 562-8381
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-white hover:text-gray-200"
              size={16}
            />
          </a>
          <a
            href="https://www.facebook.com/dreamcleanmobile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              className="text-white hover:text-gray-200"
              size={16}
            />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-black text-white mt-[-1px] shadow-md">
        <nav className="max-w-7xl mx-auto h-20 md:h-32 px-3 md:px-6 flex items-center justify-between overflow-visible relative">
          {/* Logo (centered & larger on mobile) */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center"
          >
            <video
              src="/logovid.webm"
              autoPlay
              loop
              muted
              playsInline
              className="h-20 w-20 md:h-[90px] md:w-[90px] rounded-full object-contain pointer-events-none select-none"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-10 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[hsl(var(--tan))]"
                    : "hover:text-[hsl(var(--tan))] transition-colors duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service-areas"
                className={({ isActive }) =>
                  isActive
                    ? "text-[hsl(var(--tan))]"
                    : "hover:text-[hsl(var(--tan))] transition-colors duration-200"
                }
              >
                Service Areas
              </NavLink>
            </li>
            <li className="relative group">
              <Link
                to="/services"
                className="flex items-center hover:text-[hsl(var(--tan))] transition-colors duration-200"
              >
                Services
                <svg
                  className="ml-1 w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548a.75.75 0 011.06-.028L10 10.94l3.424-3.42a.75.75 0 011.058 1.06l-4 4a.75.75 0 01-1.058 0l-4-4a.75.75 0 01-.028-1.06z" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full w-48 bg-white text-charcoal rounded-lg shadow-lg z-10 hidden group-hover:block">
                <Link
                  to="/services#Automotive-&-RVs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Automotive & RVs
                </Link>
                <Link
                  to="/services#Engine-Bay-Dressing"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Engine Bay Dressing
                </Link>
                <Link
                  to="/services#Headlight-Restoration"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Headlight Restoration
                </Link>
                <Link
                  to="/services#Detail-Packages"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Detail Packages
                </Link>
              </div>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-[hsl(var(--tan))]"
                    : "hover:text-[hsl(var(--tan))] transition-colors duration-200"
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>

          {/* Mobile Book + Hamburger */}
          <div className="flex items-center md:hidden">
            <a
              href={bookingURL}
              className="bg-[hsl(var(--tan))] text-white py-2 px-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-sm"
            >
              BOOK NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="ml-3 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Book Now */}
          <a
            href={bookingURL}
            className="hidden md:block bg-[hsl(var(--tan))] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-base"
          >
            BOOK NOW
          </a>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black text-white px-6 py-4">
            {/* Announcement Bar moved inside menu earlier */}
            <div className="bg-[hsl(var(--tan))] text-white text-xs text-center py-2 px-4 mb-4 rounded">
              <div className="font-semibold">
                24/7 Online Scheduling - Serving South Jersey and Philadelphia
              </div>
              <div className="flex justify-center items-center gap-4 mt-2">
                <a
                  href="tel:+18565628381"
                  className="flex items-center gap-1 hover:underline"
                >
                  <FaPhoneAlt className="text-white" size={12} />
                  (856) 562-8381
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-white hover:text-gray-200"
                    size={16}
                  />
                </a>
                <a
                  href="https://www.facebook.com/dreamcleanmobile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    className="text-white hover:text-gray-200"
                    size={16}
                  />
                </a>
              </div>
            </div>
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium hover:text-[hsl(var(--tan))] transition-colors duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service-areas"
                  onClick={() => setMobileMenuOpen(false)}  
                  className="block text-base font-medium hover:text-[hsl(var(--tan))] transition-colors duration-200"
                >
                  Service Areas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium hover:text-[hsl(var(--tan))] transition-colors duration-200"
                >
                  Services
                </NavLink>
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/services#Automotive-&-RVs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm hover:text-[hsl(var(--tan))] transition-colors duration-200"
                    >
                      Automotive & RVs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#Engine-Bay-Dressing"
                      onClick={() => setMobileMenuOpen(false)}  
                      className="block text-sm hover:text-[hsl(var(--tan))] transition-colors duration-200"
                    >
                      Engine Bay Dressing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#Headlight-Restoration"
                      onClick={() => setMobileMenuOpen(false)}  
                      className="block text-sm hover:text-[hsl(var(--tan))] transition-colors duration-200"
                    >
                      Headlight Restoration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#Detail-Packages"
                      onClick={() => setMobileMenuOpen(false)}  
                      className="block text-sm hover:text-[hsl(var(--tan))] transition-colors duration-200"
                    >
                      Detail Packages
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium hover:text-[hsl(var(--tan))] transition-colors duration-200"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <a
                  href={bookingURL}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-[hsl(var(--tan))] text-white py-2 px-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-sm text-center"
                >
                  BOOK NOW
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
