import React, { useState } from 'react'
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import desktopImg from '../assets/bg-sidebar-desktop.svg';
import mobileImg from '../assets/bg-sidebar-mobile.svg';

export const MultiSteps = () => {
  const [step, setStep] = useState(1);
  const [toggleState, setToggleState] = useState(false);
  const [userSelections, setUserSelections] = useState({
    selectedPlan: {},
    selectedAddOns: [],
    summary: {}
  })

  const nextStep =()=>{
    setStep(step + 1);
  }

  const prevStep=()=>{
    setStep(step -1);
  }

  const handleSelectedPlan = (data) => {
    setUserSelections({
      ...userSelections,
      selectedPlan: data
    });
  };

  const handleSelectedAddOns = (data) => {
    setUserSelections({
      ...userSelections,
      selectedAddOns: data
    });
  };

  const handleSummary = (data) => {
    setUserSelections({
      ...userSelections,
      summary: data
    });
  };

  const handleToggle = (toggle) => {
    setToggleState(toggle);
  };

  const handleHeading=()=>{
    switch(step){
      case 1:
        return <div className='steps-heading'>
                  <h1>Personal info</h1>
                  <p>Please provide your name, email address, and phone number.</p>
              </div>;
              
      case 2:
        return <div className='steps-heading'>
                  <h1>Select your plan</h1>
                  <p className='step2-heading-desc'>You have the option of monthly or yearly billing.</p>
                </div>;

      case 3:
        return <div className='steps-heading'>
                <h1>Pick add-ons</h1>
                <p className='step3-desc'>Add-ons help help enhance your gaming experience.</p>
              </div>;

      case 4:
        return <div className='steps-heading'>
                <h1>Finishing up</h1>
                <p className='step3-desc'>Double-check everything looks OK before.</p>
              </div>;

    }
  }

  const renderStep =()=>{
    switch(step){
      case 1:
        return <Step1 onNext={nextStep}/>;
      case 2:
        return <Step2 onNext={nextStep} onBack={prevStep} toggleState={toggleState} handleToggle={handleToggle} onSelectedPlansSubmit={handleSelectedPlan}/>;
      case 3:
        return <Step3 onNext={nextStep} onBack={prevStep} toggleState={toggleState} handleToggle={handleToggle} onSelectedAddOnsSubmit={handleSelectedAddOns}/>;
      case 4:
        return <Step4 onNext={nextStep} onBack={prevStep}/>

        default :
        return null;
    }
  }

  const renderButtons = () => {
    if (step === 1) {
      return (
        <div className='buttons justify-end flex items-end sm:hidden'>
          <button onClick={nextStep}   className='next-step'>
            Next Step
          </button>
        </div>
      );
    } else {
      return (
        <div className='buttons justify-between flex items-end sm:hidden'>
          <button onClick={prevStep} className='go-back-btn'>
            Go Back
          </button>
          <button onClick={nextStep} className='next-step'>
            Next Step
          </button>
        </div>
      );
    }
  };

  const renderMobileButtons = () => {
    if (step === 1) {
      return (
        <div className='btns justify-end flex items-end'>
          <button onClick={nextStep} className='next-step'>
            Next Step
          </button>
        </div>
      );
    } else {
      return (
        <div className='btns justify-between flex items-center '>
          <button onClick={prevStep} className='go-back-btn'>
            Go Back
          </button>
          <button onClick={nextStep} className='next-step'>
            Next Step
          </button>
        </div>
      );
    }
  };
  
  return (
    <div className='multi-steps-container'>
      <img className='mobile-img' src={mobileImg} alt="gradient mobile background image" />
      <div className='mobile-step-count'>
        <p className={step=== 1?'active-mobile-num':'mobile-counter-num'}>1</p>
        <p className={step=== 2 ?'active-mobile-num':'mobile-counter-num'}>2</p>
        <p className={step=== 3 ?'active-mobile-num':'mobile-counter-num'}>3</p>
        <p className={step=== 4 ?'active-mobile-num':'mobile-counter-num'}>4</p>
      </div>
        <div className='background-container'>
            <div className='desktop-sidebar'>
                <img className='desktop-img' src={desktopImg} alt="gradient desktop background image" />
                  <div className='step-tracking'>     
                    <div className='step-counter-container'>
                      <p className={step=== 1?'active-step-num':'step-counter-num'}>1</p>
                      <div>
                      <p className='step-number'>STEP 1</p>
                      <p className='step-option'>YOUR INFO</p>
                      </div>
                    </div>

                    <div className='step-counter-container'>
                      <p className={step=== 2 ?'active-step-num':'step-counter-num'}>2</p>
                      <div>
                      <p className='step-number'>STEP 2</p>
                      <p className='step-option'>SELECT PLAN</p>
                      </div>
                    </div>
         
                    <div className='step-counter-container'>
                      <p className={step=== 3 ?'active-step-num':'step-counter-num'}>3</p>
                      <div>
                      <p className='step-number'>STEP 3</p>
                      <p className='step-option'>ADD-ONS</p>
                      </div>
                    </div>

                    <div className='step-counter-container'>
                      <p className={step=== 4 ?'active-step-num':'step-counter-num'}>4</p>
                      <div>
                        <p className='step-number'>STEP 4</p>
                        <p className='step-option'>SUMMARY</p>
                      </div>
                    </div>

                  </div>
            </div>
            <div className='steps-container'>
              <div>
                  {handleHeading()}
              </div>

              <div>
                {renderStep()}
              </div>
                  {renderButtons()}
            </div>
        </div>
        <div className='mobile-btns'>
          {renderMobileButtons()}
        </div>
    </div>
  )
}
