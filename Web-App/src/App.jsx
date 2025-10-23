import './App.css'
import NavBar from './components/pages/NavBar'
import HeroSection from './components/pages/HeroSection'
import WorkPage from './components/pages/WorkPage'
import BlogPage from './components/pages/BlogPage'
import ContactPage from './components/pages/ContactPage'
import ProductSection from './components/pages/ProductSection'
import Footer from './components/pages/Footer'
import TesTimonial from './components/pages/TesTimonial'
import ServicesSection from './components/pages/ServicesSection'
import TeamPages from './components/pages/TeamPages'
import { Outlet } from 'react-router-dom'
import ContactUs from './components/allPages/ContactUs'

function App() {

  return (
    
    <div>
      <NavBar/>   
      <Outlet/>   
      <HeroSection />
      <ProductSection/>
      <ServicesSection/>
      <WorkPage/>
      <TesTimonial/>
      <BlogPage/>
      <TeamPages/>
      <ContactPage/>
      <Footer/>
    
      </div>
    
  )
}

export default App
