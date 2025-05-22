import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { Gift, BookOpen, Search } from 'lucide-react';

export const StationeryPage: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const stationeryItems = [
    {
      id: 'sta1',
      title: 'Premium Chocolate Box',
      description: 'Assortment of gourmet chocolates in an elegant gift box.',
      price: 24.99,
      category: 'gift',
      imageSrc: 'https://images.pexels.com/photos/40263/christmas-candy-chocolate-sweet-40263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'sta2',
      title: 'Cruise Memory Book',
      description: 'Beautiful hardcover book to preserve your voyage memories.',
      price: 19.99,
      category: 'book',
      imageSrc: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'sta3',
      title: 'Luxury Pen Set',
      description: 'Elegant writing set with premium ballpoint and fountain pens.',
      price: 32.99,
      category: 'gift',
      imageSrc: 'https://images.pexels.com/photos/3732674/pexels-photo-3732674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'sta4',
      title: 'Nautical Picture Frame',
      description: 'Handcrafted wooden frame with nautical design for your voyage photos.',
      price: 18.99,
      category: 'gift',
      imageSrc: 'https://images.pexels.com/photos/2747893/pexels-photo-2747893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'sta5',
      title: 'Voyage Journal',
      description: 'Premium leather-bound journal to document your cruise experiences.',
      price: 15.99,
      category: 'book',
      imageSrc: 'https://images.pexels.com/photos/317249/pexels-photo-317249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'sta6',
      title: 'Ship Model Kit',
      description: 'Detailed model ship assembly kit, perfect for a creative souvenir.',
      price: 29.99,
      category: 'gift',
      imageSrc: 'https://images.pexels.com/photos/15020346/pexels-photo-15020346/free-photo-of-toy-boat-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredItems = stationeryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-12 w-12 text-accent-500 mr-4" />
            <h1 className="text-4xl font-bold text-white">Ship's Boutique</h1>
          </div>
          <p className="text-center text-lg text-primary-100 max-w-3xl mx-auto">
            Discover our exclusive collection of gifts, chocolates, books, and mementos to commemorate your voyage or surprise your loved ones.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-0">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Items
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'gift' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('gift')}
            >
              Gifts
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'book' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('book')}
            >
              Books
            </button>
          </div>
          
          <div className="w-full md:w-auto relative">
            <input 
              type="text" 
              placeholder="Search items..." 
              className="form-input w-full md:w-64 pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>
        </div>

        {/* Stationery Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc}
              actionLink="/stationery/detail"
              buttonText="Add to Cart"
              badge={item.category === 'gift' ? 'Gift' : 'Book'}
              badgeColor={item.category === 'gift' ? 'badge-accent' : 'badge-secondary'}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-neutral-700 mb-2">No items found</h3>
            <p className="text-neutral-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};