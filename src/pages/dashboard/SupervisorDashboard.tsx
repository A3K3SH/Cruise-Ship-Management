import React from 'react';
import { Package, ShoppingBag, Clock, CheckCircle } from 'lucide-react';

export const SupervisorDashboard: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const pendingOrders = 5;
  const processingOrders = 3;
  const completedOrders = 18;
  
  const recentOrders = [
    { 
      id: 'ord123', 
      voyager: 'Alice Johnson', 
      cabin: 'D412',
      time: '11:15 AM',
      status: 'pending',
      items: [
        { name: 'Cruise Memory Book', quantity: 1 },
        { name: 'Luxury Pen Set', quantity: 1 },
      ]
    },
    { 
      id: 'ord456', 
      voyager: 'Robert Davis', 
      cabin: 'A218',
      time: '11:45 AM',
      status: 'processing',
      items: [
        { name: 'Premium Chocolate Box', quantity: 2 },
        { name: 'Plush Cruise Mascot', quantity: 1 },
      ]
    },
    { 
      id: 'ord789', 
      voyager: 'Jennifer Wilson', 
      cabin: 'B315',
      time: '12:10 PM',
      status: 'ready',
      items: [
        { name: 'Nautical Picture Frame', quantity: 1 },
        { name: 'Voyage Journal', quantity: 1 },
        { name: 'Ship Model Kit', quantity: 1 },
      ]
    },
  ];

  const inventoryAlerts = [
    { item: 'Premium Chocolate Box', stock: 8, threshold: 10 },
    { item: 'Cruise Memory Book', stock: 5, threshold: 10 },
    { item: 'Ship Model Kit', stock: 3, threshold: 5 },
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
              <p className="text-neutral-500 text-sm">Processing</p>
              <h3 className="text-3xl font-bold text-primary-600 mt-1">{processingOrders}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-primary-600" />
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

      {/* Inventory Alerts */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-6">Inventory Alerts</h3>
        
        {inventoryAlerts.length > 0 ? (
          <div className="space-y-4">
            {inventoryAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-warning-50 rounded-lg border border-warning-200">
                <div className="flex items-center">
                  <div className="bg-warning-100 p-2 rounded-full mr-3">
                    <ShoppingBag className="h-5 w-5 text-warning-600" />
                  </div>
                  <div>
                    <div className="font-medium text-warning-800">{alert.item}</div>
                    <div className="text-sm text-warning-700">
                      Stock: <span className="font-medium">{alert.stock}</span> (Threshold: {alert.threshold})
                    </div>
                  </div>
                </div>
                <button className="btn-primary text-xs py-1 px-3">
                  Restock
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-neutral-500">
            <ShoppingBag className="h-12 w-12 mx-auto mb-2 text-neutral-400" />
            <p>No inventory alerts at this time</p>
          </div>
        )}
      </div>

      {/* Current Orders */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-primary-800">Current Orders</h3>
          <a href="/stationery-orders" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
            View All Orders
          </a>
        </div>
        
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-neutral-50 p-4">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-primary-600 mr-2" />
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
                        : order.status === 'processing' 
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
                        Process Order
                      </button>
                    )}
                    {order.status === 'processing' && (
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

      {/* Popular Items */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-6">Popular Items</h3>
        
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
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Premium Chocolate Box
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Gift
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  87
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  8
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Cruise Memory Book
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Book
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  65
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  5
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Luxury Pen Set
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Gift
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  54
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  12
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">
                  Ship Model Kit
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  Gift
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  42
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
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