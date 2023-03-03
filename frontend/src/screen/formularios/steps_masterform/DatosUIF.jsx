import { useContext, useState, useRef } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";
import { useEffect } from 'react';

export default function DatosUIF() {
    const { userData, setUserData } = useContext(StepperContext);
    const { datos_UIF, setDatosUIF } = useContext(StepperContext);
    
    if (datos_UIF !== true) {
        setDatosUIF(false);
        //console.log("%%%%%%%%%%%%%%%%",datos_UIF)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        validarCampos();
    }
    var prueba = false;
    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);
    // setDatosUIF(validarCampos());
    //setDatosUIF(validarCampos);
    // if (validarCampos === true) prueba = true;
    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    /*************** APARTADO 3.1 ***************/
    const [literal_3_1_conyuge, set_literal_3_1_conyuge] = useState(userData["literal_1_7_conyuge"] || "");
    /*************** APARTADO 3.2 ***************/
    const [literal_3_2_profesion, set_literal_3_2_profesion] = useState(userData["literal_3_2_profesion"] || "");
    /*************** APARTADO 3.3 ***************/
    const [literal_3_3_cargo_actual, set_literal_3_3_cargo_actual] = useState(userData["literal_3_3_cargo_actual"] || "");
    /*************** APARTADO 3.4 ***************/
    const [literal_3_4_pais_residencia, set_literal_3_4_pais_residencia] = useState(userData["literal_3_4_pais_residencia"] || "");
    /*************** APARTADO 3.5 ***************/
    const [literal_3_5_lugar_trabajo, set_literal_3_5_lugar_trabajo] = useState(userData["literal_3_5_lugar_trabajo"] || "");
    /*************** APARTADO 3.6 ***************/
    const [literal_3_6_fecha_ingreso, set_literal_3_6_fecha_ingreso] = useState(userData["literal_3_6_fecha_ingreso"] || "");
    /*************** APARTADO 3.7 ***************/
    const [literal_3_7_ingreso_anual, set_literal_3_7_ingreso_anual] = useState(userData["literal_3_7_ingreso_anual"] || "");
    /*************** APARTADO 3.8 ***************/
    const [literal_3_8_direccion_comercial, set_literal_3_8_direccion_comercial] = useState(userData["literal_3_8_direccion_comercial"] || "");
    /*************** APARTADO 3.9 ***************/
    const [literal_3_9_referencias, set_literal_3_9_referencias] = useState(userData["literal_3_9_referencias"] || "");

    {/* Mensajes */ }
    /*************** APARTADO 3.2 ***************/
    var [msg_literal_3_2_profesion, setMsg_literal_3_2_profesion] = useState(" ");
    /*************** APARTADO 3.3 ***************/
    var [msg_literal_3_3_cargo_actual, setMsg_literal_3_3_cargo_actual] = useState(" ");
    /*************** APARTADO 3.4 ***************/
    var [msg_literal_3_4_pais_residencia, setMsg_literal_3_4_pais_residencia] = useState(" ");
    /*************** APARTADO 3.5 ***************/
    var [msg_literal_3_5_lugar_trabajo, setMsg_literal_3_5_lugar_trabajo] = useState(" ");
    /*************** APARTADO 3.6 ***************/
    var [msg_literal_3_6_fecha_ingreso, setMsg_literal_3_6_fecha_ingreso] = useState(" ");
    /*************** APARTADO 3.7 ***************/
    var [msg_literal_3_7_ingreso_anual, setMsg_literal_3_7_ingreso_anual] = useState(" ");
    /*************** APARTADO 3.8 ***************/
    var [msg_literal_3_8_direccion_comercial, setMsg_literal_3_8_direccion_comercial] = useState(" ");
    /*************** APARTADO 3.9 ***************/
    var [msg_literal_3_9_referencias, setMsg_literal_3_9_referencias] = useState(" ");

    {/* Colores */ }
    /*************** APARTADO 3.2 ***************/
    const [color_literal_3_2_profesion, setColor_literal_3_2_profesion] = useState("indigo");
    /*************** APARTADO 3.3 ***************/
    const [color_literal_3_3_cargo_actual, setColor_literal_3_3_cargo_actual] = useState("indigo");
    /*************** APARTADO 3.4 ***************/
    const [color_literal_3_4_pais_residencia, setColor_literal_3_4_pais_residencia] = useState("indigo");
    /*************** APARTADO 3.5 ***************/
    const [color_literal_3_5_lugar_trabajo, setColor_literal_3_5_lugar_trabajo] = useState("indigo");
    /*************** APARTADO 3.6 ***************/
    const [color_literal_3_6_fecha_ingreso, setColor_literal_3_6_fecha_ingreso] = useState("indigo");
    /*************** APARTADO 3.7 ***************/
    const [color_literal_3_7_ingreso_anual, setColor_literal_3_7_ingreso_anual] = useState("indigo");
    /*************** APARTADO 3.8 ***************/
    const [color_literal_3_8_direccion_comercial, setColor_literal_3_8_direccion_comercial] = useState("indigo");
    /*************** APARTADO 3.9 ***************/
    const [color_literal_3_9_referencias, setColor_literal_3_9_referencias] = useState("indigo");

    //Función final que válida   
    const listmsg = [msg_literal_3_2_profesion, msg_literal_3_3_cargo_actual, msg_literal_3_4_pais_residencia, msg_literal_3_5_lugar_trabajo,
        msg_literal_3_6_fecha_ingreso, msg_literal_3_7_ingreso_anual, msg_literal_3_8_direccion_comercial, msg_literal_3_9_referencias];
    function validarCampos() {
        
        if (validator.isEmpty(msg_literal_3_2_profesion) && validator.isEmpty(msg_literal_3_3_cargo_actual) &&
            validator.isEmpty(msg_literal_3_4_pais_residencia) && validator.isEmpty(msg_literal_3_5_lugar_trabajo) && validator.isEmpty(msg_literal_3_6_fecha_ingreso) &&
            validator.isEmpty(msg_literal_3_7_ingreso_anual) && validator.isEmpty(msg_literal_3_8_direccion_comercial) && validator.isEmpty(msg_literal_3_9_referencias)) {
            setDatosUIF(true);
            //return true;
        } else {
            /*if (!validator.isEmpty(msg_literal_3_2_profesion)) setMsg_literal_3_2_profesion("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_3_cargo_actual)) setMsg_literal_3_3_cargo_actual("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_4_pais_residencia)) setMsg_literal_3_4_pais_residencia("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_5_lugar_trabajo)) setMsg_literal_3_5_lugar_trabajo("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_6_fecha_ingreso)) setMsg_literal_3_6_fecha_ingreso("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_7_ingreso_anual)) setMsg_literal_3_7_ingreso_anual("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_8_direccion_comercial)) setMsg_literal_3_8_direccion_comercial("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_3_9_referencias)) setMsg_literal_3_9_referencias("Campo inválido/vacío");*/
            setDatosUIF(false);
            //return false;
        }
    }

    // datos_UIF = validarCampos();
    /*************** APARTADO 3.2 ***************/
    function validar_literal_3_2_profesion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_2_profesion(result.msg);
        msg_literal_3_2_profesion = result.msg;
        setColor_literal_3_2_profesion(result.color);
        set_literal_3_2_profesion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.3 ***************/
    function validar_literal_3_3_cargo_actual(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_3_cargo_actual(result.msg);
        msg_literal_3_3_cargo_actual = result.msg;
        setColor_literal_3_3_cargo_actual(result.color);
        set_literal_3_3_cargo_actual(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.4 ***************/
    function validar_literal_3_4_pais_residencia(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_4_pais_residencia(result.msg);
        msg_literal_3_4_pais_residencia = result.msg;
        setColor_literal_3_4_pais_residencia(result.color);
        set_literal_3_4_pais_residencia(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.5 ***************/
    function validar_literal_3_5_lugar_trabajo(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_5_lugar_trabajo(result.msg);
        msg_literal_3_5_lugar_trabajo = result.msg;
        setColor_literal_3_5_lugar_trabajo(result.color);
        set_literal_3_5_lugar_trabajo(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.6 ***************/
    function validar_literal_3_6_fecha_ingreso(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_3_6_fecha_ingreso(result.msg);
        msg_literal_3_6_fecha_ingreso = result.msg;
        setColor_literal_3_6_fecha_ingreso(result.color);
        set_literal_3_6_fecha_ingreso(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.7 ***************/
    function validar_literal_3_7_ingreso_anual(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg)
        setMsg_literal_3_7_ingreso_anual(result.msg);
        msg_literal_3_7_ingreso_anual = result.msg;
        setColor_literal_3_7_ingreso_anual(result.color);
        set_literal_3_7_ingreso_anual(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.8 ***************/
    function validar_literal_3_8_direccion_comercial(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_8_direccion_comercial(result.msg);
        msg_literal_3_8_direccion_comercial = result.msg;
        setColor_literal_3_8_direccion_comercial(result.color);
        set_literal_3_8_direccion_comercial(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 3.9 ***************/
    function validar_literal_3_9_referencias(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_3_9_referencias(result.msg);
        msg_literal_3_9_referencias = result.msg;
        setColor_literal_3_9_referencias(result.color);
        set_literal_3_9_referencias(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    return <div className='pl-8 flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">DATOS DEL UIF</h1>
        <div className="text-justify mt-3 px-5">
            {/* SECCIÓN 3.2 - 3.3 */}
            
            
                <div class='flex flex-wrap'>
                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                    <p className="text-sm text-justify">
                        <b>Profesión</b>
                    </p>

                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                        <Input
                            type="text"
                            color={color_literal_3_2_profesion}
                            size="regular"
                            name="literal_3_2_profesion"
                            outline={true}
                            placeholder="Ej. Maestro"
                            className=""
                            maxLength={100}
                            onChange={validar_literal_3_2_profesion}
                            {...userData.hasOwnProperty('literal_3_2_profesion') ? userData["literal_3_2_profesion"] = literal_3_2_profesion : ""}
                            value={literal_3_2_profesion}
                        /><LeyendaError>{msg_literal_3_2_profesion}</LeyendaError>
                    </div>
                
               
                    <p className="text-sm text-justify">
                        <b>Cargo Actual</b>
                    </p>

                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">

                        <Input
                            type="text"
                            color={color_literal_3_3_cargo_actual}
                            size="regular"
                            name="literal_3_3_cargo_actual"
                            outline={true}
                            placeholder="Ej. Gerente"
                            className=""
                            maxLength={100}
                            onChange={validar_literal_3_3_cargo_actual}
                            {...userData.hasOwnProperty('literal_3_3_cargo_actual') ? userData["literal_3_3_cargo_actual"] = literal_3_3_cargo_actual : ""}
                            value={literal_3_3_cargo_actual}
                        /><LeyendaError>{msg_literal_3_3_cargo_actual}</LeyendaError>
                    </div>
                </div>

                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                    <p className="text-sm text-justify">
                        <b>País de Residencia</b>
                    </p>

                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                        <Input
                            type="text"
                            color={color_literal_3_4_pais_residencia}
                            size="regular"
                            name="literal_3_4_pais_residencia"
                            outline={true}
                            placeholder="Ej. Bolivia"
                            className=""
                            maxLength={100}
                            onChange={validar_literal_3_4_pais_residencia}
                            {...userData.hasOwnProperty('literal_3_4_pais_residencia') ? userData["literal_3_4_pais_residencia"] = literal_3_4_pais_residencia : ""}
                            value={literal_3_4_pais_residencia}
                        /><LeyendaError>{msg_literal_3_4_pais_residencia}</LeyendaError>
                    </div>
                    <p className="text-sm text-justify">
                        <b>Lugar de Trabajo</b>
                    </p>
                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                        <Input
                            type="text"
                            color={color_literal_3_5_lugar_trabajo}
                            size="regular"
                            name="literal_3_5_lugar_trabajo"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={100}
                            onChange={validar_literal_3_5_lugar_trabajo}
                            {...userData.hasOwnProperty('literal_3_5_lugar_trabajo') ? userData["literal_3_5_lugar_trabajo"] = literal_3_5_lugar_trabajo : ""}
                            value={literal_3_5_lugar_trabajo}
                        /><LeyendaError>{msg_literal_3_5_lugar_trabajo}</LeyendaError>
                    </div>
                </div>

                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                    
                    <p className="text-sm text-justify">
                        <b>Fecha de Ingreso</b>
                    </p>

                    <div className="basis-1/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6 pr-3">
                        <Input
                            type="date"
                            color={color_literal_3_6_fecha_ingreso}
                            size="regular"
                            name="literal_3_6_fecha_ingreso"
                            outline={true}
                            placeholder=""
                            className=""
                            // maxLength={20}
                            onChange={validar_literal_3_6_fecha_ingreso}
                            {...userData.hasOwnProperty('literal_3_6_fecha_ingreso') ? userData["literal_3_6_fecha_ingreso"] = literal_3_6_fecha_ingreso : ""}
                            value={literal_3_6_fecha_ingreso}
                        /><LeyendaError>{msg_literal_3_6_fecha_ingreso}</LeyendaError>
                    </div>
                    
                    
                    <p className="text-sm text-justify">
                        <b>Ingreso Anual (Bs)</b>
                    </p>
                    <div className="basis-1/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6 pr-3">
                        <Input
                            type="text"
                            color={color_literal_3_7_ingreso_anual}
                            size="regular"
                            name="literal_3_7_ingreso_anual"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={8}
                            onChange={validar_literal_3_7_ingreso_anual}
                            value={literal_3_7_ingreso_anual}
                        /><LeyendaError>{msg_literal_3_7_ingreso_anual}</LeyendaError>
                    </div>
                    
                </div>

                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                    <p className="text-sm text-justify">
                        <b>Dirección Comercial</b>
                    </p>
                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                        <Input
                            type="text"
                            color={color_literal_3_8_direccion_comercial}
                            size="regular"
                            name="literal_3_8_direccion_comercial"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={300}
                            onChange={validar_literal_3_8_direccion_comercial}
                            {...userData.hasOwnProperty('literal_3_8_direccion_comercial') ? userData["literal_3_8_direccion_comercial"] = literal_3_8_direccion_comercial : ""}
                            value={literal_3_8_direccion_comercial}
                        /><LeyendaError>{msg_literal_3_8_direccion_comercial}</LeyendaError>
                    </div>

                   
                    <p className="text-sm text-justify">
                        <b>Referencias Personales y/o Bancarias y/o Comerciales</b>
                    </p>

                    <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                        <Input
                            type="text"
                            color={color_literal_3_9_referencias}
                            size="regular"
                            name="literal_3_9_referencias"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={300}
                            onChange={validar_literal_3_9_referencias}
                            {...userData.hasOwnProperty('literal_3_9_referencias') ? userData["literal_3_9_referencias"] = literal_3_9_referencias : ""}
                            value={literal_3_9_referencias}
                        /><LeyendaError>{msg_literal_3_9_referencias}</LeyendaError>
                    </div>
                
                </div>
                
                </div>
            {/* SECCIÓN 3.8 - 3.9 */}
            
            {/* SECCIÓN 3.4 - 3.5 */}
            
            
            {/* SECCIÓN 3.6 - 3.7 - 3.8 */}
            
            
            
            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                
                {userData.literal_1_7_estado_civil === "Casado" ?
                    <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 pl-2">
                        <p className="text-sm text-justify">
                            <b>Nombres del Cónyuge</b>
                        </p>
                    </div>
                    : ""}
            
                 
                    {userData.literal_1_7_estado_civil === "Casado" ?
                        <div className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6">
                            <Input
                                type="text"
                                color={"indigo"}
                                size="regular"
                                name="literal_3_1_conyuge"
                                outline={true}
                                disabled={true}
                                placeholder=""
                                className=""
                                maxLength={100}
                                value={literal_3_1_conyuge || ""}
                            />
                        </div>
                        : ""}
                
                </div>
            
        </div>
        {/* <Button
            type="submit"
            className="bg-indigo-300 mb-1"
            color="indigo"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={async (e) => {
                if (validarCampos() === true) {
                    console.log("Puede ir al siguiente paso");
                } else {
                    console.log("Debe completar todos los campos");
                }
            }}
        >
            Validar Paso
        </Button> */}
    </div>
}