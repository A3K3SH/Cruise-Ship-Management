// User roles
export enum UserRole {
  VOYAGER = 'voyager',
  ADMIN = 'admin',
  MANAGER = 'manager',
  HEAD_COOK = 'head_cook',
  SUPERVISOR = 'supervisor'
}

// User interface
export interface User {
  id: string;
  email: string;
  displayName?: string;
  role: UserRole;
  cabinNumber?: string;
  createdAt: Date;
}

// Catering item interface
export interface CateringItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'food' | 'beverage' | 'snack';
  image?: string;
  available: boolean;
}

// Stationery item interface
export interface StationeryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'gift' | 'chocolate' | 'book' | 'other';
  image?: string;
  available: boolean;
}

// Order status
export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  READY = 'ready',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

// Order interface
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  type: 'catering' | 'stationery';
}

// Order item
export interface OrderItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
}

// Booking types
export enum BookingType {
  MOVIE = 'movie',
  SALON = 'salon',
  FITNESS = 'fitness',
  PARTY = 'party'
}

// Booking status
export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

// Base booking interface
export interface Booking {
  id: string;
  userId: string;
  type: BookingType;
  date: Date;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Movie booking
export interface MovieBooking extends Booking {
  type: BookingType.MOVIE;
  movieId: string;
  movieTitle: string;
  time: string;
  seats: string[];
}

// Salon booking
export interface SalonBooking extends Booking {
  type: BookingType.SALON;
  serviceId: string;
  serviceName: string;
  time: string;
}

// Fitness booking
export interface FitnessBooking extends Booking {
  type: BookingType.FITNESS;
  equipmentIds?: string[];
  time: string;
  trainer?: boolean;
}

// Party booking
export interface PartyBooking extends Booking {
  type: BookingType.PARTY;
  occasion: 'birthday' | 'wedding' | 'business' | 'other';
  guestCount: number;
  startTime: string;
  endTime: string;
  specialRequests?: string;
}

// Movie interface
export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  image?: string;
  showTimes: string[];
  totalSeats: number;
  bookedSeats: Record<string, string[]>; // showTime: seatNumbers[]
}

// Salon service
export interface SalonService {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  available: boolean;
}

// Fitness equipment
export interface FitnessEquipment {
  id: string;
  name: string;
  description: string;
  available: boolean;
}