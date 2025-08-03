import React from 'react';

type Props = {
  additionalNotes: string;
  setAdditionalNotes: React.Dispatch<React.SetStateAction<string>>;
};

export default function AdditionalNotes({ additionalNotes, setAdditionalNotes }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-blue-500">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Considerations</h3>
        <p className="text-gray-600 mb-4">
          Share any other important details about food preferences, textures, cultural requirements, or special instructions.
        </p>
        
        <div>
          <label htmlFor="additional-notes" className="block text-sm font-medium text-gray-700 mb-1">
            Special instructions and preferences
          </label>
          <textarea
            id="additional-notes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder={`Examples:
• Prefers soft textures due to chewing difficulties
• Enjoys warm foods, dislikes cold meals
• Needs foods cut into small pieces
• Prefers familiar, traditional recipes...`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent min-h-[120px] resize-none"
            maxLength={500}
          />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-gray-500">
              Examples: texture preferences, temperature preferences, cultural/religious restrictions
            </p>
            <p className="text-xs text-gray-500">
              {additionalNotes.length}/500 characters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
