import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/Hero';
import { StateSelector } from './components/states/StateSelector';
import { HelpSection } from './components/HelpSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SearchResults } from './components/SearchResults';

export default function App() {
  const [searchZip, setSearchZip] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showHero, setShowHero] = useState(true);

  const handleSearch = (zipCode: string) => {
    setSearchZip(zipCode);
    setShowResults(true);
    setShowHero(false);
    document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onResetSearch={() => setShowHero(true)} />
      <div className="pt-16">
        {showHero && <Hero onSearch={handleSearch} />}
        {showResults && (
          <div id="search-results">
            <SearchResults zipCode={searchZip} />
          </div>
        )}
        {!showResults && (
          <>
            <StateSelector />
            <HelpSection />
            <FAQ />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}