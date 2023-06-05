import  { useState, useEffect } from 'react';
import './multistepform.css'
import mothericon from './assets/mother-icon.png'
import fathericon from './assets/father-icon.png'
import maleicon from './assets/male-icon.png'
import femaleicon from './assets/female-icon.png'
import daughtericon from './assets/daughter-icon.png'
import sonicon from './assets/son-icon.png'
import editicon from './assets/edit-icon.png'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [age, setAge] = useState('');

  useEffect(() => {
    const storedGender = localStorage.getItem('gender');
    const storedOptions = localStorage.getItem('selectedOptions');
    if (storedGender) {
      setGender(storedGender);
    }
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gender', gender);
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [gender, selectedOptions]);

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    setSelectedOptions([]);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
  };

  const renderStep1 = () => (
    <div className='flx'>
      <h2>Step 1: Select Gender</h2>
      <div className="first-stage mt-2">
          <div className='first-icons'>
          <div>
          <label className='d-flex flex-column justify-content-center align-items-center'>
    <input
      type="radio"
      name="gender"
      value="male"
      checked={gender === 'male'}
      onChange={handleGenderChange}
      style={{ display: 'none' }} // Hide the default radio button
    />
    <img
      src={maleicon} //  path to male image
      alt="Male"
      className={gender === 'male' ? 'selected' : ''} // Add a class to indicate the selected image
    />
  Male</label>
</div>
<div>
  <label>
    <input
      type="radio"
      name="gender"
      value="female"
      checked={gender === 'female'}
      onChange={handleGenderChange}
      style={{ display: 'none' }} // Hide the default radio button
    />
    <img
      src={femaleicon} // path to female image
      alt="Fmale"
      className={gender === 'female' ? 'selected' : ''} // Add a class to indicate the selected image
    />Female
  </label>
</div>
          </div>
          <button className='btn btn-danger mt-5' onClick={handleNext}>GET STARTED</button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <>
      <div>
        <h3>Selected gender: {gender}</h3>
        <div className='second-gender'>
        <div>
  <label>
    <input
      type="radio"
      name="gender"
      value="male"
      checked={gender === 'male'}
      onChange={handleGenderChange}
      style={{ display: 'none' }} // Hide the default radio button
    />
    <img
      src="path_to_male_image.jpg" // Replace with the path to your male image
      alt="Male"
      className={gender === 'male' ? 'selected' : ''} // Add a class to indicate the selected image
    />
  </label>
</div>
            <div>
              <label>
                <input
                  type="radio"
                  name="genderChange"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
        </div>
      </div>
      {gender === 'male' && (
        <>
          <div>
            <label>
              <input
                type="checkbox"
                value="you"
                checked={selectedOptions.includes('you')}
                onChange={handleCheckboxChange}
              />
              You
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="wife"
                checked={selectedOptions.includes('wife')}
                onChange={handleCheckboxChange}
              />
              Wife
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="son"
                checked={selectedOptions.includes('son')}
                onChange={handleCheckboxChange}
              />
              Son
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="daughter"
                checked={selectedOptions.includes('daughter')}
                onChange={handleCheckboxChange}
              />
              Daughter
            </label>
          </div>
        </>
      )}
      {gender === 'female' && (
        <>
          <div>
            <label>
              <input
                type="checkbox"
                value="you"
                checked={selectedOptions.includes('you')}
                onChange={handleCheckboxChange}
              />
              You
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="husband"
                checked={selectedOptions.includes('husband')}
                onChange={handleCheckboxChange}
              />
              Husband
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="son"
                checked={selectedOptions.includes('son')}
                onChange={handleCheckboxChange}
              />
              Son
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="daughter"
                checked={selectedOptions.includes('daughter')}
                onChange={handleCheckboxChange}
              />
              Daughter
            </label>
          </div>
        </>
      )}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next Step</button>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2>Step 3: Enter Age</h2>
      <div>
        <label>
          Age:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button type="submit">Submit</button>
    </>
  );

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </form>
  );
};

export default MultiStepForm;
