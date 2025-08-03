import React from 'react';

type FoodItem = {
  id: string;
  name: string;
};

type DislikedFood = {
  id: string;
  name: string;
  severity: 'mild' | 'strong';
};

type Allergy = {
  id: string;
  name: string;
  severity: 'mild' | 'severe';
};

type Props = {
  favoriteFoods: FoodItem[];
  dislikedFoods: DislikedFood[];
  allergies: Allergy[];
};

export default function SummaryPanel({ favoriteFoods, dislikedFoods, allergies }: Props) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
      <div className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Profile Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-green-700">{favoriteFoods.length} Favorite Foods</p>
              <p className="text-gray-600">Foods to include</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-orange-700">{dislikedFoods.length} Disliked Foods</p>
              <p className="text-gray-600">Foods to avoid</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-red-700">{allergies.length} Allergies/Intolerances</p>
              <p className="text-gray-600">Critical restrictions</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            This information helps caregivers and meal planners create safe, enjoyable dining experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
