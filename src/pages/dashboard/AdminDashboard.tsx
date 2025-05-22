import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, Settings, Sliders, Plus } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Total Voyagers</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">254</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary-700" />
            </div>
          </div>
          <div className="mt-4 text-sm text-success-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>12% increase</span>
            <span className="text-neutral-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Total Orders</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">1,432</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <ShoppingBag className="h-6 w-6 text-primary-700" />
            </div>
          </div>
          <div className="mt-4 text-sm text-success-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>8% increase</span>
            <span className="text-neutral-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-500 text-sm">Total Bookings</p>
              <h3 className="text-3xl font-bold text-primary-800 mt-1">847</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Settings className="h-6 w-6 text-primary-700" />
            </div>
          </div>
          <div className="mt-4 text-sm text-success-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>15% increase</span>
            <span className="text-neutral-500 ml-1">from last month</span>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Management */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary-800">User Management</h3>
            <Link to="/manage-users" className="btn-primary flex items-center text-sm py-1.5">
              <Plus className="h-4 w-4 mr-1" /> Add User
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-semibold">JD</div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">John Doe</div>
                  <div className="text-sm text-neutral-500">Voyager</div>
                </div>
              </div>
              <div className="text-sm text-primary-600">View Details</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary-700 text-white rounded-full flex items-center justify-center font-semibold">JS</div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">Jane Smith</div>
                  <div className="text-sm text-neutral-500">Manager</div>
                </div>
              </div>
              <div className="text-sm text-primary-600">View Details</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent-700 text-white rounded-full flex items-center justify-center font-semibold">MJ</div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">Mike Johnson</div>
                  <div className="text-sm text-neutral-500">Head Cook</div>
                </div>
              </div>
              <div className="text-sm text-primary-600">View Details</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/manage-users" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              View All Users
            </Link>
          </div>
        </div>

        {/* Inventory Management */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary-800">Inventory Management</h3>
            <Link to="/manage-items" className="btn-primary flex items-center text-sm py-1.5">
              <Plus className="h-4 w-4 mr-1" /> Add Item
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary-700" />
                </div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">Premium Chocolate Box</div>
                  <div className="text-sm text-neutral-500">Stationery - Gift</div>
                </div>
              </div>
              <div className="text-sm font-medium text-primary-600">$24.99</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary-700" />
                </div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">Seafood Platter</div>
                  <div className="text-sm text-neutral-500">Catering - Food</div>
                </div>
              </div>
              <div className="text-sm font-medium text-primary-600">$45.99</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-primary-700" />
                </div>
                <div className="ml-3">
                  <div className="text-primary-800 font-medium">Voyage Journal</div>
                  <div className="text-sm text-neutral-500">Stationery - Book</div>
                </div>
              </div>
              <div className="text-sm font-medium text-primary-600">$12.99</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/manage-items" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
              View All Items
            </Link>
          </div>
        </div>
      </div>

      {/* System Settings */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-primary-800">System Settings</h3>
          <button className="flex items-center text-primary-600 hover:text-primary-800">
            <Sliders className="h-5 w-5 mr-1" />
            <span>Configure</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-neutral-200 rounded-lg">
            <div className="font-medium text-primary-800 mb-2">Notifications</div>
            <p className="text-sm text-neutral-600 mb-3">
              Configure email and system notification settings
            </p>
            <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
              Manage
            </button>
          </div>
          
          <div className="p-4 border border-neutral-200 rounded-lg">
            <div className="font-medium text-primary-800 mb-2">Backup & Restore</div>
            <p className="text-sm text-neutral-600 mb-3">
              Schedule automatic data backups
            </p>
            <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
              Configure
            </button>
          </div>
          
          <div className="p-4 border border-neutral-200 rounded-lg">
            <div className="font-medium text-primary-800 mb-2">User Permissions</div>
            <p className="text-sm text-neutral-600 mb-3">
              Manage role-based access control
            </p>
            <button className="text-sm text-primary-600 hover:text-primary-800 font-medium">
              Edit Roles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};