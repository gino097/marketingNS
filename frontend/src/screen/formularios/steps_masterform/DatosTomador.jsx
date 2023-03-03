import { useContext, useState, useRef } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

export default function DatosTomador() {
    const { userData, setUserData } = useContext(StepperContext);
    const { datos_tomador, setDatosTomador } = useContext(StepperContext);
    if(datos_tomador!==true){
        setDatosTomador(false);
        //console.log("%%%%%%%%%%%%%%%%",datos_tomador)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        validarCampos();
    }

    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);

    //setDatosTomador(validarCampos);
    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    /*************** APARTADO 2.1 ***************/
    const [literal_2_1_nombres, set_literal_2_1_nombres] = useState(userData["literal_2_1_nombres"] || "");
    /*************** APARTADO 2.2 ***************/
    const [literal_2_2_nit, set_literal_2_2_nit] = useState(userData["literal_2_2_nit"] || "");
    /*************** APARTADO 2.3 ***************/
    const [literal_2_3_direccion, set_literal_2_3_direccion] = useState(userData["literal_2_3_direccion"] || "");
    /*************** APARTADO 2.4 ***************/
    const [literal_2_4_telefono, set_literal_2_4_telefono] = useState(userData["literal_2_4_telefono"] || "");
    /*************** APARTADO 2.5 ***************/
    const [literal_2_5_celular, set_literal_2_5_celular] = useState(userData["literal_2_5_celular"] || "");
    /*************** APARTADO 2.6 ***************/
    const [literal_2_6_email, set_literal_2_6_email] = useState(userData["literal_2_6_email"] || "");

    {/* Mensajes */ }
    /*************** APARTADO 2.1 ***************/
    var [msg_literal_2_1_nombres, setMsg_literal_2_1_nombres] = useState(" ");
    /*************** APARTADO 2.2 ***************/
    var [msg_literal_2_2_nit, setMsg_literal_2_2_nit] = useState(" ");
    /*************** APARTADO 2.3 ***************/
    var [msg_literal_2_3_direccion, setMsg_literal_2_3_direccion] = useState(" ");
    /*************** APARTADO 2.4 ***************/
    var [msg_literal_2_4_telefono, setMsg_literal_2_4_telefono] = useState(" ");
    /*************** APARTADO 2.5 ***************/
    var [msg_literal_2_5_celular, setMsg_literal_2_5_celular] = useState(" ");
    /*************** APARTADO 2.6 ***************/
    var [msg_literal_2_6_email, setMsg_literal_2_6_email] = useState(" ");

    {/* Colores */ }
    /*************** APARTADO 2.1 ***************/
    const [color_literal_2_1_nombres, setColor_literal_2_1_nombres] = useState("indigo");
    /*************** APARTADO 2.2 ***************/
    const [color_literal_2_2_nit, setColor_literal_2_2_nit] = useState("indigo");
    /*************** APARTADO 2.3 ***************/
    const [color_literal_2_3_direccion, setColor_literal_2_3_direccion] = useState("indigo");
    /*************** APARTADO 2.4 ***************/
    const [color_literal_2_4_telefono, setColor_literal_2_4_telefono] = useState("indigo");
    /*************** APARTADO 2.5 ***************/
    const [color_literal_2_5_celular, setColor_literal_2_5_celular] = useState("indigo");
    /*************** APARTADO 2.6 ***************/
    const [color_literal_2_6_email, setColor_literal_2_6_email] = useState("indigo");


    //Función final que válida
    const listmsg = [msg_literal_2_1_nombres, msg_literal_2_2_nit, msg_literal_2_3_direccion, msg_literal_2_4_telefono, msg_literal_2_5_celular, msg_literal_2_6_email];
    function validarCampos() {
        if (validator.isEmpty(msg_literal_2_1_nombres) && validator.isEmpty(msg_literal_2_2_nit) && validator.isEmpty(msg_literal_2_3_direccion) &&
            validator.isEmpty(msg_literal_2_4_telefono) && validator.isEmpty(msg_literal_2_5_celular) && validator.isEmpty(msg_literal_2_6_email)) {
                setDatosTomador(true);
                //return true;
        } else {
            /*if (!validator.isEmpty(msg_literal_2_1_nombres)) setMsg_literal_2_1_nombres("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_2_nit)) setMsg_literal_2_2_nit("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_3_direccion)) setMsg_literal_2_3_direccion("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_4_telefono)) setMsg_literal_2_4_telefono("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_5_celular)) setMsg_literal_2_5_celular("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_6_email)) setMsg_literal_2_6_email("Campo inválido/vacío");*/
            setDatosTomador(false);
            //return false;
        }
    }

    /*************** APARTADO 2.1 ***************/
    function validar_literal_2_1_nombres(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarSoloLetras(entrada, listmsg)
        setMsg_literal_2_1_nombres(result.msg);
        msg_literal_2_1_nombres=result.msg;
        setColor_literal_2_1_nombres(result.color);
        set_literal_2_1_nombres(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 2.2 ***************/
    function validar_literal_2_2_nit(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg)
        setMsg_literal_2_2_nit(result.msg);
        msg_literal_2_2_nit=result.msg;
        setColor_literal_2_2_nit(result.color);
        set_literal_2_2_nit(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 2.3 ***************/
    function validar_literal_2_3_direccion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_2_3_direccion(result.msg);
        msg_literal_2_3_direccion=result.msg;
        setColor_literal_2_3_direccion(result.color);
        set_literal_2_3_direccion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 2.4 ***************/
    function validar_literal_2_4_telefono(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg)
        setMsg_literal_2_4_telefono(result.msg);
        msg_literal_2_4_telefono=result.msg;
        setColor_literal_2_4_telefono(result.color);
        set_literal_2_4_telefono(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 2.5 ***************/
    function validar_literal_2_5_celular(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg)
        setMsg_literal_2_5_celular(result.msg);
        msg_literal_2_5_celular=result.msg;
        setColor_literal_2_5_celular(result.color);
        set_literal_2_5_celular(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 2.6 ***************/
    function validar_literal_2_6_email(event) {
        const entrada = event.target.value;
        //console.log(entrada)
        var result = objvalidar.validarEmail(entrada, listmsg)
        setMsg_literal_2_6_email(result.msg);
        msg_literal_2_6_email=result.msg;
        setColor_literal_2_6_email(result.color);
        set_literal_2_6_email(entrada);
        setValidacion(result.validacion);

        handleChange(event);
    }

    return <div className='pl-6 flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">DATOS DEL TOMADOR</h1>
        <div className="text-justify mt-3">
            {/* SECCIÓN 2.1 - 2.2 - 2.3 */}
            <div className="flex flex-col md:flex-row space-x-2 px-6 mt-3">
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pl-4">
                    <p className="text-sm text-justify">
                        <b>Nombres y Apellidos o Razón Social</b>
                    </p>
                    <Input
                        type="text"
                        color={color_literal_2_1_nombres}
                        size="regular"
                        name="literal_2_1_nombres"
                        outline={true}
                        placeholder="Nombres"
                        className=""
                        maxLength={200}
                        onChange={validar_literal_2_1_nombres}
                        {...userData.hasOwnProperty('literal_2_1_nombres') ? userData["literal_2_1_nombres"] = literal_2_1_nombres : ""}
                        value={literal_2_1_nombres}
                    /><LeyendaError>{msg_literal_2_1_nombres}</LeyendaError>
                </div>
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pl-2">
                    <p className="text-sm text-justify">
                        <b>N.I.T</b>
                    </p>                    
                    <Input
                        type="text"
                        color={color_literal_2_2_nit}
                        size="regular"
                        name="literal_2_2_nit"
                        outline={true}
                        placeholder="N.I.T"
                        className=""
                        maxLength={20}
                        onChange={validar_literal_2_2_nit}
                        value={literal_2_2_nit}
                    /><LeyendaError>{msg_literal_2_2_nit}</LeyendaError>                    
                </div>
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pl-2">
                    <p className="text-sm text-justify">
                        <b>Dirección</b>
                    </p>                    
                    <Input
                        type="text"
                        color={color_literal_2_3_direccion}
                        size="regular"
                        name="literal_2_3_direccion"
                        outline={true}
                        placeholder="Dirección"
                        className=""
                        maxLength={300}
                        onChange={validar_literal_2_3_direccion}
                        {...userData.hasOwnProperty('literal_2_3_direccion') ? userData["literal_2_3_direccion"] = literal_2_3_direccion : ""}
                        value={literal_2_3_direccion}
                    /><LeyendaError>{msg_literal_2_3_direccion}</LeyendaError>                    
                </div>
            </div>
            {/* SECCIÓN 2.4 - 2.5 - 2.6 */}
            <div className="flex flex-col md:flex-row space-x-2 px-6 mt-3">
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6  pl-4">
                    <p className="text-sm text-justify">
                        <b>Teléfono</b>
                    </p>                    
                    <Input
                        type="text"
                        color={color_literal_2_4_telefono}
                        size="regular"
                        name="literal_2_4_telefono"
                        outline={true}
                        placeholder="Teléfono"
                        className=""
                        maxLength={20}
                        onChange={validar_literal_2_4_telefono}
                        value={literal_2_4_telefono}
                    /><LeyendaError>{msg_literal_2_4_telefono}</LeyendaError>    
                </div>
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pl-2">
                    <p className="text-sm text-justify">
                        <b>Celular</b>
                    </p>                    
                    <Input
                        type="text"
                        color={color_literal_2_5_celular}
                        size="regular"
                        name="literal_2_5_celular"
                        outline={true}
                        placeholder="Celular"
                        className=""
                        maxLength={20}
                        onChange={validar_literal_2_5_celular}
                        value={literal_2_5_celular}
                    /><LeyendaError>{msg_literal_2_5_celular}</LeyendaError>                
                </div>
                <div className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pl-2">
                    <p className="text-sm text-justify">
                        <b>E-mail</b>
                    </p>
                    {/* TODO REVISAR EL E-MAIL SOLO FUNCIONA LA VALIDACIÓN SI SE PEGA EL CORREO */}                    
                    <Input
                        type="text"
                        color={color_literal_2_6_email}
                        size="regular"
                        name="literal_2_6_email"
                        outline={true}
                        placeholder="E-mail"
                        className=""
                        maxLength={200}
                        onChange={validar_literal_2_6_email}
                        value={literal_2_6_email}
                    /><LeyendaError>{msg_literal_2_6_email}</LeyendaError>                    
                </div>
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