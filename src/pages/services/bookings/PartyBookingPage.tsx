import React, { useState } from 'react';
import { Calendar, Clock, Users, PartyPopper, CakeSlice, Heart, Briefcase, Sparkles } from 'lucide-react';

export const PartyBookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [partyType, setPartyType] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(10);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cabinNumber, setCabinNumber] = useState<string>('');
  
  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const isStepOneComplete = () => {
    return partyType !== '' && selectedDate !== '' && guestCount > 0 && startTime !== '' && endTime !== '';
  };
  
  const isStepTwoComplete = () => {
    return name !== '' && cabinNumber !== '';
  };
  
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };
  
  const availableTimeSlots = [
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  
  const availableEndTimes = () => {
    if (!startTime) return [];
    
    const startIndex = availableTimeSlots.findIndex(slot => slot === startTime);
    if (startIndex === -1) return [];
    
    return availableTimeSlots.slice(startIndex + 1);
  };
  
  const calculateTotalCost = () => {
    const basePrice = 299.99;
    const guestPricePerPerson = 25.99;
    const additionalGuestCost = Math.max(0, guestCount - 10) * guestPricePerPerson;
    
    return basePrice + additionalGuestCost;
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary-800 mb-2">Plan Your Special Event</h2>
        <p className="text-neutral-600">
          Host a memorable celebration in our elegant party halls with personalized service and catering options.
        </p>
      </div>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            step >= 1 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'
          }`}>
            1
          </div>
          <div className={`h-1 w-12 md:w-20 ${
            step > 1 ? 'bg-primary-600' : 'bg-neutral-200'
          }`}></div>
        </div>
        <div className="flex items-center">
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            step >= 2 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'
          }`}>
            2
          </div>
          <div className={`h-1 w-12 md:w-20 ${
            step > 2 ? 'bg-primary-600' : 'bg-neutral-200'
          }`}></div>
        </div>
        <div className="flex items-center">
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            step >= 3 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'
          }`}>
            3
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-card p-6">
        {/* Step 1: Party Details */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Party Details</h3>
            
            {/* Party Type */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Select Occasion Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div 
                  className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-colors ${
                    partyType === 'birthday' 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                  onClick={() => setPartyType('birthday')}
                >
                  <CakeSlice className={`h-8 w-8 mb-2 ${
                    partyType === 'birthday' ? 'text-primary-600' : 'text-neutral-500'
                  }`} />
                  <div className="text-center">
                    <span className="font-medium">Birthday</span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-colors ${
                    partyType === 'wedding' 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                  onClick={() => setPartyType('wedding')}
                >
                  <Heart className={`h-8 w-8 mb-2 ${
                    partyType === 'wedding' ? 'text-primary-600' : 'text-neutral-500'
                  }`} />
                  <div className="text-center">
                    <span className="font-medium">Wedding</span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-colors ${
                    partyType === 'business' 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                  onClick={() => setPartyType('business')}
                >
                  <Briefcase className={`h-8 w-8 mb-2 ${
                    partyType === 'business' ? 'text-primary-600' : 'text-neutral-500'
                  }`} />
                  <div className="text-center">
                    <span className="font-medium">Business</span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-colors ${
                    partyType === 'other' 
                      ? 'border-primary-600 bg-primary-50' 
                      : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                  onClick={() => setPartyType('other')}
                >
                  <Sparkles className={`h-8 w-8 mb-2 ${
                    partyType === 'other' ? 'text-primary-600' : 'text-neutral-500'
                  }`} />
                  <div className="text-center">
                    <span className="font-medium">Other</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Select Date
              </label>
              <select 
                className="form-input"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Select a date</option>
                {getAvailableDates().map((date) => {
                  const formattedDate = new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  });
                  return (
                    <option key={date} value={date}>
                      {formattedDate}
                    </option>
                  );
                })}
              </select>
            </div>
            
            {/* Guest Count */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Number of Guests
              </label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  min="1" 
                  max="100"
                  className="form-input"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                />
                <Users className="ml-2 h-5 w-5 text-neutral-500" />
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Base price includes up to 10 guests. Additional guests: $25.99 per person.
              </p>
            </div>
            
            {/* Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Start Time
                </label>
                <select 
                  className="form-input"
                  value={startTime}
                  onChange={(e) => {
                    setStartTime(e.target.value);
                    setEndTime(''); // Reset end time when start time changes
                  }}
                >
                  <option value="">Select start time</option>
                  {availableTimeSlots.map((time) => (
                    <option key={`start-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  End Time
                </label>
                <select 
                  className="form-input"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  disabled={!startTime}
                >
                  <option value="">Select end time</option>
                  {availableEndTimes().map((time) => (
                    <option key={`end-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Special Requests or Requirements (Optional)
              </label>
              <textarea 
                className="form-input min-h-[100px]" 
                placeholder="Tell us about any special arrangements, decorations, or catering preferences"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button 
                className="btn-primary"
                onClick={handleContinue}
                disabled={!isStepOneComplete()}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Contact Information */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Cabin Number
                </label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g., A123"
                  value={cabinNumber}
                  onChange={(e) => setCabinNumber(e.target.value)}
                />
              </div>
            </div>
            
            <div className="border-t border-neutral-200 pt-4 mt-6">
              <h4 className="font-medium text-neutral-800 mb-4">Booking Summary</h4>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Occasion Type:</span>
                  <span className="font-medium capitalize">{partyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Date:</span>
                  <span className="font-medium">
                    {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Time:</span>
                  <span className="font-medium">{startTime} - {endTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Guests:</span>
                  <span className="font-medium">{guestCount}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="btn-ghost"
                onClick={handleBack}
              >
                Back
              </button>
              <button 
                className="btn-primary"
                onClick={handleContinue}
                disabled={!isStepTwoComplete()}
              >
                Review & Confirm
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Final Review and Payment */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Review Your Booking</h3>
            
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h4 className="font-medium text-primary-700 mb-3 flex items-center">
                <PartyPopper className="h-5 w-5 mr-2 text-primary-600" />
                Party Details
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-neutral-500">Occasion Type</div>
                  <div className="font-medium capitalize">{partyType}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Date</div>
                  <div className="font-medium">
                    {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Time</div>
                  <div className="font-medium">{startTime} - {endTime}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Number of Guests</div>
                  <div className="font-medium">{guestCount}</div>
                </div>
              </div>
              
              {specialRequests && (
                <div className="mt-4">
                  <div className="text-sm text-neutral-500">Special Requests</div>
                  <div className="bg-white p-3 rounded border border-neutral-200 text-neutral-700 mt-1">
                    {specialRequests}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h4 className="font-medium text-primary-700 mb-3 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-600" />
                Contact Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-neutral-500">Name</div>
                  <div className="font-medium">{name}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Cabin Number</div>
                  <div className="font-medium">{cabinNumber}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
              <h4 className="font-medium text-primary-700 mb-3">Price Breakdown</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Base price (up to 10 guests)</span>
                  <span>$299.99</span>
                </div>
                
                {guestCount > 10 && (
                  <div className="flex justify-between">
                    <span>Additional guests ({guestCount - 10} × $25.99)</span>
                    <span>${((guestCount - 10) * 25.99).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t border-primary-200 pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${calculateTotalCost().toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                className="btn-ghost"
                onClick={handleBack}
              >
                Back
              </button>
              <button className="btn-primary">
                Confirm & Book
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};