import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal, useTiltCards } from './hooks';
import './App.css';

function BackgroundBlobs() {
  return (
    <div className="bg-blobs" aria-hidden="true">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
}

export default function App() {
  useScrollReveal('.project-card, .stack-card, .about-text, .fact, .section-title');
  useTiltCards();

  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
