import { Save, Download } from 'lucide-react';

type PatientInfo = {
  name: string;
  age: string;
  caregiverName: string;
  relationship: string;
  medicalConditions: string;
};

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
  patientInfo: PatientInfo;
  favoriteFoods: FoodItem[];
  dislikedFoods: DislikedFood[];
  allergies: Allergy[];
  additionalNotes: string;
};

export default function SaveProfile({ patientInfo, favoriteFoods, dislikedFoods, allergies, additionalNotes }: Props) {
  const handleSaveProfile = () => {
    const profileData = {
      patientInfo,
      favoriteFoods,
      dislikedFoods,
      allergies,
      additionalNotes,
      createdAt: new Date().toISOString()
    };

    
    localStorage.setItem('mealProfile', JSON.stringify(profileData));
    
    
    alert('Profile saved successfully!');
  };

  const handleDownloadProfile = () => {
    const profileData = {
      patientInfo,
      favoriteFoods,
      dislikedFoods,
      allergies,
      additionalNotes,
      createdAt: new Date().toISOString()
    };

    const dataStr = JSON.stringify(profileData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${patientInfo.name || 'meal-profile'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const isComplete = patientInfo.name.trim() !== '';

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-green-500">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Save Profile</h3>
        <p className="text-gray-600 mb-4">
          Save or download this meal preference profile for future use and sharing with healthcare providers.
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={handleSaveProfile}
            disabled={!isComplete}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Profile
          </button>
          
          <button
            onClick={handleDownloadProfile}
            disabled={!isComplete}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Profile
          </button>
        </div>
        
        {!isComplete && (
          <p className="text-sm text-gray-500 mt-2">
            Please enter the patient's name to enable saving.
          </p>
        )}
      </div>
    </div>
  );
}
