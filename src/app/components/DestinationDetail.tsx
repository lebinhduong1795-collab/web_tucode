import { MapPin, Star, Users, Calendar, Ship, Sparkles, Camera, Utensils, Waves, Mountain, X, ChevronRight } from 'lucide-react';

interface DestinationDetailProps {
  destination: string;
  onClose: () => void;
  onBookTour: () => void;
}

export function DestinationDetail({ destination, onClose, onBookTour }: DestinationDetailProps) {
  // Data cho từng điểm đến
  const destinationData: Record<string, any> = {
    'Vịnh Hạ Long': {
      name: 'Vịnh Hạ Long',
      subtitle: 'Di sản thiên nhiên thế giới UNESCO',
      heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vịnh Hạ Long là một kỳ quan thiên nhiên nổi tiếng thế giới với hàng nghìn hòn đảo đá vôi nhấp nhô trên mặt nước xanh ngọc bích. Được UNESCO công nhận là Di sản Thiên nhiên Thế giới năm 1994 và 2000, Vịnh Hạ Long là điểm đến không thể bỏ qua cho bất kỳ ai đến Việt Nam.',
      highlights: [
        {
          icon: Mountain,
          title: 'Hơn 1.600 hòn đảo',
          description: 'Cảnh quan núi đá vôi hùng vĩ với hình dạng độc đáo'
        },
        {
          icon: Waves,
          title: 'Làn nước xanh ngọc',
          description: 'Biển xanh trong vắt, hoàn hảo cho hoạt động tắm biển và chèo thuyền kayak'
        },
        {
          icon: Camera,
          title: 'Hang động kỳ thú',
          description: 'Khám phá các hang động nổi tiếng như Sửng Sốt, Thiên Cung, Đầu Gỗ'
        },
        {
          icon: Utensils,
          title: 'Ẩm thực hải sản',
          description: 'Thưởng thức hải sản tươi sống được đánh bắt trực tiếp tại vịnh'
        }
      ],
      stats: [
        { number: '1.600+', label: 'Hòn đảo' },
        { number: '2x', label: 'Di sản UNESCO' },
        { number: '5M+', label: 'Du khách/năm' },
        { number: '1994', label: 'Năm công nhận UNESCO' }
      ],
      reasons: [
        {
          title: 'Di sản thiên nhiên thế giới',
          description: 'Được UNESCO công nhận 2 lần (1994, 2000) là Di sản Thiên nhiên Thế giới, Vịnh Hạ Long là niềm tự hào của Việt Nam và điểm đến mơ ước của du khách toàn cầu.'
        },
        {
          title: 'Cảnh quan thiên nhiên kỳ vĩ',
          description: 'Hệ thống đảo đá vôi hình thành từ hàng triệu năm tạo nên những cảnh quan độc đáo, hùng vĩ không nơi nào có được. Mỗi hòn đảo đều có câu chuyện riêng và hình dáng đặc trưng.'
        },
        {
          title: 'Trải nghiệm du thuyền sang trọng',
          description: 'Với hơn 500 du thuyền từ 3 đến 5 sao, bạn có thể lựa chọn trải nghiệm phù hợp với ngân sách. Ngủ đêm trên du thuyền giữa vịnh là trải nghiệm không thể quên.'
        },
        {
          title: 'Hoạt động đa dạng',
          description: 'Chèo thuyền kayak khám phá hang động, tắm biển tại bãi cát trắng, câu mực đêm, tham quan làng chài, học nấu ăn... Không bao giờ thiếu điều thú vị để làm.'
        },
        {
          title: 'Dễ dàng tiếp cận',
          description: 'Chỉ cách Hà Nội 165km (khoảng 2.5 giờ đi xe), giao thông thuận tiện với cao tốc hiện đại. Phù hợp cho chuyến du lịch ngắn ngày hoặc kết hợp với các điểm đến khác.'
        },
        {
          title: 'Thời tiết lý tưởng quanh năm',
          description: 'Có thể du lịch quanh năm, mỗi mùa đều có nét đẹp riêng. Mùa xuân và thu được đánh giá là thời điểm lý tưởng nhất với thời tiết ôn hòa, nắng đẹp.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'Vịnh Lan Hạ': {
      name: 'Vịnh Lan Hạ',
      subtitle: 'Thiên đường ẩn mình của Vịnh Bắc Bộ',
      heroImage: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vịnh Lan Hạ là một phần của quần đảo Cát Bà, mang vẻ đẹp hoang sơ và yên bình hơn so với Vịnh Hạ Long. Với hơn 400 hòn đảo lớn nhỏ, Lan Hạ là điểm đến lý tưởng cho những ai tìm kiếm sự thanh tĩnh và muốn tránh xa đám đông.',
      highlights: [
        {
          icon: Mountain,
          title: '400+ hòn đảo',
          description: 'Cảnh quan hoang sơ, ít bị tác động bởi du lịch đại trà'
        },
        {
          icon: Waves,
          title: 'Bãi biển đẹp',
          description: 'Nhiều bãi tắm tuyệt đẹp với cát trắng mịn và nước trong xanh'
        },
        {
          icon: Camera,
          title: 'Ít du khách',
          description: 'Trải nghiệm yên tĩnh, riêng tư giữa thiên nhiên tươi đẹp'
        },
        {
          icon: Ship,
          title: 'Làng chài truyền thống',
          description: 'Khám phá cuộc sống ngư dân địa phương giản dị, chân thật'
        }
      ],
      stats: [
        { number: '400+', label: 'Hòn đảo' },
        { number: '139', label: 'Bãi tắm đẹp' },
        { number: '70%', label: 'Ít du khách hơn' },
        { number: '2004', label: 'Được phát hiện' }
      ],
      reasons: [
        {
          title: 'Vẻ đẹp hoang sơ độc đáo',
          description: 'Lan Hạ vẫn giữ được vẻ đẹp nguyên sơ, chưa bị thương mại hóa quá mức như Hạ Long. Đây là nơi lý tưởng để trải nghiệm thiên nhiên thuần khiết.'
        },
        {
          title: 'Ít du khách, nhiều riêng tư',
          description: 'Với số lượng du khách ít hơn đáng kể so với Hạ Long, bạn sẽ có không gian riêng tư để tận hưởng kỳ nghỉ một cách trọn vẹn nhất.'
        },
        {
          title: 'Bãi biển tuyệt đẹp',
          description: 'Lan Hạ sở hữu 139 bãi tắm đẹp với cát trắng mịn, nước biển trong xanh - điều mà Hạ Long không có nhiều. Lý tưởng cho hoạt động tắm biển và thể thao nước.'
        },
        {
          title: 'Văn hóa làng chài độc đáo',
          description: 'Ghé thăm các làng chài nổi, tìm hiểu cuộc sống ngư dân địa phương, thậm chí có thể tham gia đánh bắt hải sản cùng họ.'
        },
        {
          title: 'Phù hợp mọi hoạt động',
          description: 'Leo núi, trekking, chèo kayak, lặn ngắm san hô, câu cá, bơi lội... Lan Hạ là thiên đường cho người yêu thích hoạt động ngoài trời.'
        },
        {
          title: 'Giá cả hợp lý hơn',
          description: 'Chi phí du lịch tại Lan Hạ thường thấp hơn 20-30% so với Hạ Long, giúp bạn có trải nghiệm tuyệt vời với ngân sách tiết kiệm.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJlZHJvb20lMjBjYWJpbnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'Vịnh Bái Tử Long': {
      name: 'Vịnh Bái Tử Long',
      subtitle: 'Kỳ quan ẩn giấu của Vịnh Bắc Bộ',
      heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vịnh Bái Tử Long nằm ở phía đông bắc Vịnh Hạ Long, là vùng vịnh hoang sơ nhất trong ba vịnh. Với cảnh quan tương tự Hạ Long nhưng ít du khách hơn, đây là lựa chọn hoàn hảo cho những ai muốn khám phá vẻ đẹp nguyên bản của vịnh Bắc Bộ.',
      highlights: [
        {
          icon: Mountain,
          title: 'Cảnh quan hoang sơ',
          description: 'Vẻ đẹp tự nhiên nguyên bản, chưa khai thác du lịch nhiều'
        },
        {
          icon: Sparkles,
          title: 'Yên tĩnh tuyệt đối',
          description: 'Không gian thanh bình, ít du thuyền qua lại'
        },
        {
          icon: Camera,
          title: 'Động vật hoang dã',
          description: 'Môi trường sinh thái đa dạng với nhiều loài động thực vật quý hiếm'
        },
        {
          icon: Users,
          title: 'Trải nghiệm độc đáo',
          description: 'Khám phá vùng vịnh ít người biết đến, tạo kỷ niệm riêng biệt'
        }
      ],
      stats: [
        { number: '200+', label: 'Hòn đảo' },
        { number: '95%', label: 'Không tác động' },
        { number: '50+', label: 'Loài động vật' },
        { number: '2006', label: 'Thành lập khu bảo tồn' }
      ],
      reasons: [
        {
          title: 'Thiên đường ẩn mình',
          description: 'Bái Tử Long là vùng vịnh ít được biết đến nhất, mang đến trải nghiệm khám phá thực sự cho những ai muốn tránh xa con đường du lịch thông thường.'
        },
        {
          title: 'Không gian riêng tư tuyệt đối',
          description: 'Với lưu lượng du khách thấp nhất trong ba vịnh, bạn có thể tận hưởng không gian yên tĩnh như có cả vịnh cho riêng mình.'
        },
        {
          title: 'Sinh thái đa dạng',
          description: 'Là khu bảo tồn thiên nhiên với hệ sinh thái phong phú, nơi sinh sống của nhiều loài động thực vật quý hiếm.'
        },
        {
          title: 'Phù hợp người yêu thiên nhiên',
          description: 'Lý tưởng cho những ai đam mê nhiếp ảnh thiên nhiên, quan sát chim, hoặc đơn giản là muốn hòa mình vào thiên nhiên hoang dã.'
        },
        {
          title: 'Kết hợp hoàn hảo',
          description: 'Có thể kết hợp tham quan cả Hạ Long và Bái Tử Long trong một chuyến đi để trải nghiệm cả hai thế giới - sôi động và yên tĩnh.'
        },
        {
          title: 'Giá trị văn hóa độc đáo',
          description: 'Tìm hiểu văn hóa và lịch sử địa phương qua các làng chài truyền thống còn giữ được nếp sống nguyên bản.'
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  };

  const data = destinationData[destination] || destinationData['Vịnh Hạ Long'];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={data.heroImage}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">{data.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">{data.name}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {data.description}
            </p>
            <button
              onClick={onBookTour}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 transition-colors"
            >
              Đặt tour ngay
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Điểm nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.highlights.map((highlight: any, index: number) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="text-xl mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              Tại sao nên chọn {data.name}?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Những lý do thuyết phục bạn nên đến với điểm đến tuyệt vời này
            </p>
            
            <div className="space-y-8">
              {data.reasons.map((reason: any, index: number) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{reason.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Thư viện ảnh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.gallery.map((image: string, index: number) => (
              <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
                <img
                  src={image}
                  alt={`${data.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Sẵn sàng khám phá?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đừng bỏ lỡ cơ hội trải nghiệm vẻ đẹp tuyệt vời của {data.name}. 
            Đặt tour ngay hôm nay để nhận ưu đãi hấp dẫn!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookTour}
              className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Ship className="w-5 h-5" />
              Xem các tour du thuyền
            </button>
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg transition-colors"
            >
              Khám phá thêm
            </button>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600">
                <span className="text-2xl text-gray-900">4.9/5</span> - Đánh giá từ hơn 50,000 du khách
              </p>
            </div>
            <div className="flex items-center gap-8 text-center">
              <div>
                <div className="text-3xl mb-1">98%</div>
                <div className="text-sm text-gray-600">Hài lòng</div>
              </div>
              <div>
                <div className="text-3xl mb-1">95%</div>
                <div className="text-sm text-gray-600">Đề xuất</div>
              </div>
              <div>
                <div className="text-3xl mb-1">5M+</div>
                <div className="text-sm text-gray-600">Du khách</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
