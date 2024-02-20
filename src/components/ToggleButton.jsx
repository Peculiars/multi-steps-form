import React, { useState } from 'react'

export const ToggleButton = ({onToggle}) => {
    const [toggle, setToggle] =useState(false);

    const handleToggle=()=>{
        setToggle(!toggle)
        onToggle(!toggle)
    }
  return (
    <div onClick={handleToggle} className={'toggle-button-container'} style={{justifyContent: toggle ? 'flex-end': 'flex-start'}}>
        <div className='toggle-button'></div>
    </div>
  )
}
