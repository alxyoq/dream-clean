import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

const bookingURL =
  "https://book.squareup.com/appointments/4n5ksms38sadup/location/HE59YBWJWJYDC/services?buttonTextColor=ffffff&color=000000&locale=en&referrer=so";

export default function Header() {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-[hsl(var(--tan))] text-white text-xs md:text-sm py-2 px-6 flex justify-center items-center gap-x-20">
        <div className="font-semibold text-center">
          24/7 Online Scheduling - Serving South Jersey and Philadelphia
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18565628381" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt className="text-white" size={12} />
            (856) 562-8381
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-200" size={16} />
          </a>
          <a
            href="https://www.facebook.com/dreamcleanmobile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white hover:text-gray-200" size={16} />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-black text-white mt-[-1px] shadow-md">
        <nav className="max-w-7xl mx-auto h-32 px-3 md:px-6 flex items-center justify-between overflow-visible">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <video
              src="/logovid.webm"
              autoPlay
              loop
              muted
              playsInline
              className="h-[90px] w-[90px] rounded-full object-contain pointer-events-none select-none"
            />
          </Link>

          {/* Nav Links */}
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

            {/* Services with CSS group-hover dropdown */}
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

          {/* Book Now Button */}
          <a
            href={bookingURL}
            className="bg-[hsl(var(--tan))] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-base"
          >
            BOOK NOW
          </a>
        </nav>
      </header>
    </>
  );
}
