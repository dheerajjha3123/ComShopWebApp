import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  text: string;
  name: string;
  title: string;
  image: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
    name: "Robert",
    title: "CTO, Robert Consultency",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
    name: "Jeny Doe",
    title: "CEO, Jeny Consultency",
    image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
    name: "Ema Watson",
    title: "Marketing Manager at Stech",
    image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
    {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.",
    name: "Ema Watson",
    title: "Marketing Manager at Stech",
    image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

interface TestimonialsProps {
  testimonials?: Testimonial[];
  initialSlide?: number;
}

const TesTimonial = ({
  testimonials = defaultTestimonials,
  initialSlide = 0
}: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [testimonials.length]);

  return (
   <section className="bg-white dark:bg-gray-900 dark:text-black">
  <div className="container px-6 py-10 mx-auto">
    <div className="mt-6 md:flex md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our clients are saying
        </h1>
        <div className="flex mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="flex justify-between mt-8 md:mt-0 transition duration-150 ease-in-out">
        <button
          onClick={handlePrev}
          title="left arrow"
          className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          title="right arrow"
          className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>

    {/* Show only the current testimonial */}
    <div className="mt-8">
      <div className="group p-8 bg-gray-100 dark:border-gray-700 transition-colors hover:scale-90  hover:bg-grey-500  rounded-[20px] inset-shadow-grey-500 transition delay-300 duration-400 ease-in-out inset-shadow-sm ">
        <p className="leading-loose transition-colors duration-300">
          {testimonials[currentIndex].text}
        </p>
        <div className="flex items-center mt-8 -mx-2">
          <img
            className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 transition-colors duration-300 group-hover:ring-blue-500"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
          <div className="mx-2">
            <h1 className="font-semibold transition-colors duration-300 ">
              {testimonials[currentIndex].name}
            </h1>
            <span className="text-sm transition-colors duration-300 group-hover:text-blue-500">
              {testimonials[currentIndex].title}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default TesTimonial;