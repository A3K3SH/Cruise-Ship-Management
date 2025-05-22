import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Scissors, Watch, User } from 'lucide-react';
import { ServiceCard } from '../../../components/ui/ServiceCard';

export const SalonBookingPage: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const services = [
    {
      id: 'salon1',
      title: 'Haircut & Styling',
      description: 'Professional haircut and styling by our experienced salon artists.',
      price: 45.99,
      duration: 45,
      imageSrc: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'salon2',
      title: 'Manicure & Pedicure',
      description: 'Luxurious nail care treatment for hands and feet.',
      price: 55.99,
      duration: 60,
      imageSrc: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'salon3',
      title: 'Facial Treatment',
      description: 'Rejuvenating facial treatment customized for your skin type.',
      price: 65.99,
      duration: 50,
      imageSrc: 'https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'salon4',
      title: 'Full Spa Package',
      description: 'Complete relaxation with our signature spa treatments and massages.',
      price: 120.99,
      duration: 120,
      imageSrc: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'salon5',
      title: 'Men\'s Grooming',
      description: 'Haircut, beard trim, and facial treatment designed for men.',
      price: 49.99,
      duration: 45,
      imageSrc: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'salon6',
      title: 'Hair Coloring',
      description: 'Professional hair coloring and highlights by our color experts.',
      price: 85.99,
      duration: 90,
      imageSrc: 'https://images.pexels.com/photos/3993321/pexels-photo-3993321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<SalonServiceList services={services} />} />
      <Route path="/detail/:id" element={<SalonServiceDetail services={services} />} />
    </Routes>
  );
};

interface SalonService {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  imageSrc: string;
}

interface SalonServiceListProps {
  services: SalonService[];
}

const SalonServiceList: React.FC<SalonServiceListProps> = ({ services }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">Beauty & Wellness Services</h2>
        <p className="text-neutral-600">
          Indulge in our premium beauty and wellness treatments during your cruise. Our experienced professionals are dedicated to helping you look and feel your best.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            imageSrc={service.imageSrc}
            actionLink="/bookings/salon/detail"
            buttonText="Book Appointment"
            badge={`${service.duration} min`}
            badgeColor="badge-secondary"
          />
        ))}
      </div>
    </div>
  );
};

interface SalonServiceDetailProps {
  services: SalonService[];
}

const SalonServiceDetail: React.FC<SalonServiceDetailProps> = ({ services }) => {
  // Mock data - In a real app, this would be fetched based on service ID
  const service = services[0];
  
  const stylists = [
    { id: 'styl1', name: 'Emma Wilson', specialty: 'Hair Styling, Coloring', available: true },
    { id: 'styl2', name: 'Michael Chen', specialty: 'Cuts, Men\'s Grooming', available: true },
    { id: 'styl3', name: 'Sophia Rodriguez', specialty: 'Treatments, Styling', available: false },
  ];
  
  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '14:00', available: false },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
  ];
  
  const availableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
      });
    }
    
    return dates;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Service Info */}
      <div className="lg:col-span-1">
        <div className="card overflow-hidden">
          <div className="h-64 -mx-6 -mt-6 mb-6">
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-primary-800 mb-2">{service.title}</h2>
          
          <div className="flex items-center mb-4 text-neutral-600">
            <Watch className="h-4 w-4 mr-1" />
            <span>{service.duration} minutes</span>
          </div>
          
          <div className="flex items-center mb-4 text-xl font-semibold text-primary-700">
            ${service.price.toFixed(2)}
          </div>
          
          <p className="text-neutral-700 mb-6">{service.description}</p>
          
          <div className="border-t border-neutral-200 pt-4">
            <h3 className="font-medium text-neutral-800 mb-2">Service Includes</h3>
            <ul className="text-neutral-600 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional consultation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium products and equipment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Complimentary refreshments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="text-xl font-bold text-primary-800 mb-6">Book Your Appointment</h3>
          
          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Date
            </label>
            <div className="flex overflow-x-auto pb-2 -mx-1">
              {availableDates().map((date) => (
                <div 
                  key={date.date}
                  className="flex-shrink-0 mx-1 w-16 p-2 rounded-md cursor-pointer text-center transition-colors bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                >
                  <div className="text-xs">{date.dayName}</div>
                  <div className="font-bold">{date.dayNumber}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Time Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Time
            </label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <div 
                  key={slot.time}
                  className={`p-2 rounded-md text-center text-sm cursor-pointer transition-colors ${
                    slot.available
                      ? 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      : 'bg-neutral-100 text-neutral-400 opacity-50 cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          </div>
          
          {/* Stylist Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Stylist
            </label>
            <div className="space-y-3">
              {stylists.map((stylist) => (
                <div 
                  key={stylist.id}
                  className={`flex items-center border rounded-lg p-3 cursor-pointer transition-colors ${
                    stylist.available
                      ? 'border-neutral-200 hover:border-primary-400 hover:bg-primary-50'
                      : 'border-neutral-200 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800">{stylist.name}</div>
                    <div className="text-sm text-neutral-500">{stylist.specialty}</div>
                  </div>
                  {stylist.available ? (
                    <div className="ml-auto">
                      <div className="w-5 h-5 border border-neutral-300 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="ml-auto text-xs text-neutral-500">Unavailable</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Request */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Special Requests (Optional)
            </label>
            <textarea 
              className="form-input min-h-[100px]" 
              placeholder="Any special requirements or preferences?"
            ></textarea>
          </div>
          
          <div className="border-t border-neutral-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-neutral-500">Service</div>
              <div className="font-medium">{service.title}</div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-neutral-500">Duration</div>
              <div className="font-medium">{service.duration} minutes</div>
            </div>
            
            <div className="flex justify-between items-center text-lg font-bold">
              <div>Total</div>
              <div>${service.price.toFixed(2)}</div>
            </div>
            
            <button className="btn-primary w-full mt-6">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};