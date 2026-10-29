import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Solutions from './components/Solutions.jsx';
import OurWork from './components/OurWork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <Hero />
      <main id="main">
        <Products />
        <Solutions />
        <OurWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
