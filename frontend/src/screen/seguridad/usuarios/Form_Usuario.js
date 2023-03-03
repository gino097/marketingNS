import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CreateUserSVG from "../../../assets/recursos_proyecto/imagenes/crear_usuario.svg";
import Input from "@material-tailwind/react/Input";
import { InputCambiosColor, LeyendaError, MensajeErrorForm } from "../../../components/form/cssElementsForm"
import validator from 'validator';

import {
  listCooperativaDetails,
  listaComboPerfil,
  listaComboSupervisor,
  listaComboRegion,
  createCooperativa,
  clearData,
  updateCooperativa
} from "../../../actions/seguridad/usuarioActions";

import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import MsgErrorForm from "../../../components/MsgErrorForm";
import MsgSuccessForm from "../../../components/MsgSuccessForm";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

const Form_Usuarios = (props) => {
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
  useEffect(() => {
    dispatch(listaComboPerfil({}));
    dispatch(listaComboSupervisor({}));
    dispatch(listaComboRegion({}));
  }, [dispatch, keyword]);

  const [initialRender, setInitialRender] = useState(true);

  const companies = useSelector((state) => state.cooperativaDetails);
  const createCoo = (credenciales) => dispatch(createCooperativa(credenciales));
  const updateCoo = (credenciales) => dispatch(updateCooperativa(credenciales));
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState(companies.cooperativa.USUA_NOMBRE);
  const [apellido, setApellido] = useState(companies.cooperativa.USUA_APELLI);
  const [genero, setGenero] = useState("");
  const [region, setRegion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [observacion, setObservacion] = useState("");
  const [correo, setCorreo] = useState("");
  const [perfil, setPerfil] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [clave, setClave] = useState("");
  const [validar_clave, setValidarClave] = useState("");
  const [validacion, setValidacion] = useState(false);

  //COMBO PERFILES
  const result_perfil = useSelector((state) => state.perfilList);
  const perfiles = result_perfil["perfiles"];
  //COMBO REGIONES
  const result_region = useSelector((state) => state.regionList);
  const regiones = result_region["regiones"];
  //COMBO SUPERVISORES
  const result_supervisor = useSelector((state) => state.supervisorList);
  const supervisores = result_supervisor["supervisores"];

  //Para mensajes que salen en los input en caso de que tengan error
  const [msgCedula, setMsgCedula] = useState("");
  const [msgNombres, setMsgNombres] = useState(" ");
  const [msgApellidos, setMsgApellidos] = useState(" ");
  const [msgGenero, setMsgGenero] = useState(" ");
  const [msgRegion, setMsgRegion] = useState(" ");
  const [msgDireccion, setMsgDireccion] = useState("");
  const [msgTelefono, setMsgTelefono] = useState(" ");
  const [msgCelular, setMsgCelular] = useState(" ");
  const [msgObservacion, setMsgObservacion] = useState(" ");
  const [msgCorreo, setMsgCorreo] = useState(" ");
  const [msgPerfil, setMsgPerfil] = useState(" ");
  const [msgClave, setMsgClave] = useState(" ");
  const [msgRClave, setMsgRClave] = useState(" ");
  //////////////////////////////////////////////////////////////////////

  const [colorCedula, setColorCedula] = useState("indigo");
  const [colorNombres, setColorNombres] = useState("indigo");
  const [colorApellidos, setColorApellidos] = useState("indigo");
  const [colorGenero, setColorGenero] = useState("indigo");
  const [colorRegion, setColorRegion] = useState("indigo");
  const [colorDireccion, setColorDireccion] = useState("indigo");
  const [colorTelefono, setColorTelefono] = useState("indigo");
  const [colorCelular, setColorCelular] = useState("indigo")
  const [colorObservacion, setColorObservacion] = useState("indigo");
  const [colorCorreo, setColorCorreo] = useState("indigo");
  const [colorClave, setColorClave] = useState("indigo");
  const [colorRClave, setColorRClave] = useState("indigo");


  const inputCedula = useRef(null);
  const inputNombre = useRef(null);
  const inputApellido = useRef(null);
  const selectGenero = useRef(null);
  const inputRegion = useRef(null);
  const inputDireccion = useRef(null);
  const inputTelefono = useRef(null);
  const inputCelular = useRef(null);
  const inputObservacion = useRef(null);
  const inputCorreo = useRef(null);
  const selectRegion = useRef(null);
  const selectPerfil = useRef(null);
  const selectSupervisor = useRef(null);
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
    if (titulo === "Crear Usuario") {
      createCoo({
        cedula,
        nombre,
        apellido,
        genero,
        region,
        direccion,
        telefono,
        celular,
        observacion,
        correo,
        perfil,
        supervisor,
        clave,
        validar_clave,
        keyword,
        pageNumber,
        pageNumberCurrent,
        id_permitido
      });
    } else {
      const cooperativaUpdated = {
        id: data.codigo,
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        genero: genero,
        region: region,
        direccion: direccion,
        telefono: telefono,
        celular: celular,
        observacion: observacion,
        correo: correo,
        perfil: perfil,
        supervisor: supervisor,
        clave: clave,
        validar_clave: validar_clave,
        keyword: keyword,
        pageNumber: pageNumber,
        pageNumberCurrent: pageNumberCurrent,
        id_permitido: id_permitido
      };
      updateCoo(cooperativaUpdated);
      data.codigo = 0;
    }
    setShowModalForm(false);
    setCedula("");
    setNombre("");
    setApellido("");
    setGenero("");
    setRegion("");
    setDireccion("");
    setTelefono("");
    setCelular("");
    setObservacion("");
    setCorreo("");
    setPerfil("");
    setSupervisor("");
    setClave("");
    setValidarClave("");
    //setMsgCedula(" ");
    setMsgNombres(" ");
    setMsgApellidos(" ");
    setMsgGenero(" ");
    setMsgRegion(" ");
    //setMsgDireccion(" ");
    setMsgTelefono(" ");
    setMsgCelular(" ");
    setMsgObservacion(" ");
    setMsgCorreo(" ");
    setMsgPerfil(" ");
    setMsgClave(" ");
    setMsgRClave(" ");
  };
  const listmsg = [msgCedula, msgNombres, msgApellidos, msgGenero, msgRegion,
    msgDireccion, celular, msgCorreo, msgPerfil, msgClave, msgRClave];
  function validarCampos() {
    if (validator.isEmpty(msgNombres) && validator.isEmpty(msgApellidos)
      && validator.isEmpty(msgGenero) && validator.isEmpty(msgRegion)
      && validator.isEmpty(msgCelular) && validator.isEmpty(msgCedula)
      && validator.isEmpty(msgCorreo) && validator.isEmpty(msgPerfil) && validator.isEmpty(msgClave)
      && validator.isEmpty(msgRClave)) {
      return true
    } else {
      if (!validator.isEmpty(msgCedula)) setMsgCedula("Campo invalido/vacio");
      if (!validator.isEmpty(msgNombres)) setMsgNombres("Campo invalido/vacio");
      if (!validator.isEmpty(msgApellidos)) setMsgApellidos("Campo invalido/vacio");
      if (!validator.isEmpty(msgGenero)) setMsgGenero("Elija opcion valida");
      if (!validator.isEmpty(msgRegion)) setMsgRegion("Elija opcion valida");
      //if (!validator.isEmpty(msgDireccion)) setMsgDireccion("Campo invalido/vacio");
      //if (!validator.isEmpty(msgTelefono)) setMsgTelefono("Campo invalido/vacio");
      if (!validator.isEmpty(msgCelular)) setMsgCelular("Campo invalido/vacio");
      if (!validator.isEmpty(msgCorreo)) setMsgCorreo("Campo invalido/vacio");
      if (!validator.isEmpty(msgPerfil)) setMsgPerfil("Elija opcion valida");
      if (!validator.isEmpty(msgClave)) setMsgClave("Campo invalido/vacio");
      if (!validator.isEmpty(msgRClave)) setMsgRClave("Campo invalido/vacio");
      return false;
    }
  }

  function validarCedula(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg)
    setMsgCedula(result.msg);
    setColorCedula(result.color);
    setCedula(result.data);
    setValidacion(result.validacion);
  }

  function validarNombres(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg)
    setMsgNombres(result.msg);
    setColorNombres(result.color);
    setNombre(result.data);
    setValidacion(result.validacion);
  }
  function validarApellidos(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg)
    setMsgApellidos(result.msg);
    setColorApellidos(result.color);
    setApellido(result.data);
    setValidacion(result.validacion);
  }
  function validarGenero(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "X", listmsg)
    setMsgGenero(result.msg);
    setGenero(result.data);
    setValidacion(result.validacion);
  }

  function validarDireccion(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg)
    //setMsgDireccion(result.msg);
    //setColorDireccion(result.color);
    setDireccion(result.data);
    setValidacion(result.validacion);
  }
  function validarTelefono(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosMax(entrada, 10, listmsg)
    setMsgTelefono(result.msg);
    setColorTelefono(result.color);
    setTelefono(result.data);
    setValidacion(result.validacion);
  }
  function validarCelular(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosMax(entrada, 8, listmsg)
    setMsgCelular(result.msg);
    setColorCelular(result.color);
    setCelular(result.data);
    setValidacion(result.validacion);
  }
  function validateEmail(e) {
    const entrada = e.target.value;
    var result = objvalidar.validarEmail(entrada, listmsg)
    setMsgCorreo(result.msg);
    setColorCorreo(result.color);
    setCorreo(entrada);
    setValidacion(result.validacion);
  }
  function validarPerfil(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgPerfil(result.msg);
    setPerfil(result.data);
    setValidacion(result.validacion);
    mostrarSupervisores(event);
  }
  function mostrarSupervisores(event) {
    const entrada = event.target.value;
    if (entrada === "9") {
      document.getElementById("combo_supervisores").style.display = "inline-block";
    } else {
      document.getElementById("combo_supervisores").style.display = "none";
    }
  }
  function validarRegion(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgRegion(result.msg);
    setRegion(result.data);
    setValidacion(result.validacion);
  }
  function validarClave(event) {
    var entrada = event.target.value;
    var result = objvalidar.validarClave(entrada, 2, 6, listmsg)
    setMsgClave(result.msg);
    setColorClave(result.color);
    setClave(result.data);
    setValidacion(result.validacion);
  }
  function validarRClave(event) {
    var entrada1 = event.target.value;
    var entrada2 = clave;
    var result = objvalidar.validarIguales(entrada1, entrada2, "Claves")
    setMsgRClave(result.msg);
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
      <div className="bg-indigo-600 absolute w-full !my-0 top-0 right-0 h-auto ">
        <div className="flex flex-row h-12 text-white text-lg font-bold space-x-4 pt-2 pl-4">
          <p
            className="cursor-pointer"
            onClick={(e) => {
              setShowModalForm(false);
              setCedula("");
              setNombre("");
              setApellido("");
              setGenero("");
              setRegion("");
              setDireccion("");
              setTelefono("");
              setCelular("");
              setObservacion("");
              setCorreo("");
              setPerfil("");
              setSupervisor("");
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
      <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0">
        <form className="shadow-xl w-[90%] mx-auto mt-6 p-5 bg-white col-span-2 h-fit w-full">
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Detalles usuario
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorCedula}
                size="regular"
                name="cedula"
                outline={true}
                maxLength={13}
                placeholder="Cédula / Código"
                autocomplete="off"
                className=""
                value={cedula}
                defaultValue={""}
                onChange={validarCedula}
                ref={inputCedula}
              /><LeyendaError>{msgCedula}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorNombres}
                size="regular"
                name="nombre"
                outline={true}
                placeholder="Nombres"
                className=""
                autocomplete="new-password"
                value={nombre}
                maxLength={500}
                defaultValue={""}
                onChange={validarNombres}
                ref={inputNombre}
              /><LeyendaError>{msgNombres}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorApellidos}
                size="regular"
                name="apellido"
                outline={true}
                autocomplete="new-password"
                placeholder="Apellido"
                className=""
                value={apellido}
                maxLength={500}
                defaultValue={""}
                onChange={validarApellidos}
                ref={inputApellido}
              /><LeyendaError>{msgApellidos}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="genero"
                color={colorGenero}
                onChange={validarGenero}
                ref={selectGenero}
              >
                <option value="X" selected>Género</option>
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
                <option value="O">Otros</option>
              </select>
              <LeyendaError>{msgGenero}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="region"
                onChange={validarRegion}
                ref={selectRegion}
              >
                <option value="-1" selected>Ciudad</option>
                {regiones?.map((valor) =>
                  <><option value={valor.BODE_NOMBRE + "-x-" + valor.BODE_CODIGO}>{valor.BODE_NOMBRE}</option>
                  </>
                )}
              </select><LeyendaError>{msgRegion}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorDireccion}
                size="regular"
                name="direccion"
                outline={true}
                autoComplete="new-password"
                defaultValue={""}
                placeholder="Dirección (Opcional)"
                className=""
                maxLength={40}
                onChange={validarDireccion}
                ref={inputDireccion}
              /><LeyendaError>{msgDireccion}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                name="telefono"
                outline={true}
                value={telefono}
                maxLength={10}
                autoComplete="new-password"
                defaultValue={""}
                placeholder="Teléfono(Opcional)"
                className=""
                onChange={validarTelefono}
                ref={inputTelefono}
              />
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorCelular}
                size="regular"
                name="celular"
                outline={true}
                value={celular}
                maxLength={8}
                autoComplete="off"
                defaultValue={""}
                placeholder="Celular"
                className=""
                onChange={validarCelular}
                ref={inputCelular}
              /><LeyendaError>{msgCelular}</LeyendaError>
            </div>
            <div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                name="observacion"
                outline={true}
                autoComplete="off"
                maxLength={100}
                defaultValue={""}
                placeholder="Observación(Opcional)"
                className=""
                onChange={(e) => {
                  setObservacion(e.target.value)
                }}
                ref={inputObservacion}
              />
            </div>
          </div>

          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Seguridades
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="email"
                color={colorCorreo}
                size="regular"
                name="correo"
                outline={true}
                autoComplete="off"
                defaultValue={""}
                placeholder="Correo"
                className=""
                onChange={validateEmail}
                ref={inputCorreo}
              /><LeyendaError>{msgCorreo}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="perfil"
                onChange={validarPerfil}
                ref={selectPerfil}
              >
                <option value="-1" selected>Perfil</option>
                {perfiles?.map((valor) =>
                  <><option value={valor.PERF_CODIGO}>{valor.PERF_NOMBRE}</option>
                  </>
                )}
              </select><LeyendaError>{msgPerfil}</LeyendaError>
            </div>

            <div id="combo_supervisores" className="w-50 md:w-1/2 px-3 mt-8" hidden>
              <select data-mdb-filter="true" className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="supervisor"
                value={supervisor}
                ref={selectSupervisor}
                onChange={(e) => {
                  setSupervisor(e.target.value);
                }}
              >
                <option value="-1">Supervisores</option>
                {supervisores?.map((valor) =>
                  <><option value={valor.USUA_NOMBRE + " " + valor.USUA_APELLI + "-x-" + valor.USUA_CODIGO}>{valor.USUA_NOMBRE + " " + valor.USUA_APELLI}</option>
                  </>
                )}
              </select>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="password"
                color={colorClave}
                size="regular"
                name="clave"
                outline={true}
                placeholder="Clave"
                className=""
                maxLength={16}
                autoComplete="new-password"
                defaultValue={""}
                onChange={validarClave}
                ref={inputClave}
              /><LeyendaError>{msgClave}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="password"
                color={colorRClave}
                size="regular"
                name="validar_clave"
                outline={true}
                placeholder="Repetir Clave"
                className=""
                maxLength={16}
                defaultValue={""}
                autoComplete="new-password"
                onChange={validarRClave}
                ref={inputValidarClave}
              /><LeyendaError>{msgRClave}</LeyendaError>
            </div>

          </div>
          <div className="flex flex-row justify-center space-x-3">
            <Button
              className="bg-white border-2 border-black-500 !text-black hover:!bg-gray-300 !transition !duration-500
            hover:shadow-lg hover:border-white-300"
              onSubmit
              color=""
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="gray"
              onClick={(e) => {
                e.preventDefault();
                setShowModalForm(false);
                setCedula("");
                setNombre("");
                setApellido("");
                setGenero("");
                setRegion("");
                setDireccion("");
                setTelefono("");
                setCelular("");
                setCorreo("");
                setObservacion("");
                setPerfil("");
                setSupervisor("");
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
                  //setValidacion(true);
                } else {
                  setValidacion(false);
                }
                setUpdateKey(new Date());
              }}
            >
              {titulo === "Crear Usuario" ? "Crear" : "Editar"}
            </Button>
          </div>
          {/*validacion ? <MsgSuccessForm />:<MsgErrorForm />*/}
        </form>
        <div className="w-full p-5">
          <img
            src={CreateUserSVG}
            className="rounded-l-xl object-fill h-[225px] mt-4"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Permisos
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>Los Perfiles poseen los siguientes permisos:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
            <ul className="list-disc text-xs px-2 ml-1 text-justify">
              <li className="py-1"><b>Administrador.-</b> Acceso total</li>
              <li className="py-1"><b>Logistica.-</b> Solo a productos y reportes</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Usuarios;
