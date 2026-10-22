import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import Categories from '@/components/Categories';
import Articles from '@/components/Articles';
import AISection from '@/components/AISection';
import TechTips from '@/components/TechTips';
import HelpForm from '@/components/HelpForm';
import About from '@/components/About';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Categories />
        <Articles />
        <AISection />
        <TechTips />
        <HelpForm />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
