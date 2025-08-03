import React from 'react';
import { User } from 'lucide-react';

type PatientInfo = {
  name: string;
  age: string;
  caregiverName: string;
  relationship: string;
  medicalConditions: string;
};

type Props = {
  patientInfo: PatientInfo;
  setPatientInfo: React.Dispatch<React.SetStateAction<PatientInfo>>;
};

export default function PatientInfo({ patientInfo, setPatientInfo }: Props) {
  const updateField = (field: keyof PatientInfo, value: string) => {
    setPatientInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-blue-500">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">Patient Information</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Basic information about the person whose meal preferences we're collecting.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patient-name" className="block text-sm font-medium text-gray-700 mb-1">
              Patient Name *
            </label>
            <input
              id="patient-name"
              type="text"
              value={patientInfo.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Enter patient's full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="patient-age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              id="patient-age"
              type="text"
              value={patientInfo.age}
              onChange={(e) => updateField('age', e.target.value)}
              placeholder="Age (e.g., 75)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="caregiver-name" className="block text-sm font-medium text-gray-700 mb-1">
              Caregiver Name
            </label>
            <input
              id="caregiver-name"
              type="text"
              value={patientInfo.caregiverName}
              onChange={(e) => updateField('caregiverName', e.target.value)}
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
              Relationship to Patient
            </label>
            <select
              id="relationship"
              value={patientInfo.relationship}
              onChange={(e) => updateField('relationship', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select relationship</option>
              <option value="spouse">Spouse</option>
              <option value="child">Son/Daughter</option>
              <option value="sibling">Sibling</option>
              <option value="caregiver">Professional Caregiver</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="medical-conditions" className="block text-sm font-medium text-gray-700 mb-1">
              Relevant Medical Conditions (Optional)
            </label>
            <textarea
              id="medical-conditions"
              value={patientInfo.medicalConditions}
              onChange={(e) => updateField('medicalConditions', e.target.value)}
              placeholder="Any medical conditions that may affect diet (e.g., diabetes, heart disease, swallowing difficulties)..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
