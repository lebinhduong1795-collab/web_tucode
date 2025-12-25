import { Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  starRatings: number[];
  facilities: string[];
}

export function Sidebar({ onFilterChange }: SidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('rating');
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleStarChange = (star: number) => {
    const newStars = selectedStars.includes(star)
      ? selectedStars.filter(s => s !== star)
      : [...selectedStars, star];
    setSelectedStars(newStars);
    onFilterChange?.({ starRatings: newStars, facilities: selectedFacilities });
  };

  const handleFacilityChange = (facility: string) => {
    const newFacilities = selectedFacilities.includes(facility)
      ? selectedFacilities.filter(f => f !== facility)
      : [...selectedFacilities, facility];
    setSelectedFacilities(newFacilities);
    onFilterChange?.({ starRatings: selectedStars, facilities: newFacilities });
  };

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-lg mb-6">Lọc kết quả</h2>

      {/* Star Rating */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="font-medium">Đánh giá sao</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === 'rating' ? 'rotate-180' : ''}`} />
        </button>
        {expandedSection === 'rating' && (
          <div className="space-y-2 pl-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={selectedStars.includes(rating)}
                  onChange={() => handleStarChange(rating)}
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Facilities Filter */}
      <div className="mb-6">
        <button 
          onClick={() => toggleSection('facilities')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="font-medium">Tiện ích</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === 'facilities' ? 'rotate-180' : ''}`} />
        </button>
        {expandedSection === 'facilities' && (
          <div className="space-y-2 pl-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('wifi')}
                onChange={() => handleFacilityChange('wifi')}
              />
              <span className="text-sm">Wi-Fi miễn phí</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('pool')}
                onChange={() => handleFacilityChange('pool')}
              />
              <span className="text-sm">Hồ bơi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('spa')}
                onChange={() => handleFacilityChange('spa')}
              />
              <span className="text-sm">Spa</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('restaurant')}
                onChange={() => handleFacilityChange('restaurant')}
              />
              <span className="text-sm">Nhà hàng</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('gym')}
                onChange={() => handleFacilityChange('gym')}
              />
              <span className="text-sm">Phòng gym</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={selectedFacilities.includes('karaoke')}
                onChange={() => handleFacilityChange('karaoke')}
              />
              <span className="text-sm">Karaoke</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
}