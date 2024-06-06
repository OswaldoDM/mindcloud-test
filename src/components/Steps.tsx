import { useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { IoIosList } from "react-icons/io";
import { Step } from "../types";
import StepsButton from "./StepsButton";
import useOutsideClick from "../hooks/useOutsideClick";

const stepsData: Step[] = [
  {
    stepNumber: 11,
    name: "Merge Employees with Demographics",
    hasError: false,
    icon1: <CgArrowsMergeAltH />,
    icon2: <IoIosList />,
    quantity: 100,
  },
  {
    stepNumber: 12,
    name: "Update User",
    hasError: true,
    icon1: <CiUser />,
    icon2: null,
    quantity: null,
  },      
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepsDivRef = useRef<HTMLDivElement>(null);  

  const handleStepClick = (stepNumber: number):void => {
    setActiveStep(stepNumber);
  }

  useOutsideClick(stepsDivRef, () => setActiveStep(null));

  return (    
    <section className='min-h-screen flex items-center justify-center'>
      <div
        ref={stepsDivRef}        
        className={`flex flex-col space-y-4 font-sans font-medium text-sm 
        tracking-wide px-4 md:px-0 w-[500px]`}
      >
        {stepsData.map((step) => (
          <StepsButton
            key={step.stepNumber}
            {...step}
            activeStep={activeStep}            
            handleStepClick={handleStepClick}
          />
        ))}
      </div>
    </section>   
  );
};

export default Steps;
