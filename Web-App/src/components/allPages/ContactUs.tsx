// Let's break down what we need:
// 1. A contact section with responsive layout
// 2. Dark mode support
// 3. Three contact cards with icons
// 4. A map integration
// 5. TypeScript types for everything
// 
// We can use Lucide icons for the contact information, and we'll make everything properly typed.

import { useState } from 'react'
import { Mail, Phone, Building2 } from 'lucide-react'


// Define clear TypeScript interfaces for our data structures.
// This makes the component more maintainable and self-documenting.

interface ContactItem {
  icon: React.ReactNode
  title: string
  description: string
  detail: string
}

interface ContactSectionProps {
  /** Optional custom className for the container */
  className?: string
  /** Optional custom map URL */
  mapUrl?: string
  /** Optional custom contact information array */
  contactInfo?: ContactItem[]
}

// Create default contact information that matches the original design.
// Using Lucide icons with consistent styling.

const defaultContactInfo: ContactItem[] = [
  {
    icon: <Mail className="text-blue-500" />,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    detail: 'technivix@support.com'
  },
  {
    icon: <Building2 className="text-blue-500" />,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    detail: 'Noida Sector-62'
  },
  {
    icon: <Phone className="text-blue-500" />,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    detail: '999999999'
  }
]

// Create the main component with proper TypeScript typing and default props.
// Use useState for dark mode toggle functionality.

const ContactUs = ({
  className = '',
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.65926161441!2d77.34579525406262!3d28.631801987832596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce533ba219a59%3A0x6a904f816a8f5ff4!2sA.R.FURNITURE%20%26%20INTERIOR!5e1!3m2!1sen!2sin!4v1761768375334!5m2!1sen!2sin',
  contactInfo = defaultContactInfo
}: ContactSectionProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  
// Structure the JSX with semantic HTML and Tailwind classes.
//   Use grid layouts for responsiveness and maintain the original design's spacing.

  return (
   
    <section className={`bg-white  p-10 ${className}`}>
      <div className="container px-6 py-12 mx-auto ">
        {/* Header Section */}
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400"></p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-blue-500">
            Contact Us
          </h1>

          <p className="mt-3 text-gray-500 ">
            Our friendly team would love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white  rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <span className="inline-block p-3 rounded-full bg-blue-100/80 ">
                    {item.icon}
                  </span>
                </div>
                
                <div className="p-6">
                  <h2 className="text-base font-medium text-gray-800 ">
                    {item.title}
                  </h2>
                  
                  <p className="mt-2 text-sm text-gray-500 ">
                    {item.description}
                  </p>
                  
                  <p className="mt-2 text-sm text-blue-500 ">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="map" 
              marginHeight={0} 
              marginWidth={0} 
              scrolling="no"
              src={mapUrl}
            />
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default ContactUs