import React, { useState } from 'react';
import { PlanCard } from './PlanCard';
import { ToggleButton } from './ToggleButton';

export const Step2 = ({ toggleState, handleToggle }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="step2">
      <div className="step2-heading">
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
        </div>
      </div>
    </div>
  );
};
