import InitialStepSVG from "../../../images/formulario/solicitud_inicio.svg";
import { useContext, useState, useRef } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';
import Select from "react-select";
import'./styles.css'
//import Image from "../../../images/formulario/initial.svg";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Inicio() {
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fechaF = anio + "-" + (Number(mes) <= 9 ? mes = "0" + mes : mes) + "-" + (Number(dia) <= 9 ? dia = "0" + dia : dia);

    const dispatch = useDispatch();
    const { userData, setUserData } = useContext(StepperContext);
    const { inicioDataValidation, setInicioDataValidation } = useContext(StepperContext);
    var { inicio, setInicio } = useContext(StepperContext);

    if (inicio !== true) {
        setInicio(true);
    } else if (inicio === true) { setInicio(true) }

    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);

    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    {/* Mensajes */ }
    var [msgLugar, setMsgLugar] = useState(" ");
    var [msgIntermediario, setMsgIntermediario] = useState(" ");
    var [msgUsuario, setMsgUsuario] = useState(" ");

    {/* Colores */ }
    const [colorFechaSolicitud, setColorFechaSolicitud] = useState(" ");
    const [colorUsuario, setColorUsuario] = useState(" ");

    //Función final que válida
    var listmsg = [msgLugar, msgUsuario, msgIntermediario];

    function validarCampos() {
        if (validator.isEmpty(msgLugar) && validator.isEmpty(msgUsuario)) {
            setInicio(true);
        } else {
            /*if (!validator.isEmpty(msgLugar)) setMsgLugar("Elija una opción válida");
            if (!validator.isEmpty(msgUsuario)) setMsgUsuario("Elija una opción válida");*/
            setInicio(false);
        }
    }
    useEffect(() => {
        setUserData({ ...userData, ["fecha_solicitud"]: fechaF });
    }, [setUserData, fechaF]);

    return <div className='pl-8 flex flex-col'>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&family=Manjari:wght@100&family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>

        <h2 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-blue-900 text-base font-bold font-title text-2xl pt-3 md:text-2xl dark:text-blue-900">Solicitud de material para eventos</h2>
        {/*<h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">SALUD FLEXIBLE</h1>*/}
        {/*<h3 className=" pl-6 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-1xl pt-3 md:text-2xl dark:text-gray-100">OBSERVACIONES IMPORTANTES</h3>*/}
            {/*<p className="text-justify -pl-2 pr-9">
                "Sírvase llenar este formulario, haga sus declaraciones con toda tranquilidad y franqueza, si tiene alguna enfermedad, manifiéstela de
                forma clara y detallada. La falta de declaración completa y verdadera llevará a una evaluación equivocada de su salud. En todo caso,
                una declaración auténtica nunca será discutida por la Compañía que tomó conocimiento del riesgo aceptado."
            </p>*/}

                <div className="propo-con">

                    <div className="cont-img">
                        <img
                            src={InitialStepSVG}
                            className="rounded-l-xl "
                            loading="lazy"
                            height=""
                            width=""
                            alt="music mood"
                        />
                    </div>

                <div className="descripcionEE">
                    <div className="">
                        <div className="" >
                            <Input
                                type="date"
                                size="regular"
                                name="fecha_solicitud"
                                placeholder="Fecha de Solicitud"
                                className=""
                                value={fechaF}
                                disabled
                            />
                        </div>
                    </div>
                </div>
        </div>
    </div>
}