import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <img
        src="/assets/peter-hansen-MeGmdPNe36w-unsplash.jpg"
        alt="Cruise Ship 1"
        className="hero-bg-img hero-bg-img-1"
      />
      <img
        src="/assets/wp2439704-cruise-ships-wallpapers.jpg"
        alt="Cruise Ship 2"
        className="hero-bg-img hero-bg-img-2"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          Your Premier Cruise Ship Management System
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
          Elevate your voyage experience with our comprehensive suite of services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="btn bg-accent-500 text-primary-900 hover:bg-accent-600 shadow-lg px-8 py-3 text-lg font-semibold rounded-md"
          >
            Explore Services
          </Link>
          <Link
            to="/bookings"
            className="btn bg-white/90 text-primary-800 hover:bg-primary-50 shadow px-8 py-3 text-lg font-semibold rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
      {/* Animation keyframes for crossfade */}
      <style>{`
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          opacity: 0;
          transition: opacity 1.5s;
          pointer-events: none;
        }
        .hero-bg-img-1 {
          animation: heroFade 14s infinite;
        }
        .hero-bg-img-2 {
          animation: heroFade 14s infinite;
          animation-delay: 7s;
        }
        @keyframes heroFade {
          0% { opacity: 1; }
          40% { opacity: 1; }
          50% { opacity: 0; }
          90% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (max-width: 768px) {
          .hero-bg-img {
            height: 100vh;
            min-height: 100vh;
          }
          .text-4xl { font-size: 2rem; }
          .md\:text-6xl { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};