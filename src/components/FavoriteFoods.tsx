import React, { useState } from 'react';
import { Plus, X, Heart } from 'lucide-react';

type FoodItem = {
  id: string;
  name: string;
  category?: string;
};

type Props = {
  favoriteFoods: FoodItem[];
  setFavoriteFoods: React.Dispatch<React.SetStateAction<FoodItem[]>>;
};


export default function FavoriteFoods({ favoriteFoods, setFavoriteFoods }: Props) {
  const [newFavoriteFood, setNewFavoriteFood] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const addFavoriteFood = () => {
    if (newFavoriteFood.trim()) {
      setFavoriteFoods([...favoriteFoods, {
        id: Date.now().toString(),
        name: newFavoriteFood.trim(),
        category: selectedCategory || 'General'
      }]);
      setNewFavoriteFood('');
      setSelectedCategory('');
    }
  };


  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-green-500">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">Favorite Foods</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Foods and meals that are especially enjoyed. This helps us plan meals that bring comfort and joy.
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="favorite-food" className="block text-sm font-medium text-gray-700 mb-1">
                Add favorite food or meal
              </label>
              <input
                id="favorite-food"
                type="text"
                value={newFavoriteFood}
                onChange={(e) => setNewFavoriteFood(e.target.value)}
                placeholder="e.g., Chicken soup, Apple pie, Pasta..."
                onKeyPress={(e) => e.key === 'Enter' && addFavoriteFood()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
         

          </div>
          
          <button
            onClick={addFavoriteFood}
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Favorite Food
          </button>
          
          {favoriteFoods.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-600">Current Favorites:</h4>
              <div className="flex flex-wrap gap-2">
                {favoriteFoods.map((food) => (
                  <span
                    key={food.id}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                  >
                    {food.name}
                    {food.category && (
                      <span className="ml-1 text-xs bg-green-200 px-2 py-0.5 rounded-full">
                        {food.category}
                      </span>
                    )}
                    
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
