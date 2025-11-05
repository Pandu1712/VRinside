import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testinomials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/Aboutus';
import Partners from './components/Partners';
import CalendlyPopupButton from './components/CalendlyPopupButton';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs/>
      <Testimonials />
      <HowItWorks/>
      <Partners/>
      <Contact />
      <Footer />
      <GetStarted />
 <CalendlyPopupButton url="https://calendly.com/iniziointeriorshyd/30min" />

    </div>
  );
}

export default App;
