import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const FaQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What IT services do you offer?',
      answer: 'We provide comprehensive IT solutions including cloud computing, cybersecurity, network infrastructure, software development, data analytics, and IT consulting services tailored to meet your business needs.'
    },
    {
      question: 'How do you ensure data security for our business?',
      answer: 'We implement industry-standard security protocols including encryption, multi-factor authentication, regular security audits, compliance with GDPR and HIPAA standards, and 24/7 monitoring to protect your sensitive data.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity, but most implementations take 4-12 weeks. We provide detailed project plans with milestones and regular updates to keep you informed throughout the process.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive post-implementation support including 24/7 technical support, system monitoring, regular maintenance, and training for your team to ensure smooth operations.'
    },
    {
      question: 'How do you handle data migration?',
      answer: 'Our data migration process includes thorough planning, data assessment, testing in staging environments, and careful execution with minimal downtime. We ensure data integrity and provide rollback capabilities if needed.'
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