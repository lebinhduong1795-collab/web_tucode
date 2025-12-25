import { Phone, ShoppingCart, User, LogOut } from 'lucide-react';

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onLoginClick?: () => void;
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export function Header({ 
  cartItemCount = 0, 
  onCartClick, 
  activeTab = 'cruises', 
  onTabChange,
  onLoginClick,
  user,
  onLogout
}: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'cruises', label: 'Tìm du thuyền' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onTabChange?.('home')}>
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%2340E0D0'/%3E%3Cpath d='M10 20 L15 15 L20 20 L25 15 L30 20' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E" 
              alt="Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-gray-800">VivuCNWEB</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange?.(item.id)}
                className={`text-gray-700 hover:text-teal-500 transition-colors pb-1 ${
                  activeTab === item.id ? 'border-b-2 border-teal-500 font-medium' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700">Hotline: 0932222333 66</span>
            </div>
            
            {/* Shopping Cart */}
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-gray-700">{user.name}</span>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-3 border-b">
                    <div className="font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-50 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Đăng xuất
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full transition-colors"
              >
                <User className="w-4 h-4" />
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}