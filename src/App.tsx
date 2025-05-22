import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Pages
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { CateringPage } from './pages/services/CateringPage';
import { StationeryPage } from './pages/services/StationeryPage';
import { BookingsPage } from './pages/services/BookingsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { OrdersPage } from './pages/orders/OrdersPage';

// Routes
import { PrivateRoute } from './routes/PrivateRoute';
import { RoleBasedRoute } from './routes/RoleBasedRoute';
import { UserRole } from './types';

// Wrapper component to access auth context
const AppRoutes = () => {
  const { isOffline } = useAuth();

  const renderServiceRoute = (Component: React.ComponentType) => {
    if (isOffline) {
      return <Component />;
    }
    return (
      <PrivateRoute>
        <RoleBasedRoute roles={[UserRole.VOYAGER]}>
          <Component />
        </RoleBasedRoute>
      </PrivateRoute>
    );
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/services" element={<Navigate to="/bookings" />} />

      {/* Private Routes - Voyager */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      } />
      <Route path="/orders" element={
        <PrivateRoute>
          <OrdersPage />
        </PrivateRoute>
      } />
      
      <Route path="/catering/*" element={renderServiceRoute(CateringPage)} />
      <Route path="/stationery/*" element={renderServiceRoute(StationeryPage)} />
      <Route path="/bookings/*" element={renderServiceRoute(BookingsPage)} />

      {/* Admin Routes */}
      <Route path="/manage-users" element={
        <PrivateRoute>
          <RoleBasedRoute roles={[UserRole.ADMIN]}>
            <div>Admin: Manage Users</div>
          </RoleBasedRoute>
        </PrivateRoute>
      } />

      <Route path="/manage-items" element={
        <PrivateRoute>
          <RoleBasedRoute roles={[UserRole.ADMIN]}>
            <div>Admin: Manage Items</div>
          </RoleBasedRoute>
        </PrivateRoute>
      } />

      {/* Manager Routes */}
      <Route path="/view-bookings" element={
        <PrivateRoute>
          <RoleBasedRoute roles={[UserRole.MANAGER]}>
            <div>Manager: View Bookings</div>
          </RoleBasedRoute>
        </PrivateRoute>
      } />

      {/* Head Cook Routes */}
      <Route path="/catering-orders" element={
        <PrivateRoute>
          <RoleBasedRoute roles={[UserRole.HEAD_COOK]}>
            <div>Head Cook: Catering Orders</div>
          </RoleBasedRoute>
        </PrivateRoute>
      } />

      {/* Supervisor Routes */}
      <Route path="/stationery-orders" element={
        <PrivateRoute>
          <RoleBasedRoute roles={[UserRole.SUPERVISOR]}>
            <div>Supervisor: Stationery Orders</div>
          </RoleBasedRoute>
        </PrivateRoute>
      } />

      {/* 404 Route */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
          <Toaster position="top-right" />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;