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
  <label className='d-flex flex-column justify-content-center align-items-center'>
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
                  name="genderChange"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                />
                Male
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
     
          <div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox"
    value="you"
    checked={selectedOptions.includes('you')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={maleicon} alt="You" className="checkbox-image" />
    You
  </label>
</div>

{gender==='male'?<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox1"
    value="wife"
    checked={selectedOptions.includes('wife')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={femaleicon} alt="wife" className="checkbox-image" />
    Wife
  </label>
</div>:<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox1"
    value="husband"
    checked={selectedOptions.includes('husband')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={maleicon} alt="husband" className="checkbox-image" />
    Husband
  </label>
</div>
}
<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox2"
    value="son"
    checked={selectedOptions.includes('son')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox2" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={sonicon} alt="Son" className="checkbox-image" />
    Son
  </label>
</div>
<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox3"
    value="daughter"
    checked={selectedOptions.includes('daughter')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox3" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={daughtericon} alt="You" className="checkbox-image" />
    Daughter
  </label>
</div>
<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox4"
    value="father"
    checked={selectedOptions.includes('father')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox4" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={fathericon} alt="You" className="checkbox-image" />
    Father
  </label>
</div>
<div className="checkbox">
  <input
    type="checkbox"
    id="youCheckbox5"
    value="mother"
    checked={selectedOptions.includes('mother')}
    onChange={handleCheckboxChange}
    className="checkbox-input"
  />
  <label htmlFor="youCheckbox5" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
    <img src={mothericon} alt="Mother" className="checkbox-image" />
    Mother
  </label>
</div>
       
     
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
