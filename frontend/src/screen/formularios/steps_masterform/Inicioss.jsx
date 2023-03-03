import InitialStepSVG from "../../../images/formulario/initial_step.svg";
import { useContext, useState, useRef } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';
import Select from "react-select";

import Image from "../../../images/formulario/fondo.svg";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

import {
    listaComboDispositivosEntregaId,
    listaComboCiudades
} from "../../../actions/formulario/usuarioComboActions"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Inicio() {
    const dispatch = useDispatch();
    const { userData, setUserData } = useContext(StepperContext);
    const { inicioDataValidation, setInicioDataValidation } = useContext(StepperContext);
    var { inicio, setInicio } = useContext(StepperContext);
    //console.log("inicio de entrada: ", inicio)
    if (inicio !== true) {
        setInicio(false);
        //console.log("%%%%%%%%%%%%%%%%",inicio)
    }
    else if (inicio === true) { setInicio(true) }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        validarCampos();
        // setInicioDataValidation({ ...inicioDataValidation, [name_validation]: value_validation });
    }
    // Caso especial para los combos que cargan datos desde la DB
    const handleChangeCombo = (name, value) => {
        // console.log(e);
        // const value = e.value;
        // const { label, value } = e.value;
        setUserData({ ...userData, [name]: value });
        validarCampos();
    }

    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);
    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    const [fecha_solicitud, setFechaSolicitud] = useState();
    // const [lugar, setLugar] = useState("");
    const [ciudades, setCiudades] = useState(userData["ciudades"] || "");
    var [intermediario, setIntermediario] = useState(userData["intermediario"] || "");
    const [z_usuario, setUsuario] = useState("");
    {/* Mensajes */ }
    var [msgFechaSolicitud, setMsgFechaSolicitud] = useState(" ");
    var [msgCiudades, setMsgCiudades] = useState(" ");
    var [msgIntermediario, setMsgIntermediario] = useState(" ");
    var [msgUsuario, setMsgUsuario] = useState(" ");

    {/* Colores */ }
    const [colorFechaSolicitud, setColorFechaSolicitud] = useState(" ");
    const [colorUsuario, setColorUsuario] = useState(" ");

    //Función final que válida
    var listmsg = [msgFechaSolicitud, msgCiudades, msgUsuario, msgIntermediario];

    function validarCampos() {
        if (validator.isEmpty(msgFechaSolicitud) && validator.isEmpty(msgCiudades) && validator.isEmpty(msgUsuario) /*&&  validator.isEmpty(msgIntermediario)*/) {
            //console.log("todo TRUE#############")
            setInicio(true);
        } else {
            if (!validator.isEmpty(msgFechaSolicitud)) setMsgFechaSolicitud("Seleccione una fecha");
            if (!validator.isEmpty(msgCiudades)) setMsgCiudades("Elija una opción válida");
            //if (!!validator.isEmpty(msgIntermediario)) setMsgIntermediario("Seleccione una respuesta");
            if (!validator.isEmpty(msgUsuario)) setMsgUsuario("Elija una opción válida");
            //console.log("TODO FALSE$$$$$$$$$$$$$$$$$")
            setInicio(false);
        }
    }

    function validarFechaSolicitud(event) {
        const entrada = event.target.value;
        var name = event.target.name;
        var value = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg);
        setMsgFechaSolicitud(result.msg);
        msgFechaSolicitud = result.msg;
        setColorFechaSolicitud(result.color);
        setFechaSolicitud(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validarCiudades(event) {
        const entrada = event.value;
        // const entrada = event.target.value;
        var name = "ciudades";
        var value = event.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg);
        setMsgCiudades(result.msg);
        msgCiudades = result.msg;
        setCiudades(result.data);
        setValidacion(result.validacion);

        handleChangeCombo(name, value);
    }
    function validarIntermediario(event) {
        //console.log("INTERMEDIARIO: ", event.target.value);
        var name = event.target.name;
        const value = event.target.value;
        intermediario = value;
        //setIntermediario(event.target.value);
        msgIntermediario = " ";
        setUserData({ ...userData, ["intermediario"]: value });
        dispatch(listaComboDispositivosEntregaId({ intermediario, ciudades })); //PARA EL COMBO       
        delete userData.z_usuario;
        setUsuario("");
        //if(validarCampos)handleChange(event);

        /*if (value === "Agente" || value === "Broker") {
            document.getElementById("div_z_usuario").style.display = "inline";
            // setMsgIntermediario("Elija una opción válida");
            msgIntermediario = "Elija una opción válida";
            setInicio(false);
        } else {
            document.getElementById("div_z_usuario").style.display = "none";
            // setMsgIntermediario("");
            msgIntermediario = "";
            // if (validator.isEmpty(msgFechaSolicitud) && validator.isEmpty(msgCiudades)) {
            //     setInicio(true);
            // }else{
            //     setInicio(false);
            // }
            
            console.log("PASÉ POR AQUÍIIIIII");
        }*/
    }
    function validarUsuario(event) {
        const entrada = event.value;
        var name = "z_usuario";
        var value = event.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsgUsuario(result.msg);
        msgUsuario = result.msg;
        setColorUsuario(result.color);
        setUsuario(result.data);
        setValidacion(result.validacion);
        handleChangeCombo(name, value);
        //setUserData({ ...userData, ["z_usuario"]: entrada });
        validarCampos();
    }
    /*useEffect(() => {
        dispatch(listaComboDispositivosEntregaId({ intermediario:userData["intermediario"], lugar }));
    }, [dispatch]);*/
    useEffect(() => {
        dispatch(listaComboCiudades({}));
    }, [dispatch]);
    const result = useSelector((state) => state.comboUsuariosList);
    const result1 = useSelector((state) => state.comboCiudadesList);

    const combo_dispositivos = result["combo_usuarios"]
    const combo_ciudades = result1["combo_ciudades"]

    const optionListDisp = [{ value: "-1", label: "Usuarios" }];
    combo_dispositivos?.map((valor) => optionListDisp.push({ value: valor.USUA_CODIGO, label: valor.USUA_NOMBRE }));
    //console.log(optionListDisp)
    const optionListCiud = [{ value: "-1", label: "Ciudades" }];
    combo_ciudades?.map((valor) => optionListCiud.push({ value: valor.BODE_CODIGO, label: valor.BODE_NOMBRE }));
    return <div className='pl-8 flex flex-col'>
        <h2 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">Solicitud de seguros y declaración personal de salud</h2>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">SALUD FLEXIBLE</h1>
        <h3 className=" pl-6 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-1xl pt-3 md:text-2xl dark:text-gray-100">OBSERVACIONES IMPORTANTES</h3>
        <div className="text-sm mt-2">
            <p className="text-justify -pl-2 pr-9">
                "Sírvase llenar este formulario, haga sus declaraciones con toda tranquilidad y franqueza, si tiene alguna enfermedad, manifiéstela de
                forma clara y detallada. La falta de declaración completa y verdadera llevará a una evaluación equivocada de su salud. En todo caso,
                una declaración auténtica nunca será discutida por la Compañía que tomó conocimiento del riesgo aceptado."
            </p>
            <div className="flex flex-row mt-2 mb-1 space-x-9 items-center">
                <div className="basis-3/4 md:w-1/2 mb-5 md:mb-0">
                    <img
                        src={InitialStepSVG}
                        className="rounded-l-xl h-[400px] mx-auto"
                        loading="lazy"
                        height=""
                        width=""
                        alt="music mood"
                    />
                </div>
                <div className="basis-2/4 md:w-1/2 mb-5 md:mb-0">
                    <div className="flex flex-wrap mt-2 mb-6">
                        <div className="w-50 md:w-1/2 mb-5 md:mb-0 pr-4">
                            <Input
                                type="date"
                                color={colorFechaSolicitud}
                                size="regular"
                                name="fecha_solicitud"
                                outline={true}
                                placeholder="Fecha de Solicitud"
                                className=""
                                onChange={validarFechaSolicitud}
                                value={userData["fecha_solicitud"] || ""}
                            /><LeyendaError>{msgFechaSolicitud}</LeyendaError>
                        </div>
                        <div className="w-50 md:w-1/2 mb-5 md:mb-0 pl-4">
                            <Select
                                color={"indigo"}
                                isSearchable={true}
                                outline={true}
                                id="ciudades"
                                name="ciudades"
                                placeholder="Ciudades"
                                onChange={validarCiudades}
                                // value={userData["lugar"] || ""}
                                defaultValue={userData.hasOwnProperty("ciudades") ? userData["ciudades"] : ciudades}
                                options={optionListCiud}
                            /><LeyendaError>{msgCiudades}</LeyendaError>
                            {/* <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                name="lugar"
                                onChange={validarLugar}
                                value={userData["lugar"] || ""}
                            >
                                <option value="-1">Lugar</option>
                                <option value="La Paz">La Paz</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Beni">Beni</option>
                                <option value="Pando">Pando</option>
                                <option value="Cochabamba">Cochabamba</option>
                                <option value="Potosi">Potosí</option>
                                <option value="Oruro">Oruro</option>
                                <option value="Tarija">Tarija</option>
                                <option value="Chuquisaca">Chuquisaca</option>
                            </select><LeyendaError>{msgLugar}</LeyendaError> */}
                        </div>
                    </div>
                    <div className="flex flex-row mt-2 mb-6">
                        <div className="w-full md:w-1/2 mb-5 md:mb-0">
                            <div className="px-4 text-sm">
                                <div className="flex flex-wrap mb-1">
                                    <div className="flex justify-left my-1 mb-4 pl-2 mx-auto">
                                        <label className="inline-flex items-center">
                                            <Input
                                                type="radio"
                                                color={"indigo"}
                                                size="regular"
                                                id="intermediario_agente"
                                                name="intermediario"
                                                className=""
                                                placeholder=""
                                                onChange={validarIntermediario}
                                                value={userData["intermediario_agente"] || "Agente"}
                                                checked={userData.intermediario === "Agente" ? true : false}
                                            />
                                        </label>
                                        <label htmlFor="intermediario_agente" className="inline-flex items-center">
                                            <span className="ml-2">Agente</span>
                                        </label>
                                        <label className="inline-flex items-center pl-20">
                                            <Input
                                                type="radio"
                                                color={"indigo"}
                                                size="regular"
                                                id="intermediario_broker"
                                                name="intermediario"
                                                placeholder=""
                                                className=""
                                                onChange={validarIntermediario}
                                                value={userData["intermediario_broker"] || "Broker"}
                                                checked={userData.intermediario === "Broker" ? true : false}
                                            />
                                        </label>
                                        <label htmlFor="intermediario_broker" className="inline-flex items-center">
                                            <span className="ml-2">Broker</span>
                                        </label>
                                        <label className="inline-flex items-center pl-20">
                                            <Input
                                                type="radio"
                                                color={"indigo"}
                                                size="regular"
                                                id="intermediario_empresa"
                                                name="intermediario"
                                                placeholder=""
                                                className=""
                                                onChange={validarIntermediario}
                                                value={userData["intermediario_empresa"] || "Empresa"}
                                                checked={userData.intermediario === "Empresa" ? true : false}
                                            />
                                        </label>
                                        <label htmlFor="intermediario_empresa" className="inline-flex items-center">
                                            <span className="ml-2">Directo con la Empresa</span>
                                        </label>
                                    </div><LeyendaError>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/*msgIntermediario*/}</LeyendaError>
                                    <div id="div_z_usuario" className="w-full px-2 pl-2 md:w-1/3 mt-3" /*style={{ display: "none" }}*/>
                                        <Select
                                            color={colorUsuario}
                                            isSearchable={true}
                                            outline={true}
                                            id="z_usuario"
                                            name="z_usuario"
                                            placeholder="Usuarios"
                                            onChange={validarUsuario}
                                            defaultValue={userData.hasOwnProperty("z_usuario") ? userData["z_usuario"] : z_usuario}
                                            options={optionListDisp}
                                        /><LeyendaError>{msgUsuario}</LeyendaError>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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