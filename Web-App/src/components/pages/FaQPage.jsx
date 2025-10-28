import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const FaQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How i can play for my appoinment ?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
    },
    {
      question: 'Is the cost of the appoinment covered by private health insurance?',
      answer: 'Answer will go here...'
    },
    {
      question: 'Do i need a referral?',
      answer: 'Answer will go here...'
    },
    {
      question: 'What are your opening house?',
      answer: 'Answer will go here...'
    },
    {
      question: 'What can i expect at my first consultation?',
      answer: 'Answer will go here...'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h1>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full p-8"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>

                <span className={`text-white bg-blue-500 rounded-full p-2 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <ChevronDown className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQPage;