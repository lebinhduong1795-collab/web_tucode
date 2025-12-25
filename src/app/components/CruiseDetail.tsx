import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, Users, BedDouble, Building, House, Minus, Plus, X } from 'lucide-react';
import type { CartItem } from './ShoppingCart';

interface Room {
  id: number;
  name: string;
  image: string;
  size: string;
  beds: number;
  capacity: number;
  price: string;
}

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

interface CruiseDetailProps {
  cruiseId: number;
  onClose: () => void;
  onAddToCart: (items: CartItem[]) => void;
}

export function CruiseDetail({ cruiseId, onClose, onAddToCart }: CruiseDetailProps) {
  const [activeTab, setActiveTab] = useState('features');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [roomQuantities, setRoomQuantities] = useState<{ [key: number]: number }>({});

  // Mock data - in real app, this would be fetched based on cruiseId
  const cruise = {
    name: 'Du thuyền Heritage Bình Chuẩn Cát Bà',
    rating: 4.5, // Rating out of 5
    reviewCount: 12,
    price: '4,150,000',
    type: 'Lux Cruises',
    location: 'Lộ 28 Công Quốc Tế Bãi Cháy',
    info: { 
      launched: '2025',
      cabins: '20',
      hull: 'Kim loại',
      route: 'Vịnh Lan Hạ - Bãi Lãm Bà Trại Đào - Hòng Sắng Tối',
      operator: 'Công ty cổ phần Heritage Cruises'
    },
    images: [
      'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzY2MDQyMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJlZHJvb20lMjBjYWJpbnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  };

  // Use rating directly (already in 5-star scale)
  const ratingOutOf5 = cruise.rating;
  const fullStars = Math.floor(ratingOutOf5);
  const hasHalfStar = ratingOutOf5 % 1 >= 0.5;

  // Get rating text based on rating value
  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return 'Xuất sắc';
    if (rating >= 4.0) return 'Rất tốt';
    if (rating >= 3.5) return 'Tốt';
    if (rating >= 3.0) return 'Khá tốt';
    return 'Trung bình';
  };

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Phòng Delta Suite',
      image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzY2MDQyMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      size: '33 m²',
      beds: 2,
      capacity: 2,
      price: '4,150,000 đ'
    },
    {
      id: 2,
      name: 'Phòng Ocean Suite',
      image: 'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: '33 m²',
      beds: 2,
      capacity: 2,
      price: '4,370,000 đ'
    },
    {
      id: 3,
      name: 'Phòng Captain Suite',
      image: 'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJlZHJvb20lMjBjYWJpbnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: '39 m²',
      beds: 2,
      capacity: 2,
      price: '4,620,000 đ'
    },
    {
      id: 4,
      name: 'Phòng Royal Suite',
      image: 'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      size: '46 m²',
      beds: 2,
      capacity: 3,
      price: '4,870,000 đ'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      date: '15/11/2024',
      rating: 5,
      comment: 'Du thuyền rất đẹp và sang trọng. Nhân viên phục vụ nhiệt tình, chu đáo. Cảnh quan tuyệt vời, đồ ăn ngon. Rất đáng để trải nghiệm!'
    },
    {
      id: 2,
      name: 'Trần Thị B',
      date: '10/11/2024',
      rating: 5,
      comment: 'Chuyến đi tuyệt vời! Phòng ốc sạch sẽ, tiện nghi đầy đủ. Hoạt động vui chơi đa dạng. Sẽ quay lại lần sau.'
    },
    {
      id: 3,
      name: 'Lê Văn C',
      date: '05/11/2024',
      rating: 4,
      comment: 'Trải nghiệm tốt, cảnh đẹp, dịch vụ chu đáo. Giá hơi cao nhưng xứng đáng. Recommend cho mọi người!'
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      date: '01/11/2024',
      rating: 5,
      comment: 'Du thuyền 5 sao thực sự! Mọi thứ đều hoàn hảo từ phòng ốc, ẩm thực đến dịch vụ. Đáng đồng tiền bát gạo.'
    }
  ];

  const features = [
    'Du thuyền được thiết kế với phong cách sang trọng và truyền thống',
    'Phòng nghỉ tiện nghi sang trọng mang phong cách Á Đông độc đáo với tầm nhìn view vịnh',
    'Đặc biệt hơn, du thuyền thiết kế bể bơi 4 mùa ở ia đài checkin cầu thích cho mọi du khách',
    'Du thuyền có nhiều lịch trình 2 ngày 1 đêm, 3 ngày 2 đêm và 4 ngày 3 đêm cho những ai muốn 1 lịch trình dài hoàn trên vịnh Lan Hạ'
  ];

  const handleUpdateQuantity = (roomId: number, delta: number) => {
    setRoomQuantities(prev => ({
      ...prev,
      [roomId]: Math.max(0, (prev[roomId] || 0) + delta)
    }));
  };

  const handleAddToCart = () => {
    const cartItems: CartItem[] = [];
    
    Object.entries(roomQuantities).forEach(([roomIdStr, quantity]) => {
      if (quantity > 0) {
        const roomId = parseInt(roomIdStr);
        const room = rooms.find(r => r.id === roomId);
        
        if (room) {
          // Extract numeric price
          const priceNumber = parseInt(room.price.replace(/[^\d]/g, ''));
          
          cartItems.push({
            id: `${cruiseId}-${roomId}-${Date.now()}`,
            cruiseId,
            cruiseName: cruise.name,
            roomId: room.id,
            roomName: room.name,
            roomImage: room.image,
            quantity,
            price: room.price,
            priceNumber
          });
        }
      }
    });
    
    if (cartItems.length > 0) {
      onAddToCart(cartItems);
      setRoomQuantities({}); // Reset quantities after adding to cart
    }
  };

  const tabs = [
    { id: 'features', label: 'Đặc điểm' },
    { id: 'rooms', label: 'Phòng & giá' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'rules', label: 'Quy định' },
    { id: 'reviews', label: 'Đánh giá' },
    { id: 'route', label: 'Lộ trình' }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="container mx-auto px-4 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <button onClick={onClose} className="hover:text-teal-500">
              <House className="w-4 h-4" />
            </button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={onClose} className="hover:text-teal-500">Tìm du thuyền</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800">{cruise.name}</span>
          </div>

          {/* Title and Price */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl mb-2">{cruise.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded">
                  ⭐ {cruise.rating} ({cruise.reviewCount} đánh giá)
                </span>
                <span className="text-gray-600">{cruise.type}, {cruise.location}</span>
                <button className="text-teal-500 hover:underline text-xs">
                  Xem trên bản đồ (Lộ trình)
                </button>
              </div>
              <div className="flex gap-1 mt-2">
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
                <span className="text-sm text-gray-600 ml-1">({ratingOutOf5.toFixed(1)}/5.0)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl text-teal-500">{cruise.price} đ/ khách</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={cruise.images[currentImageIndex]}
              alt={cruise.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? cruise.images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === cruise.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {cruise.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 ${
                  currentImageIndex === index ? 'border-teal-500' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b mb-6">
              <div className="flex gap-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-2 text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-teal-500 text-teal-500'
                        : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'features' && (
              <div>
                <h2 className="text-2xl mb-4">Đặc điểm nổi bật</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 mb-6"></div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'rooms' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl mb-2">Các loại phòng & giá</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400"></div>
                  </div>
                  {/* <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1">
                    <X className="w-4 h-4" />
                    Xoá lựa chọn
                  </button> */}
                </div>

                <div className="space-y-4">
                  {rooms.map((room) => (
                    <div key={room.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-24 h-24 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="mb-2">{room.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <House className="w-4 h-4" />
                              {room.size}
                            </span>
                            <span className="flex items-center gap-1">
                              <BedDouble className="w-4 h-4" />
                              {room.beds} giường
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {room.capacity} người
                            </span>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end justify-between">
                          <div>
                            <div className="text-xl text-teal-500">{room.price}</div>
                            <div className="text-xs text-gray-500">/ Khách</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleUpdateQuantity(room.id, -1)}
                              className="w-8 h-8 rounded border hover:bg-gray-100 flex items-center justify-center"
                              disabled={!roomQuantities[room.id] || roomQuantities[room.id] === 0}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{roomQuantities[room.id] || 0}</span>
                            <button
                              onClick={() => handleUpdateQuantity(room.id, 1)}
                              className="w-8 h-8 rounded border hover:bg-gray-100 flex items-center justify-center"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div>
                <h2 className="text-2xl mb-4">Giới thiệu</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 mb-6"></div>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Du thuyền Heritage Bình Chuẩn là một trong những du thuyền sang trọng nhất tại vịnh Lan Hạ. 
                    Với thiết kế kết hợp giữa phong cách cổ điển Đông Dương và tiện nghi hiện đại, 
                    du thuyền mang đến trải nghiệm đẳng cấp 5 sao cho du khách.
                  </p>
                  <p className="mb-4">
                    Du thuyền có 20 cabin được thiết kế tinh tế, mỗi cabin đều có ban công riêng với tầm nhìn 
                    hướng ra vịnh. Nội thất được làm từ gỗ quý, kết hợp với các tiện nghi hiện đại như 
                    điều hòa, tivi, minibar, và phòng tắm riêng.
                  </p>
                  <p>
                    Các dịch vụ và tiện ích bao gồm: nhà hàng phục vụ ẩm thực Á - Âu, quầy bar trên boong, 
                    spa massage, phòng gym, và nhiều hoạt động giải trí như chèo kayak, bơi lội, câu cá, và 
                    tham quan các điểm đến nổi tiếng.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'rules' && (
              <div>
                <h2 className="text-2xl mb-4">Quy định</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 mb-6"></div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-medium mb-2">Check-in / Check-out</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Thời gian check-in: 12:00 trưa</li>
                      <li>Thời gian check-out: 10:00 sáng</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Chính sách hủy đặt phòng</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Hủy trước 7 ngày: Hoàn 100% tiền đặt cọc</li>
                      <li>Hủy trước 3-7 ngày: Hoàn 50% tiền đặt cọc</li>
                      <li>Hủy trong vòng 3 ngày: Không hoàn lại tiền</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Quy định chung</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Không hút thuốc trong cabin</li>
                      <li>Không mang theo vật nuôi</li>
                      <li>Trẻ em dưới 4 tuổi được miễn phí</li>
                      <li>Vui lòng giữ gìn vệ sinh chung</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl mb-4">Đánh giá từ khách hàng</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 mb-6"></div>
                
                {/* Overall Rating */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-4xl text-teal-500 mb-1">{cruise.rating}</div>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{cruise.reviewCount} đánh giá</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const count = reviews.filter(r => r.rating === rating).length;
                        const percentage = (count / reviews.length) * 100;
                        return (
                          <div key={rating} className="flex items-center gap-2">
                            <span className="text-sm w-12">{rating} sao</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-yellow-400" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-8">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium">{review.name}</div>
                              <div className="text-sm text-gray-500">{review.date}</div>
                            </div>
                            <div className="flex gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'route' && (
              <div>
                <h2 className="text-2xl mb-4">Lộ trình</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 mb-6"></div>
                <div className="space-y-4">
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="font-medium mb-2">Ngày 1</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>12:00 - Đón khách tại cảng và lên tàu</li>
                      <li>13:00 - Ăn trưa trên du thuyền</li>
                      <li>15:00 - Tham quan làng chài, chèo kayak</li>
                      <li>19:00 - Ăn tối BBQ trên boong tàu</li>
                      <li>21:00 - Câu mực đêm, karaoke</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-teal-500 pl-4">
                    <h3 className="font-medium mb-2">Ngày 2</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>06:30 - Tập Thái Cực Quyền trên boong</li>
                      <li>07:30 - Ăn sáng</li>
                      <li>09:00 - Tham quan hang động</li>
                      <li>11:00 - Trả phòng và ăn trưa</li>
                      <li>12:00 - Trở về bến cảng, kết thúc chuyến đi</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Cruise Info */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              <h3 className="mb-4">Thông tin du thuyền</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Hạ thủy</div>
                    <div>{cruise.info.launched}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Cabin</div>
                    <div>{cruise.info.cabins}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <House className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-600">Thân vỏ</div>
                    <div>{cruise.info.hull}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Hành trình</div>
                    <div className="text-sm">{cruise.info.route}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-600">Điều hành</div>
                    <div className="text-sm">{cruise.info.operator}</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 px-6 rounded-lg mt-6 transition-colors" onClick={handleAddToCart}>
                Đặt ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-20 right-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg z-20"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}