import MasterStepSVG from "../../../src/images/logo.png";
import React, { useEffect, Fragment, useRef, useState, useLayoutEffect } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import StepperControl from "../../components/StepperControl";
import Stepper from "../../components/Stepper";
import StepInicio from "./steps_masterform/Inicio";
import StepDatosForm from "./steps_masterform/datosForm";
import StepDatosPersonales from "./steps_masterform/DatosPersonales";
import StepTomador from "./steps_masterform/DatosTomador";
import StepDatosUIF from "./steps_masterform/DatosUIF";
import StepDatosDeclaracion from "./steps_masterform/DatosDeclaracion";
import StepFinal from "./steps_masterform/Final";
import { useDispatch } from "react-redux";

import { createSolicitud, createReg } from "../../actions/soliMateriales/solicitudMActions";

import Image from "../../images/formulario/fondo.svg";

import Input from "@material-tailwind/react/Input";

const Form_Master = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  var [pData, setpData]= useState();
  var lProductos;
  var lCantidad;
  const [inicioDataValidation, setInicioDataValidation] = useState('');
  const [inicio, setInicio] = useState('');
  const [datos_form, setDatosForm] = useState('');
  const [datos_declaracion, setDatosDeclaracion] = useState('');
  const [finalData, setfinalData] = useState([]);
  const dispatch = useDispatch();
  const createSol = (credenciales) => dispatch(createSolicitud(credenciales));
  const createR = (credenciales) => dispatch(createReg(credenciales));

  //console.log(pData);
  //console.log(lProductos);
  //console.log(lCantidad);
  console.log(userData);
  
  const handleSubmit = async () => {
    //console.log(pData);
    createSol({userData
    });
    setUserData('');
  };

  var literal_1_1 = "materiales";
  if (userData.hasOwnProperty('materiales')) literal_1_1 ="materiales";

  let steps = [
    "Inicio",
    "Datos Formulario",
    /*"Datos Tomador",
    "Datos UIF",*/
    "Solicitud de materiales",
    "Final"
  ];

  if (literal_1_1 === "materiales") {
    steps = [
      "Inicio",
      "Datos Formulario",/*
      "Datos Personales",
      "Datos UIF",*/
      "Solicitud de materiales",
      "Final"
    ];
  } else if (literal_1_1 === "materiales" || literal_1_1 === "materiales") {
    steps = [
      "Inicio",
      "Datos Formulario",/*
      "Datos Personales",
      "Datos Tomador",*/
      "Solicitud de materiales",
      "Final"
    ];
  } else {
    steps = [
      "Inicio",
      "Datos Formulario",
      "Solicitud de materiales",
      //"Datos Personales",
      "Final"
    ];
  }
  //console.log(literal_1_1);
  const displayStep = (step) => {
    
      switch (step) {
        case 1:
          return <StepInicio />
        case 2:
          return <StepDatosForm />
        case 3:
          return <StepDatosDeclaracion />
        case 4:
          return <StepFinal />

        default:
          return <StepFinal />
      }
    
  }

  const handleClick = (direction) => {

    let newStep = currentStep;
    direction === "Siguiente" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    if (newStep === (steps.length)) {
      setCurrentStep(newStep);
      handleSubmit();

    }
    //newStep === (steps.length) ? handleSubmit() : setCurrentStep(newStep);
  }
  
  return <Fragment>
    <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0 bg-[#025B93]">
      <div className="w-[90%] mx-auto col-span-3 h-100 bg-white">
        <div>
          <img
            src={MasterStepSVG}
            className="rounded-l-xl h-[100px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
        </div>
        
        {/* Stepper */}
        <div className="container horizontal mt-2">
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        {/* Componentes */}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            inicioDataValidation,
            setInicioDataValidation,
            inicio,
            setInicio,
            datos_form,
            setDatosForm,
            datos_declaracion,
            setDatosDeclaracion,
            finalData,
            setfinalData,
            lProductos,
            //setLProductos,
            lCantidad,
            //setLCantidad,
            pData, 
            setpData,
          }}>
            {/*console.log(userData)*/}
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>

        {/* Navegacion controles*/}
        {currentStep != steps.length &&
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            inicio={inicio}
            datos_form={datos_form}
            datos_declaracion={datos_declaracion}
            literal_1_1={literal_1_1}
            userData={userData}
            setUserData={setUserData}
            productos={lProductos}
            cantidad={lCantidad}
            pData={pData}
          />/*?<StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />:handleSubmit()*/
        }
        {/*currentStep === steps.length?handleSubmit():null*/}

        {/* </div> */}
      </div>
    </div>
  </Fragment>
};

export default Form_Master;