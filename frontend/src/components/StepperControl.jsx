import React from 'react';
import Button from "@material-tailwind/react/Button";
import ButtonNS from './ButtonNS';

const StepperControl = ({ handleClick, currentStep, steps, inicio, datos_form, datos_declaracion, literal_1_1, userData, setUserData, productos, cantidad, pData}) => {
    // console.log(currentStep);//NO BORRAR GINO
    // console.log(inicio);//NO BORRAR GINO
    var desahabilitar = false;
    if (literal_1_1 === "materiales") {
        if (inicio === false) desahabilitar = true;
        if (currentStep === 2) if (datos_form === false) desahabilitar = true;
        if (currentStep === 3) if (datos_declaracion === false) desahabilitar = true;
    } else if (literal_1_1 === "materiales" || literal_1_1 === "materiales") {
        if (inicio === false) desahabilitar = true;
        if (datos_form === false) desahabilitar = true;
        if (datos_declaracion === false) desahabilitar = true;
    } else {
        if (inicio === false) desahabilitar = true;
    }
    return (
        <div className="container flex justify-center mt-4 mb-8 space-x-10">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&family=Manjari:wght@100&family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>
            {/* Regresar*/}
            {/* <Button
                style={{ background: "#025B93" }}
                className={`text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 easy-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                color=""
                buttonType="filled"
                size="regular"
                // onClick={() => handleClick("regresar")}
                onClick={() => handleClick()}
            >
                Regresar
            </Button> */}

            {/* Siguiente*/}
            {currentStep !== 4 ?
                <ButtonNS
                    style={{ background: "#EE7900" }}
                    className={`text-white py-2 px-4 rounded-xl font-title cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 easy-in-out
                ${inicio === false ? "opacity-50 cursor-not-allowed font-title" : ""}
                ${datos_form === false ? "opacity-50 cursor-not-allowed font-title" : ""}
                ${datos_declaracion === false ? "opacity-50 cursor-not-allowed font-title" : ""} `}
                    color=""
                    disabled={desahabilitar}
                    buttonType="filled"
                    size="regular"
                    onClick={() => handleClick("Siguiente")}
                >
                    {currentStep === steps.length - 1 ? "Enviar" : "Siguiente"}
                </ButtonNS>
                : ""}
        </div>
    );
};

export default StepperControl;