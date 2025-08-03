import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientInfo from './components/PatientInfo';
import FavoriteFoods from './components/FavoriteFoods';
import DislikedFoods from './components/DislikedFoods';


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

function App() {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    age: '',
    caregiverName: '',
    relationship: '',
    medicalConditions: ''
  });

    const [favoriteFoods, setFavoriteFoods] = useState<FoodItem[]>([]);
    const [dislikedFoods, setDislikedFoods] = useState<DislikedFood[]>([]);



  return (
      <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl" role="main">
        

        <div className="grid gap-8">
          <PatientInfo
            patientInfo={patientInfo}
            setPatientInfo={setPatientInfo}
          />
          
          <FavoriteFoods
            favoriteFoods={favoriteFoods}
            setFavoriteFoods={setFavoriteFoods}
          />

          <DislikedFoods 
            dislikedFoods={dislikedFoods} 
            setDislikedFoods={setDislikedFoods} 
          />
      </div>
      </main>
      </div>
  );
}

export default App
