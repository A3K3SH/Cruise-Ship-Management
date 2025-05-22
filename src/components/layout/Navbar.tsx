import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Ship, User, ShoppingCart, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';
import toast from 'react-hot-toast';

export const Navbar: React.FC = () => {
  const { currentUser, userDetails, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSignOut = async () => {
    try {
      setIsProfileMenuOpen(false); // Close the profile menu
      const signOutPromise = signOut();
      toast.promise(signOutPromise, {
        loading: 'Signing out...',
        success: 'Successfully signed out',
        error: (err) => `Error signing out: ${err.message || 'Please try again'}`
      });
      await signOutPromise;
      navigate('/login');
    } catch (error: any) {
      console.error('Error signing out:', error);
      // Error toast is handled by the promise toast above
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close Services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownLinkClick = () => {
    setIsServicesMenuOpen(false);
  };

  const renderAuthLinks = () => {
    if (!currentUser) {
      return (
        <>
          <Link 
            to="/login" 
            className="btn-ghost text-sm" 
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="btn-primary text-sm" 
            onClick={closeMenu}
          >
            Sign Up
          </Link>
        </>
      );
    }

    return (
      <>
        <div className="relative" ref={profileMenuRef}>
          <button
            className="flex items-center space-x-1 text-primary-700 hover:text-primary-900"
            onClick={() => setIsProfileMenuOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={isProfileMenuOpen}
          >
            <User size={20} />
            <span className="hidden md:inline">{userDetails?.displayName || userDetails?.email}</span>
          </button>
          <div
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 transition-opacity duration-200 ${isProfileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-neutral-700 border-b border-neutral-100">
                <p className="font-medium">{userDetails?.displayName || 'User'}</p>
                <p className="text-xs text-neutral-500 capitalize">{userDetails?.role}</p>
              </div>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50"
                onClick={closeMenu}
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-2 text-sm text-error-600 hover:bg-error-50"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
        
        {userDetails?.role === UserRole.VOYAGER && (
          <Link 
            to="/orders" 
            className="relative text-primary-700 hover:text-primary-900"
            onClick={closeMenu}
          >
            <ShoppingCart size={20} />
          </Link>
        )}
      </>
    );
  };

  // Render different navigation links based on user role
  const renderNavLinks = () => {
    if (!currentUser) {
      return (
        <>
          <Link to="/" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Home</Link>
          <Link to="/services" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Services</Link>
        </>
      );
    }

    switch (userDetails?.role) {
      case UserRole.VOYAGER:
        return (
          <>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Dashboard</Link>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                className="block py-2 px-4 hover:bg-primary-50 rounded-md flex items-center gap-1"
                onClick={() => setIsServicesMenuOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={isServicesMenuOpen}
                type="button"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isServicesMenuOpen && (
                <div style={{ position: 'absolute', left: 0, top: '100%', background: 'white', zIndex: 1000, minWidth: 200, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                  <Link to="/catering" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Catering</Link>
                  <Link to="/stationery" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Stationery</Link>
                  <Link to="/bookings/movie" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Resort-Movie</Link>
                  <Link to="/bookings/salon" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Beauty Salon</Link>
                  <Link to="/bookings/fitness" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Fitness Center</Link>
                  <Link to="/bookings/party" style={{ display: 'block', padding: 8, color: '#222', textDecoration: 'none' }} onClick={() => setIsServicesMenuOpen(false)}>Party Hall</Link>
                </div>
              )}
            </div>
            <Link to="/bookings" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Bookings</Link>
          </>
        );
      case UserRole.ADMIN:
        return (
          <>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Dashboard</Link>
            <Link to="/manage-items" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Manage Items</Link>
            <Link to="/manage-users" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Manage Users</Link>
          </>
        );
      case UserRole.MANAGER:
        return (
          <>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Dashboard</Link>
            <Link to="/bookings" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>View Bookings</Link>
          </>
        );
      case UserRole.HEAD_COOK:
        return (
          <>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Dashboard</Link>
            <Link to="/catering-orders" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Catering Orders</Link>
          </>
        );
      case UserRole.SUPERVISOR:
        return (
          <>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Dashboard</Link>
            <Link to="/stationery-orders" className="block py-2 px-4 hover:bg-primary-50 rounded-md" onClick={closeMenu}>Stationery Orders</Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white shadow-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Ship className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-800">CruiseMS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {renderNavLinks()}
            </div>
          </div>

          {/* User actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {renderAuthLinks()}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-primary-800 hover:bg-primary-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} fade-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {renderNavLinks()}
        </div>
        <div className="pt-4 pb-3 border-t border-neutral-200">
          <div className="flex items-center justify-between px-4">
            {renderAuthLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};