import React, { useEffect, Fragment, useRef, useState, useLayoutEffect } from "react";
import CreateDeviceSVG from "../../../assets/recursos_proyecto/unDraw/my_password.svg";
import Input from "@material-tailwind/react/Input";
import {
  updateClave  
} from "../../../actions/seguridad/usuarioActions";
import Button from "@material-tailwind/react/Button";
import Alert from "../../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { InputCambiosColor, LeyendaError, MensajeErrorForm } from "../../../components/form/cssElementsForm"
import validator from 'validator';


const Form_CambiarClave = () => {
  const objvalidar = require("../../../utils/Validator");
  const dispatch = useDispatch();
  
  const updateContra = (credenciales) => dispatch(updateClave(credenciales));
  const [clave_anterior, setClaveAnterior] = useState("");
  const [clave, setClave] = useState("");
  const [validar_clave, setValidarClave] = useState("");
  const [validacion, setValidacion] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //PARA EL COMBO
  const result = useSelector((state) => state.sucursalesList);
  const sucursales = result["sucursales"]

  const inputClaveAnterior = useRef(null);
  const inputClave = useRef(null);
  const inputValidarClave = useRef(null);

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = async () => {
    const claveUpdated = {
      id: userInfo.id,
      clave_anterior: clave_anterior,
      clave: clave,
      validar_clave: validar_clave,      
    };
    updateContra(claveUpdated);

    setClaveAnterior("");
    setClave("");
    setValidarClave("");
    
  };
  const [msgClave, setMsgClave]=useState(" ");
  const [msgRClave, setMsgRClave]=useState(" ");

  const [colorClave, setColorClave]=useState("indigo");
  const [colorRClave, setColorRClave]=useState("indigo");
  const listmsg = [msgClave, msgRClave];
  function validarCampos() {
    if (validator.isEmpty(msgClave) && validator.isEmpty(msgRClave)) {
      return true
    } else {
      if (!validator.isEmpty(msgClave)) setMsgClave("Campo invalido/vacio");
      if (!validator.isEmpty(msgRClave)) setMsgRClave("Campo invalido/vacio");
      return false;
    }
  }
  function validarClave(event) {
    var entrada = event.target.value;
    var result = objvalidar.validarClave(entrada, 2, 6, listmsg)
    setMsgClave(result.msg);
    setColorClave(result.color);
    setClave(result.data);
  }
  function validarRClave(event) {
    var entrada1 = event.target.value;
    var entrada2 = clave;
    var result = objvalidar.validarIguales(entrada1, entrada2, "Claves")
    setMsgRClave(result.msg);
    setColorRClave(result.color);
    setValidarClave(entrada1);
  }
  return (
    <Fragment>
      <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0">
        <form className="w-[90%] mx-auto pl-8 bg-white col-span-2 h-fit w-full">
          <h2 className="text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">Cambiar Clave</h2>
          <h6 className="text-base font-medium leading-tight text-gray-800">
            {userInfo.name} ({userInfo.perfil})
          </h6>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-75 md:w-1/3 px-3 mt-8">
              <Input
                type="password"
                color="indigo"
                size="regular"
                name="clave_anterior"
                outline={true}
                placeholder="Clave Anterior"
                className=""
                defaultValue={""}
                value={clave_anterior}
                autocomplete="new-password"
                onChange={(e) => {
                  setClaveAnterior(e.target.value);
                }}
                ref={inputClaveAnterior}
              />
            </div>
            <div className="w-50 md:w-1/3 px-3 mt-8">
              <Input
                type="password"
                color="indigo"
                size="regular"
                name="clave"
                outline={true}
                autocomplete="new-password"
                placeholder="Clave Nueva"
                className=""
                defaultValue={""}
                maxLength={16}
                value={clave}
                onChange={validarClave}
                ref={inputClave}
              /><LeyendaError>{msgClave}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/3 px-3 mt-8">
              <Input
                type="password"
                color="indigo"
                size="regular"
                name="validar_clave"
                outline={true}
                placeholder="Repetir Clave"
                className=""
                autocomplete="new-password"
                defaultValue={""}
                value={validar_clave}
                onChange={validarRClave}
                ref={inputValidarClave}
              /><LeyendaError>{msgRClave}</LeyendaError>
            </div>
          </div>


          <div className="flex flex-row justify-center space-x-3">
            <Button
              className="bg-white border-2 border-black-500 !text-black hover:!bg-gray-300 !transition !duration-500 
              hover:shadow-lg hover:border-white-300"
              // onSubmit
              color=""
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="gray"
              onClick={(e) => {
                e.preventDefault();
                setClaveAnterior("");
                setClave("");
                setValidarClave("");
              }}
            >
              Cancelar
            </Button>
            <Button
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
                e.preventDefault();
                if (validarCampos() === true) {
                  await handleSubmit();
                } else {
                  setValidacion(false);
                }
              }}
            >
              Actualizar
            </Button>
          </div>
          {validacion ? <Alert /> : null}
        </form>
        <div className="w-full p-5">
          <img
            src={CreateDeviceSVG}
            className="rounded-l-xl object-fill h-[225px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Cambiar Clave
          </h2>
          <p className="text-sm pb-1">
            Para actualizar su clave actual usted debe:
          </p>
          <ul className="list-disc text-sm">
            <li><b>Paso 1.</b> Conocer su clave anterior</li>
            <li><b>Paso 2.</b> Ingresar su clave anterior</li>
            <li><b>Paso 3.</b> Ingresar su nueva clave</li>
            <li><b>Paso 4.</b> Confirmar su nueva clave</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Form_CambiarClave;