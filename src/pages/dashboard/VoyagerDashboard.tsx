import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Calendar, Utensils, Gift, Film, Scissors, Dumbbell, PartyPopper } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const VoyagerDashboard: React.FC = () => {
  const { userDetails } = useAuth();

  // Mock data - In a real application, this would come from Firebase
  const recentOrders = [
    { id: 'ord123', type: 'catering', date: new Date(2023, 6, 15), status: 'delivered', items: 3, total: 42.99 },
    { id: 'ord456', type: 'stationery', date: new Date(2023, 6, 10), status: 'processing', items: 2, total: 25.50 },
  ];

  const upcomingBookings = [
    { id: 'bkg789', type: 'movie', date: new Date(2023, 6, 18), time: '19:30', title: 'Summer Blockbuster' },
    { id: 'bkg012', type: 'fitness', date: new Date(2023, 6, 20), time: '10:00', title: 'Personal Training' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">
          Welcome back, {userDetails?.displayName || 'Voyager'}!
        </h2>
        <p className="text-neutral-600">
          {userDetails?.cabinNumber ? `Cabin: ${userDetails.cabinNumber}` : 'Manage your services and bookings from your personalized dashboard.'}
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-semibold text-primary-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/catering" className="bg-white rounded-xl shadow-card p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <Utensils className="h-6 w-6 text-primary-700" />
            </div>
            <span className="text-primary-800 font-medium">Order Food</span>
          </Link>
          
          <Link to="/stationery" className="bg-white rounded-xl shadow-card p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <Gift className="h-6 w-6 text-primary-700" />
            </div>
            <span className="text-primary-800 font-medium">Shop Gifts</span>
          </Link>
          
          <Link to="/bookings/movie" className="bg-white rounded-xl shadow-card p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <Film className="h-6 w-6 text-primary-700" />
            </div>
            <span className="text-primary-800 font-medium">Book Movie</span>
          </Link>
          
          <Link to="/bookings/salon" className="bg-white rounded-xl shadow-card p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary-100 p-3 rounded-full mb-3">
              <Scissors className="h-6 w-6 text-primary-700" />
            </div>
            <span className="text-primary-800 font-medium">Salon Services</span>
          </Link>
        </div>
      </div>

      {/* Recent Orders and Upcoming Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary-800">Recent Orders</h3>
            <Link to="/orders" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              View All
            </Link>
          </div>
          
          {recentOrders.length > 0 ? (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <ShoppingBag className="h-5 w-5 text-primary-600 mr-2" />
                        <span className="font-medium text-primary-800">
                          {order.type === 'catering' ? 'Food Order' : 'Gift Shop Order'}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        {order.date.toLocaleDateString()} • {order.items} item{order.items !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary-800">${order.total.toFixed(2)}</div>
                      <div className={`text-sm mt-1 ${
                        order.status === 'delivered' ? 'text-success-600' : 
                        order.status === 'processing' ? 'text-warning-600' : 'text-neutral-600'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-neutral-500">
              <ShoppingBag className="h-12 w-12 mx-auto mb-2 text-neutral-400" />
              <p>No recent orders</p>
            </div>
          )}
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary-800">Upcoming Bookings</h3>
            <Link to="/bookings" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              View All
            </Link>
          </div>
          
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        {booking.type === 'movie' ? (
                          <Film className="h-5 w-5 text-primary-600 mr-2" />
                        ) : booking.type === 'salon' ? (
                          <Scissors className="h-5 w-5 text-primary-600 mr-2" />
                        ) : booking.type === 'fitness' ? (
                          <Dumbbell className="h-5 w-5 text-primary-600 mr-2" />
                        ) : (
                          <PartyPopper className="h-5 w-5 text-primary-600 mr-2" />
                        )}
                        <span className="font-medium text-primary-800">{booking.title}</span>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        {booking.date.toLocaleDateString()} at {booking.time}
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        <Calendar className="h-3 w-3 mr-1" />
                        {booking.type.charAt(0).toUpperCase() + booking.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-neutral-500">
              <Calendar className="h-12 w-12 mx-auto mb-2 text-neutral-400" />
              <p>No upcoming bookings</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};