import React from 'react';
import { Utensils, Clock, CheckCircle } from 'lucide-react';

export const HeadCookDashboard: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const pendingOrders = 8;
  const preparingOrders = 5;
  const completedOrders = 32;
  
  const recentOrders = [
    { 
      id: 'ord123', 
      voyager: 'John Smith', 
      cabin: 'A216',
      time: '10:15 AM',
      status: 'pending',
      items: [
        { name: 'Greek Salad', quantity: 1 },
        { name: 'Grilled Salmon', quantity: 2 },
        { name: 'Sparkling Water', quantity: 2 },
      ]
    },
    { 
      id: 'ord456', 
      voyager: 'Emma Wilson', 
      cabin: 'B118',
      time: '10:30 AM',
      status: 'preparing',
      items: [
        { name: 'Club Sandwich', quantity: 1 },
        { name: 'French Fries', quantity: 1 },
        { name: 'Ice Tea', quantity: 1 },
      ]
    },
    { 
      id: 'ord789', 
      voyager: 'Michael Thompson', 
      cabin: 'C355',
      time: '10:45 AM',
      status: 'ready',
      items: [
        { name: 'Continental Breakfast', quantity: 2 },
        { name: 'Orange Juice', quantity: 2 },
        { name: 'Coffee', quantity: 1 },
      ]
    },
  ];

  return (
    <div className="space-y-8">
      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Pending Orders</p>
              <h3 className="text-3xl font-bold text-warning-600 mt-1">{pendingOrders}</h3>
            </div>
            <div className="bg-warning-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-warning-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Preparing</p>
              <h3 className="text-3xl font-bold text-primary-600 mt-1">{preparingOrders}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Utensils className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Completed Today</p>
              <h3 className="text-3xl font-bold text-success-600 mt-1">{completedOrders}</h3>
            </div>
            <div className="bg-success-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-success-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Current Orders */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-primary-800">Current Orders</h3>
          <a href="/catering-orders" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
            View All Orders
          </a>
        </div>
        
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-neutral-50 p-4">
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 text-primary-600 mr-2" />
                  <div>
                    <span className="font-medium text-primary-800">Order #{order.id}</span>
                    <span className="text-neutral-500 text-sm ml-2">({order.time})</span>
                  </div>
                </div>
                <div>
                  <span 
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'pending' 
                        ? 'bg-warning-100 text-warning-800' 
                        : order.status === 'preparing' 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'bg-success-100 text-success-800'
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-medium">{order.voyager}</div>
                    <div className="text-sm text-neutral-500">Cabin: {order.cabin}</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {order.status === 'pending' && (
                      <button className="btn-primary text-xs py-1 px-3">
                        Start Preparing
                      </button>
                    )}
                    {order.status === 'preparing' && (
                      <button className="btn-primary text-xs py-1 px-3">
                        Mark as Ready
                      </button>
                    )}
                    <button className="btn-ghost text-xs py-1 px-3">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-neutral-700 mb-2">Order Items:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {order.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-neutral-500">x{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Menu Items */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-6">Popular Menu Items</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Grilled Salmon
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Main Course
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  142
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Chocolate Cake
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Dessert
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  118
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Club Sandwich
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Lunch
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  105
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Continental Breakfast
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Breakfast
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  97
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};