import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CreateUserSVG from "../../../assets/recursos_proyecto/imagenes/crear_usuario.svg";
import Input from "@material-tailwind/react/Input";
import Logo_login from "../../../assets/recursos_proyecto/LOGOS NS sin slogan-02.png";
import { InputCambiosColor, LeyendaError, MensajeErrorForm } from "../../../components/form/cssElementsForm"
import validator from 'validator';

import {
  listCooperativaDetails,
  clearData,
  updateCooperativa,
  updatePassword
} from "../../../actions/seguridad/usuarioActions";

import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import MsgErrorForm from "../../../components/MsgErrorForm";
import MsgSuccessForm from "../../../components/MsgSuccessForm";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

const Form_ChangePassword = (props) => {
  const objvalidar = require("../../../utils/Validator");
  const {
    showModalForm,
    setShowModalForm,
    titulo,
    data,
    setData,
    setUpdateKey,
    pageNumber,
    pageNumberCurrent,
    id_permitido
  } = props;
  const dispatch = useDispatch();
  const keyword = "";
  const Cooperativa = (credenciales) =>
    dispatch(listCooperativaDetails(credenciales));


  const [initialRender, setInitialRender] = useState(true);

  const updatePass = (credenciales) => dispatch(updatePassword(credenciales));

  const [clave, setClave] = useState("");
  const [validar_clave, setValidarClave] = useState("");
  const [validacion, setValidacion] = useState(false);

  //Para mensajes que salen en los input en caso de que tengan error
  const [msgClave, setMsgClave] = useState(" ");
  const [msgRClave, setMsgRClave] = useState(" ");
  //////////////////////////////////////////////////////////////////////

  const [colorClave, setColorClave] = useState("indigo");
  const [colorRClave, setColorRClave] = useState("indigo");


  const inputClave = useRef(null);
  const inputValidarClave = useRef(null);

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const onSubmit = (data) => console.log(data)
  useEffect(() => {
    if (data.codigo) {
      Cooperativa(data.codigo);
    }
    setInitialRender(false);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);

  const handleSubmit = async () => {
    //console.log(data.codigo)
    if (titulo === "Cambiar Clave") {
      const cooperativaUpdated = {
        id: data.codigo,
        clave: clave,
        validar_clave: validar_clave,
        keyword: keyword,
        pageNumber: pageNumber,
        pageNumberCurrent: pageNumberCurrent,
        id_permitido: id_permitido
      };
      updatePass(cooperativaUpdated);
      data.codigo = 0;
    }
    setShowModalForm(false);
    setClave("");
    setValidarClave("");
    setMsgClave(" ");
    setMsgRClave(" ");
  };
  const listmsg = [msgClave, msgRClave];

  function validarCampos() {
    if (validator.isEmpty(msgClave)
      && validator.isEmpty(msgRClave)) {
      return true
    } else {
      if (!validator.isEmpty(msgClave)) setMsgClave("Campo invalido/vacio");
      if (!validator.isEmpty(msgRClave)) setMsgRClave("Campo invalido/vacio");
      return false;
    }
  }
  function validarClave(value) {
    var entrada = value;
    var result = objvalidar.validarClave(entrada, 2, 6, listmsg)
    setMsgClave(result.msg);
    setColorClave(result.color);
    setClave(result.data);
    setValidacion(result.validacion);
    //console.log(validar_clave.length)
    if(validar_clave.length>0){
      var result = objvalidar.validarIguales(entrada, validar_clave, "Claves");
      setMsgRClave(result.msg);
      setColorRClave(result.color);
      setValidacion(result.validacion);
    }
    
  }
  function validarRClave(value) {
    var entrada1 = value;
    var entrada2 = clave;
    var result = objvalidar.validarIguales(entrada1, entrada2, "Claves")
    setMsgRClave(result.msg);
    setValidarClave(entrada1);
    setColorRClave(result.color);
    setValidacion(result.validacion);
  }
  return (
    <Modal
      size="lg"
      className="!w-full !my-0"
      active={showModalForm}
      toggler={() => setShowModalForm(false)}
    >
      <div className="bg-blue-700 absolute w-full !my-0 top-0 right-0 h-auto ">
        <div className="flex flex-row h-12 text-white text-lg font-bold space-x-4 pt-2 pl-4">
          <p
            className="cursor-pointer"
            onClick={(e) => {
              setShowModalForm(false);
              setClave("");
              setValidarClave("");
              setData({ ...data, codigo: null });
            }}
          >
            X
          </p>
          <p className=""> {titulo}</p>
        </div>
      </div>
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <img
            src={Logo_login}
            loading="lazy"
            className="w-36 ml-4 mb-2"
            alt="tailus logo"
          />
      <div class="w-full p-10 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
              Cambiar Clave
          </h2>
          <form class="mt-4 space-y-4 lg:mt-4 md:space-y-5" action="#">
              {/*<div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
              </div>*/}
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nueva Clave</label>
                  <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="••••••••" 
                  autoComplete="new-password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required=""
                  value={clave}
                  onChange={(e)=>validarClave(e.target.value)}/>
                  <LeyendaError>{msgClave}</LeyendaError>
              </div>
              <div>
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Clave</label>
                  <input 
                  type="password" 
                  name="confirm-password" 
                  id="confirm-password" 
                  placeholder="••••••••" 
                  autoComplete="new-password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required=""
                  value={validar_clave}
                  onChange={(e)=>validarRClave(e.target.value)}/>
                  <LeyendaError>{msgRClave}</LeyendaError>
              </div>
              <Button 
                type="submit"
                className="bg-indigo-300 mb-1"
                color="blue"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                onClick={async (e) => {
                  e.preventDefault();
                  if (validarCampos() === true) {
                    await handleSubmit();
                    //setValidacion(true);
                  } else {
                    setValidacion(false);
                  }
                  setUpdateKey(new Date());
                }}>Confirmar Cambios</Button>
          </form>
      </div>
  </div>
</section>
    </Modal>
  );
};

export default Form_ChangePassword;
