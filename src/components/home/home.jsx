import MainPage from "../main/mainPage"
import Nav from "../nav/nav"
import AboutUs from "../pages/AboutUS/AboutUs"
import Banners from "../pages/banners/Banners"
import ContactForm from "../pages/contactForm/ContactForm"
import PopularDestinations from "../pages/destinations/PopularDestinations"
import Footer from "../pages/footer/footer"
import Services from "../pages/services/Services"
import Testimonials from "../pages/testimonials/Testimonials"








const Home = () => {
  return (
    <div>
       <Nav/>
       <MainPage/>
       <AboutUs/>
       <Testimonials/>
       <Services/>
       <Banners/>
       <PopularDestinations/>
       <ContactForm/>
       <Footer/>
      
    </div>
  )
}

export default Home
