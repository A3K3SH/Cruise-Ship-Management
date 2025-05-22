import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { Utensils } from 'lucide-react';

export const CateringPage: React.FC = () => {
  // Mock data - In a real application, this would come from Firebase
  const cateringItems = [
    {
      id: 'cat1',
      title: 'Continental Breakfast',
      description: 'Fresh pastries, fruit, yogurt, and your choice of coffee or tea.',
      price: 18.99,
      category: 'food',
      imageSrc: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cat2',
      title: 'Seafood Platter',
      description: 'Fresh selection of grilled and steamed seafood with seasonal vegetables.',
      price: 45.99,
      category: 'food',
      imageSrc: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cat3',
      title: 'Tropical Fruit Smoothie',
      description: 'Blend of fresh tropical fruits with yogurt and honey.',
      price: 8.99,
      category: 'beverage',
      imageSrc: 'https://images.pexels.com/photos/162918/smoothie-fruit-apple-banana-162918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cat4',
      title: 'Artisan Cheese Platter',
      description: 'Selection of fine cheeses with crackers, nuts, and dried fruits.',
      price: 24.99,
      category: 'snack',
      imageSrc: 'https://images.pexels.com/photos/1927314/pexels-photo-1927314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cat5',
      title: 'Signature Burger',
      description: 'Premium beef patty with gourmet toppings and hand-cut fries.',
      price: 19.99,
      category: 'food',
      imageSrc: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cat6',
      title: 'Gourmet Coffee Selection',
      description: 'Selection of premium coffees from around the world.',
      price: 7.99,
      category: 'beverage',
      imageSrc: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredItems = cateringItems.filter(item => {
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
            <Utensils className="h-12 w-12 text-accent-500 mr-4" />
            <h1 className="text-4xl font-bold text-white">Gourmet Catering</h1>
          </div>
          <p className="text-center text-lg text-primary-100 max-w-3xl mx-auto">
            Indulge in a culinary journey with our exceptional catering options, crafted by our world-class chefs using the finest ingredients.
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
                activeCategory === 'food' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('food')}
            >
              Food
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'beverage' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('beverage')}
            >
              Beverages
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'snack' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              onClick={() => setActiveCategory('snack')}
            >
              Snacks
            </button>
          </div>
          
          <div className="w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search catering items..." 
              className="form-input w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Catering Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <ServiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc}
              actionLink="/catering/detail"
              buttonText="Order Now"
              badge={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              badgeColor={
                item.category === 'food' 
                  ? 'badge-primary' 
                  : item.category === 'beverage' 
                  ? 'badge-secondary' 
                  : 'badge-accent'
              }
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Utensils className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
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