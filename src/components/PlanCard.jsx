import React from 'react';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';

export const PlanCard = ({ name, price, isActive, onClick, showFreeDiscount }) => {
  return (
    <div className={`plans ${isActive ? 'active-card' : ''}`} onClick={onClick}>
      <img src={name === 'Arcade' ? arcade : name === 'Advanced' ? advanced : pro} alt="" />
      <div>
      <p className='plan-name'>{name}</p>
      <p className='price-toggle'>{price}</p>
      {showFreeDiscount && <p className='free-discount'>{'2 months free'}</p>}
      </div>
    </div>
  );
};
