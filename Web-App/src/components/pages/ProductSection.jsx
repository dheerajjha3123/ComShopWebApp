const features = [
  { name: 'Brand', description: 'TechPro Solutions' },
  { name: 'Processor', description: 'Intel Core i9-13900K, 24 cores' },
  { name: 'Memory', description: '32GB DDR5 RAM, 5200 MHz' },
  { name: 'Storage', description: '1TB NVMe SSD' },
  { name: 'Graphics', description: 'NVIDIA RTX 4090 24GB GDDR6X' },
  { name: 'Connectivity', description: 'Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4' },
  // { name: 'Warranty', description: '3 years onsite service with 24/7 support' },
]

export default function ProductSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8">
        {/* Left Side - Details */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The TechPro UltraWorkstation is engineered for demanding professionals who need top-tier performance for software development, 3D rendering, and gaming.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Side - Images */}
        <div className="mt-20 grid grid-cols-2 m-5 p-5 grid-rows-2 gap-2 sm:gap-6 lg:mt-8 hover:scale-115 transition delay-150 duration-300 ease-in-out">
          {[
            {
              alt: "TechPro UltraWorkstation laptop open with code on screen",
              src: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
            },
            {
              alt: "Close up of NVIDIA RTX 4090 graphics card",
              src: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
            },
            {
              alt: "Side view of laptop showing connectivity ports",
              src: "https://plus.unsplash.com/premium_photo-1678565546470-e94fb3e9501e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
            },
            {
              alt: "Top view of laptop keyboard and trackpad",
              src: "https://images.unsplash.com/photo-1694857887769-6ff4c0ef9372?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
            },
          ].map(({ alt, src }) => (
            <div key={alt} className="relative w-full aspect-[5/4] rounded-lg overflow-hidden bg-gray-100 hover:scale-90 transition delay-200 duration-300 ease-in-out">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

