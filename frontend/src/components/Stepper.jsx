import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        //Paso actual
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      } else if (count < stepNumber) {
        //Paso completo
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        //Paso pendiente
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
        <div className="relative flex flex-col items-center text-teal-600">
          {/* NÚMERO */}
          <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 font-bold ${step.selected ? "text-white font-bold border" : "text-white"}`}
            style={{ background: `${step.selected ? "#EE7900" : "#025B93"}`, border: `${step.selected ? "#EE7900" : "#025B93"}` }}>
            {/* {step.completed ? (<span className="text-white font-bold text-xl">&#10003;</span>) : (index + 1)} */}
            {
              step.completed ? (<span className="text-white font-bold text-xl">&#10003;</span>) : (
                index === 0 ? (<span className="text-white font-bold text-xl">I</span>) : (
                  index === newStep.length - 1 ? (<span className="text-white font-bold text-xl">F</span>) : (index)
                )
              )
            }
          </div>
          {/* DESCRIPCIÓN */}
          <div className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium font-title uppercase font-bold`}
            style={{ color: `${step.highlighted ? "#EE7900" : "#E0E0E0"}` }}>
            {step.description}
          </div>
        </div>
        {/* LÍNEAS */}
        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out border`}
          style={{ background: `${step.completed ? "#025B93" : "#E0E0E0"}`, borderColor: `${step.completed ? "#025B93" : "#E0E0E0"}`, height: "5px" }}></div>
      </div >
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;