import React, { useState } from 'react';
import { Plus, X, ThumbsDown } from 'lucide-react';

type DislikedFood = {
  id: string;
  name: string;
  severity: 'mild' | 'strong';
};

type Props = {
  dislikedFoods: DislikedFood[];
  setDislikedFoods: React.Dispatch<React.SetStateAction<DislikedFood[]>>;
};

export default function DislikedFoods({ dislikedFoods, setDislikedFoods }: Props) {
  const [newDislikedFood, setNewDislikedFood] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<'mild' | 'strong'>('mild');

  const addDislikedFood = () => {
    if (newDislikedFood.trim()) {
      setDislikedFoods([...dislikedFoods, {
        id: Date.now().toString(),
        name: newDislikedFood.trim(),
        severity: selectedSeverity
      }]);
      setNewDislikedFood('');
      setSelectedSeverity('mild');
    }
  };

  const removeDislikedFood = (id: string) => {
    setDislikedFoods(dislikedFoods.filter(food => food.id !== id));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-orange-500">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <ThumbsDown className="w-5 h-5 text-orange-600" />
          <h3 className="text-xl font-semibold text-gray-800">Disliked Foods</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Foods to avoid or reduce in meal planning. Understanding preferences helps create more enjoyable dining experiences.
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="disliked-food" className="block text-sm font-medium text-gray-700 mb-1">
                Add disliked food
              </label>
              <input
                id="disliked-food"
                type="text"
                value={newDislikedFood}
                onChange={(e) => setNewDislikedFood(e.target.value)}
                placeholder="e.g., Brussels sprouts, Spicy food..."
                onKeyPress={(e) => e.key === 'Enter' && addDislikedFood()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="dislike-severity" className="block text-sm font-medium text-gray-700 mb-1">
                Preference strength
              </label>
              <select
                id="dislike-severity"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value as 'mild' | 'strong')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="mild">Mild dislike</option>
                <option value="strong">Strong dislike</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={addDislikedFood}
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Disliked Food
          </button>
          
          {dislikedFoods.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-600">Foods to Avoid:</h4>
              <div className="flex flex-wrap gap-2">
                {dislikedFoods.map((food) => (
                  <span
                    key={food.id}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${
                      food.severity === 'strong'
                        ? 'bg-red-100 text-red-800 border-red-200'
                        : 'bg-orange-100 text-orange-800 border-orange-200'
                    }`}
                  >
                    {food.name}
                    <span className="ml-1 text-xs opacity-75">
                      ({food.severity})
                    </span>
                    <button
                      onClick={() => removeDislikedFood(food.id)}
                      className={`ml-2 inline-flex items-center justify-center w-4 h-4 ${
                        food.severity === 'strong' ? 'text-red-600 hover:text-red-800' : 'text-orange-600 hover:text-orange-800'
                      }`}
                      aria-label={`Remove ${food.name} from disliked foods`}
                    >
                      <X className="w-3 h-3" />
                    </button>
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
