import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "OS Installation",
    description: "We give you complete all control. There are many variations of..",
    image: "https://images.unsplash.com/photo-1729786423717-07716ec501e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3BlcmF0aW5nJTIwc3lzdGVtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    icon: "💾",
    link: "/osInstallation"  // Added link property
  },
  {
    title: "Data Recovery",
    description: "We give you complete all control. There are many variations of..",
    image: "https://media.istockphoto.com/id/1409475480/photo/document-management-system-automation-software-to-archiving-and-efficiently-manage-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fipr-5g3w88RmDkMy2SgqnLQ8BWSitneHAmCg94whzQ=",
    icon: "📀",
    link: "/serdataRec"  // Added link property
  },
  {
    title: "Computer Repair",
    description: "We give you complete all control. There are many variations of..",
    image: "https://media.istockphoto.com/id/489081568/photo/computer-repair.webp?a=1&b=1&s=612x612&w=0&k=20&c=0rXv0aHRu-2MW5pKwMUJLkvH_G55BQ2fw3F97Eg3hyI=",
    icon: "🧰",
    link: "/sercomputerRec"  // Added link property
  },
  {
    title: "Hardware Upgrade",
    description: "Upgrade your PC for better performance. We handle all parts safely.",
    image: "https://plus.unsplash.com/premium_photo-1726804906019-20ac68ddec1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGFyZHdhcmUlMjB1cGdyYWRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    icon: "⚙️",
    link: "/serHardware"  // Added link property
  },
  {
    title: "Virus Removal",
    description: "We remove malware and optimize your system for better security.",
    image: "https://media.istockphoto.com/id/2208682650/photo/malware-detected.webp?a=1&b=1&s=612x612&w=0&k=20&c=fTis-RcuwmIL4H9qft7wHpuZbed9-mMSEQUMs6brg9k=",
    icon: "🦠",
    link: "/serVirusRec"  // Added link property
  }
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-gray-50 p-5 m-5">
      <div className="max-w-6xl mx-auto px-6 text-center mt-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Reliable Repair Solutions —
        </h2>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Fast and Efficient
        </h2>
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3 justify-center">
                    <div className="text-3xl">{service.icon}</div>
                    <p className="text-gray-600 text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={service.link}  // Using service-specific link
                    className="inline-block mt-4 text-red-500 font-semibold hover:text-red-600 transition"
                  >
                    READ MORE →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSection;