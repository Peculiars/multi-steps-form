import React, { useState } from 'react';
import checkmark from '../assets/icon-checkmark.svg';

export const Step3 = ({ toggleState }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(3).fill(false));

  const toggleCheckbox = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const optionItems = [
    { optionTitle: 'Online service', optionDesc: 'Access to multiplayer games', optionPrice: toggleState ? '+$10/yr' : '+$1/mo' },
    { optionTitle: 'Larger storage', optionDesc: 'Extra 1TB of cloud save', optionPrice: toggleState ? '+$20/yr' : '+$2/mo' },
    { optionTitle: 'Customizable profile', optionDesc: 'Custom theme on your profile', optionPrice: toggleState ? '+$20/yr' : '+$2/mo' },
  ];

  return (
    <div className='options'>
      {optionItems.map((item, index) => (
        <div className={checkedItems[index] ? 'selected-option' : 'add-ons-container'} key={index} onClick={() => toggleCheckbox(index)}>
          <div className='flex items-center justify-center'>
            <div className={checkedItems[index] ? 'is-checked check-container' : 'check-container'}>
              {checkedItems[index] && (
                <img className='w-[0.5rem] h-[0.5rem]' src={checkmark} alt='' />
              )}
            </div>
            <div className='add-ons-options ml-[1rem]'>
              <p className='option-title'>{item.optionTitle}</p>
              <p className='option-desc'>{item.optionDesc}</p>
            </div>
          </div>
          <span className='option-price'>{item.optionPrice}</span>
        </div>
      ))}
    </div>
  );
};
