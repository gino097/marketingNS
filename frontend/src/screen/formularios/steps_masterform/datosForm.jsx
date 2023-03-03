import MasterStepSVG from "../../../../src/images/logo.png";
import { StepperContext } from '../../../contexts/StepperContext';
import { useContext, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from 'react-loading-skeleton'
import'./styles.css'
import Input from "@material-tailwind/react/Input";
import InputNS from "../../../components/InputNS";
import Button from "@material-tailwind/react/Button";
import Checkbox from '@mui/material/Checkbox';


  import {
    listaComboRegion,
    listaComboRegionNT
  } from "../../../actions/soliMateriales/solicitudMActions";
import validator from 'validator';
import { LeyendaError, LeyendaMensaje } from "../../../components/form/cssElementsForm";

export default function StepDatosForm() {
    
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fechaF = anio + "-" + (Number(mes) <= 9 ? mes = "0" + mes : mes) + "-" + (Number(dia) <= 9 ? dia = "0" + dia : dia);
    const { userData, setUserData } = useContext(StepperContext);

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [materiales, setMateriales]=useState([]);
    const [id_permitido,setIds]=useState([14, 15, 16]);
    const [typeModal, setTypeModal] = useState({
        cabecera: "",
        cuerpo: "",
        confirmacion: "",
        codigo: null,
        funcion: "eliminar",
      });
    const { inicioDataValidation, setInicioDataValidation } = useContext(StepperContext);
    var { datos_form, setDatosForm } = useContext(StepperContext);

    if (datos_form !== true) {
      //setUserData({ ...userData, ["region"]: "Santa Cruz" }); setDatosForm(true);
      setDatosForm(false);
    } else if (datos_form === true) { setDatosForm(true) }
    const [showModal, setShowModal] = useState(false);
    const [showModalForm, setShowModalForm] = useState(false);
    const [showModalTitulo, setShowModalTitulo] = useState("");
    const result = useSelector((state) => state.productoList);
    const { pages, productos } = result;

    

    const objvalidar = require("../../../utils/Validator");

    const [validacion , setValidacion] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  useEffect(() => {
    dispatch(listaComboRegionNT({}));
  }, [dispatch, keyword]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    validarCampos();
}
  const [initialRender, setInitialRender] = useState(true);

  var [descripcion_evento, setDescripcionEvento] = useState("");
  var [objetivo_evento, setObjetivoEvento] = useState("");

  var [persona_solicita, setPersonaSolicita] = useState("");
  var [persona_responsable, setPersonaResponsable] = useState("");
  var [contacto, setContacto] = useState("");

  var [solicitud, setSolicitud] = useState("");
  var [region, setRegion] = useState("");
  var [proyeccion_venta, setProyeccionVenta] = useState("");
  var [pdestacar, setPdestacar] = useState("");
  var [fecha_inicio, setFechaInicio] = useState("");
  var [fecha_fin, setFechaFin] = useState("");
  var [hora, setHora] = useState("");
  var [correo, setCorreo] = useState("");


  //COMBO REGIONES
  const result_region = useSelector((state) => state.regionList);
  const regiones = result_region["regiones"];

  //Para mensajes que salen en los input en caso de que tengan error
  var [msgDescripcionEventos, setMsgDescripcionEvento] = useState(" ");
  var [msgObjetivoEventos, setMsgObjetivoEvento] = useState(" ");
  var [msgPersonaSolicita, setMsgPersonaSolicita] = useState(" ");
  var [msgPersonaResponsable, setMsgPersonaResponsable] = useState(" ");
  var [msgContacto, setMsgContacto] = useState(" ");
  var [msgSolicitud, setMsgSolicitud] = useState(" ");
  var [msgFechaInicio, setMsgFechaInicio] = useState(" ");
  var [msgFechaInicio3dias, setMsgFechaInicio3dias] = useState("");
  var [msgFechaFin, setMsgFechaFin] = useState(" ");
  var [msgHora, setMsgHora] = useState(" ");
  var [msgRegion, setMsgRegion] = useState(" ");
  var [msgPdestacar, setMsgPdestacar] = useState(" ");
  var [msgCorreo, setMsgCorreo] = useState(" ");

  //////////////////////////////////////////////////////////////////////
  const [colorRegion, setColorRegion] = useState("indigo");
  const [colorSolicitud, setcolorSolicitud] = useState("indigo");
  const [colorDescripcionEvento, setColorDescripcionEvento] = useState("indigo");
  const [colorObjetivoEvento, setColorObjetivoEvento] = useState("indigo");
  const [colorPersonaSolicita, setColorPersonaSolicita] = useState("indigo");
  const [colorPersonaResponsable, setColorPersonaResponsable] = useState("indigo");
  const [colorContacto, setColorContacto] = useState("indigo");
  const [colorPdestacar, setColorPdestacar] = useState("indigo");
  const [colorCorreo, setColorCorreo] = useState("indigo");

  const [colorAprobado, setColorAprobado] = useState("indigo");

  const [colorProyeccion, setColorProyeccionVenta] = useState("indigo");
  const [colorFechaIncio, setColorFechaIncio] = useState("indigo")
  const [colorFechaFin, setColorFechaFin] = useState("indigo")
  const [colorHora, setColorHora] = useState("indigo")


  const inputPersonaSolicita = useRef(null);
  const inputPersonaResponsable = useRef(null);
  const inputContacto = useRef(null);
  const inputCorreo = useRef(null);

  const inputDescripcionEvento= useRef(null);
  const inputObjetivoEvento= useRef(null)

  
  const inputProyeccionVenta = useRef(null);
  const inputFechaInicio = useRef(null);
  const inputFechaFin = useRef(null);
  const inputFechaHora = useRef(null);
  const selectSolicitud = useRef(null);
  const selectAprobado = useRef(null);
  const inputPdestacar = useRef(null);
  const selectRegion = useRef(null);

    var listmsg = [msgDescripcionEventos,msgObjetivoEventos,msgPersonaSolicita,msgPersonaResponsable, msgSolicitud,msgRegion
        , msgFechaInicio,msgFechaFin,msgHora, msgContacto, msgPdestacar, msgCorreo];
      function validarCampos() {
        //console.log(listmsg);
        //console.log(inicio);
        if (validator.isEmpty(msgDescripcionEventos) && validator.isEmpty(msgObjetivoEventos)
            && validator.isEmpty(msgPersonaSolicita) && validator.isEmpty(msgPersonaResponsable)
            && validator.isEmpty(msgSolicitud)  && validator.isEmpty(msgRegion)
            && validator.isEmpty(msgFechaInicio)&& validator.isEmpty(msgFechaFin)
            && validator.isEmpty(msgHora)&& validator.isEmpty(msgContacto)&& validator.isEmpty(msgPdestacar)
            && validator.isEmpty(msgCorreo)) {
              datos_form=true;
              setDatosForm(true);
        } else {
          datos_form=false;
          setDatosForm(false);
        }
      }
    
      function validarDescripcionEvento(event) {
        var entrada = event.target.value;
        descripcion_evento=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgDescripcionEventos=result.msg;
        setMsgDescripcionEvento(result.msg);
        setColorDescripcionEvento(result.color);
        setDescripcionEvento(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }

      function validarCorreo(event) {
        var entrada = event.target.value;
        correo=entrada;
        var result = objvalidar.validarEmail(entrada, listmsg);
        msgCorreo=result.msg;
        setMsgCorreo(result.msg);
        setColorCorreo(result.color);
        setCorreo(entrada);
        setValidacion(result.validacion);
        handleChange(event);
      }

      function validarPdestacar(event) {
        var entrada = event.target.value;
        pdestacar=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgPdestacar=result.msg;
        setMsgPdestacar(result.msg);
        setColorPdestacar(result.color);
        setPdestacar(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarObjetivoEvento(event) {
        var entrada = event.target.value;
        objetivo_evento=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgObjetivoEventos=result.msg;
        setMsgObjetivoEvento(result.msg);
        setColorObjetivoEvento(result.color);
        setObjetivoEvento(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarPersonaSolicita(event) {
        var entrada=event.target.value;
        persona_solicita=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgPersonaSolicita=result.msg;
        setMsgPersonaSolicita(result.msg);
        setColorPersonaSolicita(result.color);
        setPersonaSolicita(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarPersonaResponsable(event) {
        var entrada = event.target.value;
        persona_responsable=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgPersonaResponsable=result.msg;
        setMsgPersonaResponsable(result.msg);
        setColorPersonaResponsable(result.color);
        setPersonaResponsable(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarContacto(event) {
        var entrada = event.target.value;
        contacto=entrada;
        var result = objvalidar.validarNumerosEnteros(entrada, listmsg);
        msgContacto=result.msg;
        setMsgContacto(result.msg);
        setColorContacto(result.color);
        setContacto(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
    
      function validarProyeccionVenta(event) {
        var entrada = event.target.value;
        proyeccion_venta=entrada
        var result = objvalidar.validarVacio(entrada, listmsg);
        //setMsgDireccion(result.msg);
        //setColorProyeccionVenta(result.color);
        setProyeccionVenta(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarFechaInicio(event) {
        var entrada = event.target.value;
        fecha_inicio=entrada;
        var result = objvalidar.validarFechaInicio(entrada,fechaF, listmsg);
        msgFechaInicio=result.msg;
        setMsgFechaInicio(result.msg);
        setColorFechaIncio(result.color);
        setFechaInicio(result.data);        
        setValidacion(result.validacion);
        if(result.diferencia<=3)
        setMsgFechaInicio3dias("Recuerda que las solicitudes debes ingresarlas con mínimo 72 horas de anticipación por lo que este requerimiento entrara a revisión")
        else setMsgFechaInicio3dias("");
        handleChange(event);
      }
    
      function validarFechaFin(event) {
        var entrada = event.target.value;
        fecha_fin=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgFechaFin=result.msg;
        setMsgFechaFin(result.msg);
        setColorFechaFin(result.color);
        setFechaFin(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarHora(event) {
        var entrada = event.target.value;
        hora=entrada;
        var result = objvalidar.validarVacio(entrada, listmsg);
        msgHora=result.msg;
        setMsgHora(result.msg);
        setColorHora(result.color);
        setHora(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
      function validarSolicitud(event) {
        var entrada = event.target.value;
        solicitud=entrada;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg);
        msgSolicitud=result.msg;
        setcolorSolicitud(result.color)
        setMsgSolicitud(result.msg);
        setSolicitud(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
    
    
      function validarRegion(event) {
        var entrada = event.target.value;
        region=entrada;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg);
        msgRegion=result.msg;
        setColorRegion(result.color);
        setMsgRegion(result.msg);
        setRegion(result.data);
        setValidacion(result.validacion);
        handleChange(event);
      }
      
    return<div className='flex flex-col'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&family=Manjari:wght@100&family=DM+Sans&family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold font-title text-2xl pt-3 md:text-2xl dark:text-gray-100">SOLICITUD DE MATERIALES</h1>
        
    <div className="text-justify mt-3">
          <form className="shadow-xl w-[90%] mx-auto mt-6 p-5 bg-white col-span-2 h-fit w-full">
          <h2 className="text-gray-700 text-lg font-bold font-title mb-2">
            Detalles de Solicitud
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">

          <div className="w-50 md:w-1/2 px-3 mt-8 solicitud" >
                <select class="form-select appearance-none ciudad font-select block w-full px-3 pt-2.5 pb-1.5 text-base text-gray-700
                  bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                  m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="region"
                  onChange={validarRegion}
                  ref={selectRegion}
                >
                  <option id="-1" value="-1" >Ciudad</option>
                  {regiones?.map((valor) =>
                    <><option id={valor.BODE_CODIGO} value={valor.BODE_NOMBRE}>{valor.BODE_NOMBRE}</option>
                    </>
                  )}
                </select><LeyendaError>{msgRegion}</LeyendaError>
              </div>

              <div className="w-50 md:w-1/2 px-3 mt-8 solicitud">
                <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-select text-gray-700
                  bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                  m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="solicitud"
                  onChange={validarSolicitud}
                  ref={selectSolicitud}
                >
                    <option value="-1" selected>Solicitud</option>
                    <option value="Ferias">Ferias</option>
                    <option value="Eventos">Eventos</option>
                    <option value="Auspicios">Auspicios</option>
                    <option value="Visitas comerciales/Subenir">Visitas comerciales/Subenir</option>
                </select><LeyendaError>{msgSolicitud}</LeyendaError>
              </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                color={colorDescripcionEvento}
                size="regular"
                name="descripcion_evento"
                outline={true}
                autocomplete="new-password"
                placeholder="Descripción Evento"
                className=""
                value={descripcion_evento}
                maxLength={200}
                defaultValue={""}
                onChange={validarDescripcionEvento}
                ref={inputDescripcionEvento}
              /><LeyendaError>{msgDescripcionEventos}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
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

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select fecha">
              <InputNS
                type="date"
                color={colorFechaIncio}
                size="regular"
                name="fecha_inicio"
                outline={true}
                value={fecha_inicio}
                maxLength={8}
                autoComplete="off"
                defaultValue={fecha_inicio}
                placeholder="Fecha Inicio"
                className="fecha"
                min={objvalidar.desactivarFechasAnteriores()}
                onChange={validarFechaInicio}
                ref={inputFechaInicio}
              /><LeyendaError>{msgFechaInicio}</LeyendaError><LeyendaMensaje>{msgFechaInicio3dias}</LeyendaMensaje>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select fecha">
              <InputNS
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
                min={objvalidar.desactivarFechasAnteriores()}
                onChange={validarFechaFin}
                ref={inputFechaFin}
              /><LeyendaError>{msgFechaFin}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select fecha">
              <InputNS
                type="time"
                color={colorHora}
                size="regular"
                name="hora"
                outline={true}
                maxLength={8}
                autoComplete="off"
                defaultValue={hora}
                placeholder="Hora Evento"
                className=""
                onChange={validarHora}
                ref={inputFechaFin}
              /><LeyendaError>{msgHora}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                label="Disabled" 
                color={colorProyeccion}
                size="regular"
                name="proyeccion_venta"
                outline={true}
                autoComplete="new-password"
                defaultValue={""}
                placeholder="Proyección Ventas (BS)"
                class="placeholder-red"
                maxLength={40}
                value={proyeccion_venta}
                onChange={validarProyeccionVenta}
                ref={inputProyeccionVenta}
              />
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                color={colorPersonaSolicita}
                size="regular"
                name="persona_solicita"
                id="persona_solicita"
                outline={true}
                // autocomplete="new-password"
                placeholder="Persona que Solicita"
                className=""
                value={persona_solicita}
                maxLength={100}
                onChange={validarPersonaSolicita}
                ref={inputPersonaSolicita}
              /><LeyendaError>{msgPersonaSolicita}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
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
                onChange={validarPersonaResponsable}
                ref={inputPersonaResponsable}
              /><LeyendaError>{msgPersonaResponsable}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                color={colorContacto}
                size="regular"
                // name="celular"
                name="contacto"
                outline={true}
                value={contacto}
                maxLength={8}
                // autoComplete="off"
                placeholder="Celular de Contacto"
                className=""
                onChange={validarContacto}
                ref={inputContacto}
              /><LeyendaError>{msgContacto}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                color={colorPdestacar}
                size="regular"
                name="productos_destacar"
                outline={true}
                autocomplete="new-password"
                placeholder="Productos a promover"
                className=""
                value={pdestacar}
                maxLength={200}
                defaultValue={""}
                onChange={validarPdestacar}
                ref={inputPdestacar}
              /><LeyendaError>{msgPdestacar}</LeyendaError>
            </div>
            <div className="w-50 md:w-1/2 px-3 mt-8 font-select ciudad">
              <InputNS
                type="text"
                color={colorCorreo}
                size="regular"
                name="correo"
                outline={true}
                autocomplete="new-password"
                placeholder="Correo de Solicitante"
                className=""
                value={correo}
                maxLength={200}
                defaultValue={""}
                onChange={validarCorreo}
                ref={inputCorreo}
              /><LeyendaError>{msgCorreo}</LeyendaError>
            </div>
          </div>

        </form>
          </div>
        </div>
}