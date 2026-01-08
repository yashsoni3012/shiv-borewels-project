import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function LocationContactFooter() {
  return (
    <div className="bg-gray-100">
      {/* Location & Contact Section */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 lg:p-16">
            <div className="text-center text-white space-y-4 sm:space-y-6 md:space-y-8">
              {/* Title with Pin Icon */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-400 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  आमच्या कार्यालयाचे ठिकाण
                </h2>
              </div>

              {/* Address */}
              <div className="space-y-1 sm:space-y-2 px-2 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  केशव इंडियन ऑइल पेट्रोल पंप, साई मंदिर रोड,
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  पुसद, यवतमाळ, महाराष्ट्र - ४४५२०४
                </p>
              </div>

              {/* Google Maps Button */}
              <div className="pt-2 sm:pt-4 px-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 md:px-10 lg:px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto max-w-md sm:max-w-none"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="whitespace-nowrap">View on Google Maps</span>
                </a>
              </div>

              {/* Contact Numbers */}
              <div className="pt-2 sm:pt-4 md:pt-6 px-2 sm:px-4">
                <div className="mb-3 sm:mb-4">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    संपर्क:
                  </p>
                  <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
                    <a
                      href="tel:9850357850"
                      className="hover:text-yellow-300 transition-colors underline sm:no-underline"
                    >
                      9850357850
                    </a>
                    <span className="hidden sm:inline">/</span>
                    <a
                      href="tel:9850357885"
                      className="hover:text-yellow-300 transition-colors underline sm:no-underline"
                    >
                      9850357885
                    </a>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919850357850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300 group"
                    aria-label="WhatsApp"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/shiv.borewell?igsh=Mng0czR6cWVtdXVq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300 group"
                    aria-label="Instagram"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center group-hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              © {new Date().getFullYear()} Shiv Borewells & Foundation | Trusted in Maharashtra
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
