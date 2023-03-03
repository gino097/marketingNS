import { useContext, useState, useRef } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

export default function DatosPersonales() {
    const { userData, setUserData } = useContext(StepperContext);
    const { datos_personales, setDatosPersonales } = useContext(StepperContext);
    if(datos_personales!==true){
        setDatosPersonales(false);
        //console.log("%%%%%%%%%%%%%%%%",datos_personales)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        validarCampos();
    }

    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);
    //setDatosPersonales(validarCampos);
    /************************************************************ CONDICIONES ************************************************************/
    var condicion_nit_1 = "w-full";
    var condicion_nit_2 = "w-full";

    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    /*************** APARTADO 1.1 ***************/
    const [literal_1_1_otros_parentescos, set_literal_1_1_otros_parentescos] = useState(userData["literal_1_1_otros_parentescos"] || "");
    /*************** APARTADO 1.2 ***************/
    const [literal_1_2_nombres, set_literal_1_2_nombres] = useState(userData["literal_1_2_nombres"] || "");
    /*************** APARTADO 1.3 ***************/
    const [literal_1_3_lugar_nacimiento, set_literal_1_3_lugar_nacimiento] = useState(userData["literal_1_3_lugar_nacimiento"] || "");
    /*************** APARTADO 1.4 ***************/
    const [literal_1_4_fecha_nacimiento, set_literal_1_4_fecha_nacimiento] = useState(userData["literal_1_4_fecha_nacimiento"] || "");
    /*************** APARTADO 1.5 ***************/
    const [literal_1_5_edad, set_literal_1_5_edad] = useState(userData["literal_1_5_edad"] || "");
    /*************** APARTADO 1.7 ***************/
    const [literal_1_7_estado_civil, set_literal_1_7_estado_civil] = useState("");
    const [literal_1_7_conyuge, set_literal_1_7_conyuge] = useState(userData["literal_1_4_fecha_nacimiento"] || "");
    /*************** APARTADO 1.8 ***************/
    const [literal_1_8_ocupacion, set_literal_1_8_ocupacion] = useState("");
    /*************** APARTADO 1.9 ***************/
    const [literal_1_9_nacionalidad, set_literal_1_9_nacionalidad] = useState("");
    /*************** APARTADO 1.10 ***************/
    const [literal_1_10_cedula, set_literal_1_10_cedula] = useState("");
    /*************** APARTADO 1.11 ***************/
    const [literal_1_11_expedicion, set_literal_1_11_expedicion] = useState(userData["literal_1_11_expedicion"] || "");
    /*************** APARTADO 1.12 ***************/
    const [literal_1_12_nit, set_literal_1_12_nit] = useState(userData["literal_1_12_nit"] || "");
    /*************** APARTADO 1.13 ***************/
    const [literal_1_13_direccion, set_literal_1_13_direccion] = useState(userData["literal_1_13_direccion"] || "");

    const [literal_2_4_telefono, set_literal_2_4_telefono] = useState(userData["literal_2_4_telefono"] || "");
    
    const [literal_2_5_celular, set_literal_2_5_celular] = useState(userData["literal_2_5_celular"] || "");

    const [literal_2_6_email, set_literal_2_6_email] = useState(userData["literal_2_6_email"] || "");

    {/* Mensajes */ }
    /*************** APARTADO 1.1 ***************/
    var [msg_literal_1_1, setMsg_literal_1_1] = useState(" ");
    var [msg_literal_1_1_parentesco, setMsg_literal_1_1_parentesco] = useState(" ");
    var [msg_literal_1_1_otros_parentescos, setMsg_literal_1_1_otros_parentescos] = useState(" ");
    /*************** APARTADO 1.2 ***************/
    var [msg_literal_1_2_nombres, setMsg_literal_1_2_nombres] = useState(" ");
    /*************** APARTADO 1.3 ***************/
    var [msg_literal_1_3_lugar_nacimiento, setMsg_literal_1_3_lugar_nacimiento] = useState(" ");
    /*************** APARTADO 1.4 ***************/
    var [msg_literal_1_4_fecha_nacimiento, setMsg_literal_1_4_fecha_nacimiento] = useState(" ");
    /*************** APARTADO 1.6 ***************/
    var [msg_literal_1_6_genero, setMsg_literal_1_6_genero] = useState(" ");
    /*************** APARTADO 1.7 ***************/
    var [msg_literal_1_7_estado_civil, setMsg_literal_1_7_estado_civil] = useState(" ");
    var [msg_literal_1_7_conyuge, setMsg_literal_1_7_conyuge] = useState(" ");
    /*************** APARTADO 1.8 ***************/
    var [msg_literal_1_8_ocupacion, setMsg_literal_1_8_ocupacion] = useState(" ");
    /*************** APARTADO 1.9 ***************/
    var [msg_literal_1_9_nacionalidad, setMsg_literal_1_9_nacionalidad] = useState(" ");
    /*************** APARTADO 1.10 ***************/
    var [msg_literal_1_10_cedula, setMsg_literal_1_10_cedula] = useState(" ");
    /*************** APARTADO 1.11 ***************/
    var [msg_literal_1_11_expedicion, setMsg_literal_1_11_expedicion] = useState(" ");
    /*************** APARTADO 1.12 ***************/
    var [msg_literal_1_12_nit, setMsg_literal_1_12_nit] = useState(" ");
    /*************** APARTADO 1.13 ***************/
    var [msg_literal_1_13_direccion, setMsg_literal_1_13_direccion] = useState(" ");

    var [msg_literal_2_4_telefono, setMsg_literal_2_4_telefono] = useState(" ");
    
    var [msg_literal_2_5_celular, setMsg_literal_2_5_celular] = useState(" ");

    var [msg_literal_2_6_email, setMsg_literal_2_6_email] = useState(" ");

    {/* Colores */ }
    /*************** APARTADO 1.1 ***************/
    const [color_literal_1_1_otros_parentescos, setColor_literal_1_1_otros_parentescos] = useState("indigo");
    /*************** APARTADO 1.2 ***************/
    const [color_literal_1_2_nombres, setColor_literal_1_2_nombres] = useState("indigo");
    /*************** APARTADO 1.3 ***************/
    const [color_literal_1_3_lugar_nacimiento, setColor_literal_1_3_lugar_nacimiento] = useState("indigo");
    /*************** APARTADO 1.4 ***************/
    const [color_literal_1_4_fecha_nacimiento, setColor_literal_1_4_fecha_nacimiento] = useState("indigo");
    /*************** APARTADO 1.7 ***************/
    const [color_literal_1_7_conyuge, setColor_literal_1_7_conyuge] = useState("indigo");
    /*************** APARTADO 1.10 ***************/
    const [color_literal_1_10_cedula, setColor_literal_1_10_cedula] = useState("indigo");
    /*************** APARTADO 1.11 ***************/
    const [color_literal_1_11_expedicion, setColor_literal_1_11_expedicion] = useState("indigo");
    /*************** APARTADO 1.12 ***************/
    const [color_literal_1_12_nit, setColor_literal_1_12_nit] = useState("indigo");
    /*************** APARTADO 1.13 ***************/
    const [color_literal_1_13_direccion, setColor_literal_1_13_direccion] = useState("indigo");

    const [color_literal_2_4_telefono, setColor_literal_2_4_telefono] = useState("indigo");
    
    const [color_literal_2_5_celular, setColor_literal_2_5_celular] = useState("indigo");

    const [color_literal_2_6_email, setColor_literal_2_6_email] = useState("indigo");

    //Función final que válida  
    const listmsg = [msg_literal_1_2_nombres, msg_literal_1_3_lugar_nacimiento, msg_literal_1_4_fecha_nacimiento, msg_literal_1_7_estado_civil, msg_literal_1_8_ocupacion,
        msg_literal_1_9_nacionalidad, msg_literal_1_11_expedicion, msg_literal_1_12_nit, msg_literal_1_13_direccion,msg_literal_2_4_telefono,
        msg_literal_2_5_celular, msg_literal_2_6_email];
    function validarCampos() {
        //console.log(listmsg)
        if (userData.hasOwnProperty('literal_1_1') && validator.isEmpty(msg_literal_1_2_nombres) && validator.isEmpty(msg_literal_1_3_lugar_nacimiento) &&
            validator.isEmpty(msg_literal_1_4_fecha_nacimiento) && userData.hasOwnProperty('literal_1_6_genero') &&
            validator.isEmpty(msg_literal_1_7_estado_civil) && validator.isEmpty(msg_literal_1_8_ocupacion) && validator.isEmpty(msg_literal_1_9_nacionalidad) &&
            validator.isEmpty(msg_literal_1_11_expedicion) && validator.isEmpty(msg_literal_1_13_direccion)
            && validator.isEmpty(msg_literal_2_4_telefono) && validator.isEmpty(msg_literal_2_5_celular) && validator.isEmpty(msg_literal_2_6_email)) {
            if (userData.literal_1_7_estado_civil === "Casado") {
                if (validator.isEmpty(msg_literal_1_7_conyuge)) {
                    setDatosPersonales(true)
                    //return true;
                } else {
                    setDatosPersonales(false);
                    //return false;
                }
            }
            /*if(userData.literal_1_1 === "Tomador"){
                if(validator.isEmpty(msg_literal_2_4_telefono) && validator.isEmpty(msg_literal_2_5_celular) && validator.isEmpty(msg_literal_2_6_email)){
                    setDatosPersonales(true);
                }
                else{
                    setDatosPersonales(false);
                }
            }*/
            if (userData.literal_1_1 === "Dependiente asegurado") {
                if (!userData.hasOwnProperty('literal_1_1_parentesco') || userData.literal_1_1_parentesco === "") {
                    setDatosPersonales(false);
                    //return false;
                } else {
                    if ((userData.literal_1_1_parentesco === "Otros" && !validator.isEmpty(msg_literal_1_1_otros_parentescos)) ||
                        (userData.literal_1_1_parentesco === "Otros" && userData.literal_1_1_otros_parentescos === "")) {
                            setDatosPersonales(false);
                        //return false;
                    } else {
                        setDatosPersonales(true)
                        //return true;
                    }
                }
            } else {
                if (validator.isEmpty(msg_literal_1_12_nit)) {
                    setDatosPersonales(true);
                    //return true;
                } else {
                    setDatosPersonales(false);
                    //return false;
                }
            }

        } else {
            /*if (!userData.hasOwnProperty('literal_1_1')) setMsg_literal_1_1("Seleccione una respuesta");
            if ((userData.literal_1_1 === "Dependiente asegurado") && !userData.hasOwnProperty('literal_1_1_parentesco')) setMsg_literal_1_1_parentesco("Seleccione una respuesta");
            if (userData.hasOwnProperty('literal_1_1_parentesco') && !validator.isEmpty(msg_literal_1_1_otros_parentescos)) setMsg_literal_1_1_otros_parentescos("Elija una opción válida");
            if (!validator.isEmpty(msg_literal_1_2_nombres)) setMsg_literal_1_2_nombres("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_1_3_lugar_nacimiento)) setMsg_literal_1_3_lugar_nacimiento("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_1_4_fecha_nacimiento)) setMsg_literal_1_4_fecha_nacimiento("Seleccione una fecha");
            if (!userData.hasOwnProperty('literal_1_6_genero')) setMsg_literal_1_6_genero("Seleccione una respuesta");
            if (userData.literal_1_7_estado_civil === "Casado" && !validator.isEmpty(msg_literal_1_7_conyuge)) setMsg_literal_1_7_conyuge("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_1_7_estado_civil)) setMsg_literal_1_7_estado_civil("Elija una opción válida");
            if (!validator.isEmpty(msg_literal_1_8_ocupacion)) setMsg_literal_1_8_ocupacion("Elija una opción válida");
            if (!validator.isEmpty(msg_literal_1_9_nacionalidad)) setMsg_literal_1_9_nacionalidad("Elija una opción válida");
            if (!validator.isEmpty(msg_literal_1_10_cedula)) setMsg_literal_1_10_cedula("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_1_11_expedicion)) setMsg_literal_1_11_expedicion("Campo inválido/vacío");
            if (userData.literal_1_1 !== "Dependiente asegurado" && !validator.isEmpty(msg_literal_1_12_nit)) setMsg_literal_1_12_nit("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_1_13_direccion)) setMsg_literal_1_13_direccion("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_4_telefono)) setMsg_literal_2_4_telefono("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_5_celular)) setMsg_literal_2_5_celular("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_2_6_email)) setMsg_literal_2_6_email("Campo inválido/vacío");*/
            setDatosPersonales(false);
            //return false;
        }
    }

    /*************** APARTADO 1.1 ***************/
    function validar_literal_1_1(event) {
        msg_literal_1_1=" ";
        setMsg_literal_1_1(" ");

        handleChange(event);
    }
    function validar_literal_1_1_parentescos(event) {
        msg_literal_1_1_parentesco=" ";
        setMsg_literal_1_1_parentesco(" ");

        handleChange(event);
    }
    function validar_literal_1_1_otros_parentescos(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_1_otros_parentescos(result.msg);
        msg_literal_1_1_otros_parentescos=result.msg;
        setColor_literal_1_1_otros_parentescos(result.color);
        set_literal_1_1_otros_parentescos(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.2 ***************/
    function validar_literal_1_2_nombres(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarSoloLetras(entrada, listmsg)
        setMsg_literal_1_2_nombres(result.msg);
        msg_literal_1_2_nombres=result.msg;
        setColor_literal_1_2_nombres(result.color);
        set_literal_1_2_nombres(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.3 ***************/
    function validar_literal_1_3_lugar_nacimiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarSoloLetras(entrada, listmsg)
        setMsg_literal_1_3_lugar_nacimiento(result.msg);
        msg_literal_1_3_lugar_nacimiento=result.msg;
        setColor_literal_1_3_lugar_nacimiento(result.color);
        set_literal_1_3_lugar_nacimiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.4 ***************/
    function validar_literal_1_4_fecha_nacimiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg);
        setMsg_literal_1_4_fecha_nacimiento(result.msg);
        msg_literal_1_4_fecha_nacimiento=result.msg;
        setColor_literal_1_4_fecha_nacimiento(result.color);
        set_literal_1_4_fecha_nacimiento(result.data);
        setValidacion(result.validacion);

        obtener_edad(event);
        handleChange(event);
    }
    /*************** APARTADO 1.5 ***************/
    function validar_literal_1_5_edad(event) {
        const entrada = event.target.value;
        //console.log("here " + event);

        handleChange(event);
    }
    /*************** APARTADO 1.6 ***************/
    function validar_literal_1_6_genero(event) {
        msg_literal_1_6_genero=" ";
        setMsg_literal_1_6_genero(" ");

        handleChange(event);
    }
    /*************** APARTADO 1.7 ***************/
    function validar_literal_1_7_estado_civil(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_7_estado_civil(result.msg);
        msg_literal_1_7_estado_civil=result.msg;
        set_literal_1_7_estado_civil(result.data);
        setValidacion(result.validacion);

        handleChange(event);
        habilitar_literal_1_7_conyuge(event);
    }
    function validar_literal_1_7_conyuge(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarSoloLetras(entrada, listmsg)
        setMsg_literal_1_7_conyuge(result.msg);
        msg_literal_1_7_conyuge=result.msg;
        setColor_literal_1_7_conyuge(result.color);
        set_literal_1_7_conyuge(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.8 ***************/
    function validar_literal_1_8_ocupacion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_8_ocupacion(result.msg);
        msg_literal_1_8_ocupacion=result.msg;
        set_literal_1_8_ocupacion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.9 ***************/
    function validar_literal_1_9_nacionalidad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_9_nacionalidad(result.msg);
        msg_literal_1_9_nacionalidad=result.msg;
        set_literal_1_9_nacionalidad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.10 ***************/
    function validar_literal_1_10_cedula(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_1_10_cedula(result.msg);
        msg_literal_1_10_cedula=result.msg;
        setColor_literal_1_10_cedula(result.color);
        set_literal_1_10_cedula(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.11 ***************/
    
    function validar_literal_1_11_expedicion(event) {
        /*const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_7_estado_civil(result.msg);
        msg_literal_1_7_estado_civil=result.msg;
        set_literal_1_7_estado_civil(result.data);
        setValidacion(result.validacion);

        handleChange(event);
        habilitar_literal_1_7_conyuge(event);*/

        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_1_11_expedicion(result.msg);
        msg_literal_1_11_expedicion=result.msg;
        setColor_literal_1_11_expedicion(result.color);
        set_literal_1_11_expedicion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.12 ***************/
    function validar_literal_1_12_nit(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg)
        setMsg_literal_1_12_nit(result.msg);
        msg_literal_1_12_nit=result.msg;
        setColor_literal_1_12_nit(result.color);
        set_literal_1_12_nit(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    /*************** APARTADO 1.13 ***************/
    function validar_literal_1_13_direccion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacioMayus(entrada, listmsg)
        setMsg_literal_1_13_direccion(result.msg);
        msg_literal_1_13_direccion=result.msg;
        setColor_literal_1_13_direccion(result.color);
        set_literal_1_13_direccion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /************************************************************ FUNCIONES ************************************************************/
    function calcular_edad(fecha_nacimiento) {
        let hoy = new Date();
        let fechaNacimiento = new Date(fecha_nacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    /*************** APARTADO 1.1 ***************/
    function habilitar_literal_1_1(event) {
        const entrada = event.target.value;
        if(entrada==="Tomador"){
            document.getElementById("div_literal_2_4_telefono").style.display = "inline";
            document.getElementById("div_literal_2_5_celular").style.display = "inline";
            document.getElementById("div_literal_2_6_email").style.display = "inline";
            set_literal_2_4_telefono(userData["literal_2_4_telefono"]||"");
            set_literal_2_5_celular(userData["literal_2_5_celular"]||"");
            set_literal_2_6_email(userData["literal_2_6_email"]||"");
            msg_literal_2_4_telefono=" ";
            msg_literal_2_5_celular=" ";
            msg_literal_2_6_email=" ";
        }
        if(entrada==="Titular asegurado"){
            document.getElementById("div_literal_2_4_telefono").style.display = "none";
            document.getElementById("div_literal_2_5_celular").style.display = "none";
            document.getElementById("div_literal_2_6_email").style.display = "none";
            delete userData.literal_2_4_telefono;
            delete userData.literal_2_5_celular;
            delete userData.literal_2_6_email;
            setMsg_literal_2_4_telefono("");
            msg_literal_2_4_telefono="";
            setMsg_literal_2_5_celular("");
            msg_literal_2_5_celular="";
            setMsg_literal_2_6_email("");
            msg_literal_2_6_email="";
        }
        if (entrada === "Dependiente asegurado") {
            document.getElementById("div_1_1_parentescos").style.display = "inline";
            document.getElementById("div_literal_2_4_telefono").style.display = "none";
            document.getElementById("div_literal_2_5_celular").style.display = "none";
            document.getElementById("div_literal_2_6_email").style.display = "none";
            delete userData.literal_2_4_telefono;
            delete userData.literal_2_5_celular;
            delete userData.literal_2_6_email;
            setMsg_literal_2_4_telefono("");
            msg_literal_2_4_telefono="";
            setMsg_literal_2_5_celular("");
            msg_literal_2_5_celular="";
            setMsg_literal_2_6_email("");
            msg_literal_2_6_email="";
        } else {
            document.getElementById("div_1_1_parentescos").style.display = "none";
            document.getElementById("label_1_1_otros_parentescos").style.display = "none";
            document.getElementById("div_1_1_leyenda_otros_parentescos").style.display = "none";
            document.getElementById("literal_1_1_otros_parentescos").value = "-1";
            if (userData.hasOwnProperty('literal_1_1_parentesco')) userData.literal_1_1_parentesco = "";
            if (userData.hasOwnProperty('literal_1_1_otros_parentescos')) userData.literal_1_1_otros_parentescos = "";
        }
        validar_literal_1_1(event);
        habilitar_literal_1_12(event);
    }
    function habilitar_literal_1_1_otros(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_1_1_otros_parentescos").style.display = "inline";
            document.getElementById("div_1_1_leyenda_otros_parentescos").style.display = "flex";
        } else {
            document.getElementById("label_1_1_otros_parentescos").style.display = "none";
            document.getElementById("div_1_1_leyenda_otros_parentescos").style.display = "none";
            document.getElementById("literal_1_1_otros_parentescos").value = "-1";
            if (userData.hasOwnProperty('literal_1_1_otros_parentescos')) userData.literal_1_1_otros_parentescos = "";
        }
        validar_literal_1_1_parentescos(event);
    }
    /*************** APARTADO 1.7 ***************/
    function habilitar_literal_1_7_conyuge(event) {
        const entrada = event.target.value;
        if (entrada === "Casado") {
            document.getElementById("div_literal_1_7_conyuge").style.display = "inline";
        } else {
            document.getElementById("div_literal_1_7_conyuge").style.display = "none";
            document.getElementById("literal_1_7_conyuge").value = "";
            if (userData.hasOwnProperty('literal_1_7_conyuge')) userData.literal_1_7_conyuge = "";
        }
        validar_literal_1_1_parentescos(event);
    }
    function obtener_edad(event) {
        const entrada = event.target.value;

        var edad = calcular_edad(entrada);

        if (edad >= 0) set_literal_1_5_edad(edad);
    }
    /*************** APARTADO 1.12 ***************/
    function habilitar_literal_1_12(event) {
        const entrada = event.target.value;
        if (entrada === "Dependiente asegurado") {
            document.getElementById("div_literal_1_12_nit").style.display = "none";
            document.getElementById("div_titulo_literal_1_12_nit").style.display = "none";
            condicion_nit_1 = "w-full";
            condicion_nit_2 = "w-full";
        } else {
            document.getElementById("div_literal_1_12_nit").style.display = "inline";
            document.getElementById("div_titulo_literal_1_12_nit").style.display = "inline";
            document.getElementById("literal_1_12_nit").value = "";
            condicion_nit_1 = "";
            condicion_nit_2 = "";

            if (userData.hasOwnProperty('literal_1_12_nit')) userData.literal_1_12_nit = "";
        }
    }

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

    return <div className='pl-0 flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">DATOS PERSONALES</h1>
        <input type="hidden" id="literal_1_7_conyuge" name="literal_1_7_conyuge" value="" />
        <input type="hidden" id="literal_1_12_nit" name="literal_1_12_nit" value="" />
        <div class='flex flex-wrap'>

            {/* SECCIÓN 1.1 */}
            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                
            <p className="w-3/4 mt-3 text-sm text-justify">
                <b>Usted será el(la)</b>
            </p>
            
            <div className="flex justify-left my-1 mb-4 pl-2 mx-auto flex-wrap">

                    <div className="flex flex-row pr-5"> 
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_tomador"
                                name="literal_1_1"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1}
                                value={userData["literal_1_1_tomador"] || "Tomador"}
                                checked={userData.literal_1_1 === "Tomador" ? true : false}
                            />
                        </label>
                        <label htmlFor="literal_1_1_tomador" className="inline-flex items-center">
                            <span className="ml-2">Soy Contratante / Titular</span>
                        </label>
                     </div>

                     <div className="flex flex-row pr-5"> 
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_titular"
                                name="literal_1_1"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1}
                                value={userData["literal_1_1_titular"] || "Titular asegurado"}
                                checked={userData.literal_1_1 === "Titular asegurado" ? true : false}
                            />
                            
                        </label>
                        <label htmlFor="literal_1_1_titular" className="inline-flex items-center">
                            <span className="ml-2">Soy Titular</span>
                        </label>
                        </div>

                        <div className="flex flex-row pr-5"> 
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_dependiente"
                                name="literal_1_1"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1}
                                value={userData["literal_1_1_dependiente"] || "Dependiente asegurado"}
                                checked={userData.literal_1_1 === "Dependiente asegurado" ? true : false}
                            />
                            
                        </label>
                        <label htmlFor="literal_1_1_dependiente" className="inline-flex items-center">
                            <span className="ml-2">Soy Dependiente Asegurado</span>
                        </label>
                        </div>
                    
                </div>{/*<LeyendaError>{msg_literal_1_1}</LeyendaError>*/}
                <div id="div_1_1_parentescos" className="w-full md:w-1/2 mb-6 md:mb-0" style={{ display: "none" }}>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                        ¿Cuál es el parentesco familiar que lo une con el titular asegurado y/o dependiente asegurado?
                    </label>
                    <div className="flex justify-left my-1 mb-4 pl-2 flex-wrap">
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_parentesco_conyuge"
                                name="literal_1_1_parentesco"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1_otros}
                                value={userData["literal_1_1_parentesco_conyuge"] || "Conyuge"}
                                checked={userData.literal_1_1_parentesco === "Conyuge" ? true : false}
                            />
                        <label htmlFor="literal_1_1_parentesco_conyuge" className="inline-flex items-center">
                            <span className="ml-4">Cónyuge</span>
                        </label>
                        </label>
                        
                        <label className="inline-flex items-center pl-5">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_parentesco_hijos"
                                name="literal_1_1_parentesco"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1_otros}
                                value={userData["literal_1_1_parentesco_hijos"] || "Hijo"}
                                checked={userData.literal_1_1_parentesco === "Hijo" ? true : false}
                            />
                        <label htmlFor="literal_1_1_parentesco_hijos" className="inline-flex items-center">
                            <span className="ml-2">Hijo(a)</span>
                        </label>
                        </label>
                        
                        <label className="inline-flex items-center pl-5">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_1_parentesco_otros"
                                name="literal_1_1_parentesco"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_1_1_otros}
                                value={userData["literal_1_1_parentesco_otros"] || "Otros"}
                                checked={userData.literal_1_1_parentesco === "Otros" ? true : false}
                            />
                        <label htmlFor="literal_1_1_parentesco_otros" className="inline-flex items-center">
                            <span className="ml-2">Otros</span>
                        </label>
                        </label>
                        
                        <label id="label_1_1_otros_parentescos" className="inline-flex items-center pl-10 pt-2" style={{ display: "none" }}>
                            <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                id="literal_1_1_otros_parentescos"
                                name="literal_1_1_otros_parentescos"
                                onChange={validar_literal_1_1_otros_parentescos}
                                value={userData["literal_1_1_otros_parentescos"] || ""}
                            >
                                <option value="-1">Parentesco</option>
                                <option value="Madre">Madre</option>
                                <option value="Padre">Padre</option>
                                <option value="Hermanos">Hermana(o)</option>
                                <option value="Suegros">Suegra(o)</option>
                                <option value="Nuera">Nuera</option>
                                <option value="Yerno">Yerno</option>
                                <option value="Abuelos">Abuela(o)</option>
                                <option value="Nietos">Nieta(o)</option>
                                <option value="Cuñados">Cuñada(o)</option>
                            </select>
                        </label>
                    </div><LeyendaError>{msg_literal_1_1_parentesco}</LeyendaError>
                    <div id="div_1_1_leyenda_otros_parentescos" className="flex justify-center my-1 -mt-4 mb-4 pr-4" style={{ display: "none" }}>
                        <LeyendaError>{msg_literal_1_1_otros_parentescos}</LeyendaError>
                    </div>
                </div>
            
            </div>
            {/* SECCIÓN 1.2 - 1.3 */}
            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">

            </div>
            
                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 mr-10">
                    <p className="text-sm text-justify pl-1">
                        <b>Nombres y Apellidos</b>
                    </p>
                    
                        <Input
                            type="text"
                            color={color_literal_1_2_nombres}
                            size="regular"
                            name="literal_1_2_nombres"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={200}
                            onChange={validar_literal_1_2_nombres}
                            {...userData.hasOwnProperty('literal_1_2_nombres') ? userData["literal_1_2_nombres"] = literal_1_2_nombres : ""}
                            value={literal_1_2_nombres}
                        /><LeyendaError>{msg_literal_1_2_nombres}</LeyendaError>
                    
                    </div>

                    
                    <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6">
                    <p className="text-sm text-justify">
                        <b>Lugar de Nacimiento</b>
                    </p>
                
                    
                        <Input
                            type="text"
                            color={color_literal_1_3_lugar_nacimiento}
                            size="regular"
                            name="literal_1_3_lugar_nacimiento"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={200}
                            onChange={validar_literal_1_3_lugar_nacimiento}
                            {...userData.hasOwnProperty('literal_1_3_lugar_nacimiento') ? userData["literal_1_3_lugar_nacimiento"] = literal_1_3_lugar_nacimiento : ""}
                            value={literal_1_3_lugar_nacimiento}
                        /><LeyendaError>{msg_literal_1_3_lugar_nacimiento}</LeyendaError>
                    
                    </div>
                
                
            
            {/* SECCIÓN 1.4 - 1.5 - 1.6 */}
            
            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 mr-10">
                    <p className="text-sm text-justify">
                        <b>Fecha de Nacimiento</b>
                    </p>

                        <Input
                            type="date"
                            color={color_literal_1_4_fecha_nacimiento}
                            size="regular"
                            name="literal_1_4_fecha_nacimiento"
                            outline={true}
                            placeholder=""
                            className=""
                            //maxLength={20}
                            onChange={validar_literal_1_4_fecha_nacimiento}
                            value={userData["literal_1_4_fecha_nacimiento"] || ""}
                        /><LeyendaError>{msg_literal_1_4_fecha_nacimiento}</LeyendaError>
                    
                    {/* TODO REVISAR QUE PASE LA EDAD */}
                </div>
                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6">
                    
                    <p className="text-sm text-justify">
                        <b>Edad</b>
                    </p>
                    
                    
                        <Input
                            type="text"
                            color={"indigo"}
                            size="regular"
                            disabled={true}
                            outline={true}
                            id="literal_1_5_edad"
                            name="literal_1_5_edad"
                            placeholder=""
                            className=""
                            maxLength={20}
                            onChange={handleChange}
                            // value={userData["literal_1_5_edad"] || ""}
                            // {...userData.hasOwnProperty('literal_1_5_edad') ? userData["literal_1_5_edad"] = literal_1_5_edad : ""}
                            value={literal_1_5_edad}
                        />
                    
                </div>
                <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                <p className="text-sm text-justify">
                        <b>Género</b>
                </p>
                <div className="flex my-1 mb-4 pl-2 flex-wrap pr-5">
                    

                    <div className="flex flex-row pr-5"> 
                
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_6_genero_femenino"
                                name="literal_1_6_genero"
                                className=""
                                placeholder=""
                                onChange={validar_literal_1_6_genero}
                                value={userData["literal_1_6_genero_femenino"] || "F"}
                                checked={userData.literal_1_6_genero === "F" ? true : false}
                            />
                        
                        </label>{/*<LeyendaError>{msg_literal_1_6_genero}</LeyendaError>*/}

                        <label htmlFor="literal_1_6_genero_femenino" className="inline-flex items-center">
                        <span className="ml-2">Femenino</span>
                        </label>
                    </div>
                    <div className="flex flex-row"> 
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_1_6_genero_masculino"
                                name="literal_1_6_genero"
                                className=""
                                placeholder=""
                                onChange={validar_literal_1_6_genero}
                                value={userData["literal_1_6_genero_masculino"] || "M"}
                                checked={userData.literal_1_6_genero === "M" ? true : false}
                            />
                            
                        </label>
                        <label htmlFor="literal_1_6_genero_masculino" className="inline-flex items-center">
                        <span className="ml-2">Masculino</span>
                        </label>
                    </div>
                    
                </div>
            </div>
            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex pl-5">

            </div>
            {/* SECCIÓN 1.7 - 1.8 - 1.9 - 1.10 */}
            
            <div className="flex basis-2/4 my-1 mb-4 flex-wrap pr-5">
                <div className="flex flex-wrap -space-x-1 mt-3 pr-2">
                    <p className="text-sm text-justify">
                        <b>Estado Civil</b>
                    </p>
                    
                        <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                            bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none pl-2"
                            name="literal_1_7_estado_civil"
                            onChange={validar_literal_1_7_estado_civil}
                            value={userData["literal_1_7_estado_civil"] || ""}
                        >
                            <option value="-1">Estado Civil</option>
                            <option value="Casado">Casado(a)</option>
                            <option value="Conviviente">Conviviente</option>
                            <option value="Divorciado">Divorciado(a)</option>
                            <option value="Soltero">Soltero(a)</option>
                            <option value="Viudo">Viudo(a)</option>
                        </select><LeyendaError>{msg_literal_1_7_estado_civil}</LeyendaError>
                    
                </div>
                <div className="flex flex-col -space-x-1 pr-2 mt-3">
                
                    <p className="text-sm text-justify">
                        <b>Ocupación</b>
                    </p>
                    
                        <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                            bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                            name="literal_1_8_ocupacion"
                            onChange={validar_literal_1_8_ocupacion}
                            value={userData["literal_1_8_ocupacion"] || ""}
                        >
                            <option value="-1">Ocupación</option>
                            <option value="Dependiente">Dependiente</option>
                            <option value="Independiente">Independiente</option>
                        </select><LeyendaError>{msg_literal_1_8_ocupacion}</LeyendaError>
                    
                
                </div>
                <div className="flex flex-col -space-x-1 mt-3 pr-2">
                
                    <p className="text-sm text-justify ml-0">
                        <b>Nacionalidad</b>
                    </p>
                   
                        <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                            bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                            name="literal_1_9_nacionalidad"
                            onChange={validar_literal_1_9_nacionalidad}
                            value={userData["literal_1_9_nacionalidad"] || ""}
                        >
                            <option value="-1">Nacionalidad</option>
                            <option value="Boliviana">Boliviana</option>
                            <option value="Extranjera">Extranjera</option>
                        </select><LeyendaError>{msg_literal_1_9_nacionalidad}</LeyendaError>
                   
               
                </div>
                <div className="flex flex-col -space-x-1 mt-3">

                
                    <p className="text-sm text-justify">
                        <b>Cédula de Identidad</b>
                    </p>
                    
                        <Input
                            type="text"
                            color={color_literal_1_10_cedula}
                            size="regular"
                            name="literal_1_10_cedula"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={13}
                            onChange={validar_literal_1_10_cedula}
                            value={literal_1_10_cedula}                            
                        /><LeyendaError>{msg_literal_1_10_cedula}</LeyendaError>
                    
                    
                </div>
            
                </div>
                
            <div id="div_literal_1_7_conyuge" style={{ display: "none" }} className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 col-flex">
                <div className="flex flex-col -space-x-1 mt-3">
                    <div>
                        <p className="text-sm text-justify">
                            <b>Nombre del Cónyuge</b>
                        </p>
                        
                            <Input
                                type="text"
                                color={color_literal_1_7_conyuge}
                                size="regular"
                                name="literal_1_7_conyuge"
                                outline={true}
                                placeholder=""
                                className=""
                                maxLength={100}
                                onChange={validar_literal_1_7_conyuge}
                                {...userData.hasOwnProperty('literal_1_7_conyuge') ? userData["literal_1_7_conyuge"] = literal_1_7_conyuge : ""}
                                value={literal_1_7_conyuge}
                            />
                            <LeyendaError>{msg_literal_1_7_conyuge}</LeyendaError>
                        
                    </div>
                </div>
                
            </div>
            {/* SECCIÓN 1.11 - 1.12 - 1.13 */}

            <div class='flex flex-col w-full'>
            

            <div className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 mr-10">
                    <p className="text-sm text-justify">
                        <b>Expedida en</b>
                    </p>
                    
                    <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                            bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                            name="literal_1_11_expedicion"
                            onChange={validar_literal_1_11_expedicion}
                            value={literal_1_11_expedicion}
                        >
                            <option value="-1" label='Lugar de expedición'/>
                            <option value="LP" label='LP'/>
                            <option value="CB" label='CB'/>
                            <option value="SC" label='SC'/>
                            <option value="CH" label='CH'/>
                            <option value="PO" label='PO'/>
                            <option value="TJ" label='TJ'/>
                            <option value="BN" label='BN'/>
                            <option value="OR" label='OR'/>
                            <option value="PA" label='PA'/>
                            <option value="SN" label='SN'/>
                        </select><LeyendaError>{msg_literal_1_11_expedicion}</LeyendaError>
                        {/*<Input
                            type="text"
                            color={color_literal_1_11_expedicion}
                            size="regular"
                            name="literal_1_11_expedicion"
                            outline={true}
                            placeholder="Expedición de la Cédula"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_1_11_expedicion}
                            {...userData.hasOwnProperty('literal_1_11_expedicion') ? userData["literal_1_11_expedicion"] = literal_1_11_expedicion : ""}
                            value={literal_1_11_expedicion}
                        /><LeyendaError>{msg_literal_1_11_expedicion}</LeyendaError>*/}
                    
                    <div id="div_titulo_literal_1_12_nit" className="basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 pl-3" style={{ display: "none" }}>
                    <p className="text-sm text-justify">
                        <b>N.I.T</b>
                    </p>
                    <div id="div_literal_1_12_nit" className="basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6 pr-2" style={{ display: "none" }}>
                        <Input
                            type="text"
                            color={color_literal_1_12_nit}
                            size="regular"
                            name="literal_1_12_nit"
                            outline={true}
                            placeholder="N.I.T"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_1_12_nit}
                            value={literal_1_12_nit}
                        /><LeyendaError>{msg_literal_1_12_nit}</LeyendaError>
                    </div>
                </div>
                </div>


                <div className={`basis-2/4 md:w-1/2 sm:-ml-3 md:-ml-6 ${condicion_nit_1}`}>
                    <p className="text-sm text-justify">
                        <b>Dirección de Residencia Habitual o Domicilio Legal</b>
                    </p>
                    <div className={`basis-2/4 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6 pl-6 ${condicion_nit_2}`}>
                        <Input
                            type="text"
                            color={color_literal_1_13_direccion}
                            size="regular"
                            name="literal_1_13_direccion"
                            outline={true}
                            placeholder=""
                            className=""
                            maxLength={300}
                            onChange={validar_literal_1_13_direccion}
                            {...userData.hasOwnProperty('literal_1_13_direccion') ? userData["literal_1_13_direccion"] = literal_1_13_direccion : ""}
                            value={literal_1_13_direccion}
                        /><LeyendaError>{msg_literal_1_13_direccion}</LeyendaError>
                    </div>
                </div> 

                

                <div  className="flex flex-col md:flex-row space-x-2 mt-3">
                <div id="div_literal_2_4_telefono" className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pr-2" style={{ display: "none" }}>
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
                <div id="div_literal_2_5_celular" className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6 pr-2" style={{ display: "none" }}>
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
                <div id="div_literal_2_6_email" className="basis-1/3 md:w-1/2 sm:-ml-3 md:-ml-6" style={{ display: "none" }}>
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