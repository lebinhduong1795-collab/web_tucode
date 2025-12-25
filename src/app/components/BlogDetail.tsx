import { Calendar, User, Clock, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  const relatedPosts = [
    {
      id: 1,
      title: 'Top 5 hoạt động không thể bỏ qua trên du thuyền',
      image: 'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '05/12/2024',
      readTime: '4 phút đọc'
    },
    {
      id: 2,
      title: 'So sánh du thuyền 3 sao, 4 sao và 5 sao',
      image: 'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJlZHJvb20lMjBjYWJpbnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '03/12/2024',
      readTime: '6 phút đọc'
    },
    {
      id: 3,
      title: 'Khám phá vẻ đẹp hoang sơ của Vịnh Lan Hạ',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '12/12/2024',
      readTime: '7 phút đọc'
    }
  ];

  // Content based on post title
  const getArticleContent = () => {
    if (post.title.includes('10 điều cần biết')) {
      return (
        <>
          <p className="mb-6">
            Vịnh Hạ Long là một trong những điểm đến du lịch nổi tiếng nhất Việt Nam, thu hút hàng triệu lượt khách mỗi năm. Để có một chuyến du thuyền trọn vẹn và tiết kiệm, bạn cần lưu ý những điều sau đây.
          </p>

          <h2 className="text-2xl mb-4 mt-8">1. Chọn thời điểm đi du lịch phù hợp</h2>
          <p className="mb-6">
            Thời gian lý tưởng để đi du lịch Hạ Long là từ tháng 3 đến tháng 5 và từ tháng 9 đến tháng 11. Đây là lúc thời tiết mát mẻ, ít mưa và giá cả hợp lý hơn so với mùa cao điểm.
          </p>

          <h2 className="text-2xl mb-4 mt-8">2. Lựa chọn loại du thuyền phù hợp với ngân sách</h2>
          <p className="mb-6">
            Du thuyền Hạ Long có nhiều hạng khác nhau từ 3 sao đến 5 sao. Du thuyền 3 sao có giá từ 1-2 triệu đồng/người, 4 sao từ 2-4 triệu đồng, và 5 sao từ 4-8 triệu đồng cho tour 2 ngày 1 đêm.
          </p>

          <h2 className="text-2xl mb-4 mt-8">3. Đọc kỹ chính sách hủy phòng</h2>
          <p className="mb-6">
            Mỗi công ty du thuyền có chính sách hủy phòng khác nhau. Thông thường, hủy trước 7 ngày sẽ được hoàn 100%, trước 3-6 ngày hoàn 50%, và trong vòng 2 ngày sẽ không được hoàn tiền.
          </p>

          <h2 className="text-2xl mb-4 mt-8">4. Kiểm tra các tiện ích đi kèm</h2>
          <p className="mb-6">
            Hãy chắc chắn rằng bạn biết những gì được bao gồm trong giá vé: bữa ăn, hoạt động giải trí, dịch vụ kayak, tham quan các hang động. Một số du thuyền tính phí riêng cho các hoạt động này.
          </p>

          <h2 className="text-2xl mb-4 mt-8">5. Chuẩn bị đồ đạc cần thiết</h2>
          <p className="mb-6">
            Mang theo kem chống nắng, thuốc say sóng, áo khoác gió, dép đi trong phòng, và đồ bơi. Đừng quên máy ảnh để ghi lại những khoảnh khắc đẹp.
          </p>

          <h2 className="text-2xl mb-4 mt-8">6. So sánh giá từ nhiều nguồn</h2>
          <p className="mb-6">
            Đặt trực tiếp qua website của chúng tôi thường có giá tốt hơn so với đặt qua trung gian. Bạn cũng có thể nhận được các ưu đãi đặc biệt khi đặt sớm hoặc đặt cho nhóm đông người.
          </p>

          <h2 className="text-2xl mb-4 mt-8">7. Đọc đánh giá từ khách hàng trước</h2>
          <p className="mb-6">
            Review từ các khách du lịch trước đó rất quan trọng. Họ sẽ chia sẻ trải nghiệm thực tế về chất lượng phòng, đồ ăn, dịch vụ và thái độ của nhân viên.
          </p>

          <h2 className="text-2xl mb-4 mt-8">8. Lưu ý về an toàn</h2>
          <p className="mb-6">
            Luôn mang theo áo phao khi tham gia các hoạt động ngoài trời. Nghe theo hướng dẫn của thuyền trưởng và nhân viên về các quy định an toàn trên tàu.
          </p>

          <h2 className="text-2xl mb-4 mt-8">9. Tôn trọng môi trường</h2>
          <p className="mb-6">
            Vịnh Hạ Long là di sản thiên nhiên thế giới. Hãy bảo vệ môi trường bằng cách không vứt rác xuống biển, không làm ồn quá mức, và tôn trọng hệ sinh thái địa phương.
          </p>

          <h2 className="text-2xl mb-4 mt-8">10. Đặt trước để có giá tốt</h2>
          <p className="mb-6">
            Đặt du thuyền trước 2-3 tháng sẽ giúp bạn có nhiều lựa chọn hơn và giá cả tốt hơn. Đặc biệt vào các dịp lễ, tết, du thuyền thường kín phòng sớm.
          </p>
        </>
      );
    } else if (post.title.includes('Vịnh Lan Hạ')) {
      return (
        <>
          <p className="mb-6">
            Vịnh Lan Hạ, nằm ở phía Nam quần đảo Cát Bà, là một trong những điểm đến đẹp nhất ở miền Bắc Việt Nam. Với vẻ đẹp hoang sơ và ít bị ảnh hưởng bởi du lịch đại trà, Lan Hạ đang dần trở thành lựa chọn hàng đầu của những du khách yêu thích sự thanh bình.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Vẻ đẹp thiên nhiên tuyệt mỹ</h2>
          <p className="mb-6">
            Vịnh Lan Hạ có hơn 300 đảo đá vôi với nhiều hình dạng kỳ thú, tạo nên một bức tranh thiên nhiên hùng vĩ. Nước biển xanh ngọc trong vắt, bãi cát trắng mịn, và những làng chài truyền thống tạo nên nét đẹp độc đáo của vùng biển này.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Các hoạt động thú vị</h2>
          <p className="mb-6">
            Du khách có thể tham gia nhiều hoạt động như chèo kayak khám phá các hang động, bơi lội ở bãi biển Ba Trái Đào, câu cá, hoặc đơn giản là thư giãn trên du thuyền ngắm hoàng hôn tuyệt đẹp.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Thời điểm lý tưởng để đến</h2>
          <p className="mb-6">
            Mùa xuân (tháng 3-5) và mùa thu (tháng 9-11) là thời gian đẹp nhất để du lịch Lan Hạ. Thời tiết mát mẻ, ít mưa, biển lặng và không khí trong lành.
          </p>
        </>
      );
    } else if (post.title.includes('Trải nghiệm ẩm thực')) {
      return (
        <>
          <p className="mb-6">
            Một trong những điểm nổi bật của các du thuyền 5 sao tại Vịnh Hạ Long chính là trải nghiệm ẩm thực đẳng cấp. Với đội ngũ đầu bếp chuyên nghiệp và nguyên liệu tươi ngon, mỗi bữa ăn trên du thuyền đều là một trải nghiệm đáng nhớ.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Hải sản tươi sống</h2>
          <p className="mb-6">
            Du thuyền phục vụ các món hải sản được đánh bắt hàng ngày như tôm hùm, cua hoàng đế, bào ngư, và cá tươi. Tất cả đều được chế biến theo phong cách Á - Âu tinh tế.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Thực đơn đa dạng</h2>
          <p className="mb-6">
            Từ món Việt truyền thống đến món Âu sang trọng, thực đơn trên du thuyền luôn đa dạng để phù hợp với mọi khẩu vị. Đặc biệt có các lựa chọn cho người ăn chay hoặc có nhu cầu ăn kiêng đặc biệt.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Bữa tối lãng mạn trên boong tàu</h2>
          <p className="mb-6">
            Thưởng thức bữa tối dưới ánh nến, ngắm hoàng hôn tuyệt đẹp trên vịnh Hạ Long là trải nghiệm không thể quên. Đây là lựa chọn hoàn hảo cho các cặp đôi muốn tạo kỷ niệm đặc biệt.
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="mb-6">
            {post.excerpt}
          </p>

          <h2 className="text-2xl mb-4 mt-8">Giới thiệu chung</h2>
          <p className="mb-6">
            Du lịch Vịnh Hạ Long bằng du thuyền là trải nghiệm tuyệt vời mà bạn không nên bỏ lỡ. Với cảnh quan thiên nhiên hùng vĩ, dịch vụ chuyên nghiệp và các hoạt động thú vị, chuyến đi của bạn chắc chắn sẽ để lại nhiều kỷ niệm đẹp.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Điểm nổi bật</h2>
          <p className="mb-6">
            Các du thuyền hiện đại với đầy đủ tiện nghi, phòng ngủ thoải mái, nhà hàng sang trọng và các hoạt động giải trí phong phú. Đội ngũ nhân viên chuyên nghiệp luôn sẵn sàng phục vụ và hỗ trợ bạn trong suốt hành trình.
          </p>

          <h2 className="text-2xl mb-4 mt-8">Lời khuyên</h2>
          <p className="mb-6">
            Hãy đặt du thuyền trước để có giá tốt và nhiều lựa chọn hơn. Đừng quên mang theo máy ảnh để ghi lại những khoảnh khắc đẹp và chuẩn bị đồ đạc cần thiết cho chuyến đi.
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative h-[400px] bg-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-white/90 text-sm mb-4">
              <span className="bg-teal-500 px-3 py-1 rounded-full">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-white/90">
              <User className="w-5 h-5" />
              <span>Bởi {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                {getArticleContent()}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-400" />
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-teal-100 hover:text-teal-600 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Share2 className="w-5 h-5" />
                    <span>Chia sẻ:</span>
                  </div>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl mb-2">Về tác giả: {post.author}</h3>
                  <p className="text-gray-600">
                    Chuyên gia về du lịch Hạ Long với hơn 10 năm kinh nghiệm trong ngành. 
                    Đam mê khám phá và chia sẻ những trải nghiệm du lịch tuyệt vời với mọi người.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl mb-4">Bài viết liên quan</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="group cursor-pointer">
                    <div className="flex gap-3">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-sm line-clamp-2 group-hover:text-teal-500 transition-colors mb-2">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {relatedPost.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-teal-400 to-blue-400 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl mb-2">Đăng ký nhận tin</h3>
              <p className="text-white/90 text-sm mb-4">
                Nhận các bài viết mới nhất và ưu đãi đặc biệt
              </p>
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded-lg text-gray-700 mb-3"
              />
              <button className="w-full bg-white text-teal-500 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
