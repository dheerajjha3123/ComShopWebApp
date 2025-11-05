import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'IN',
    message: ''
  })

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: `${formData.country} ${formData.phoneNumber}`,
        message: formData.message
      }

      await emailjs.send(
           import.meta.env.VITE_EMAILJS_SERVICE_ID,
           import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
           templateParams
       );

       console.log(emailjs)

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: 'IN',
        message: ''
      })
      
      alert('Thank you for contacting us! We will get back to you soon.')
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error sending your message. Please try again later.')
    }
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Contact <span className="text-blue-500">Sales</span>
        </h1>      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          {/* First name input */}
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
          </div>

          {/* Last name input */}
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          </div>

          {/* Email input */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          {/* Phone number section */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={handleChange}
                    value={formData.country}
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>
            </div>
          </div>

          {/* Message textarea */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}