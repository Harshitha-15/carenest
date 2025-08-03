import React, { useState } from 'react';
import { X, AlertTriangle, AlertCircle, Plus } from 'lucide-react';

type Allergy = {
  id: string;
  name: string;
  severity: 'mild' | 'severe';
};

type Props = {
  allergies: Allergy[];
  setAllergies: React.Dispatch<React.SetStateAction<Allergy[]>>;
};

const COMMON_ALLERGIES = ['Nuts', 'Dairy', 'Gluten', 'Eggs', 'Shellfish', 'Soy', 'Fish', 'Sesame'];

export default function Allergies({ allergies, setAllergies }: Props) {
  const [customAllergy, setCustomAllergy] = useState('');
  const [customSeverity, setCustomSeverity] = useState<'mild' | 'severe'>('mild');

  const addAllergy = (allergen: string, severity: 'mild' | 'severe') => {
    if (!allergies.find(a => a.name === allergen)) {
      setAllergies([...allergies, {
        id: Date.now().toString(),
        name: allergen,
        severity
      }]);
    }
  };

  const addCustomAllergy = () => {
    if (customAllergy.trim() && !allergies.find(a => a.name.toLowerCase() === customAllergy.toLowerCase())) {
      setAllergies([...allergies, {
        id: Date.now().toString(),
        name: customAllergy.trim(),
        severity: customSeverity
      }]);
      setCustomAllergy('');
      setCustomSeverity('mild');
    }
  };

  const removeAllergy = (id: string) => {
    setAllergies(allergies.filter(allergy => allergy.id !== id));
  };

  const getSeverityClasses = (severity: string) => {
    switch (severity) {
      case 'severe': return 'bg-red-500 text-white';
      case 'mild': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-red-500">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <h3 className="text-xl font-semibold text-gray-800">Food Allergies & Intolerances</h3>
        </div>
        <p className="text-gray-600 mb-4">
          <strong>Critical medical information</strong> - These restrictions must be strictly followed for safety and health.
        </p>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Important Medical Notice</p>
                <p className="text-sm text-red-700">
                  Please ensure all allergies and intolerances are accurately reported. This information is essential for safe meal preparation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Common Allergies & Intolerances:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {COMMON_ALLERGIES.map((allergen) => (
                <button
                  key={allergen}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-red-50 hover:border-red-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                  onClick={() => addAllergy(allergen, customSeverity)}
                  disabled={allergies.some(a => a.name === allergen)}
                >
                  {allergen}
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity for common allergies:
              </label>
              <select
                value={customSeverity}
                onChange={(e) => setCustomSeverity(e.target.value as 'mild' | 'severe')}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="mild">Mild</option>
                <option value="severe">Severe</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Select severity level, then click on allergies above to add them.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Add Other Allergy or Intolerance:</h4>
            <div className="flex gap-3">
              <input
                id="custom-allergy"
                type="text"
                value={customAllergy}
                onChange={(e) => setCustomAllergy(e.target.value)}
                placeholder="e.g., Strawberries, MSG, Artificial sweeteners..."
                onKeyPress={(e) => e.key === 'Enter' && addCustomAllergy()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={addCustomAllergy}
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Uses the same severity level selected above.
            </p>
          </div>

          {allergies.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-600">Current Allergies & Intolerances:</h4>
              <div className="flex flex-wrap gap-2">
                {allergies.map((allergy) => (
                  <span
                    key={allergy.id}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      allergy.severity === 'severe'
                        ? 'bg-red-500 text-white'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                    }`}
                  >
                    {allergy.name}
                    <span className="ml-1 text-xs opacity-75">
                      ({allergy.severity})
                    </span>
                    <button
                      onClick={() => removeAllergy(allergy.id)}
                      className={`ml-2 inline-flex items-center justify-center w-4 h-4 ${
                        allergy.severity === 'severe' ? 'text-red-200 hover:text-white' : 'text-yellow-600 hover:text-yellow-800'
                      }`}
                      aria-label={`Remove ${allergy.name} allergy`}
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
