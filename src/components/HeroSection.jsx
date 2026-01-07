import React from "react";
import { Phone } from "lucide-react";

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
        <div className="bg-blue-700 text-white py-12 px-4 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              शिव बोअरवेल एजन्सी
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              &
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              शिव पाइल फाउंडेशन कॉन्ट्रॅक्टर पुसद
            </h2>
            <p className="text-base sm:text-lg md:text-xl mt-4">
              Heavy Drilling & Piling Solutions माथे कॉन्ट्रॅक्टर & स्पेशालिस्ट
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-8xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Sliding Text Banner */}
          <div className="marquee-container mb-8 sm:mb-12 overflow-hidden">
            <div className="relative">
              {/* Marquee content */}
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="inline-flex items-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 px-8">
                      🚀 २० वर्षांपासून बोअरवेल क्षेत्रात अनुभवी आणि विश्वासनीय
                      असलेली सेवा 🚀
                    </h3>
                    <span className="text-yellow-500 text-2xl mx-4">•</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Service Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 border-l-4 border-yellow-400">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6">
              पुसद येथील विश्वसनीय बोअरवेल सेवा
            </h4>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-8">
              आधुनिक मशीनसह व्यावसायिक ड्रिलिंग आणि फाउंडेशन काम
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => (window.location.href = "tel:9850357850")}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg w-full sm:w-auto justify-center cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">संपर्क 9850357850</span>
              </button>

              <button
                onClick={() => (window.location.href = "tel:9850357885")}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg w-full sm:w-auto justify-center cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">संपर्क 9850357885</span>
              </button>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
