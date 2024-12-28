import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  onSearch: (zipCode: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [zipCode, setZipCode] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      onSearch(zipCode);
    }
  };

  return (
    <header className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1632154939738-cd9c7486ff63?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Find Trusted Local Roofers Near You
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Connect with experienced professionals for your roofing project
          </p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2">
              <div className="flex">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter your ZIP code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.slice(0, 5))}
                    pattern="[0-9]{5}"
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-l-md focus:outline-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-r-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  disabled={zipCode.length !== 5}
                >
                  Find Roofers
                </button>
              </div>
            </div>
          </form>
          <p className="text-white/90 mt-4 text-sm">
            Over 10,000 verified roofing professionals nationwide
          </p>
        </div>
      </div>
    </header>
  );
}