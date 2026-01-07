import React from "react";
import { Phone } from "lucide-react";
// Import your logo image
import logo from "../assets/logoImg.png"; // Update this path to match your project structure

export default function ShivBorewellBanner() {
  return (
    <>
      {/* Add CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-blue-700 text-white py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
              <div className="p-2 sm:p-3 md:p-4">
                <img
                  src={logo}
                  alt="Shiv Borewell Agency Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
              शिव बोअरवेल एजन्सी
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6">
              &
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              शिव पाइल फाउंडेशन कॉन्ट्रॅक्टर पुसद
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed px-2">
              Heavy Drilling & Piling Solutions मध्ये कॉन्ट्रॅक्टर & स्पेशालिस्ट
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Sliding Text Banner */}
            <div className="marquee-container mb-6 sm:mb-8 md:mb-10 lg:mb-12 overflow-hidden bg-white rounded-lg shadow-sm py-3 sm:py-4">
              <div className="relative">
                {/* Marquee content */}
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="inline-flex items-center">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 px-4 sm:px-6 md:px-8">
                        २० वर्षांपासून बोअरवेल क्षेत्रात अनुभवी आणि विश्वासनीय
                        असलेली सेवा
                      </h3>
                      <span className="text-yellow-500 text-xl sm:text-2xl mx-2 sm:mx-3 md:mx-4">
                        •
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Service Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 border-l-4 border-yellow-400">
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700 text-center mb-4 sm:mb-6 leading-tight px-2">
                पुसद येथील विश्वसनीय बोअरवेल सेवा
              </h4>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center mb-6 sm:mb-8 leading-relaxed px-2">
                आधुनिक मशीनसह व्यावसायिक ड्रिलिंग आणि फाउंडेशन काम
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-4xl mx-auto">
                <button
                  onClick={() => (window.location.href = "tel:9850357850")}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-base sm:text-lg whitespace-nowrap">
                    संपर्क 9850357850
                  </span>
                </button>

                <button
                  onClick={() => (window.location.href = "tel:9850357885")}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-base sm:text-lg whitespace-nowrap">
                    संपर्क 9850357885
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-6 sm:mt-8 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
