import { useState } from 'react';
import { Header } from './components/Header';
import { SearchSection } from './components/SearchSection';
import { CruiseCard } from './components/CruiseCard';
import { Sidebar, type FilterState } from './components/Sidebar';
import { Footer } from './components/Footer';
import { CruiseDetail } from './components/CruiseDetail';
import { ShoppingCart, type CartItem } from './components/ShoppingCart';
import { PromoModal } from './components/PromoModal';
import { AuthModal } from './components/AuthModal';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BlogDetail } from './components/BlogDetail';
import { ContactPage } from './components/ContactPage';
import { DestinationDetail } from './components/DestinationDetail';
import { AboutPage } from './components/AboutPage';
import { TermsPage } from './components/TermsPage';
import { LoyaltyPage } from './components/LoyaltyPage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cruises = [
  {
    id: 1,
    name: 'Du thuyền Heritage Bình Chuẩn Cát Bà',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '25/6 - 27/6',
    price: '530.000đ',
    priceNumber: 530000,
    badge: '8.9 Rất tốt (68)',
    starRating: 4.5,
    reviewCount: 68,
    facilities: ['wifi', 'pool', 'restaurant', 'spa']
  },
  {
    id: 2,
    name: 'Du thuyền Indochine',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '25/6 - 27/6',
    price: '1.230.000đ',
    priceNumber: 1230000,
    badge: '8.9 Rất tốt (68)',
    starRating: 4.5,
    reviewCount: 68,
    facilities: ['wifi', 'restaurant', 'karaoke']
  },
  {
    id: 3,
    name: 'Du thuyền Le Theatre',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '25/6 - 27/6',
    price: '2.780.000đ',
    priceNumber: 2780000,
    badge: '9.0 Tuyệt vời (89)',
    starRating: 4.5,
    reviewCount: 89,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant']
  },
  {
    id: 4,
    name: 'Du thuyền Orchid Trendy',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '25/6 - 27/6',
    price: '1.520.000đ',
    priceNumber: 1520000,
    badge: '8.8 Rất tốt (75)',
    starRating: 4.4,
    reviewCount: 75,
    facilities: ['wifi', 'restaurant']
  },
  {
    id: 5,
    name: 'Du thuyền Mikalux',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '25/6 - 27/6',
    price: '3.230.000đ',
    priceNumber: 3230000,
    badge: '9.2 Xuất sắc (92)',
    starRating: 4.6,
    reviewCount: 92,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
  {
    id: 6,
    name: 'Du thuyền Paradise Elegance',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2��',
    location: 'Hạ Long',
    date: '26/6 - 28/6',
    price: '4.150.000đ',
    priceNumber: 4150000,
    badge: '9.3 Xuất sắc (105)',
    starRating: 4.7,
    reviewCount: 105,
    facilities: ['wifi', 'pool', 'spa', 'restaurant']
  },
  {
    id: 7,
    name: 'Du thuyền Ocean Pearl',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '27/6 - 29/6',
    price: '1.890.000đ',
    priceNumber: 1890000,
    badge: '8.7 Rất tốt (63)',
    starRating: 4.4,
    reviewCount: 63,
    facilities: ['wifi', 'pool', 'restaurant', 'gym']
  },
  {
    id: 8,
    name: 'Du thuyền Stellar of the Seas',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '28/6 - 30/6',
    price: '5.200.000đ',
    priceNumber: 5200000,
    badge: '9.5 Xuất sắc (128)',
    starRating: 4.8,
    reviewCount: 128,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
  {
    id: 9,
    name: 'Du thuyền Aurora Premium',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '26/6 - 28/6',
    price: '2.150.000đ',
    priceNumber: 2150000,
    badge: '8.9 Rất tốt (74)',
    starRating: 4.5,
    reviewCount: 74,
    facilities: ['wifi', 'pool', 'restaurant', 'spa']
  },
  {
    id: 10,
    name: 'Du thuyền Royal Palace',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '29/6 - 1/7',
    price: '4.800.000đ',
    priceNumber: 4800000,
    badge: '9.4 Xuất sắc (115)',
    starRating: 4.7,
    reviewCount: 115,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
  {
    id: 11,
    name: 'Du thuyền Mon Cheri',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Bái Tử Long',
    date: '27/6 - 29/6',
    price: '1.680.000đ',
    priceNumber: 1680000,
    badge: '8.6 Rất tốt (58)',
    starRating: 4.3,
    reviewCount: 58,
    facilities: ['wifi', 'restaurant']
  },
  {
    id: 12,
    name: 'Du thuyền Emperor',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '30/6 - 2/7',
    price: '5.500.000đ',
    priceNumber: 5500000,
    badge: '9.6 Xuất sắc (135)',
    starRating: 4.8,
    reviewCount: 135,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
  {
    id: 13,
    name: 'Du thuyền Azalea',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '28/6 - 30/6',
    price: '1.950.000đ',
    priceNumber: 1950000,
    badge: '8.8 Rất tốt (69)',
    starRating: 4.4,
    reviewCount: 69,
    facilities: ['wifi', 'pool', 'restaurant']
  },
  {
    id: 14,
    name: 'Du thuyền Calypso',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '1/7 - 3/7',
    price: '2.320.000đ',
    priceNumber: 2320000,
    badge: '9.0 Tuyệt vời (82)',
    starRating: 4.5,
    reviewCount: 82,
    facilities: ['wifi', 'pool', 'spa', 'restaurant']
  },
  {
    id: 15,
    name: 'Du thuyền Aphrodite',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '2/7 - 4/7',
    price: '4.650.000đ',
    priceNumber: 4650000,
    badge: '9.3 Xuất sắc (108)',
    starRating: 4.7,
    reviewCount: 108,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant']
  },
  {
    id: 16,
    name: 'Du thuyền Jasmine',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Bái Tử Long',
    date: '3/7 - 5/7',
    price: '1.450.000đ',
    priceNumber: 1450000,
    badge: '8.7 Rất tốt (65)',
    starRating: 4.4,
    reviewCount: 65,
    facilities: ['wifi', 'restaurant']
  },
  {
    id: 17,
    name: 'Du thuyền Sapphire',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '4/7 - 6/7',
    price: '2.080.000đ',
    priceNumber: 2080000,
    badge: '8.9 Rất tốt (76)',
    starRating: 4.5,
    reviewCount: 76,
    facilities: ['wifi', 'pool', 'restaurant', 'spa']
  },
  {
    id: 18,
    name: 'Du thuyền Golden Bay',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '5/7 - 7/7',
    price: '3.890.000đ',
    priceNumber: 3890000,
    badge: '9.1 Xuất sắc (95)',
    starRating: 4.6,
    reviewCount: 95,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant']
  },
  {
    id: 19,
    name: 'Du thuyền Violet',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '6/7 - 8/7',
    price: '1.750.000đ',
    priceNumber: 1750000,
    badge: '8.8 Rất tốt (71)',
    starRating: 4.4,
    reviewCount: 71,
    facilities: ['wifi', 'restaurant', 'karaoke']
  },
  {
    id: 20,
    name: 'Du thuyền Blossom',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Lan Hạ',
    date: '7/7 - 9/7',
    price: '3.450.000đ',
    priceNumber: 3450000,
    badge: '9.2 Xuất sắc (98)',
    starRating: 4.6,
    reviewCount: 98,
    facilities: ['wifi', 'pool', 'spa', 'restaurant']
  },
  {
    id: 21,
    name: 'Du thuyền Serenity',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Bái Tử Long',
    date: '8/7 - 10/7',
    price: '1.580.000đ',
    priceNumber: 1580000,
    badge: '8.6 Rất tốt (62)',
    starRating: 4.3,
    reviewCount: 62,
    facilities: ['wifi', 'restaurant']
  },
  {
    id: 22,
    name: 'Du thuyền Diamond',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '9/7 - 11/7',
    price: '5.800.000đ',
    priceNumber: 5800000,
    badge: '9.7 Xuất sắc (142)',
    starRating: 4.9,
    reviewCount: 142,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
  {
    id: 23,
    name: 'Du thuyền Lotus',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '10/7 - 12/7',
    price: '2.250.000đ',
    priceNumber: 2250000,
    badge: '9.0 Tuyệt vời (85)',
    starRating: 4.5,
    reviewCount: 85,
    facilities: ['wifi', 'pool', 'restaurant', 'spa']
  },
  {
    id: 24,
    name: 'Du thuyền Pearl',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '11/7 - 13/7',
    price: '1.890.000',
    priceNumber: 1890000,
    badge: '8.8 Rất tốt (73)',
    starRating: 4.4,
    reviewCount: 73,
    facilities: ['wifi', 'restaurant']
  },
  {
    id: 25,
    name: 'Du thuyền Emerald',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '12/7 - 14/7',
    price: '4.350.000đ',
    priceNumber: 4350000,
    badge: '9.3 Xuất sắc (112)',
    starRating: 4.7,
    reviewCount: 112,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant']
  },
  {
    id: 26,
    name: 'Du thuyền Sunrise',
    image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Bái Tử Long',
    date: '13/7 - 15/7',
    price: '1.620.000đ',
    priceNumber: 1620000,
    badge: '8.7 Rất tốt (67)',
    starRating: 4.4,
    reviewCount: 67,
    facilities: ['wifi', 'restaurant', 'karaoke']
  },
  {
    id: 27,
    name: 'Du thuyền Majestic',
    image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Lan Hạ',
    date: '14/7 - 16/7',
    price: '3.750.000đ',
    priceNumber: 3750000,
    badge: '9.2 Xuất sắc (102)',
    starRating: 4.6,
    reviewCount: 102,
    facilities: ['wifi', 'pool', 'spa', 'restaurant']
  },
  {
    id: 28,
    name: 'Du thuyền Crown',
    image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '15/7 - 17/7',
    price: '2.450.000đ',
    priceNumber: 2450000,
    badge: '9.0 Tuyệt vời (88)',
    starRating: 4.5,
    reviewCount: 88,
    facilities: ['wifi', 'pool', 'spa', 'restaurant']
  },
  {
    id: 29,
    name: 'Du thuyền Harmony',
    image: 'https://images.unsplash.com/photo-1721919475550-135f12d4043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYmF5JTIwd2F0ZXJ8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2N-1Đ',
    location: 'Lan Hạ',
    date: '16/7 - 18/7',
    price: '1.980.000đ',
    priceNumber: 1980000,
    badge: '8.9 Rất tốt (79)',
    starRating: 4.5,
    reviewCount: 79,
    facilities: ['wifi', 'pool', 'restaurant']
  },
  {
    id: 30,
    name: 'Du thuyền Prestige',
    image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3N-2Đ',
    location: 'Hạ Long',
    date: '17/7 - 19/7',
    price: '5.950.000đ',
    priceNumber: 5950000,
    badge: '9.6 Xuất sắc (138)',
    starRating: 4.8,
    reviewCount: 138,
    facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCruiseId, setSelectedCruiseId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ starRatings: [], facilities: [] });
  const [showPromoModal, setShowPromoModal] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<number | null>(null);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  
  // Search filters
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPriceRange, setSearchPriceRange] = useState('');
  
  const itemsPerPage = 8;

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '10 điều cần biết trước khi đặt du thuyền Hạ Long',
      excerpt: 'Hướng dẫn chi tiết giúp bạn lựa chọn du thuyền phù hợp và tiết kiệm chi phí cho chuyến đi của mình.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mẹo du lịch',
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
      category: 'Điểm đến',
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
      category: 'Trải nghiệm',
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
      category: 'Hướng dẫn',
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
      category: 'Mẹo du lịch',
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
      category: 'Hướng dẫn',
      author: 'Đỗ Thị F',
      date: '03/12/2024',
      readTime: '6 phút đọc',
      tags: ['So sánh', 'Hướng dẫn', 'Lựa chọn']
    }
  ];

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  // Handle search
  const handleSearch = (term: string, location: string, priceRange: string) => {
    setSearchTerm(term);
    setSearchLocation(location);
    setSearchPriceRange(priceRange);
    setCurrentPage(1);
  };

  // Apply all filters to cruises
  const filteredCruises = cruises.filter(cruise => {
    // Search term filter (search in name and location)
    if (searchTerm && searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = cruise.name.toLowerCase().includes(searchLower);
      const locationMatch = cruise.location.toLowerCase().includes(searchLower);
      if (!nameMatch && !locationMatch) {
        return false;
      }
    }

    // Location filter from search section
    if (searchLocation && searchLocation !== '') {
      if (!cruise.location.includes(searchLocation)) {
        return false;
      }
    }

    // Location filter from destination click
    if (locationFilter) {
      if (!cruise.location.includes(locationFilter.replace('Vịnh ', ''))) {
        return false;
      }
    }

    // Price range filter
    if (searchPriceRange && searchPriceRange !== '') {
      const [min, max] = searchPriceRange.split('-').map(Number);
      if (cruise.priceNumber < min || cruise.priceNumber > max) {
        return false;
      }
    }

    // Star rating filter
    if (filters.starRatings.length > 0) {
      let ratingCategory = 0;
      if (cruise.starRating >= 4.5) ratingCategory = 5;
      else if (cruise.starRating >= 3.5) ratingCategory = 4;
      else if (cruise.starRating >= 2.5) ratingCategory = 3;
      else if (cruise.starRating >= 1.5) ratingCategory = 2;
      else ratingCategory = 1;
      
      if (!filters.starRatings.includes(ratingCategory)) {
        return false;
      }
    }

    // Facilities filter
    if (filters.facilities.length > 0) {
      const hasAllFacilities = filters.facilities.every(facility =>
        cruise.facilities.includes(facility)
      );
      if (!hasAllFacilities) {
        return false;
      }
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCruises.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCruises = filteredCruises.slice(startIndex, endIndex);

  const resultsCount = filteredCruises.length;

  const handleAddToCart = (items: CartItem[]) => {
    setCartItems(prev => [...prev, ...items]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleUpdateCartQuantity = (itemId: string, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    alert('Chức năng thanh toán đang được phát triển!');
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  // If a cruise is selected, show detail page
  if (selectedCruiseId !== null) {
    return (
      <>
        <CruiseDetail 
          cruiseId={selectedCruiseId} 
          onClose={() => setSelectedCruiseId(null)} 
          onAddToCart={handleAddToCart}
        />
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onCheckout={handleCheckout}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        cartItemCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLoginClick={() => setShowAuthModal(true)}
        user={user}
        onLogout={() => setUser(null)}
      />
      
      {activeTab === 'home' && (
        <HomePage 
          onNavigate={setActiveTab}
          onDestinationClick={(location) => {
            setLocationFilter(location);
            setActiveTab('cruises');
          }}
          onDestinationDetailClick={(destination) => {
            setSelectedDestination(destination);
          }}
        />
      )}
      
      {selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onBookTour={() => {
            setSelectedDestination(null);
            setActiveTab('cruises');
          }}
        />
      )}
      
      {activeTab === 'cruises' && (
        <>
          <SearchSection onSearch={handleSearch} resultsCount={cruises.length} />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 hidden lg:block">
                <Sidebar onFilterChange={handleFilterChange} />
              </div>

              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl">Tìm thấy {resultsCount} kết quả</h2>
                    {locationFilter && (
                      <p className="text-sm text-gray-600 mt-1">
                        Lọc theo: {locationFilter}{' '}
                        <button 
                          onClick={() => setLocationFilter(null)}
                          className="text-teal-500 hover:text-teal-600 underline"
                        >
                          Xóa bộ lọc
                        </button>
                      </p>
                    )}
                  </div>
                  {/* <button className="text-teal-500 hover:text-teal-600 text-sm flex items-center gap-1">
                    Không kèo giá
                    <ChevronRight className="w-4 h-4" />
                  </button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {paginatedCruises.map((cruise) => (
                    <CruiseCard 
                      key={cruise.id} 
                      {...cruise} 
                      onViewDetails={setSelectedCruiseId}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2">
                  <button 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {renderPageNumbers().map((page, index) => (
                      typeof page === 'number' ? (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded ${
                            currentPage === page
                              ? 'bg-teal-500 text-white'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </button>
                      ) : (
                        <span key={index} className="px-2">...</span>
                      )
                    ))}
                  </div>

                  <button 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {activeTab === 'blog' && selectedBlogPostId === null && (
        <BlogPage onPostClick={(postId) => setSelectedBlogPostId(postId)} />
      )}

      {activeTab === 'blog' && selectedBlogPostId !== null && (
        <BlogDetail 
          post={blogPosts.find(p => p.id === selectedBlogPostId)!}
          onBack={() => setSelectedBlogPostId(null)}
        />
      )}
      
      {activeTab === 'contact' && <ContactPage />}

      {activeTab === 'about' && <AboutPage />}

      {activeTab === 'terms' && <TermsPage />}

      {activeTab === 'loyalty' && <LoyaltyPage />}

      {activeTab !== 'contact' && activeTab !== 'about' && activeTab !== 'terms' && activeTab !== 'loyalty' && (
        <Footer 
          onNavigate={setActiveTab} 
          onDestinationFilter={(location) => {
            setLocationFilter(location);
            setSearchLocation(location);
          }} 
        />
      )}
      
      {showPromoModal && (
        <PromoModal onClose={() => setShowPromoModal(false)} />
      )}
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onLoginSuccess={(userData) => {
            setUser(userData);
            setShowAuthModal(false);
          }}
        />
      )}
      
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
}