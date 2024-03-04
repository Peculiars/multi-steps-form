import React from 'react'

export const Step4 = ({onBack, onNext}) => {
  return (    
    <div className='step3'>
        <div className='step3-heading'>
            
        </div>

        <div className='buttons justify-between flex items-end sm:hidden'>
        <button type='button' onClick={onBack} className='go-back-btn'>Go Back</button>
        <button onClick={onNext} className='next-step'>Next Step</button>
      </div>
        <div className='mobile-btns'>
        <div className='btns justify-between flex items-center '>
          <button onClick={onBack} className='go-back-btn'>Go Back</button>
          <button onClick={onNext} className='next-step'>Next Step</button>
        </div>
      </div>
    </div>
  )
}
