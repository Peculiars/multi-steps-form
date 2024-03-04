import React, { useState } from 'react';

export const Step1 = ({ onNext }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    tel: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update input values
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'tel') setTel(value);
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: false });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    // Validate if field is left unfilled
    if (!value.trim()) {
      setErrors({ ...errors, [name]: true });
    }
  };

  const isFieldRequired = (name) => {
    return errors[name];
  };

  // Calculate form validity
  const formValid = username.trim() !== '' && email.trim() !== '' && tel.trim() !== '';

  return (
    <div className='step1'>
      <div className='form-inputs'>
        <div className='inputs'>
          <div className='flex justify-between'>
            <label htmlFor='username'>Name</label>
            {isFieldRequired('username') && <p className='required'>This field is required</p>}
          </div>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='e.g. Stephen King'
            value={username}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={errors.username ? 'error' : ''}
          />
        </div>

        <div className='inputs'>
          <div className='flex justify-between'>
            <label htmlFor='email'>Email Address</label>
            {isFieldRequired('email') && <p className='required'>This field is required</p>}
          </div>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='e.g. Stephenking@lorem.com'
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={errors.email ? 'error' : ''}
          />
        </div>

        <div className='inputs'>
          <div className='flex justify-between'>
            <label htmlFor='tel'>Phone Number</label>
            {isFieldRequired('tel') && <p className='required'>This field is required</p>}
          </div>
          <input
            type='tel'
            id='tel'
            name='tel'
            placeholder='e.g. +1 234 567 890'
            value={tel}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={errors.tel ? 'error border-red-500 border-[1.5px]f' : ''}
          />
        </div>
      </div>
      <div className='justify-end flex items-end sm:hidden'>
        {/* Disabled attribute and class name set based on formValid */}
        <button type='button' onClick={onNext} disabled={!formValid} className={!formValid ? 'not-valid' : 'next-step'}>
          Next Step
        </button>
      </div>
      <div className='mobile-btns'>
        <div className='btns justify-end flex items-end'>
          {/* Same here, disabled and class name set based on formValid */}
          <button onClick={onNext} disabled={!formValid} className={!formValid ? 'not-valid' : 'next-step'}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
