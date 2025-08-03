import { Utensils } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Utensils className="w-8 h-8 text-amber-600" />
        <h1 className="text-4xl font-bold text-gray-800">Zenaris</h1>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Meal Preferences Profile</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Help us create personalized meal experiences by sharing food preferences, dislikes, and important dietary restrictions.
      </p>
    </div>
  );
}
