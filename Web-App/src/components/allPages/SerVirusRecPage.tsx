import { useState } from 'react'
import {
  CameraIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon
} from 'lucide-react'

interface Feature {
  id: string
  icon: JSX.Element
  title: string
  description: string
}

interface CameraLensRepairProps {
  title?: string
  subtitle?: string
  ctaText?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    id: 'quality',
    icon: <StarIcon className="w-6 h-6 text-yellow-500" />,
    title: 'Quality Service',
    description: 'Professional repair service with guaranteed quality'
  },
  {
    id: 'time',
    icon: <ClockIcon className="w-6 h-6 text-blue-500" />,
    title: 'Quick Turnaround Time',
    description: 'Fast repair service to get you back shooting quickly'
  },
  {
    id: 'warranty',
    icon: <ShieldCheckIcon className="w-6 h-6 text-green-500" />,
    title: 'Warranty Available',
    description: 'Comprehensive warranty on all repairs'
  }
]

export function SerVirusRecPage({
  title = 'Camera Lens Repair Service',
  subtitle = 'Professional camera lens repair solutions',
  ctaText = 'Get Started Today!',
  features = defaultFeatures
}: CameraLensRepairProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-12 rounded-lg shadow-lg p-6 m-6">
        <div className="max-w-xl mx-auto pt-12 pb-8">
          <CameraIcon className="w-12 h-12 mb-4 text-white" />
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg opacity-90 mb-8">{subtitle}</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
            {ctaText}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-100 p-6 rounded-t-lg">
              <div className="flex items-center space-x-3 mb-3">
                <CameraIcon className="w-8 h-8 text-gray-500" />
                <span className="font-semibold">Service Type {index + 1}</span>
              </div>
              <p className="text-gray-600">Professional camera lens repair service</p>
            </div>
            <div className="p-6 pt-0">
              <p className="mb-4 text-lg font-semibold">Starting at ₹999</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free pickup and delivery</li>
                <li>6 months warranty</li>
                <li>Quality guaranteed</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 rounded-lg p-8">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-3">
            {feature.icon}
            <div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SerVirusRecPage