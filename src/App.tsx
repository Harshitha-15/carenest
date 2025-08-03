import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import PatientInfo from './components/PatientInfo';
import FavoriteFoods from './components/FavoriteFoods';
import DislikedFoods from './components/DislikedFoods';
import AdditionalNotes from './components/AdditionalNotes';
import Allergies from './components/Allergies';


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

type Allergy = {
  id: string;
  name: string;
  severity: 'mild' | 'severe';
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
    const [allergies, setAllergies] = useState<Allergy[]>([]);
    const [additionalNotes, setAdditionalNotes] = useState('');



  return (
      <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl" role="main">
        <Header />

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

          <Allergies 
            allergies={allergies} 
            setAllergies={setAllergies} 
          />

           <AdditionalNotes
            additionalNotes={additionalNotes}
            setAdditionalNotes={setAdditionalNotes}
          />
      </div>
      </main>
      </div>
  );
}

export default App
