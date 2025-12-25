import { FileText, CreditCard, XCircle, Shield, Users, AlertCircle, CheckCircle } from 'lucide-react';

interface TermsPageProps {
  onClose?: () => void;
}

export function TermsPage({ onClose }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">Điều khoản & Điều kiện</h1>
            <p className="text-xl text-white/90">
              Vui lòng đọc kỹ các điều khoản trước khi sử dụng dịch vụ
            </p>
            <p className="text-sm text-white/80 mt-4">
              Cập nhật lần cuối: 01/01/2025
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto py-4 text-sm">
            <a href="#general" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Điều khoản chung
            </a>
            <a href="#booking" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Đặt chỗ
            </a>
            <a href="#payment" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Thanh toán
            </a>
            <a href="#cancellation" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Hủy/Đổi tour
            </a>
            <a href="#privacy" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Bảo mật
            </a>
            <a href="#customer" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Trách nhiệm khách hàng
            </a>
            <a href="#company" className="whitespace-nowrap text-teal-500 hover:text-teal-600">
              Trách nhiệm công ty
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* General Terms */}
          <section id="general" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-teal-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">1. Điều khoản chung</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Bằng việc truy cập và sử dụng website <strong>VivuCNWEB</strong>, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website cung cấp dịch vụ đặt chỗ trực tuyến cho các tour du thuyền tại Vịnh Hạ Long và vùng lân cận.</li>
                <li>Chúng tôi có quyền thay đổi, sửa đổi hoặc cập nhật các điều khoản này bất kỳ lúc nào mà không cần thông báo trước.</li>
                <li>Người dùng có trách nhiệm kiểm tra định kỳ để cập nhật các thay đổi.</li>
                <li>Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.</li>
              </ul>
            </div>
          </section>

          {/* Booking Policy */}
          <section id="booking" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">2. Chính sách đặt chỗ</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">2.1. Quy trình đặt chỗ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Khách hàng chọn du thuyền và gói dịch vụ mong muốn trên website.</li>
                  <li>Điền đầy đủ thông tin cá nhân và yêu cầu đặc biệt (nếu có).</li>
                  <li>Xác nhận thông tin và tiến hành thanh toán.</li>
                  <li>Nhận email xác nhận đặt chỗ trong vòng 24 giờ (thường là ngay lập tức).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">2.2. Xác nhận đặt chỗ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Đặt chỗ chỉ được coi là hoàn tất khi nhận được email xác nhận từ chúng tôi.</li>
                  <li>Vui lòng kiểm tra kỹ thông tin trong email xác nhận và báo ngay nếu có sai sót.</li>
                  <li>Trong trường hợp du thuyền hết chỗ, chúng tôi sẽ liên hệ để đề xuất phương án thay thế tương đương hoặc hoàn tiền 100%.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">2.3. Thay đổi thông tin</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thay đổi tên khách: Miễn phí nếu thông báo trước 48 giờ.</li>
                  <li>Thay đổi loại phòng: Tùy theo tình trạng còn phòng, có thể phát sinh phụ phí.</li>
                  <li>Yêu cầu đặc biệt (sinh nhật, tuần trăng mật...): Thông báo trước 72 giờ.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Policy */}
          <section id="payment" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">3. Chính sách thanh toán</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">3.1. Phương thức thanh toán</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chuyển khoản ngân hàng (khuyên dùng)</li>
                  <li>Thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard, JCB)</li>
                  <li>Ví điện tử (MoMo, ZaloPay, VNPay)</li>
                  <li>Thanh toán trực tiếp tại văn phòng (chỉ áp dụng cho khách tại Quảng Ninh)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">3.2. Chính sách đặt cọc</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Đặt chỗ trước 30 ngày:</strong> Đặt cọc 30% tổng giá trị, thanh toán phần còn lại trước 7 ngày khởi hành.</li>
                  <li><strong>Đặt chỗ từ 15-30 ngày:</strong> Đặt cọc 50% tổng giá trị, thanh toán phần còn lại trước 5 ngày khởi hành.</li>
                  <li><strong>Đặt chỗ dưới 15 ngày:</strong> Thanh toán 100% tổng giá trị ngay khi đặt chỗ.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">3.3. Giá và thuế</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tất cả giá hiển thị đã bao gồm VAT 8%.</li>
                  <li>Giá chưa bao gồm vé máy bay, vận chuyển từ Hà Nội đến Hạ Long (nếu có).</li>
                  <li>Giá có thể thay đổi theo mùa cao điểm (Tết, Lễ 30/4, Giáng sinh...).</li>
                  <li>Chúng tôi cam kết không có chi phí ẩn, mọi phụ phí đều được thông báo rõ ràng trước khi thanh toán.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section id="cancellation" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">4. Chính sách hủy & đổi tour</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">4.1. Chính sách hủy tour</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Thời gian hủy được tính từ khi nhận được email xác nhận hủy của khách hàng.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hủy trước 15 ngày:</strong> Hoàn lại 100% số tiền đã thanh toán.</li>
                  <li><strong>Hủy từ 7-14 ngày:</strong> Hoàn lại 70% số tiền đã thanh toán.</li>
                  <li><strong>Hủy từ 3-6 ngày:</strong> Hoàn lại 50% số tiền đã thanh toán.</li>
                  <li><strong>Hủy dưới 3 ngày:</strong> Không hoàn lại tiền.</li>
                  <li><strong>No-show (không xuất hiện):</strong> Không hoàn lại tiền.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">4.2. Chính sách đổi lịch</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Đổi lịch trước 10 ngày:</strong> Miễn phí đổi lịch 1 lần (nếu còn chỗ).</li>
                  <li><strong>Đổi lịch từ 5-9 ngày:</strong> Phí 10% tổng giá trị booking.</li>
                  <li><strong>Đổi lịch dưới 5 ngày:</strong> Phí 20% tổng giá trị booking.</li>
                  <li>Chỉ được đổi lịch tối đa 2 lần cho một booking.</li>
                  <li>Lịch trình mới phải trong vòng 6 tháng kể từ ngày khởi hành ban đầu.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">4.3. Hoàn tiền</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thời gian hoàn tiền: 7-14 ngày làm việc kể từ ngày chấp thuận hủy.</li>
                  <li>Hoàn tiền qua tài khoản ngân hàng hoặc phương thức thanh toán ban đầu.</li>
                  <li>Chi phí chuyển khoản (nếu có) sẽ do khách hàng chịu.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">4.4. Trường hợp đặc biệt</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm">
                    <strong>Hoàn tiền 100% trong các trường hợp:</strong>
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Du thuyền hủy chuyến do lỗi kỹ thuật hoặc thời tiết xấu.</li>
                    <li>Chúng tôi không thể cung cấp dịch vụ theo đúng cam kết.</li>
                    <li>Khách hàng có lý do bất khả kháng (ốm đau nặng có giấy bác sĩ, tang lễ...).</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">5. Chính sách bảo mật</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">5.1. Thu thập thông tin</h3>
                <p className="mb-2">Chúng tôi thu thập các thông tin sau:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thông tin cá nhân: Họ tên, email, số điện thoại, địa chỉ.</li>
                  <li>Thông tin thanh toán: Số thẻ, thông tin giao dịch (được mã hóa SSL 256-bit).</li>
                  <li>Thông tin sử dụng: Lịch sử tìm kiếm, đặt chỗ, preferences.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">5.2. Sử dụng thông tin</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Xử lý đặt chỗ và cung cấp dịch vụ.</li>
                  <li>Gửi thông tin xác nhận, nhắc nhở, thông báo quan trọng.</li>
                  <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng.</li>
                  <li>Gửi email marketing (chỉ khi được khách hàng đồng ý).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">5.3. Bảo vệ thông tin</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mã hóa SSL/TLS cho tất cả giao dịch.</li>
                  <li>Lưu trữ dữ liệu trên server an toàn với firewall bảo vệ.</li>
                  <li>Không chia sẻ thông tin cá nhân cho bên thứ ba (trừ đối tác du thuyền cần thiết).</li>
                  <li>Nhân viên được đào tạo về bảo mật và ký cam kết bảo mật.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">5.4. Quyền của khách hàng</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân.</li>
                  <li>Từ chối nhận email marketing bất kỳ lúc nào.</li>
                  <li>Khiếu nại về việc sử dụng thông tin không đúng mục đích.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customer Responsibilities */}
          <section id="customer" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">6. Trách nhiệm của khách hàng</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc pl-6 space-y-3">
                <li>Cung cấp thông tin chính xác, đầy đủ khi đặt chỗ.</li>
                <li>Kiểm tra kỹ email xác nhận và thông báo ngay nếu có sai sót.</li>
                <li>Xuất trình giấy tờ tùy thân (CCCD/Passport) khi lên tàu.</li>
                <li>Có mặt đúng giờ tại điểm tập trung. Trễ quá 30 phút có thể bị coi là no-show.</li>
                <li>Tuân thủ quy định an toàn trên du thuyền và hướng dẫn của thuyền trưởng.</li>
                <li>Giữ gìn vệ sinh, không gây ồn ào ảnh hưởng đến khách khác.</li>
                <li>Không mang theo vật dễ cháy nổ, vũ khí, ma túy hoặc vật phẩm bất hợp pháp.</li>
                <li>Bồi thường thiệt hại nếu làm hỏng tài sản của du thuyền.</li>
                <li>Mua bảo hiểm du lịch (khuyến nghị mạnh).</li>
                <li>Thông báo trước về tình trạng sức khỏe đặc biệt, dị ứng thực phẩm...</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="text-sm">
                  <strong>Quan trọng:</strong> Trẻ em dưới 12 tuổi phải có người lớn đi cùng. Phụ nữ có thai trên 7 tháng nên tham khảo ý kiến bác sĩ trước khi đặt tour.
                </p>
              </div>
            </div>
          </section>

          {/* Company Responsibilities */}
          <section id="company" className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-teal-500" />
              </div>
              <h2 className="text-2xl md:text-3xl">7. Trách nhiệm của công ty</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc pl-6 space-y-3">
                <li>Cung cấp thông tin chính xác về du thuyền, dịch vụ và giá cả.</li>
                <li>Xác nhận đặt chỗ trong vòng 24 giờ (thường là ngay lập tức).</li>
                <li>Đảm bảo chất lượng dịch vụ theo đúng mô tả trên website.</li>
                <li>Hỗ trợ khách hàng 24/7 qua hotline, email và chat.</li>
                <li>Xử lý khiếu nại trong vòng 48 giờ làm việc.</li>
                <li>Bảo mật thông tin khách hàng theo quy định pháp luật.</li>
                <li>Thông báo kịp thời về mọi thay đổi liên quan đến booking.</li>
                <li>Hoàn tiền đúng thời hạn theo chính sách đã công bố.</li>
              </ul>

              <div>
                <h3 className="text-xl mb-3 mt-6">7.1. Giới hạn trách nhiệm</h3>
                <p className="mb-2">Chúng tôi không chịu trách nhiệm trong các trường hợp:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thời tiết xấu, thiên tai, dịch bệnh buộc phải hủy/hoãn chuyến.</li>
                  <li>Sự cố kỹ thuật do lỗi của hãng du thuyền (chúng tôi sẽ hỗ trợ đền bù theo chính sách).</li>
                  <li>Tai nạn, thương tích do khách hàng không tuân thủ quy định an toàn.</li>
                  <li>Mất mát tài sản cá nhân do khách hàng không bảo quản cẩn thận.</li>
                  <li>Chi phí phát sinh do khách hàng thay đổi hành trình tự ý.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Force Majeure */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl mb-6">8. Điều khoản bất khả kháng</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Trong trường hợp xảy ra các sự kiện bất khả kháng như:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thiên tai (bão, lũ lụt, động đất...)</li>
                <li>Dịch bệnh, chiến tranh, khủng bố</li>
                <li>Quyết định của cơ quan chức năng (cấm đi lại, phong tỏa...)</li>
                <li>Sự cố nghiêm trọng khác ngoài tầm kiểm soát</li>
              </ul>
              <p className="mt-4">
                Cả hai bên đều được miễn trừ trách nhiệm. Khách hàng có thể chọn:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dời lịch sang thời điểm khác (trong vòng 12 tháng)</li>
                <li>Nhận voucher với giá trị 110% để sử dụng trong tương lai</li>
                <li>Hoàn tiền 100% (không bao gồm phí giao dịch ngân hàng nếu có)</li>
              </ul>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl mb-6">9. Giải quyết tranh chấp</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Mọi tranh chấp phát sinh sẽ được giải quyết theo trình tự sau:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Thương lượng trực tiếp:</strong> Hai bên cùng ngồi lại để tìm phương án giải quyết hòa hòa trong vòng 15 ngày.
                </li>
                <li>
                  <strong>Hòa giải:</strong> Nếu không thỏa thuận được, yêu cầu cơ quan chức năng hòa giải.
                </li>
                <li>
                  <strong>Tòa án:</strong> Trường hợp không hòa giải được, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Việt Nam.
                </li>
              </ol>
              <p className="mt-4">
                Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl mb-4 text-center">Cần hỗ trợ?</h2>
            <p className="text-center mb-6 text-white/90">
              Nếu có bất kỳ thắc mắc nào về điều khoản và điều kiện, vui lòng liên hệ với chúng tôi:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <strong>Hotline:</strong><br />
                +84 123 456 789
              </div>
              <div>
                <strong>Email:</strong><br />
                support@vivucnweb.com
              </div>
              <div>
                <strong>Giờ làm việc:</strong><br />
                24/7 - Luôn sẵn sàng
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <p className="text-sm text-gray-700">
              <strong>Bằng việc sử dụng dịch vụ của chúng tôi, bạn xác nhận đã đọc, hiểu và đồng ý với tất cả các điều khoản và điều kiện nêu trên.</strong>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
