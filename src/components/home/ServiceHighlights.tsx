import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Gift, Film, Scissors, Dumbbell, PartyPopper } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo }) => {
  return (
    <div className="card card-hover group">
      <div className="mb-4 text-primary-600 group-hover:text-primary-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary-800">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

export const ServiceHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Premium Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience the finest services aboard our luxury cruise ship, designed to make your voyage truly unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Utensils size={32} />}
            title="Gourmet Catering"
            description="Indulge in a diverse selection of culinary delights, from international cuisine to local specialties, all prepared by our expert chefs."
            linkTo="/catering"
          />
          
          <ServiceCard
            icon={<Gift size={32} />}
            title="Exclusive Stationery"
            description="Browse our collection of premium gifts, books, and souvenirs to commemorate your journey or surprise your loved ones."
            linkTo="/stationery"
          />
          
          <ServiceCard
            icon={<Film size={32} />}
            title="Resort-Movie Experience"
            description="Enjoy the latest blockbusters and classic films in our state-of-the-art theater with premium seating and immersive sound."
            linkTo="/bookings/movie"
          />
          
          <ServiceCard
            icon={<Scissors size={32} />}
            title="Beauty Salon"
            description="Pamper yourself with our professional beauty services, from haircuts and styling to manicures, pedicures, and relaxing treatments."
            linkTo="/bookings/salon"
          />
          
          <ServiceCard
            icon={<Dumbbell size={32} />}
            title="Fitness Center"
            description="Stay active in our fully-equipped fitness center with top-of-the-line equipment, personal training options, and panoramic ocean views."
            linkTo="/bookings/fitness"
          />
          
          <ServiceCard
            icon={<PartyPopper size={32} />}
            title="Party Hall"
            description="Celebrate special occasions in our elegant party halls, perfect for birthdays, weddings, business events, and more."
            linkTo="/bookings/party"
          />
        </div>
      </div>
    </section>
  );
};