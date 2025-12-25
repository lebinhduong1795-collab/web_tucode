import { X, Trash2, ShoppingCart as CartIcon } from 'lucide-react';

export interface CartItem {
  id: string;
  cruiseId: number;
  cruiseName: string;
  roomId: number;
  roomName: string;
  roomImage: string;
  quantity: number;
  price: string;
  priceNumber: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onCheckout: () => void;
}

export function ShoppingCart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, onCheckout }: ShoppingCartProps) {
  if (!isOpen) return null;

  const totalPrice = items.reduce((sum, item) => sum + (item.priceNumber * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <CartIcon className="w-5 h-5" />
            <h2 className="text-lg">Giỏ hàng ({totalItems})</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <CartIcon className="w-16 h-16 mb-4" />
              <p>Giỏ hàng trống</p>
              <p className="text-sm">Hãy thêm phòng vào giỏ hàng</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex gap-3 mb-2">
                    <img 
                      src={item.roomImage} 
                      alt={item.roomName}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm mb-1">{item.roomName}</h3>
                      <p className="text-xs text-gray-600 mb-1">{item.cruiseName}</p>
                      <div className="text-teal-500">{item.price}</div>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 hover:bg-gray-200 rounded h-fit"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Số lượng:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 rounded border hover:bg-gray-100 flex items-center justify-center text-sm"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded border hover:bg-gray-100 flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-2 pt-2 border-t flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tổng:</span>
                    <span className="text-teal-500">{formatPrice(item.priceNumber * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span>Tổng cộng:</span>
              <span className="text-teal-500">{formatPrice(totalPrice)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Thanh toán ({totalItems} phòng)
            </button>
          </div>
        )}
      </div>
    </>
  );
}
