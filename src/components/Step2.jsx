import React, { useState } from 'react';
import { PlanCard } from './PlanCard';
import { ToggleButton } from './ToggleButton';

export const Step2 = ({ toggleState, handleToggle, onNext, onBack  }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div>
      <div className="plans-container">
        {[{ name: 'Arcade', price: toggleState ? '$90/yr' : '$9/mo' },
        { name: 'Advanced', price: toggleState ? '$120/yr' : '$12/mo' },
        { name: 'Pro', price: toggleState ? '$150/yr' : '$15/mo' }].map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            isActive={activeCard === index}
            onClick={() => handleCardClick(index)}
            showFreeDiscount={toggleState}
          />
        ))}
      </div>
      <div className="toggle-option">
        <p className={toggleState ? 'not-active-plan' : 'active-plan'}>Monthly</p>
        <p className="toggle-btn"><ToggleButton onToggle={handleToggle} /></p>
        <p className={toggleState ? 'active-plan' : 'not-active-plan'}>Yearly</p>
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
  );
};
