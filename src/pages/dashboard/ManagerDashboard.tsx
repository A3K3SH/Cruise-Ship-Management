import React from 'react';
import { Calendar, Users, Film, Scissors, Dumbbell, PartyPopper } from 'lucide-react';

export const ManagerDashboard: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const todayBookings = 12;
  const weekBookings = 87;
  const monthBookings = 354;
  
  const bookingsByType = [
    { type: 'movie', count: 156, icon: <Film className="h-5 w-5" /> },
    { type: 'salon', count: 89, icon: <Scissors className="h-5 w-5" /> },
    { type: 'fitness', count: 102, icon: <Dumbbell className="h-5 w-5" /> },
    { type: 'party', count: 38, icon: <PartyPopper className="h-5 w-5" /> },
  ];
  
  const recentBookings = [
    { id: 'bkg123', type: 'movie', date: new Date(2023, 6, 15), time: '19:30', voyager: 'John Smith', title: 'The Ocean Adventure' },
    { id: 'bkg456', type: 'salon', date: new Date(2023, 6, 15), time: '14:00', voyager: 'Emily Rogers', title: 'Full Spa Treatment' },
    { id: 'bkg789', type: 'fitness', date: new Date(2023, 6, 16), time: '09:00', voyager: 'Michael Brown', title: 'Personal Training' },
    { id: 'bkg012', type: 'party', date: new Date(2023, 6, 18), time: '20:00', voyager: 'Sarah Johnson', title: 'Birthday Celebration' },
  ];

  return (
    <div className="space-y-8">
      {/* Booking Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Today's Bookings</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">{todayBookings}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-700" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">This Week</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">{weekBookings}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-700" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">This Month</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">{monthBookings}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-primary-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Bookings by Type */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-6">Bookings by Type</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bookingsByType.map((booking) => (
            <div key={booking.type} className="bg-neutral-50 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                  {booking.icon}
                </div>
                <div className="capitalize font-medium text-primary-800">
                  {booking.type}
                </div>
              </div>
              <div className="text-3xl font-bold text-primary-800">
                {booking.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-primary-800">Recent Bookings</h3>
          <a href="/view-bookings" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
            View All
          </a>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Voyager
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    <div className="flex items-center">
                      {booking.type === 'movie' ? (
                        <Film className="h-4 w-4 text-primary-600 mr-1" />
                      ) : booking.type === 'salon' ? (
                        <Scissors className="h-4 w-4 text-primary-600 mr-1" />
                      ) : booking.type === 'fitness' ? (
                        <Dumbbell className="h-4 w-4 text-primary-600 mr-1" />
                      ) : (
                        <PartyPopper className="h-4 w-4 text-primary-600 mr-1" />
                      )}
                      <span className="capitalize">{booking.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-2">
                        <Users className="h-4 w-4 text-primary-700" />
                      </div>
                      {booking.voyager}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {booking.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {booking.date.toLocaleDateString()} at {booking.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    <button className="text-primary-600 hover:text-primary-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};