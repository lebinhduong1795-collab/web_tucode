interface FooterProps {
  onNavigate?: (tab: string) => void;
  onDestinationFilter?: (location: string) => void;
}

export function Footer({ onNavigate, onDestinationFilter }: FooterProps) {
  const handleNavigation = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDestinationClick = (location: string) => {
    if (onDestinationFilter && onNavigate) {
      onDestinationFilter(location);
      onNavigate('cruises');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%2340E0D0'/%3E%3Cpath d='M10 20 L15 15 L20 20 L25 15 L30 20' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E" 
                alt="Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold">VivuCNWEB</span>
            </div>
            <p className="text-gray-400 text-sm">
              Công ty Thiết kế Lữ hành Du lịch Vivu
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4">Giới thiệu</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('about')} 
                  className="hover:text-teal-400 text-left"
                >
                  Về chúng tôi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')} 
                  className="hover:text-teal-400 text-left"
                >
                  Giới thiệu về dịch vụ khách hàng
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about')} 
                  className="hover:text-teal-400 text-left"
                >
                  Tuyển dụng
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('loyalty')} 
                  className="hover:text-teal-400 text-left"
                >
                  Chương trình thẻ thưởng
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Điểm đến</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => handleDestinationClick('Hạ Long')} 
                  className="hover:text-teal-400 text-left"
                >
                  Du thuyền Hạ Long
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleDestinationClick('Lan Hạ')} 
                  className="hover:text-teal-400 text-left"
                >
                  Du thuyền Lan Hạ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleDestinationClick('Bái Tử Long')} 
                  className="hover:text-teal-400 text-left"
                >
                  Du thuyền Bái Tử Long
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Điều khoản</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('blog')} 
                  className="hover:text-teal-400 text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('terms')} 
                  className="hover:text-teal-400 text-left"
                >
                  Điều khoản & Chính sách
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('terms')} 
                  className="hover:text-teal-400 text-left"
                >
                  Quy định chung đối với đối tác
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 VivuCNWEB. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}