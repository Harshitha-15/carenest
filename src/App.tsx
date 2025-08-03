import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientInfo from './components/PatientInfo'




type PatientInfo = {
  name: string;
  age: string;
  caregiverName: string;
  relationship: string;
  medicalConditions: string;
};

function App() {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    age: '',
    caregiverName: '',
    relationship: '',
    medicalConditions: ''
  });

  return (
      <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl" role="main">
        

        <div className="grid gap-8">
          <PatientInfo
            patientInfo={patientInfo}
            setPatientInfo={setPatientInfo}
          />
      </div>
      </main>
      </div>
  );
}

export default App
