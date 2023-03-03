import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CreateUserSVG from "../../assets/recursos_proyecto/imagenes/crear_usuario.svg";
import Input from "@material-tailwind/react/Input";
import { InputCambiosColor, LeyendaError, MensajeErrorForm } from "../../components/form/cssElementsForm"
import validator from 'validator';

import {
  listCooperativaDetails,
  listaComboPerfil,
  listaComboSupervisor,
  listaComboRegion,
  createCooperativa,
  clearData,
  updateCooperativa
} from "../../actions/seguridad/usuarioActions";

import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

const Form_Usuarios = (props) => {
  const objvalidar = require("../../utils/Validator");

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
  const [descripcion_evento, setDescripcionEvento] = useState(companies.cooperativa.USUA_APELLI);
  const [objetivo_evento, setObjetivoEvento] = useState(companies.cooperativa.USUA_APELLI);

  const [persona_solicita, setPersonaSolicita] = useState(companies.cooperativa.USUA_APELLI);
  const [persona_responsable, setPersonaResponsable] = useState(companies.cooperativa.USUA_APELLI);
  const [contacto, setContacto] = useState(companies.cooperativa.USUA_APELLI);

  const [solicitud, setSolicitud] = useState("");
  const [aprobado, setAprobado] = useState("");
  const [region, setRegion] = useState("");
  const [proyeccion_venta, setProyeccionVenta] = useState("");
  const [fecha_inicio, setFechaInicio] = useState("");
  const [fecha_fin, setFechaFin] = useState("");
  const [hora, setHora] = useState("");
  const [observacion, setObservacion] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [validacion, setValidacion] = useState(false);


  //COMBO REGIONES
  const result_region = useSelector((state) => state.regionList);
  const regiones = result_region["regiones"];
  //COMBO SUPERVISORES
  const result_supervisor = useSelector((state) => state.supervisorList);
  const supervisores = result_supervisor["supervisores"];

  //Para mensajes que salen en los input en caso de que tengan error
  const [msgDescripcionEventos, setMsgDescripcionEvento] = useState(" ");
  const [msgObjetivoEventos, setMsgObjetivoEvento] = useState(" ");
  const [msgPersonaSolicita, setMsgPersonaSolicita] = useState(" ");
  const [msgPersonaResponsable, setMsgPersonaResponsable] = useState(" ");
  const [msgContacto, setMsgContacto] = useState(" ");
  const [msgSolicitud, setMsgSolicitud] = useState(" ");
  const [msgAprobado, setMsgAprobado] = useState(" ");
  const [msgProyeccionVenta, setMsgProyeccionVenta] = useState("");
  const [msgFechaInicio, setMsgFechaInicio] = useState(" ");
  const [msgFechaFin, setMsgFechaFin] = useState(" ");
  const [msgHora, setMsgHora] = useState(" ");

  const [msgCorreo, setMsgCorreo] = useState(" ");

  const [msgRegion, setMsgRegion] = useState(" ");

  //////////////////////////////////////////////////////////////////////
  const [colorDescripcionEvento, setColorDescripcionEvento] = useState("indigo");
  const [colorObjetivoEvento, setColorObjetivoEvento] = useState("indigo");
  const [colorPersonaSolicita, setColorPersonaSolicita] = useState("indigo");
  const [colorPersonaResponsable, setColorPersonaResponsable] = useState("indigo");
  const [colorContacto, setColorContacto] = useState("indigo");

  const [colorGenero, setColorGenero] = useState("indigo");
  const [colorSolicitud, setColorSolicitud] = useState("indigo");
  const [colorAprobado, setColorAprobado] = useState("indigo");

  const [colorProyeccion, setColorProyeccionVenta] = useState("indigo");
  const [colorFechaIncio, setColorFechaIncio] = useState("indigo")
  const [colorFechaFin, setColorFechaFin] = useState("indigo")
  const [colorHora, setColorHora] = useState("indigo")
  const [colorObservacion, setColorObservacion] = useState("indigo");


  const inputPersonaSolicita = useRef(null);
  const inputPersonaResponsable = useRef(null);
  const inputContacto = useRef(null);

  const inputDescripcionEvento= useRef(null);
  const inputObjetivoEvento= useRef(null);

  const inputSolicitud = useRef(null);
  const inputAprobado = useRef(null);

  
  const inputProyeccionVenta = useRef(null);
  const inputFechaInicio = useRef(null);
  const inputFechaFin = useRef(null);
  const inputFechaHora = useRef(null);
  const selectSolicitud = useRef(null);
  const selectAprobado = useRef(null);

  const selectRegion = useRef(null);


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
        region,
        descripcion_evento,
        objetivo_evento,
        persona_solicita,
        persona_responsable,
        solicitud,
        aprobado,
        proyeccion_venta,
        fecha_inicio,
        fecha_fin,
        hora,
        supervisor,
        keyword,
        pageNumber,
        pageNumberCurrent,
        id_permitido
      });
    } else {
      const cooperativaUpdated = {
        id: data.codigo,
        descripcion_evento: descripcion_evento,
        objetivo_evento: objetivo_evento,
        persona_solicita: persona_solicita,
        persona_responsable: persona_responsable,
        solicitud: solicitud,
        proyeccion_venta: proyeccion_venta,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        hora: hora,
        observacion: observacion,
        supervisor: supervisor,
        keyword: keyword,
        pageNumber: pageNumber,
        pageNumberCurrent: pageNumberCurrent,
        id_permitido: id_permitido
      };
      updateCoo(cooperativaUpdated);
      data.codigo = 0;
    }
    setShowModalForm(false);
    setDescripcionEvento("");
    setPersonaSolicita("");
    setPersonaResponsable("");

    setSolicitud("");
    setProyeccionVenta("");
    setFechaInicio("");
    setFechaFin("");
    setHora("");
    setSupervisor("");

    setMsgDescripcionEvento(" ");
    setMsgPersonaSolicita(" ");
    setMsgPersonaResponsable(" ");

    setMsgSolicitud(" ");
    setRegion(" ");

    setMsgFechaInicio(" ");
    setMsgFechaFin(" ");
    setMsgHora(" ");
  };
  const listmsg = [msgDescripcionEventos,msgObjetivoEventos,msgPersonaSolicita,msgPersonaResponsable, msgSolicitud,msgRegion,
    msgProyeccionVenta, fecha_inicio,fecha_fin,hora];
  function validarCampos() {
    if (validator.isEmpty(msgDescripcionEventos) && validator.isEmpty(msgObjetivoEventos)
        && validator.isEmpty(msgPersonaSolicita) && validator.isEmpty(msgPersonaResponsable)
        && validator.isEmpty(msgSolicitud)  && validator.isEmpty(msgRegion)
        && validator.isEmpty(msgCorreo)) {
      return true
    } else {
      if (!validator.isEmpty(msgDescripcionEventos)) setMsgDescripcionEvento("Campo invalido/vacio");
      if (!validator.isEmpty(msgObjetivoEventos)) setMsgDescripcionEvento("Campo invalido/vacio");

      if (!validator.isEmpty(msgPersonaSolicita)) setMsgPersonaSolicita("Campo invalido/vacio");
      if (!validator.isEmpty(msgPersonaResponsable)) setMsgPersonaResponsable("Campo invalido/vacio");
      if (!validator.isEmpty(msgSolicitud)) setMsgSolicitud("Elija opcion valida");

      if (!validator.isEmpty(msgFechaFin)) setMsgFechaFin("Campo invalido/vacio");
      if (!validator.isEmpty(msgHora)) setMsgFechaFin("Campo invalido/vacio");

      return false;
    }
  }

  function validarDescripcionEvento(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarSoloLetrasMinMax(entrada, 1, 4, listmsg)
    setMsgDescripcionEvento(result.msg);
    setColorDescripcionEvento(result.color);
    setDescripcionEvento(result.data);
    setValidacion(result.validacion);
  }

  function validarObjetivoEvento(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarSoloLetrasMinMax(entrada, 1, 4, listmsg)
    setMsgObjetivoEvento(result.msg);
    setColorObjetivoEvento(result.color);
    setObjetivoEvento(result.data);
    setValidacion(result.validacion);
  }


  function validarPersonaSolicita(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarSoloLetrasMinMax(entrada, 1, 4, listmsg)
    setMsgPersonaSolicita(result.msg);
    setColorPersonaSolicita(result.color);
    setPersonaSolicita(result.data);
    setValidacion(result.validacion);
  }

  function validarPersonaResponsable(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarSoloLetrasMinMax(entrada, 1, 4, listmsg)
    setMsgPersonaResponsable(result.msg);
    setColorPersonaResponsable(result.color);
    setPersonaResponsable(result.data);
    setValidacion(result.validacion);
  }

  function validarContacto(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarSoloLetrasMinMax(entrada, 1, 4, listmsg)
    setMsgContacto(result.msg);
    setColorContacto(result.color);
    setContacto(result.data);
    setValidacion(result.validacion);
  }


  function validarProyeccionVenta(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg)
    //setMsgDireccion(result.msg);
    //setColorProyeccionVenta(result.color);
    setProyeccionVenta(result.data);
    setValidacion(result.validacion);
  }

  function validarFechaInicio(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosMax(entrada, 8, listmsg)
    setMsgFechaInicio(result.msg);
    setColorFechaIncio(result.color);
    setFechaInicio(result.data);
    setValidacion(result.validacion);
  }

  function validarFechaFin(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosMax(entrada, 8, listmsg)
    setMsgFechaFin(result.msg);
    setColorFechaFin(result.color);
    setFechaFin(result.data);
    setValidacion(result.validacion);
  }

  function validarHora(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosMax(entrada, 8, listmsg)
    setMsgHora(result.msg);
    setColorHora(result.color);
    setHora(result.data);
    setValidacion(result.validacion);
  }

  function validarSolicitud(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgSolicitud(result.msg);
    setSolicitud(result.data);
    setValidacion(result.validacion);
  }

  function validarAprobacion(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgAprobado(result.msg);
    setAprobado(result.data);
    setValidacion(result.validacion);
  }


  function validarRegion(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgRegion(result.msg);
    setRegion(result.data);
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
              setDescripcionEvento("");
              setSolicitud("");
              setProyeccionVenta("");
              setFechaInicio("");
              setFechaFin("");
              setHora("");
              setObservacion("");
              setSupervisor("");
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
                <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                  bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                  m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="solicitud"
                  onChange={validarSolicitud}
                  ref={selectSolicitud}
                >
                  <option value="-1" selected>Solicitud</option>
                </select><LeyendaError>{msgSolicitud}</LeyendaError>
              </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorDescripcionEvento}
                size="regular"
                name="descripcion_evento"
                outline={true}
                autocomplete="new-password"
                placeholder="Descripción Evento"
                className=""
                value={descripcion_evento}
                maxLength={100}
                defaultValue={""}
                onChange={validarDescripcionEvento}
                ref={inputDescripcionEvento}
              /><LeyendaError>{msgDescripcionEventos}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorObjetivoEvento}
                size="regular"
                name="objetivo_evento"
                outline={true}
                autocomplete="new-password"
                placeholder="Objetivo del Evento"
                className=""
                value={objetivo_evento}
                maxLength={100}
                defaultValue={""}
                onChange={validarObjetivoEvento}
                ref={inputObjetivoEvento}
              /><LeyendaError>{msgObjetivoEventos}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="date"
                color={colorFechaIncio}
                size="regular"
                name="fecha_inicio"
                outline={true}
                value={fecha_inicio}
                maxLength={8}
                autoComplete="off"
                defaultValue={""}
                placeholder="Fecha Inicio"
                className=""
                onChange={validarFechaInicio}
                ref={inputFechaInicio}
              /><LeyendaError>{msgFechaInicio}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="date"
                color={colorFechaFin}
                size="regular"
                name="fecha_fin"
                outline={true}
                value={fecha_fin}
                maxLength={8}
                autoComplete="off"
                defaultValue={""}
                placeholder="Fecha Fin"
                className=""
                onChange={validarFechaFin}
                ref={inputFechaFin}
              /><LeyendaError>{msgFechaFin}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="time"
                color={colorHora}
                size="regular"
                name="hora"
                outline={true}
                value={hora}
                maxLength={8}
                autoComplete="off"
                defaultValue={""}
                placeholder="Hora Evento"
                className=""
                onChange={validarHora}
                ref={inputFechaFin}
              /><LeyendaError>{msgHora}</LeyendaError>
            </div>
    
            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorProyeccion}
                size="regular"
                name="proyeccion_venta"
                outline={true}
                autoComplete="new-password"
                defaultValue={""}
                placeholder="Proyección Ventas (Opcional)"
                className=""
                maxLength={40}
                onChange={validarProyeccionVenta}
                ref={inputProyeccionVenta}
              /><LeyendaError>{msgProyeccionVenta}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorPersonaSolicita}
                size="regular"
                name="persona_solicita"
                outline={true}
                // autocomplete="new-password"
                placeholder="Persona que Solicita"
                className=""
                value={persona_solicita}
                maxLength={100}
                defaultValue={""}
                onChange={validarPersonaSolicita}
                ref={inputPersonaSolicita}
              /><LeyendaError>{msgPersonaSolicita}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorPersonaResponsable}
                size="regular"
                name="persona_responsable"
                outline={true}
                // autocomplete="new-password"
                placeholder="Persona Responsable"
                className=""
                value={persona_responsable}
                maxLength={100}
                defaultValue={""}
                onChange={validarPersonaResponsable}
                ref={inputPersonaResponsable}
              /><LeyendaError>{msgPersonaResponsable}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="number"
                color={colorContacto}
                size="regular"
                // name="celular"
                name="contacto"
                outline={true}
                value={contacto}
                maxLength={8}
                // autoComplete="off"
                defaultValue={""}
                placeholder="Número de Contacto"
                className=""
                onChange={validarContacto}
                ref={inputContacto}
              /><LeyendaError>{msgContacto}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="genero"
                color={colorAprobado}
                onChange={validarAprobacion}
                ref={selectAprobado}
              >
                <option value="X" selected>SI/NO</option>
                <option value="S">SI</option>
                <option value="N">NO</option>
              </select>
              <LeyendaError>{msgAprobado}</LeyendaError>
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
                setDescripcionEvento("");
                setPersonaSolicita("");
                setPersonaResponsable("");
                setSolicitud("");
                setAprobado("");
                setProyeccionVenta("");
                setFechaInicio("");
                setFechaFin("");
                setHora("");
                setObservacion("");
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
              <li className="py-1"><b>Broker.-</b> Solicitudes y asignación de plan</li>
              <li className="py-1"><b>Agente.-</b> Solicitudes y asignación de plan</li>
              <li className="py-1"><b>Directo.-</b> Solicitudes y asignación de plan</li>
              <li className="py-1"><b>Suscriptor.-</b> Valida si es procedente o no</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Usuarios;
