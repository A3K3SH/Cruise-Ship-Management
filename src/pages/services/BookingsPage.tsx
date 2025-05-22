import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { Film, Scissors, Dumbbell, PartyPopper } from 'lucide-react';

// Import booking pages
import { MovieBookingPage } from './bookings/MovieBookingPage';
import { SalonBookingPage } from './bookings/SalonBookingPage';
import { FitnessBookingPage } from './bookings/FitnessBookingPage';
import { PartyBookingPage } from './bookings/PartyBookingPage';

export const BookingsPage: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <MainLayout>
      <div className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Book Our Premium Services</h1>
          <p className="text-center text-lg text-primary-100 max-w-3xl mx-auto mb-8">
            Enhance your cruise experience with our wide range of entertainment, relaxation, and celebration services.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/bookings/movie"
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/bookings/movie')
                  ? 'bg-white text-primary-800'
                  : 'bg-primary-700 text-white hover:bg-primary-600'
              }`}
            >
              <Film className="h-4 w-4 mr-1.5" />
              Movie Theater
            </Link>
            
            <Link
              to="/bookings/salon"
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/bookings/salon')
                  ? 'bg-white text-primary-800'
                  : 'bg-primary-700 text-white hover:bg-primary-600'
              }`}
            >
              <Scissors className="h-4 w-4 mr-1.5" />
              Beauty Salon
            </Link>
            
            <Link
              to="/bookings/fitness"
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/bookings/fitness')
                  ? 'bg-white text-primary-800'
                  : 'bg-primary-700 text-white hover:bg-primary-600'
              }`}
            >
              <Dumbbell className="h-4 w-4 mr-1.5" />
              Fitness Center
            </Link>
            
            <Link
              to="/bookings/party"
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/bookings/party')
                  ? 'bg-white text-primary-800'
                  : 'bg-primary-700 text-white hover:bg-primary-600'
              }`}
            >
              <PartyPopper className="h-4 w-4 mr-1.5" />
              Party Hall
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Routes>
          <Route path="/" element={<BookingsOverview />} />
          <Route path="/movie/*" element={<MovieBookingPage />} />
          <Route path="/salon/*" element={<SalonBookingPage />} />
          <Route path="/fitness/*" element={<FitnessBookingPage />} />
          <Route path="/party/*" element={<PartyBookingPage />} />
        </Routes>
      </div>
    </MainLayout>
  );
};

const BookingsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="card card-hover overflow-hidden">
        <div className="h-48 -mx-6 -mt-6 mb-6 relative">
          <img 
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Movie Theater" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white mb-2">Resort-Movie Theater</h3>
              <p className="text-neutral-200">Experience blockbusters in comfort</p>
            </div>
          </div>
        </div>
        <p className="text-neutral-600 mb-4">
          Enjoy the latest films and classics in our state-of-the-art theater with premium seating and immersive sound.
        </p>
        <Link to="/bookings/movie" className="btn-primary w-full text-center">
          Browse Movies
        </Link>
      </div>
      
      <div className="card card-hover overflow-hidden">
        <div className="h-48 -mx-6 -mt-6 mb-6 relative">
          <img 
            src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Beauty Salon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white mb-2">Beauty Salon</h3>
              <p className="text-neutral-200">Pamper yourself during your voyage</p>
            </div>
          </div>
        </div>
        <p className="text-neutral-600 mb-4">
          Treat yourself to our professional beauty services, from haircuts and styling to manicures and relaxing treatments.
        </p>
        <Link to="/bookings/salon" className="btn-primary w-full text-center">
          View Services
        </Link>
      </div>
      
      <div className="card card-hover overflow-hidden">
        <div className="h-48 -mx-6 -mt-6 mb-6 relative">
          <img 
            src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Fitness Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white mb-2">Fitness Center</h3>
              <p className="text-neutral-200">Stay active even at sea</p>
            </div>
          </div>
        </div>
        <p className="text-neutral-600 mb-4">
          Maintain your fitness routine in our fully-equipped center with premium equipment, personal training, and ocean views.
        </p>
        <Link to="/bookings/fitness" className="btn-primary w-full text-center">
          Book Sessions
        </Link>
      </div>
      
      <div className="card card-hover overflow-hidden">
        <div className="h-48 -mx-6 -mt-6 mb-6 relative">
          <img 
            src="https://images.pexels.com/photos/7180795/pexels-photo-7180795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Party Hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold text-white mb-2">Party Hall</h3>
              <p className="text-neutral-200">Celebrate special occasions</p>
            </div>
          </div>
        </div>
        <p className="text-neutral-600 mb-4">
          Host memorable celebrations in our elegant venue, perfect for birthdays, weddings, business events, and more.
        </p>
        <Link to="/bookings/party" className="btn-primary w-full text-center">
          Plan Your Event
        </Link>
      </div>
    </div>
  );
};