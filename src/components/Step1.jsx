// import React from 'react'

// export const Step1 = () => {

//   return (
//     <form className='step1'>
//             <div className='form-inputs'>
//                 <div className='inputs'>
//                     <label htmlFor="username">Name
//                     <input type="text" id='username' name='username'  placeholder='e.g. Stephen King'/>
//                     </label>
//                 </div>
                
//                 <div className='inputs'>
//                     <label htmlFor="email"> Email Address</label>
//                     <input type="email" id='email' placeholder='e.g. Stephenking@lorem.com'/>
//                 </div>

//                 <div className='inputs'>
//                     <label htmlFor="tel"> Phone Number</label>
//                         <input type="tel" id='tel' placeholder='e.g. +1 234 567 890'/>
//                 </div>
//             </div>
//         </form>
//   )
// }
import React, { useEffect, useState } from 'react';

export const Step1 = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    tel: false
  });


  const [formValid, setFormValid]=useState(false);

  useEffect(()=>{
    setFormValid(username.trim() !== '' && email.trim() !== '' && tel.trim() !== '')
  }, [username, email, tel])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

  return (
    <form className='step1'>
      <div className='form-inputs'>
        <div className='inputs'>
            <div className='flex justify-between'>
                <label htmlFor="username">Name</label>
                {isFieldRequired('username') && <p className="required">This field is required</p>}
            </div>
          <input
            type="text"
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
                <label htmlFor="email">Email Address</label>
                {isFieldRequired('email') && <p className="required">This field is required</p>}
            </div>
          <input
            type="email"
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
                <label htmlFor="tel">Phone Number</label>
                {isFieldRequired('tel') && <p className="required">This field is required</p>}
            </div>
          <input
            type="tel"
            id='tel'
            name='tel'
            placeholder='e.g. +1 234 567 890'
            value={tel}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={errors.tel ? 'error' : ''}
          />
        </div>
      </div>
    </form>
  );
};
