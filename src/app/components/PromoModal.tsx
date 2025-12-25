import { X, Gift, User, Mail, Phone as PhoneIcon } from 'lucide-react';
import { useState } from 'react';

interface PromoModalProps {
  onClose: () => void;
}

export function PromoModal({ onClose }: PromoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Cảm ơn bạn đã đăng ký! Mã giảm giá đã được gửi vào email của bạn.');
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slideUp relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-teal-400 to-blue-400 text-white p-8 rounded-t-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-2xl mb-2">Ưu đãi đặc biệt!</h2>
          <p className="text-white/90">Giảm ngay 15% cho chuyến đi đầu tiên</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <p className="text-gray-700 mb-4">
              Đăng ký tài khoản ngay hôm nay để nhận <span className="font-bold text-teal-500">mã giảm giá 15%</span> cho chuyến du thuyền đầu tiên của bạn!
            </p>
            <div className="bg-teal-50 border-2 border-dashed border-teal-300 rounded-lg p-3 inline-block">
              <div className="text-xs text-gray-600 mb-1">Mã giảm giá</div>
              <div className="text-2xl font-bold text-teal-600">WELCOME15</div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="Nhập họ tên của bạn"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="0932 222 333"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-white py-3 rounded-lg hover:from-teal-500 hover:to-blue-500 transition-all transform hover:scale-105"
            >
              Nhận ưu đãi ngay
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng của chúng tôi
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 rounded-b-2xl text-center">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Không, cảm ơn. Tôi sẽ bỏ qua ưu đãi này
          </button>
        </div>
      </div>
    </div>
  );
}