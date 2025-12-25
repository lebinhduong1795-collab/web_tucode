import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SearchSectionProps {
  onSearch?: (searchTerm: string, location: string, priceRange: string) => void;
  resultsCount?: number;
}

export function SearchSection({ onSearch, resultsCount = 0 }: SearchSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm, location, priceRange);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-center text-2xl md:text-3xl mb-2">
            Bạn lựa chọn đến điểm đến nào?
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            Hơn {resultsCount} tour du thuyền khởi hành đến các địa điểm nổi tiếng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-1 relative">
              <label className="block text-sm text-gray-600 mb-2">Nhập địa điểm/Du thuyền</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nhập địa điểm/Du thuyền"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-1 relative">
              <label className="block text-sm text-gray-600 mb-2">Địa điểm</label>
              <div className="relative">
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  <option value="">Tất cả các địa điểm</option>
                  <option value="Hạ Long">Hạ Long</option>
                  <option value="Lan Hạ">Lan Hạ</option>
                  <option value="Bái Tử Long">Bái Tử Long</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Price Filter */}
            <div className="md:col-span-1 relative">
              <label className="block text-sm text-gray-600 mb-2">Giá</label>
              <div className="relative">
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  <option value="">Tất cả loại giá</option>
                  <option value="0-2000000">Dưới 2.000.000đ</option>
                  <option value="2000000-4000000">2.000.000đ - 4.000.000đ</option>
                  <option value="4000000-99999999">Trên 4.000.000đ</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <button 
                onClick={handleSearch}
                className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-5 h-5" />
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}