import { Calendar, User, Clock, ChevronRight, Tag } from 'lucide-react';
import { useState } from 'react';

interface BlogPageProps {
  onPostClick?: (postId: number) => void;
}

export function BlogPage({ onPostClick }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'tips', label: 'Mẹo du lịch' },
    { id: 'destinations', label: 'Điểm đến' },
    { id: 'experiences', label: 'Trải nghiệm' },
    { id: 'guides', label: 'Hướng dẫn' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 điều cần biết trước khi đặt du thuyền Hạ Long',
      excerpt: 'Hướng dẫn chi tiết giúp bạn lựa chọn du thuyền phù hợp và tiết kiệm chi phí cho chuyến đi của mình.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'tips',
      author: 'Nguyễn Văn A',
      date: '15/12/2024',
      readTime: '5 phút đọc',
      tags: ['Du lịch', 'Hạ Long', 'Mẹo hay']
    },
    {
      id: 2,
      title: 'Khám phá vẻ đẹp hoang sơ của Vịnh Lan Hạ',
      excerpt: 'Vịnh Lan Hạ - điểm đến mới nổi với cảnh quan thiên nhiên tuyệt đẹp, ít du khách qua lại.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'destinations',
      author: 'Trần Thị B',
      date: '12/12/2024',
      readTime: '7 phút đọc',
      tags: ['Lan Hạ', 'Khám phá', 'Thiên nhiên']
    },
    {
      id: 3,
      title: 'Trải nghiệm ẩm thực trên du thuyền 5 sao',
      excerpt: 'Thưởng thức các món ăn hải sản tươi ngon được chế biến bởi đầu bếp chuyên nghiệp ngay trên du thuyền.',
      image: 'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'experiences',
      author: 'Lê Văn C',
      date: '10/12/2024',
      readTime: '6 phút đọc',
      tags: ['Ẩm thực', 'Du thuyền', 'Sang trọng']
    },
    {
      id: 4,
      title: 'Lịch trình 3 ngày 2 đêm khám phá Vịnh Hạ Long',
      excerpt: 'Gợi ý lịch trình chi tiết cho chuyến đi 3 ngày 2 đêm trên du thuyền, tham quan các điểm đến hấp dẫn.',
      image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'guides',
      author: 'Phạm Thị D',
      date: '08/12/2024',
      readTime: '8 phút đọc',
      tags: ['Lịch trình', 'Hướng dẫn', 'Du lịch']
    },
    {
      id: 5,
      title: 'Top 5 hoạt động không thể bỏ qua trên du thuyền',
      excerpt: 'Từ chèo kayak, tắm biển đến câu mực đêm - những trải nghiệm thú vị nhất trên du thuyền Hạ Long.',
      image: 'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'tips',
      author: 'Hoàng Văn E',
      date: '05/12/2024',
      readTime: '4 phút đọc',
      tags: ['Hoạt động', 'Giải trí', 'Trải nghiệm']
    },
    {
      id: 6,
      title: 'So sánh du thuyền 3 sao, 4 sao và 5 sao',
      excerpt: 'Phân tích chi tiết sự khác biệt giữa các loại du thuyền để bạn chọn được phương án phù hợp nhất.',
      image: 'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJlZHJvb20lMjBjYWJpbnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'guides',
      author: 'Đỗ Thị F',
      date: '03/12/2024',
      readTime: '6 phút đọc',
      tags: ['So sánh', 'Hướng dẫn', 'Lựa chọn']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">Blog Du Lịch</h1>
            <p className="text-xl text-white/90">
              Khám phá những câu chuyện, mẹo hay và hướng dẫn chi tiết về du lịch Vịnh biển Việt Nam cùng VivuCNWEB.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Bài viết nổi bật</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-80 md:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full">
                  {categories.find(c => c.id === featuredPost.category)?.label}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
              </div>
              <h3 className="text-3xl mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <button 
                  onClick={() => onPostClick?.(featuredPost.id)}
                  className="text-teal-500 hover:text-teal-600 flex items-center gap-1"
                >
                  Đọc thêm
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl mb-3 line-clamp-2 hover:text-teal-500 cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <button
                    onClick={() => onPostClick?.(post.id)}
                    className="text-teal-500 hover:text-teal-600 flex items-center gap-1"
                  >
                    Đọc thêm
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-teal-500 border-2 border-teal-500 px-8 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </div>
  );
}