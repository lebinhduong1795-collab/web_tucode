import { Ship, Award, Shield, HeadphonesIcon, ChevronRight, Star, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onDestinationClick?: (location: string) => void;
  onDestinationDetailClick?: (destination: string) => void;
}

export function HomePage({ onNavigate, onDestinationClick, onDestinationDetailClick }: HomePageProps) {
  const features = [
    {
      icon: Ship,
      title: 'Du thuyền chất lượng',
      description: 'Hơn 200+ du thuyền 3-5 sao được kiểm duyệt kỹ lưỡng'
    },
    {
      icon: Award,
      title: 'Giá tốt nhất',
      description: 'Cam kết giá tốt nhất thị trường, hoàn tiền nếu tìm được giá rẻ hơn'
    },
    {
      icon: Shield,
      title: 'Đặt phòng an toàn',
      description: 'Thanh toán bảo mật, hủy đơn linh hoạt'
    },
    {
      icon: HeadphonesIcon,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn mọi lúc'
    }
  ];

  const popularCruises = [
    {
      id: 1,
      name: 'Du thuyền Heritage Bình Chuẩn',
      image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 156,
      location: 'Vịnh Lan Hạ',
      price: '4,150,000',
      nights: '2 ngày 1 đêm'
    },
    {
      id: 2,
      name: 'Du thuyền Paradise Elegance',
      image: 'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 98,
      location: 'Vịnh Hạ Long',
      price: '3,850,000',
      nights: '2 ngày 1 đêm'
    },
    {
      id: 3,
      name: 'Du thuyền Emperor Cruises',
      image: 'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 234,
      location: 'Vịnh Bái Tử Long',
      price: '5,200,000',
      nights: '3 ngày 2 đêm'
    }
  ];

  const destinations = [
    {
      name: 'Vịnh Hạ Long',
      cruises: 120,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Vịnh Lan Hạ',
      cruises: 85,
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Vịnh Bái Tử Long',
      cruises: 56,
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYmF5fGVufDF8fHx8MTczNDg5MjAyNHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080)'
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-6xl mb-4">
            Khám phá vẻ đẹp vịnh biển Việt Nam
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Trải nghiệm kỳ nghỉ sang trọng trên du thuyền 5 sao với giá tốt nhất
          </p>
          <button 
            onClick={() => onNavigate('cruises')}
            className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Tìm du thuyền ngay
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cruises */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2">Du thuyền phổ biến</h2>
              <p className="text-gray-600">Được khách hàng yêu thích nhất</p>
            </div>
            <button 
              onClick={() => onNavigate('cruises')}
              className="text-teal-500 hover:text-teal-600 flex items-center gap-1"
            >
              Xem tất cả
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCruises.map((cruise) => (
              <div key={cruise.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={cruise.image} alt={cruise.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                    {cruise.nights}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg mb-2">{cruise.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {cruise.location}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{cruise.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({cruise.reviews} đánh giá)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl text-teal-500">{cruise.price} đ</div>
                      <div className="text-sm text-gray-500">/ khách</div>
                    </div>
                    <button 
                      onClick={() => onNavigate('cruises')}
                      className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Xem giá
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-2">Điểm đến phổ biến</h2>
            <p className="text-gray-600">Khám phá các vịnh đẹp nhất Việt Nam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div 
                key={index} 
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => onDestinationDetailClick?.(dest.name)}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{dest.name}</h3>
                  <p className="text-white/90">{dest.cruises} du thuyền</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-400 to-blue-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Sẵn sàng cho chuyến phiêu lưu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Đặt du thuyền ngay hôm nay và nhận ưu đãi lên đến 15% cho chuyến đi đầu tiên
          </p>
          <button 
            onClick={() => onNavigate('cruises')}
            className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Khám phá ngay
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}