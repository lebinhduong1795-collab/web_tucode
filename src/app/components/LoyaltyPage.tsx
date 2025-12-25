import { Gift, Star, CreditCard, TrendingUp, Award, Check, ArrowRight, Sparkles, Crown, Zap } from 'lucide-react';

interface LoyaltyPageProps {
  onClose?: () => void;
}

export function LoyaltyPage({ onClose }: LoyaltyPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Gift className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">Chương trình thẻ thưởng</h1>
            <p className="text-xl text-white/90 mb-8">
              Tích điểm - Nhận ưu đãi - Trải nghiệm du thuyền hạng sang
            </p>
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg">Đăng ký miễn phí - Nhận ngay 500 điểm thưởng</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Cách thức hoạt động</h2>
            <p className="text-gray-600 text-lg">Chỉ 3 bước đơn giản để bắt đầu tích điểm</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 text-white rounded-full mb-4 text-2xl">
                1
              </div>
              <h3 className="text-xl mb-3">Đăng ký tài khoản</h3>
              <p className="text-gray-600">
                Tạo tài khoản miễn phí và nhận ngay 500 điểm thưởng chào mừng
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 text-white rounded-full mb-4 text-2xl">
                2
              </div>
              <h3 className="text-xl mb-3">Đặt tour & Tích điểm</h3>
              <p className="text-gray-600">
                Mỗi 100.000đ chi tiêu = 10 điểm thưởng vào tài khoản của bạn
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 text-white rounded-full mb-4 text-2xl">
                3
              </div>
              <h3 className="text-xl mb-3">Đổi điểm - Nhận ưu đãi</h3>
              <p className="text-gray-600">
                Sử dụng điểm để giảm giá, nâng hạng phòng hoặc nhận quà tặng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Hạng thành viên</h2>
            <p className="text-gray-600 text-lg">Càng đặt nhiều, càng nhận nhiều ưu đãi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Bronze */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl">Đồng</h3>
                  <p className="text-sm text-gray-500">0 - 999 điểm</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tích điểm cơ bản: 10 điểm/100k</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Giảm 5% cho tour sinh nhật</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Email thông báo ưu đãi</span>
                </li>
              </ul>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-gray-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl">Bạc</h3>
                  <p className="text-sm text-gray-500">1,000 - 2,999 điểm</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tích điểm: 12 điểm/100k (+20%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Giảm 8% cho tour sinh nhật</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ưu tiên check-in sớm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Welcome drink miễn phí</span>
                </li>
              </ul>
            </div>

            {/* Gold */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-xl p-6 border-2 border-yellow-400 relative hover:shadow-2xl transition-shadow">
              <div className="absolute -top-3 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                PHỔ BIẾN
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl">Vàng</h3>
                  <p className="text-sm text-gray-600">3,000 - 4,999 điểm</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tích điểm: 15 điểm/100k (+50%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Giảm 10% cho tour sinh nhật</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Nâng hạng phòng miễn phí (nếu còn)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bữa tối lãng mạn 1 lần/năm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Hỗ trợ ưu tiên 24/7</span>
                </li>
              </ul>
            </div>

            {/* Platinum */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-xl p-6 border-2 border-purple-400 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl">Bạch Kim</h3>
                  <p className="text-sm text-gray-600">5,000+ điểm</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Tích điểm: 20 điểm/100k (+100%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Giảm 15% cho tour sinh nhật</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Đảm bảo nâng hạng phòng cao nhất</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Dịch vụ spa miễn phí</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Concierge cá nhân</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Quà tặng đặc biệt mỗi chuyến</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Points */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Cách tích điểm</h2>
            <p className="text-gray-600 text-lg">Nhiều cách để tăng điểm thưởng của bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Đặt tour du thuyền</h3>
              </div>
              <p className="text-gray-600 mb-2">Cách chính để tích điểm</p>
              <div className="text-2xl text-teal-600">10-20 điểm</div>
              <p className="text-sm text-gray-500">mỗi 100.000đ chi tiêu</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Viết đánh giá</h3>
              </div>
              <p className="text-gray-600 mb-2">Chia sẻ trải nghiệm của bạn</p>
              <div className="text-2xl text-purple-600">100 điểm</div>
              <p className="text-sm text-gray-500">mỗi đánh giá được duyệt</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Giới thiệu bạn bè</h3>
              </div>
              <p className="text-gray-600 mb-2">Bạn bè đặt tour thành công</p>
              <div className="text-2xl text-orange-600">500 điểm</div>
              <p className="text-sm text-gray-500">cho bạn và người được giới thiệu</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Đặt tour sinh nhật</h3>
              </div>
              <p className="text-gray-600 mb-2">Đặt tour trong tháng sinh nhật</p>
              <div className="text-2xl text-green-600">Điểm x2</div>
              <p className="text-sm text-gray-500">gấp đôi điểm thưởng</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Đặt sớm</h3>
              </div>
              <p className="text-gray-600 mb-2">Đặt trước 30 ngày trở lên</p>
              <div className="text-2xl text-blue-600">+200 điểm</div>
              <p className="text-sm text-gray-500">điểm thưởng bổ sung</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg">Chương trình đặc biệt</h3>
              </div>
              <p className="text-gray-600 mb-2">Khuyến mãi theo mùa</p>
              <div className="text-2xl text-red-600">Lên đến 1000</div>
              <p className="text-sm text-gray-500">điểm thưởng trong các sự kiện</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redeem Points */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Đổi điểm - Nhận ưu đãi</h2>
            <p className="text-gray-600 text-lg">Sử dụng điểm thưởng để nhận quà tặng hấp dẫn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-2">Giảm giá trực tiếp</h3>
                  <p className="text-gray-600 text-sm">Đổi điểm lấy mã giảm giá</p>
                </div>
                <div className="text-teal-500">
                  <Gift className="w-8 h-8" />
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between pb-3 border-b">
                  <span>500 điểm</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-teal-600">100.000đ</span>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <span>1,000 điểm</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-teal-600">250.000đ</span>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <span>2,000 điểm</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-teal-600">500.000đ</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>5,000 điểm</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-teal-600">1.500.000đ</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-2">Dịch vụ cao cấp</h3>
                  <p className="text-gray-600 text-sm">Nâng cấp trải nghiệm du thuyền</p>
                </div>
                <div className="text-purple-500">
                  <Crown className="w-8 h-8" />
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between pb-3 border-b">
                  <span className="text-sm">Nâng hạng phòng Standard → Deluxe</span>
                  <span className="text-purple-600">800 điểm</span>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <span className="text-sm">Nâng hạng phòng Deluxe → Suite</span>
                  <span className="text-purple-600">1,500 điểm</span>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <span className="text-sm">Bữa tối lãng mạn trên boong tàu</span>
                  <span className="text-purple-600">600 điểm</span>
                </li>
                <li className="flex items-center justify-between pb-3 border-b">
                  <span className="text-sm">Dịch vụ spa 60 phút</span>
                  <span className="text-purple-600">400 điểm</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm">Private tour kayak/snorkeling</span>
                  <span className="text-purple-600">300 điểm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Sẵn sàng tham gia chương trình?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Đăng ký ngay hôm nay và nhận 500 điểm thưởng chào mừng cùng nhiều ưu đãi độc quyền
          </p>
          <button className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Đăng ký miễn phí
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Câu hỏi thường gặp</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg mb-2">Điểm thưởng có thời hạn sử dụng không?</h3>
                <p className="text-gray-600">
                  Điểm thưởng có hiệu lực trong 24 tháng kể từ ngày tích lũy. Để giữ điểm không hết hạn, bạn chỉ cần có ít nhất 1 giao dịch trong vòng 24 tháng.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg mb-2">Tôi có thể chuyển điểm cho người khác không?</h3>
                <p className="text-gray-600">
                  Hiện tại chương trình chưa hỗ trợ chuyển điểm. Tuy nhiên, bạn có thể sử dụng điểm của mình để đặt tour cho người khác.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg mb-2">Khi nào điểm thưởng được cộng vào tài khoản?</h3>
                <p className="text-gray-600">
                  Điểm thưởng sẽ được cộng vào tài khoản sau 7 ngày kể từ khi hoàn thành chuyến đi và thanh toán đầy đủ.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg mb-2">Tôi có thể kết hợp điểm thưởng với mã giảm giá không?</h3>
                <p className="text-gray-600">
                  Có, bạn hoàn toàn có thể sử dụng điểm thưởng kết hợp với các mã giảm giá khác để tối đa hóa ưu đãi.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg mb-2">Làm thế nào để kiểm tra số điểm hiện có?</h3>
                <p className="text-gray-600">
                  Đăng nhập vào tài khoản của bạn, số điểm hiện có sẽ hiển thị ngay trên dashboard. Bạn cũng có thể xem lịch sử tích điểm chi tiết.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
