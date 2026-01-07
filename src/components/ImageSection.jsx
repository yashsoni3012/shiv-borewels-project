import React from 'react';
import { Check } from 'lucide-react';
import image1 from '../assets/Bore1.jpg';
import image2 from '../assets/Inwell1.jpg';
import image3 from '../assets/pile.webp';
import image4 from '../assets/Pilling.webp';

export default function ServicesFacilities() {
  const services = [
    {
      icon: '✓',
      color: 'text-green-500',
      title: 'ड्रिलिंग श्रेणी:',
      description: 'जनीनोंर, प्लॉटस आणि बिहिरींमध्ये ४ आणि ६ इंची आडवी आणि उभी बोरिंस.'
    },
    {
      icon: '✓',
      color: 'text-purple-500',
      title: 'पाइलिंग वैशिष्ट्य:',
      description: 'अगदी परदेशाच्या किमतीमध्ये',
      highlight: '४.५०, ६.५०, ७.२५, ९, ११ इंच पाइल्स',
      highlightAfter: 'करून मिळेल'
    },
    {
      icon: '✓',
      color: 'text-green-500',
      title: 'DTH सेवा:',
      description: 'कठीण माऊलिंग फाउंडेशनसाठी व्यावसायिक DTH ड्रिलिंग.'
    },
    {
      icon: '✓',
      color: 'text-purple-500',
      title: 'इन्फ्रा काम:',
      description: 'लाइटिंग पोल होल्स बनवण्यात तज्ञ.'
    }
  ];

  const gallery = [
    {
      image: image1,
      title: 'मेढनालात मशीन',
      alt: 'Drilling Machine'
    },
    {
      image: image2,
      title: 'पाइलिंग काम',
      alt: 'Piling Work'
    },
    {
      image: image3,
      title: 'आढव ड्रिलिंग',
      alt: 'Horizontal Drilling'
    },
    {
      image: image4,
      title: 'आमचे मशीनरी',
      alt: 'Our Machinery'
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Services Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-10 bg-yellow-500"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              आमची वैशिष्ट्ये
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-6 h-6 rounded-sm ${service.color === 'text-green-500' ? 'bg-green-100' : 'bg-purple-100'} flex items-center justify-center`}>
                      <Check className={`w-4 h-4 ${service.color}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                      <span className="font-bold">{service.title}</span>{' '}
                      {service.description}
                      {service.highlight && (
                        <>
                          {' '}
                          <span className="text-red-600 font-bold">
                            {service.highlight}
                          </span>
                          {' '}
                          {service.highlightAfter}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-1 h-8 sm:h-10 bg-yellow-500"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              आमच्या कामाची गॅलरी
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}