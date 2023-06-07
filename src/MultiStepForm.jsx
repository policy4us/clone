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
  const [you, setYou] = useState('');
  const [mother, setMother] = useState('');
  const [father, setFather] = useState('');
  const [son, setSon] = useState(''); 
  const [son1,setSon1]=useState('')
  const [son2,setSon2]=useState('')
  const [son3,setSon3]=useState('')
  const [daughter, setDaughter] = useState('');
  const [daughter1,setDaughter1]=useState('')
  const [daughter2,setDaughter2]=useState('')
  const [daughter3,setDaughter3]=useState('')
  const [spouse, setSpouse] = useState('');
  // const [selectedOptions, setSelectedOptions] = useState([]);
const [motherAge,setMotherAge] = useState('');
  const [fatherAge,setFatherAge] = useState('');
  const [sonAge,setSonAge] = useState('');
  const [daughterAge,setDaughterAge] = useState('');
  const [spouseAge,setSpouseAge] = useState('');
  const [youAge,setYouage] = useState('');
  const [son1Age,setSon1Age] = useState('');
  const [son2Age,setSon2Age] = useState('');
  const [son3Age,setSon3Age] = useState('');
  const [daughter1Age,setDaughter1Age]=useState('')
  const [daughter2Age,setDaughter2Age]=useState('')
  const [daughter3Age,setDaughter3Age]=useState('')
  // const [age, setAge] = useState('');
  const [sonCount,setSonCount]=useState(1)
  const [daughterCount, setDaughterCount]=useState(1)
  const [selectedMembers,setSelectedMembers]=useState([{relation:'',age:'',gender:''}]);

  useEffect(() => {
    const storedGender = localStorage.getItem('gender');
    const storedYou = localStorage.getItem('you');
    const storedMother = localStorage.getItem('mother');
    const storedFather = localStorage.getItem('father');
    const storedSon = localStorage.getItem('son');
    const storedSon1 = localStorage.getItem('son1');
    const storedSon2 = localStorage.getItem('son2');
    const storedSon3 = localStorage.getItem('son3');
    const storedDaughter = localStorage.getItem('daughter');
    const storedDaughter1 = localStorage.getItem('daughter1');
    const storedDaughter2 = localStorage.getItem('daughter2');
    const storedDaughter3 = localStorage.getItem('daughter3');
    const storedSpouse = localStorage.getItem('spouse');
    const storedMotherAge = localStorage.getItem('motherAge');
    const storedFatherAge = localStorage.getItem('fatherAge');
    const storedSonAge = localStorage.getItem('sonAge');
    const storedDaughterAge = localStorage.getItem('daughterAge');
    const storedSpouseAge = localStorage.getItem('spouseAge');
    const storedYouAge = localStorage.getItem('youAge');
    const storedSon1Age = localStorage.getItem('son1Age');
    const storedSon2Age = localStorage.getItem('son2Age');
    const storedSon3Age = localStorage.getItem('son3Age');
    const storedDaughter1Age = localStorage.getItem('daughter1Age');
    const storedDaughter2Age = localStorage.getItem('daughter2Age');  
    const storedDaughter3Age = localStorage.getItem('daughter3Age');
    // const storedOptions = localStorage.getItem('selectedOptions');
    if (storedGender) {
      setGender(storedGender);
    }
    if (storedYou) {
      setYou(storedYou);
      setSelectedMembers((prevMemers)=>[...prevMemers, {relation:'self',age:'',gender:'male'}])
    }
    if (storedMother) {
      setMother(storedMother);
      setSelectedMembers((prevMemberrs)=>[...prevMemberrs,{relation:storedMother,age:'',gender:'female'}])
    }
    if (storedFather) {
      setFather(storedFather);
      setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedFather,age:'',gender:'male'}])
    }
    if (storedSon) {
      setSon(storedSon);
      setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSon,age:'',gender:'male'}])
    }
     if (storedSon1) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon1,age:'',gender:'male'}])
     }
     if (storedSon2) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon2,age:'',gender:'male'}])
     }
     if (storedSon3) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon3,age:'',gender:'male'}])
     }
    if (storedDaughter) {
      setDaughter(storedDaughter);
      setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedDaughter,age:'',gender:'female'}])
    }
    if (storedDaughter1) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter1,age:'',gender:'female'}])
    }
    if (storedDaughter2) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter2,age:'',gender:'female'}])
    }
    if (storedDaughter3) {
      setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter3,age:'',gender:'female'}])
    }
    if (storedSpouse) {
      setSpouse(storedSpouse);
      setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSpouse,age:'',gender:'female'}])
    }
    if (storedMotherAge) {
       setMotherAge(storedMotherAge);
   }
   if (storedFatherAge) {
         setFatherAge(storedFatherAge);
   }
   if (storedSpouseAge) {
    setSpouseAge(storedSpouseAge);
   }
   if (storedSonAge) {
    setSonAge(storedSonAge);
   }
   if (storedDaughterAge) {
    setDaughterAge(storedDaughterAge);
   }
   if (storedYouAge) {
    setYouage(storedYouAge);
   }
   if (storedSon1Age) {
    setSon1Age(storedSon1Age);
   }
   if (storedSon2Age) {
    setSon2Age(storedSon2Age);
   }
    if (storedSon3Age) {
    setSon3Age(storedSon3Age);
   }
   if (storedDaughter1Age) {
    setDaughter1Age(storedDaughter1Age);
   }
   if (storedDaughter2Age) {
    setDaughter2Age(storedDaughter2Age);
   }
   if (storedDaughter3Age) {
    setDaughter3Age(storedDaughter3Age);
   }






    // if (storedOptions) {
    //   setSelectedOptions(JSON.parse(storedOptions));
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem('gender', gender);
    localStorage.setItem('you', you);
    localStorage.setItem('mother', mother);
    localStorage.setItem('father', father);
    localStorage.setItem('son', son);
    localStorage.setItem('son1', son1);
    localStorage.setItem('son2', son2);
    localStorage.setItem('son3', son3);
    localStorage.setItem('daughter', daughter);
    localStorage.setItem('daughter1', daughter1);
    localStorage.setItem('daughter2', daughter2);
    localStorage.setItem('daughter3', daughter3);
    localStorage.setItem('spouse', spouse);
    localStorage.setItem('motherAge', motherAge);
    localStorage.setItem('fatherAge', fatherAge);
    localStorage.setItem('sonAge', sonAge);
    localStorage.setItem('daughterAge', daughterAge);
    localStorage.setItem('spouseAge', spouseAge);
    localStorage.setItem('youAge', youAge);
    localStorage.setItem('son1Age', son1Age);
    localStorage.setItem('son2Age', son2Age);
    localStorage.setItem('son3Age', son3Age);
    localStorage.setItem('daughter1Age', daughter1Age);
    localStorage.setItem('daughter2Age', daughter2Age);
    localStorage.setItem('daughter3Age', daughter3Age);
    // localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [gender,you,mother,father,son,son1,son2,son3,daughter,daughter1,daughter2,daughter3,spouse,motherAge,fatherAge,sonAge,daughterAge,spouseAge,youAge,son1Age,son2Age,son3Age,daughter1Age,daughter2Age,daughter3Age /* ,selectedOptions*/]);

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    // setSelectedOptions([]);
  };

  // const handleCheckboxChange = (event) => {
  //   const value = event.target.value;
  //   const checked = event.target.checked;

  //   if (checked) {
  //     setSelectedOptions([...selectedOptions, value]);
  //   } else {
  //     setSelectedOptions(selectedOptions.filter((option) => option !== value));
  //   }
  // };
  const youCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setYou(value);
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'self',age:'',gender:gender}]);
        } else {
          setSelectedMembers((prevMembers)=>
          prevMembers.filter((member) => member.relation!== 'self')
          )
          setYou('');
        }
  }
  const motherCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setMother(value);
          // setSelectedMembers([...selectedMembers, value]);
          console.log('mother selected')
          console.log(value)
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value, age:'',gender:'female'}]);
        } else {
          setMother('');
          setSelectedMembers((prevMembers)=>
                    prevMembers.filter((member) => member.relation!== value)
                    )
        }
  }
  const fatherCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setFather(value);
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,age:'',gender:'male'}])
          console.log('father selected')
        } else {
          setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!== value))
          setFather('');
        }
  }
  const sonCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setSon(value);
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son', age: '', gender: 'male' }]);
          console.log('son')

        } else {
          setSon('');
          setSelectedMembers((prevMembers) =>
          prevMembers.filter((member) => member.relation!== value)
        );
          setSonCount(1)
        }
  }
  const daughterCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setDaughter(value);
          setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter', age: '', gender: 'female' }]);
          console.log('daughter')
        } else {
          setDaughter('');
          setSelectedMembers((prevMembers) =>
          prevMembers.filter((member) => member.relation!== value)
        );
        setDaughterCount(1)
        }
  }
  const spouseCheckBoxChange =(event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
          setSpouse(value);
          // setSelectedMembers([...selectedMembers, value]);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,age:'',gender:'male'}])
        } else {
          setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!==value))
          setSpouse('');
        }
  }
 
  // const sonCountDecrease = () => { sonCount>0&& setSonCount(preCount=>preCount-1)};
  const sonCountDecrease = () => {
    if (sonCount > 0) {
      setSonCount((preCount) => preCount - 1);
      // setSelectedMembers(selectedMembers.filter((option) => option !== son));
      // setSelectedMembers((prevMembers) => {
      //   const index = prevMembers.findIndex((member) => member.relation === 'son');
      //   if (index !== -1) {
      //     const updatedMembers = [...prevMembers];
      //     updatedMembers.splice(index, 1);
      //     return updatedMembers;
      //   }
      //   return prevMembers;
      // });
      setSelectedMembers((prevMembers) => {
        // Create a new array excluding the last item
        const updatedMembers = prevMembers.slice(0, -1);
        return updatedMembers;
      });
      
      
    }
  };
  
  const sonCountIncrease = () => {
    if ((sonCount + daughterCount) < 4) {
      setSonCount((preCount) => preCount + 1);
      // setSelectedMembers([...selectedMembers, son]);
      console.log('sonCount increase');
      switch (sonCount) {
         case 1: setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son1', age: '', gender: 'male' }]);
         break;
         case 2: setSelectedMembers((prevMembers) => [...prevMembers, { relation:'son2', age: '', gender: 'male' }]);
         break;
         case 3: setSelectedMembers((prevMembers) => [...prevMembers, { relation:'son3', age: '', gender: 'male' }]);
         break;
      }
    }
  };
  
  // const daughterCountDecrease = () => {daughterCount>0&& setDaughterCount(preCount=>preCount-1)};
  const daughterCountDecrease = () => {
    if (daughterCount > 0) {
      setDaughterCount((preCount) => preCount - 1);
      // setSelectedMembers(selectedMembers.filter((option) => option !== daughter));
      // setSelectedMembers((prevMembers) => {
      //   const index = prevMembers.findIndex((member) => member.relation === 'daughter');
      //   if (index !== -1) {
      //     const updatedMembers = [...prevMembers];
      //     updatedMembers.splice(index, 1);
      //     return updatedMembers;
      //   }
      //   return prevMembers;
      setSelectedMembers((prevMembers) => {
        // Create a new array excluding the last item
        const updatedMembers = prevMembers.slice(0, -1);
        return updatedMembers;
      });
      
      // });
      switch(daughterCount) {
        case 2: selectedMembers.filter((option) => option.relation !=='son1')
      }
      
    }
  };
  const daughterCountIncrease = () => {
    if ((sonCount + daughterCount) < 4) {
      setDaughterCount((preCount) => preCount + 1);
      // setSelectedMembers([...selectedMembers, daughter]);
     switch(daughterCount) {
      case 1: setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter1', age: '', gender: 'female' }]);
      break;
      case 2: setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter2', age: '', gender: 'female' }]);
      break;
      case 3: setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'daughter3', age: '', gender: 'female' }]);
      break;
     }
    }
  };
  //orkkanam may be mattendivarum
  // const handleAgeChange = (event) => {
  //   setAge(event.target.value);
  // };

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
    <div className='wrapper2'>
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
     
<div className='wrapper-checkbox'>
   <div className='pt-3'>
        <div className="checkbox">
          <input
            type="checkbox"
            id="youCheckbox"
            value="you"
            checked={you==='you'}
            onChange={youCheckBoxChange}
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
            value="spouse"
            checked={spouse==='spouse'}
            onChange={spouseCheckBoxChange}
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
            value="spouse"
            checked={spouse==='spouse'}
            onChange={spouseCheckBoxChange}
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
            checked={son==='son'}
            // disabled={childSelection}
            onChange={sonCheckBoxChange}
            className="checkbox-input"
          />
          <label htmlFor="youCheckbox2" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
            <img src={sonicon} alt="Son" className="checkbox-image" />
            Son
          </label>
          <div className='special'>
          {son && <div className='d-flex align-items-center justify-content-center'>
            <div className='btn' onClick={sonCountDecrease}>-</div>
            <div>{sonCount}</div>
            <div className='btn' onClick={sonCountIncrease}>+</div></div>}
          </div>
        </div>
   </div>
   <div className='pt-5'>
        <div className="checkbox">
          <input
            type="checkbox"
            id="youCheckbox3"
            value="daughter"
            checked={daughter==='daughter'}
            onChange={daughterCheckBoxChange}
            className="checkbox-input"
          />
          <label htmlFor="youCheckbox3" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
            <img src={daughtericon} alt="You" className="checkbox-image" />
            Daughter
          </label>
          <div className='special'>
          {daughter && <div className='d-flex align-items-center justify-content-center'>
            <div className='btn' onClick={daughterCountDecrease}>-</div>
            <div>{daughterCount}</div>
            <div className='btn' onClick={daughterCountIncrease} >+</div></div>}
          </div>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="youCheckbox4"
            value="father"
            checked={father==='father'}
            onChange={fatherCheckBoxChange}
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
            checked={mother==='mother'}
            onChange={motherCheckBoxChange}
            className="checkbox-input"
          />
          <label htmlFor="youCheckbox5" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
            <img src={mothericon} alt="Mother" className="checkbox-image" />
            Mother
          </label>
        </div>
   </div>
</div>
     <div>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next Step</button>
     </div>
    </div>
  );
  //starting
  const ageRange = {
    father: { min: 18, max: 100 },
    mother: { min: 18, max: 100 },
    son: { min: 0, max: 30 },
    daughter: { min: 0, max: 30 },
    daughter1:{ min: 0, max: 30 },
    daughter2:{ min: 0, max: 30 },
    daughter3:{ min: 0, max: 30 },
    spouse: { min: 18, max: 100 },
    you: { min: 18, max: 100 },
  };
  const formatAge = (relation, age) => {
    if (relation === 'son' || relation === 'daughter'|| relation === 'daughter1') {
      if (age < 1) {
        const months = Math.round(age * 12);
        return `${months} months`;
      } else {
        return `${Math.floor(age)} years`;
      }
    } else {
      return `${Math.floor(age)} years`;
    }
  };

  const handleAgeChange = (index, event) => {
    const { value } = event.target;
    const member = selectedMembers[index];
    const ageLimits = ageRange[member.relation];
    const newAge = parseFloat(value);

    if (ageLimits && newAge >= ageLimits.min && newAge <= ageLimits.max) {
      setSelectedMembers((prevMembers) => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index] = { ...member, age: newAge };
        return updatedMembers;
      });
    }
  };

  const renderAgeOptions = (relation) => {
    const ageLimits = ageRange[relation];
    const options = [];

    if (relation === 'son' || relation === 'daughter' || relation === 'daughter1') {
      for (let i = 0; i <= 11; i++) {
        options.push(
          <option key={i} value={i / 12}>
            {i} months
          </option>
        );
      }
    }

    if (ageLimits) {
      for (let i = ageLimits.min; i <= ageLimits.max; i++) {
        options.push(
          <option key={i} value={i}>
            {i} years
          </option>
        );
      }
    }

    return options;
  };
  




  const renderStep3 = () => (
    <>
<div>
      {selectedMembers.map((member, index) => (
        <div key={index}>
          {member.relation && (
            <>
              <span>{member.relation}</span>
              <select value={member.age} onChange={(e) => handleAgeChange(index, e)}>
                <option value="">Select Age</option>
                {renderAgeOptions(member.relation)}
              </select>
              <span>Age: {formatAge(member.relation, member.age)}</span>
            </>
          )}
        </div>
      ))}
    </div>
    <div>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next Step</button>
     </div>
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
