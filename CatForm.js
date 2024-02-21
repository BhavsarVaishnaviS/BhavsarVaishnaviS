import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

const CatForm = () => {
  const [formData, setFormData] = useState({
    catName: '',
    catAge: '',
    stayDuration: '',
    packages: [],
    catAllergies: '',
    catFoodPref: '',
    catVaccination: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, packages: [...formData.packages, value] });
    } else {
      setFormData({
        ...formData,
        packages: formData.packages.filter((pkg) => pkg !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
      <div className="background-cat font"> 
      <div className="container">
        <h2 className="mt-4 mb-4">Cat Staycation Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="catName">Name Of Your Cat:</label><br />
        <input type="text" className="input-bar" id="catName" name="catName" onChange={handleInputChange} value={formData.catName} /><br />

        <label htmlFor="catAge">Age of Your Cat:</label><br />
        <select id="catAge" className="input-bar" name="catAge" onChange={handleInputChange} value={formData.catAge}>
        <option value="0">0 year</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
          <option value="7">7 years</option>
          <option value="8">8 years</option>
          <option value="9">9 years</option>
          <option value="10">10 years</option>
          <option value="11">11 years</option>
          <option value="12">12 years</option>
          <option value="13">13 years</option>
          <option value="14">14 years</option>
          <option value="15">15 years</option>
        </select><br />

        <label htmlFor="stayDuration">How many days you want to keep your cat for staycation:</label><br />
        <input type="number" className="input-bar" id="stayDuration" name="stayDuration" onChange={handleInputChange} value={formData.stayDuration} /><br />

        <label>Package you want to add:</label><br />
        <input type="checkbox" id="basicPackage" name="Basic" value="Basic" onChange={handleCheckboxChange} />
        <label htmlFor="basicPackage">Basic</label><br />
        <input type="checkbox" id="Package" name="Premium" value="Premium" onChange={handleCheckboxChange} />
        <label htmlFor="premiumPackage">Premium</label><br />
        <input type="checkbox" id="bothPackage" name="Both" value="Both" onChange={handleCheckboxChange} />
        <label htmlFor="bothPackage">Both</label><br />

        <label htmlFor="catAllergies">Allergies if any:</label><br />
        <input type="text" className="input-bar" id="catAllergies" name="catAllergies" onChange={handleInputChange} value={formData.catAllergies} /><br />

        <label htmlFor="catFoodPref">Food preferences:</label><br />
        <input type="text" className="input-bar" id="catFoodPref" name="catFoodPref" onChange={handleInputChange} value={formData.catFoodPref} /><br />

        <label htmlFor="catVaccination">Completed vaccination: &nbsp;</label>
        <input type="radio" id="catVaccinationYes" name="catVaccination" value="Yes" onChange={handleInputChange} checked={formData.catVaccination === 'Yes'} />
        <label htmlFor="catVaccinationYes">Yes  &nbsp;</label>
        <input type="radio" id="catVaccinationNo" name="catVaccination" value="No" onChange={handleInputChange} checked={formData.catVaccination === 'No'} />
        <label htmlFor="catVaccinationNo">No</label><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
};

export default CatForm;
