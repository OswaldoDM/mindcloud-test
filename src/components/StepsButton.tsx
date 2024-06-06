import { JSX } from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface StepsButtonProps {
  stepNumber: number;
  name: string;
  icon1: JSX.Element | null;
  icon2: JSX.Element | null;
  quantity: number | null;
  hasError: boolean;
  activeStep: number | null;  
  handleStepClick: (stepNumber: number) => void;
}

const StepsButton = ({
  stepNumber,
  name,
  icon1,
  icon2,
  quantity,
  hasError,
  activeStep,  
  handleStepClick,
}: StepsButtonProps) => {

    const isDisabled = activeStep !== null && activeStep !== stepNumber;

  return (
    <button
      key={stepNumber}
      className={`flex items-center justify-between relative rounded-md w-full 
      p-4 border border-gray-300 focus:outline focus:outline-1 focus:outline-violet-700
      hover:border-gray-400 transition-all duration-200                  
      ${isDisabled ? 'opacity-50' : ''}`}     
      onClick={() => handleStepClick(stepNumber)}
    >
      <div className='flex items-center gap-2'>
        <span className='mr-2 w-[18px]'>{icon1}</span>
        <p className='text-xs text-gray-400'>{stepNumber}</p>
        <p>{name}</p>
      </div>           
      <div className='flex items-center gap-1'>
        <span>{icon2}</span>
        <p className='text-xs'>{quantity}</p>
      </div>      
      {hasError && activeStep === stepNumber ? (        
        <FaExclamationCircle 
        className='absolute inset-0 left-[95%] sm:top-[35%] sm:left-[102%] text-orange-400'        
        />                   
      ) : (
        <></>
      )}
    </button>
  );
};

export default StepsButton;
