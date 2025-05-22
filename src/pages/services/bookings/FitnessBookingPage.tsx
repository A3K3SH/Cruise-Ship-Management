import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dumbbell, Clock, Users } from 'lucide-react';
import { ServiceCard } from '../../../components/ui/ServiceCard';

export const FitnessBookingPage: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const fitnessOptions = [
    {
      id: 'fit1',
      title: 'Personal Training Session',
      description: 'One-on-one workout session with our certified personal trainers.',
      price: 45.99,
      duration: 60,
      imageSrc: 'https://images.pexels.com/photos/6550878/pexels-photo-6550878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'fit2',
      title: 'Yoga Class',
      description: 'Find your balance with our relaxing yoga sessions overlooking the ocean.',
      price: 25.99,
      duration: 60,
      imageSrc: 'https://images.pexels.com/photos/8436431/pexels-photo-8436431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'fit3',
      title: 'Spinning Class',
      description: 'High-energy spinning session to boost your cardio fitness.',
      price: 30.99,
      duration: 45,
      imageSrc: 'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'fit4',
      title: 'Fitness Center Access',
      description: 'Full day access to our state-of-the-art fitness center with premium equipment.',
      price: 15.99,
      duration: 0,
      imageSrc: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'fit5',
      title: 'HIIT Workout',
      description: 'High-Intensity Interval Training for maximum calorie burn and fitness results.',
      price: 35.99,
      duration: 45,
      imageSrc: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'fit6',
      title: 'Pilates Session',
      description: 'Core-strengthening Pilates class with our expert instructors.',
      price: 30.99,
      duration: 60,
      imageSrc: 'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<FitnessList options={fitnessOptions} />} />
      <Route path="/detail/:id" element={<FitnessDetail options={fitnessOptions} />} />
    </Routes>
  );
};

interface FitnessOption {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  imageSrc: string;
}

interface FitnessListProps {
  options: FitnessOption[];
}

const FitnessList: React.FC<FitnessListProps> = ({ options }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">Fitness Center</h2>
        <p className="text-neutral-600">
          Maintain your fitness routine during your voyage with our premium facilities and expert trainers. Whether you prefer personal training, group classes, or independent workouts, we have options for every fitness level.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map(option => (
          <ServiceCard
            key={option.id}
            id={option.id}
            title={option.title}
            description={option.description}
            price={option.price}
            imageSrc={option.imageSrc}
            actionLink="/bookings/fitness/detail"
            buttonText="Book Now"
            badge={option.duration ? `${option.duration} min` : 'All Day'}
            badgeColor={option.duration ? 'badge-primary' : 'badge-success'}
          />
        ))}
      </div>
    </div>
  );
};

interface FitnessDetailProps {
  options: FitnessOption[];
}

const FitnessDetail: React.FC<FitnessDetailProps> = ({ options }) => {
  // Mock data - In a real app, this would be fetched based on option ID
  const option = options[0];
  
  const trainers = [
    { id: 'train1', name: 'Alex Thompson', specialty: 'Strength Training, HIIT', available: true },
    { id: 'train2', name: 'Jasmine Park', specialty: 'Yoga, Pilates', available: true },
    { id: 'train3', name: 'Marcus Johnson', specialty: 'Cardio, Spinning', available: false },
  ];
  
  const classSchedule = [
    { time: '07:00', available: true, currentAttendees: 3, maxAttendees: 10 },
    { time: '09:00', available: true, currentAttendees: 5, maxAttendees: 10 },
    { time: '11:00', available: false, currentAttendees: 10, maxAttendees: 10 },
    { time: '13:00', available: true, currentAttendees: 4, maxAttendees: 10 },
    { time: '15:00', available: true, currentAttendees: 2, maxAttendees: 10 },
    { time: '17:00', available: true, currentAttendees: 7, maxAttendees: 10 },
    { time: '19:00', available: false, currentAttendees: 10, maxAttendees: 10 },
  ];
  
  const equipment = [
    { id: 'equip1', name: 'Treadmill', available: true },
    { id: 'equip2', name: 'Exercise Bike', available: true },
    { id: 'equip3', name: 'Rowing Machine', available: true },
    { id: 'equip4', name: 'Weightlifting Bench', available: true },
    { id: 'equip5', name: 'Elliptical Trainer', available: true },
    { id: 'equip6', name: 'Free Weights', available: true },
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
              src={option.imageSrc} 
              alt={option.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-primary-800 mb-2">{option.title}</h2>
          
          <div className="flex items-center mb-4 text-neutral-600">
            {option.duration ? (
              <>
                <Clock className="h-4 w-4 mr-1" />
                <span>{option.duration} minutes</span>
              </>
            ) : (
              <>
                <Clock className="h-4 w-4 mr-1" />
                <span>All day access</span>
              </>
            )}
          </div>
          
          <div className="flex items-center mb-4 text-xl font-semibold text-primary-700">
            ${option.price.toFixed(2)}
          </div>
          
          <p className="text-neutral-700 mb-6">{option.description}</p>
          
          <div className="border-t border-neutral-200 pt-4">
            <h3 className="font-medium text-neutral-800 mb-2">What's Included</h3>
            <ul className="text-neutral-600 space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to premium fitness equipment</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional guidance and instruction</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Complimentary towel service</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bottled water and refreshments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="text-xl font-bold text-primary-800 mb-6">Book Your Fitness Session</h3>
          
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
              Available Time Slots
            </label>
            <div className="grid grid-cols-4 gap-2">
              {classSchedule.map((slot) => (
                <div 
                  key={slot.time}
                  className={`p-2 rounded-md text-center text-sm cursor-pointer transition-colors ${
                    slot.available
                      ? 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      : 'bg-neutral-100 text-neutral-400 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div>{slot.time}</div>
                  <div className="text-xs text-neutral-500">
                    {slot.currentAttendees}/{slot.maxAttendees}
                    <span className="ml-1">
                      <Users className="inline h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trainer Selection (if applicable) */}
          {option.title.includes('Personal Training') && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Select Trainer
              </label>
              <div className="space-y-3">
                {trainers.map((trainer) => (
                  <div 
                    key={trainer.id}
                    className={`flex items-center border rounded-lg p-3 cursor-pointer transition-colors ${
                      trainer.available
                        ? 'border-neutral-200 hover:border-primary-400 hover:bg-primary-50'
                        : 'border-neutral-200 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <Dumbbell className="h-5 w-5 text-primary-700" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-800">{trainer.name}</div>
                      <div className="text-sm text-neutral-500">{trainer.specialty}</div>
                    </div>
                    {trainer.available ? (
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
          )}
          
          {/* Equipment Selection (for general access) */}
          {option.title.includes('Fitness Center Access') && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Select Equipment (Optional)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {equipment.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center border rounded-lg p-3 cursor-pointer transition-colors border-neutral-200 hover:border-primary-400 hover:bg-primary-50"
                  >
                    <div className="flex items-center flex-grow">
                      <Dumbbell className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{item.name}</span>
                    </div>
                    <div className="w-5 h-5 border border-neutral-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Fitness Goals or Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Fitness Goals or Special Requests (Optional)
            </label>
            <textarea 
              className="form-input min-h-[100px]" 
              placeholder="Tell us about your fitness goals or any special requirements"
            ></textarea>
          </div>
          
          <div className="border-t border-neutral-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-neutral-500">Service</div>
              <div className="font-medium">{option.title}</div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-neutral-500">Duration</div>
              <div className="font-medium">
                {option.duration ? `${option.duration} minutes` : 'All day access'}
              </div>
            </div>
            
            <div className="flex justify-between items-center text-lg font-bold">
              <div>Total</div>
              <div>${option.price.toFixed(2)}</div>
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