import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Hotline',
      content: '0932 222 333 66',
      description: 'Hỗ trợ 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vivucnweb.com',
      description: 'Phản hồi trong 24h'
    },
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: 'Nghiêm Xuân Yêm, Đại học Thăng Long',
      description: 'Quảng Ninh, Việt Nam'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: '8:00 - 22:00',
      description: 'Thứ 2 - Chủ nhật'
    }
  ];

  const offices = [
    {
      name: 'Văn phòng Hà Nội',
      address: '123 Đường ABC, Hoàn Kiếm, Hà Nội',
      phone: '024 1234 5678',
      email: 'hanoi@vivucnweb.com'
    },
    {
      name: 'Văn phòng Hải Phòng',
      address: '456 Đường XYZ, Lê Chân, Hải Phòng',
      phone: '0225 8765 4321',
      email: 'haiphong@vivucnweb.com'
    },
    {
      name: 'Văn phòng TP.HCM',
      address: '789 Đường DEF, Quận 1, TP.HCM',
      phone: '028 9876 5432',
      email: 'hcm@vivucnweb.com'
    }
  ];

  const faqs = [
    {
      question: 'Làm thế nào để đặt du thuyền?',
      answer: 'Bạn có thể đặt du thuyền trực tuyến trên website của chúng tôi hoặc liên hệ hotline để được tư vấn.'
    },
    {
      question: 'Chính sách hủy đơn như thế nào?',
      answer: 'Hủy trước 7 ngày: hoàn 100%. Hủy trước 3-6 ngày: hoàn 50%. Hủy trong vòng 2 ngày: không hoàn.'
    },
    {
      question: 'Có dịch vụ đưa đón không?',
      answer: 'Chúng tôi cung cấp dịch vụ đưa đón từ Hà Nội - Hạ Long với phụ thu hợp lý.'
    },
    {
      question: 'Trẻ em có được giảm giá không?',
      answer: 'Trẻ dưới 4 tuổi miễn phí. Trẻ từ 4-10 tuổi giảm 50%. Trẻ trên 10 tuổi tính như người lớn.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-white/90">
              Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-500 rounded-full mb-4">
                <info.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg mb-2">{info.title}</h3>
              <p className="text-teal-500 mb-1">{info.content}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="Nhập họ tên của bạn"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="0932 222 333"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chủ đề <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="Vấn đề bạn muốn trao đổi"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                  placeholder="Nhập nội dung tin nhắn..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-white py-3 rounded-lg hover:from-teal-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Map */} 
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-full min-h-[500px] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.83595752263!2d105.8060662935791!3d20.975875900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acef8ad5350f%3A0x89435a3528118ff5!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaMSDbmcgTG9uZw!5e0!3m2!1svi!2s!4v1766466443219!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Văn phòng đại diện</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl mb-4">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6">Câu hỏi thường gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg mb-3 text-teal-500">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl mb-4">Kết nối với chúng tôi</h2>
          <p className="text-gray-600 mb-6">Theo dõi chúng tôi trên các mạng xã hội để cập nhật tin tức mới nhất</p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.facebook.com/binhhduongg179" 
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/b_duowng/" 
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@phdphuonghuuduong" 
              className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
