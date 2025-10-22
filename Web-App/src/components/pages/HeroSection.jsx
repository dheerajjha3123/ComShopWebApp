import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dark:bg-gray-900'>
  <header className="relative bg-white dark:bg-gray-900 overflow-hidden">
    
    {/* 🔹 Background image layer */}
    <img
      src="https://plus.unsplash.com/premium_photo-1681426669771-d2113672a49b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      alt="Background texture"
      className="absolute top-0 left-0 w-full h-full object-cover opacity-25 z-0 pointer-events-none blur-[4px]"
    />

    {/* Hero content layer */}
    <div className="container relative z-10 px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mt-5 lg:text-4xl">
              Complete IT Solutions Under <span className="text-blue-500">One Roof</span>
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Computer Hardware & Networking, CCTV Installation, Laptop Sales & Rental, Firewall Setup, Load Balancing, Graphic cards & More.
            </p>

            <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 hover:scale-97  focus:outline-none focus:bg-blue-500">
              Contact Us Now!
            </button>
          </div>
        </div>

        {/* <div className="flex items-center justify-center w-full mt-6 lg:mt-4 lg:w-1/2 ">
          <img 
            src="https://plus.unsplash.com/premium_vector-1734405737827-1374f9f89818?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwaGFyZHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Hero Image"
            className="w-full h-full lg:max-w-3xl blur-[1px] hover:scale-96"
          />
        </div> */}
      </div>
    </div>
  </header>
</div>
  );
};

export default HeroSection;