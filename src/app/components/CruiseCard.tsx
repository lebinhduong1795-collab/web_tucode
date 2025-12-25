import { MapPin, Calendar, Star } from 'lucide-react';

interface CruiseCardProps {
  id: number;
  name: string;
  image: string;
  duration: string;
  location: string;
  date: string;
  price: string;
  badge?: string;
  onViewDetails?: (id: number) => void;
  starRating?: number;
  facilities?: string[];
  reviewCount?: number;
}

export function CruiseCard({ id, name, image, duration, location, date, price, badge, onViewDetails, starRating = 5, facilities = [], reviewCount }: CruiseCardProps) {
  // Use starRating directly (already in 5-star scale)
  const rating = starRating;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Get review count from badge if not provided
  const getReviewCount = () => {
    if (reviewCount !== undefined) return reviewCount;
    if (!badge) return 0;
    const match = badge.match(/\((\d+)\)/);
    return match ? parseInt(match[1]) : 0;
  };

  const totalReviews = getReviewCount();

  // Get rating text based on rating value
  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return 'Xuất sắc';
    if (rating >= 4.0) return 'Rất tốt';
    if (rating >= 3.5) return 'Tốt';
    if (rating >= 3.0) return 'Khá tốt';
    return 'Trung bình';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative">
        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-800 text-xs px-3 py-1 rounded-full">
          ⭐ {rating.toFixed(1)} {getRatingText(rating)} ({totalReviews})
        </div>
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="flex-1 line-clamp-2">{name}</h3>
          <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded text-xs whitespace-nowrap">
            ⭐ {rating.toFixed(1)} {getRatingText(rating)} ({totalReviews})
          </span>
        </div>
        
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < fullStars) {
              return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
            } else if (i === fullStars && hasHalfStar) {
              return (
                <div key={i} className="relative w-4 h-4">
                  <Star className="w-4 h-4 text-yellow-400 absolute" />
                  <div className="overflow-hidden absolute w-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              );
            } else {
              return <Star key={i} className="w-4 h-4 text-gray-300" />;
            }
          })}
          <span className="text-sm text-gray-600 ml-1">({rating.toFixed(1)})</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{duration} - {location} - {date}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-teal-500 text-xl">đ {price}</span>
            <span className="text-gray-500 text-sm">/khách</span>
          </div>
          <button 
            onClick={() => onViewDetails?.(id)}
            className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full transition-colors text-sm"
          >
            Xem giá
          </button>
        </div>
      </div>
    </div>
  );
}