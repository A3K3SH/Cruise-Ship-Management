import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Film, Calendar, Clock, Users } from 'lucide-react';
import { ServiceCard } from '../../../components/ui/ServiceCard';

export const MovieBookingPage: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const movies = [
    {
      id: 'mov1',
      title: 'The Ocean Adventure',
      description: 'A thrilling tale of exploration and discovery across the seven seas.',
      imageSrc: 'https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 124,
      showTimes: ['14:00', '17:30', '20:00'],
    },
    {
      id: 'mov2',
      title: 'Island Escape',
      description: 'A group of friends finds themselves stranded on a mysterious island with hidden secrets.',
      imageSrc: 'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 118,
      showTimes: ['13:30', '16:00', '19:30'],
    },
    {
      id: 'mov3',
      title: 'Beneath the Waves',
      description: 'A documentary exploring the breathtaking underwater world of coral reefs and marine life.',
      imageSrc: 'https://images.pexels.com/photos/3894506/pexels-photo-3894506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 95,
      showTimes: ['15:00', '18:00'],
    },
    {
      id: 'mov4',
      title: 'Captain\'s Legacy',
      description: 'The legendary tale of a sea captain and his quest for a long-lost treasure.',
      imageSrc: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 135,
      showTimes: ['16:30', '20:30'],
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<MovieList movies={movies} />} />
      <Route path="/detail/:id" element={<MovieDetail movies={movies} />} />
    </Routes>
  );
};

interface Movie {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  duration: number;
  showTimes: string[];
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">Now Showing</h2>
        <p className="text-neutral-600">
          Browse our current selection of films and reserve your seats for a perfect entertainment experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map(movie => (
          <ServiceCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            imageSrc={movie.imageSrc}
            actionLink="/bookings/movie/detail"
            buttonText="View Showtimes"
            badge={`${Math.floor(movie.duration / 60)}h ${movie.duration % 60}m`}
            badgeColor="badge-primary"
          />
        ))}
      </div>
    </div>
  );
};

interface MovieDetailProps {
  movies: Movie[];
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movies }) => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  // Mock data - In a real app, this would be fetched based on movie ID
  const movie = movies[0];
  
  // Mock available seats - In a real app, this would come from the database
  const totalRows = 5;
  const seatsPerRow = 8;
  const bookedSeats = ['A3', 'A4', 'B5', 'C2', 'D7', 'E1', 'E2'];
  
  const generateSeats = () => {
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      const rowLetter = String.fromCharCode(65 + i); // A, B, C, etc.
      const seats = [];
      
      for (let j = 1; j <= seatsPerRow; j++) {
        const seatNumber = `${rowLetter}${j}`;
        const isBooked = bookedSeats.includes(seatNumber);
        const isSelected = selectedSeats.includes(seatNumber);
        
        seats.push({ number: seatNumber, isBooked, isSelected });
      }
      
      rows.push({ letter: rowLetter, seats });
    }
    
    return rows;
  };
  
  const seats = generateSeats();
  
  const handleSeatClick = (seatNumber: string) => {
    if (bookedSeats.includes(seatNumber)) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatNumber)
        ? prev.filter(seat => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };
  
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Movie Info */}
      <div className="lg:col-span-2">
        <div className="card overflow-hidden">
          <div className="h-64 -mx-6 -mt-6 mb-6">
            <img 
              src={movie.imageSrc} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-primary-800 mb-2">{movie.title}</h2>
          
          <div className="flex items-center mb-4 text-neutral-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDuration(movie.duration)}</span>
          </div>
          
          <p className="text-neutral-700 mb-6">{movie.description}</p>
          
          <div className="border-t border-neutral-200 pt-4">
            <h3 className="font-medium text-neutral-800 mb-2">Available Showtimes</h3>
            <div className="flex flex-wrap gap-2">
              {movie.showTimes.map((time) => (
                <div 
                  key={time}
                  className={`px-3 py-1 rounded-md text-sm cursor-pointer transition-colors ${
                    selectedTime === time
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <div className="lg:col-span-3">
        <div className="card">
          <h3 className="text-xl font-bold text-primary-800 mb-6">Reserve Your Seats</h3>
          
          {/* Date Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Select Date
            </label>
            <div className="flex overflow-x-auto pb-2 -mx-1">
              {getAvailableDates().map((date) => {
                const dateObj = new Date(date);
                const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNumber = dateObj.getDate();
                
                return (
                  <div 
                    key={date}
                    className={`flex-shrink-0 mx-1 w-16 p-2 rounded-md cursor-pointer text-center transition-colors ${
                      selectedDate === date
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <div className="text-xs">{dayName}</div>
                    <div className="font-bold">{dayNumber}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {selectedTime && (
            <>
              {/* Screen */}
              <div className="mb-8 relative">
                <div className="h-2 bg-primary-600 rounded-t-full mb-1"></div>
                <div className="h-8 bg-neutral-100 w-full relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500">SCREEN</div>
                </div>
              </div>
              
              {/* Seat Map */}
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {seats.map((row) => (
                    <div key={row.letter} className="flex flex-col items-center mr-6 last:mr-0">
                      <div className="text-sm font-medium text-neutral-700 mb-2">{row.letter}</div>
                      <div className="flex flex-col space-y-2">
                        {row.seats.map((seat) => (
                          <div 
                            key={seat.number} 
                            className={`w-7 h-7 flex items-center justify-center rounded-md cursor-pointer text-xs font-medium transition-colors ${
                              seat.isBooked
                                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                : seat.isSelected
                                ? 'bg-primary-600 text-white'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                            }`}
                            onClick={() => handleSeatClick(seat.number)}
                          >
                            {seat.number.substring(1)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center gap-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-neutral-100 rounded-sm mr-2"></div>
                    <span className="text-xs text-neutral-600">Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-sm mr-2"></div>
                    <span className="text-xs text-neutral-600">Selected</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-neutral-200 rounded-sm mr-2"></div>
                    <span className="text-xs text-neutral-600">Booked</span>
                  </div>
                </div>
              </div>
              
              {/* Summary */}
              <div className="border-t border-neutral-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-neutral-500">Movie</div>
                    <div className="font-medium">{movie.title}</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Showtime</div>
                    <div className="font-medium">{selectedDate} at {selectedTime}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-neutral-500">Seats</div>
                    <div className="font-medium">
                      {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Tickets</div>
                    <div className="font-medium">{selectedSeats.length}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-lg font-bold">
                  <div>Total</div>
                  <div>${(selectedSeats.length * 12.99).toFixed(2)}</div>
                </div>
                
                <button 
                  className="btn-primary w-full mt-6"
                  disabled={selectedSeats.length === 0}
                >
                  Complete Reservation
                </button>
              </div>
            </>
          )}
          
          {!selectedTime && (
            <div className="text-center py-8 text-neutral-500">
              <Film className="h-12 w-12 mx-auto mb-3 text-neutral-400" />
              <p>Please select a showtime to view seat availability</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};