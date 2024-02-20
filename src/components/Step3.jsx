import React from 'react'

export const Step3 = () => {
  return (     
    <div className='step3'>
        <div className='step3-heading'>
            <div className='options'>
            <div className='add-ons-container'>
                <input className='accent-blue-500' type="checkbox" />
                <div className='add-ons-options ml-[1rem]'>
                    <p className='option-title'>Online service</p>
                    <p className='option-desc'>Access to multiplayer games</p>
                </div>
                <span className='option-price ml-[6rem]'>+$1/mo</span>
            </div>

            <div className='add-ons-container'>
                <input className='accent-blue-500' type="checkbox" />
                    <div className='add-ons-options ml-[-1rem]'>
                    <p className='option-title'>Larger storage</p>
                    <p className='option-desc'>Extra 1TB of cloud save </p>
                    </div>
                    <span className='option-price ml-[6rem]'>+$2/mo</span>
            </div>

            <div className='add-ons-container'>
                <input className='accent-blue-500' type="checkbox" />
                <div className='add-ons-options ml-[1rem]'>
                    <p className='option-title'>Customizable profile</p>
                    <p className='option-desc'>Custom theme on your profile</p>
                </div>
                <span className='option-price ml-[6rem]'>+$2/mo</span>
            </div>
            </div>
        </div>
    </div>
  )
}
