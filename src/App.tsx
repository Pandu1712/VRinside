import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testinomials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <GetStarted />
    </div>
  );
}

export default App;
