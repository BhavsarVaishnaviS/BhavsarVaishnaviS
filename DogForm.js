import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const DogForm = () => {
  const [formData, setFormData] = useState({
    dogName: "",
    dogAge: "",
    stayDuration: "",
    packages: [],
    dogAllergies: "",
    dogFoodPref: "",
    dogVaccination: "",
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
        packages: formData.packages.filter((pkg) => pkg !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="background-dog font">
      <div className="container">
        <h2 className="mt-4 mb-4">Dog Staycation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="dogName" className="form-label ">
              Name Of Your Dog:
            </label>
            <input
              type="text"
              className="form-control input-bar"
              id="dogName"
              name="dogName"
              placeholder="Enter Name Of Your Dog"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dogAge" className="form-label">
              Age of Your Dog:
            </label>
            <select
              className="form-select input-bar"
              id="dogAge"
              name="dogAge"
              onChange={handleInputChange}
            >
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
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="stayDuration" className="form-label">
              How many days you want to keep your dog for staycation:
            </label>
            <input
              type="number"
              className="form-control input-bar"
              id="stayDuration"
              name="stayDuration"
              placeholder="Enter number of days"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Package you want to add:</label>
            <br />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input "
                id="basicPackage"
                name="Basic"
                value="Basic"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="basicPackage">
                Basic
              </label><br />
            
            <input
              type="checkbox"
              className="form-check-input "
              id="GroomingPackage"
              name="grooming"
              value="grooming"
              onChange={handleCheckboxChange}
            /> 
            <label className="form-check-label" htmlFor="basicPackage">
              Grooming
            </label><br />
          
          <input
            type="checkbox"
            className="form-check-input "
            id="bothPackage"
            name="both"
            value="both"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="bothPackage">
            Both
          </label>
          </div>
          </div>

          <label htmlFor="catAllergies">Allergies if any:</label><br />
        <input type="text" className="input-bar" id="catAllergies" name="catAllergies" onChange={handleInputChange} value={formData.catAllergies} /><br />

        <label htmlFor="catFoodPref">Food preferences:</label><br />
        <input type="text" className="input-bar" id="catFoodPref" name="catFoodPref" onChange={handleInputChange} value={formData.catFoodPref} /><br />

        <label htmlFor="catVaccination">Completed vaccination: &nbsp;</label>
        <input type="radio" id="catVaccinationYes" name="catVaccination" value="Yes" onChange={handleInputChange} checked={formData.catVaccination === 'Yes'} />
        <label htmlFor="catVaccinationYes">Yes  &nbsp;</label>
        <input type="radio" id="catVaccinationNo" name="catVaccination" value="No" onChange={handleInputChange} checked={formData.catVaccination === 'No'} />
        <label htmlFor="catVaccinationNo">No</label><br />

          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-primary input-bar"
              value="Submit"
            />
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default DogForm;
