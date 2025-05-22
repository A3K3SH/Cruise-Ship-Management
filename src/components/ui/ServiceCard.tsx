import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  price?: number;
  buttonText?: string;
  actionLink: string;
  badge?: string;
  badgeColor?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  price,
  buttonText = 'View Details',
  actionLink,
  badge,
  badgeColor = 'badge-primary'
}) => {
  const { addToCart } = useCart ? useCart() : { addToCart: undefined };

  return (
    <div className="card card-hover overflow-hidden flex flex-col h-full group">
      {imageSrc && (
        <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <span className={`absolute top-4 right-4 ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2 text-primary-800">{title}</h3>
      <p className="text-neutral-600 mb-4 flex-grow">{description}</p>
      
      {price !== undefined && (
        <div className="mb-4 text-lg font-semibold text-primary-700">
          ${price.toFixed(2)}
        </div>
      )}
      
      <div className="mt-auto flex flex-col gap-2">
        <Link
          to={`${actionLink}/${id}`}
          className="btn-primary w-full text-center"
        >
          {buttonText}
        </Link>
        {price !== undefined && addToCart && (
          <button
            className="btn-secondary w-full text-center"
            onClick={() => addToCart({ id, name: title, price, quantity: 1, image: imageSrc })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};