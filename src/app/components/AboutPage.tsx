import { Award, Users, Ship, Target, Heart, Shield, TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface AboutPageProps {
  onClose?: () => void;
}

export function AboutPage({ onClose }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Về Chúng Tôi</h1>
            <p className="text-xl text-white/90 mb-8">
              Đơn vị hàng đầu cung cấp dịch vụ du thuyền cao cấp tại Vịnh Hạ Long và các vùng lân cận
            </p>
            <div className="flex flex-wrap gap-8 justify-center text-center">
              <div>
                <div className="text-4xl mb-2">10+</div>
                <div className="text-white/80">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-4xl mb-2">500+</div>
                <div className="text-white/80">Du thuyền hợp tác</div>
              </div>
              <div>
                <div className="text-4xl mb-2">50K+</div>
                <div className="text-white/80">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-4xl mb-2">4.9/5</div>
                <div className="text-white/80">Đánh giá trung bình</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Câu chuyện của chúng tôi</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Được thành lập vào năm 2014, <strong>Halong Bay Cruises</strong> bắt đầu từ niềm đam mê chia sẻ vẻ đẹp kỳ vĩ của Vịnh Hạ Long - Di sản Thiên nhiên Thế giới UNESCO - với du khách trên toàn thế giới.
              </p>
              <p>
                Từ một đội ngũ nhỏ với chỉ 5 người, chúng tôi đã phát triển thành một trong những nền tảng đặt du thuyền hàng đầu Việt Nam, hợp tác với hơn 500 du thuyền từ 3 đến 5 sao, phục vụ hơn 50,000 khách hàng mỗi năm.
              </p>
              <p>
                Chúng tôi tự hào là cầu nối đáng tin cậy giữa du khách và các đơn vị cung cấp dịch vụ du thuyền chất lượng cao, mang đến những trải nghiệm khó quên trên vịnh biển tuyệt đẹp của Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-2xl mb-4">Sứ mệnh</h3>
              <p className="text-gray-700 leading-relaxed">
                Mang đến cho mọi du khách trải nghiệm du thuyền đẳng cấp, an toàn và đáng nhớ tại Vịnh Hạ Long, với dịch vụ tận tâm và giá cả minh bạch nhất.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl mb-4">Tầm nhìn</h3>
              <p className="text-gray-700 leading-relaxed">
                Trở thành nền tảng đặt du thuyền số 1 tại Việt Nam, được khách hàng và đối tác tin tưởng lựa chọn, góp phần phát triển du lịch bền vững.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl mb-3">Tận tâm</h3>
              <p className="text-gray-600">
                Đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu trong mọi dịch vụ
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Shield className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl mb-3">Uy tín</h3>
              <p className="text-gray-600">
                Minh bạch trong mọi giao dịch, cam kết chất lượng dịch vụ như đã công bố
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                <Award className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl mb-3">Chuyên nghiệp</h3>
              <p className="text-gray-600">
                Đội ngũ am hiểu sâu sắc về du lịch Hạ Long, luôn hỗ trợ tận tình 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Thành tích nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-lg mb-2">Top 1</h4>
              <p className="text-gray-600 text-sm">Nền tảng đặt du thuyền Hạ Long</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg mb-2">50,000+</h4>
              <p className="text-gray-600 text-sm">Khách hàng mỗi năm</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Ship className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h4 className="text-lg mb-2">500+</h4>
              <p className="text-gray-600 text-sm">Du thuyền đối tác</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg mb-2">98%</h4>
              <p className="text-gray-600 text-sm">Khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Tại sao chọn chúng tôi?</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Giá tốt nhất thị trường</h3>
                <p className="text-gray-600">
                  Cam kết giá cạnh tranh nhất, không phát sinh chi phí ẩn. Nếu tìm được giá rẻ hơn, chúng tôi sẽ hoàn lại chênh lệch 120%.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Đặt chỗ dễ dàng & nhanh chóng</h3>
                <p className="text-gray-600">
                  Giao diện thân thiện, đặt chỗ chỉ trong 3 phút. Xác nhận tức thì qua email và SMS.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Hỗ trợ 24/7</h3>
                <p className="text-gray-600">
                  Đội ngũ tư vấn viên chuyên nghiệp luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi bằng tiếng Việt và tiếng Anh.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Đảm bảo chất lượng</h3>
                <p className="text-gray-600">
                  Tất cả du thuyền đều được kiểm tra kỹ lưỡng về tiêu chuẩn an toàn, vệ sinh và chất lượng dịch vụ.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Chính sách hủy linh hoạt</h3>
                <p className="text-gray-600">
                  Hủy miễn phí trước 7 ngày, hoàn tiền 100%. Đổi lịch dễ dàng không mất phí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8">Liên hệ với chúng tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Địa chỉ</h4>
                <p className="text-white/90">
                  123 Đường Hạ Long<br />
                  Phường Bãi Cháy, TP. Hạ Long<br />
                  Quảng Ninh, Việt Nam
                </p>
              </div>

              <div>
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Hotline</h4>
                <p className="text-white/90">
                  +84 123 456 789<br />
                  +84 987 654 321
                </p>
              </div>

              <div>
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Email</h4>
                <p className="text-white/90">
                  info@halongcruises.vn<br />
                  support@halongcruises.vn
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>Giờ làm việc: 24/7 - Luôn sẵn sàng phục vụ quý khách</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
