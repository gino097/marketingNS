import MasterStepSVG from "../../../src/images/logo.png";
import { useContext, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from 'react-loading-skeleton'

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Checkbox from '@mui/material/Checkbox';

import Form_Solicitud from "./Form_Solicitud"


import {
    listaRegistros
  } from "../../actions/inventario/productoActions";
  import {
    listCooperativaDetails,
    listaComboPerfil,
    listaComboSupervisor,
    listaComboRegion,
    createCooperativa,
    clearData,
    updateCooperativa
  } from "../../actions/soliMateriales/solicitudActions";
import validator from 'validator';
import { LeyendaError } from "../../components/form/cssElementsForm";

export default function DatosDeclaracion() {

    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fechaF = anio + "-" + (Number(mes) <= 9 ? mes = "0" + mes : mes) + "-" + (Number(dia) <= 9 ? dia = "0" + dia : dia);

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [materiales, setMateriales]=useState([]);
    const [id_permitido,setIds]=useState([14, 15, 25]);
    const [typeModal, setTypeModal] = useState({
        cabecera: "",
        cuerpo: "",
        confirmacion: "",
        codigo: null,
        funcion: "eliminar",
      });
    
    const [showModal, setShowModal] = useState(false);
    const [showModalForm, setShowModalForm] = useState(false);
    const [showModalTitulo, setShowModalTitulo] = useState("");
    const result = useSelector((state) => state.productoList);
    const { pages, productos } = result;

    useEffect(() => {
        dispatch(listaRegistros({
          keyword,
          id_permitido: id_permitido
        }));
    
      }, [dispatch, keyword, id_permitido]);
    

    const objvalidar = require("../../utils/Validator");

    const [validacion , setValidacion] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
  const [msgFechaInicio, setMsgFechaInicio] = useState(" ");
  const [msgFechaFin, setMsgFechaFin] = useState(" ");
  const [msgHora, setMsgHora] = useState(" ");
  const [msgRegion, setMsgRegion] = useState(" ");

  //////////////////////////////////////////////////////////////////////
  const [colorRegion, setColorRegion] = useState("indigo");
  const [colorSolicitud, setcolorSolicitud] = useState("indigo");
  const [colorDescripcionEvento, setColorDescripcionEvento] = useState("indigo");
  const [colorObjetivoEvento, setColorObjetivoEvento] = useState("indigo");
  const [colorPersonaSolicita, setColorPersonaSolicita] = useState("indigo");
  const [colorPersonaResponsable, setColorPersonaResponsable] = useState("indigo");
  const [colorContacto, setColorContacto] = useState("indigo");

  const [colorAprobado, setColorAprobado] = useState("indigo");

  const [colorProyeccion, setColorProyeccionVenta] = useState("indigo");
  const [colorFechaIncio, setColorFechaIncio] = useState("indigo")
  const [colorFechaFin, setColorFechaFin] = useState("indigo")
  const [colorHora, setColorHora] = useState("indigo")


  const inputPersonaSolicita = useRef(null);
  const inputPersonaResponsable = useRef(null);
  const inputContacto = useRef(null);

  const inputDescripcionEvento= useRef(null);
  const inputObjetivoEvento= useRef(null)

  
  const inputProyeccionVenta = useRef(null);
  const inputFechaInicio = useRef(null);
  const inputFechaFin = useRef(null);
  const inputFechaHora = useRef(null);
  const selectSolicitud = useRef(null);
  const selectAprobado = useRef(null);

  const selectRegion = useRef(null);
  const handleSubmit = async () => {
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
        id_permitido
      });
      const cooperativaUpdated = {
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
        id_permitido: id_permitido
      };
      updateCoo(cooperativaUpdated);
    
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
    const listmsg = [msgDescripcionEventos,msgObjetivoEventos,msgPersonaSolicita,msgPersonaResponsable, msgSolicitud,msgRegion
        , msgFechaInicio,msgFechaFin,msgHora, msgContacto];
      function validarCampos() {
        //console.log("-"+msgRegion+"-");
        if (validator.isEmpty(msgDescripcionEventos) && validator.isEmpty(msgObjetivoEventos)
            && validator.isEmpty(msgPersonaSolicita) && validator.isEmpty(msgPersonaResponsable)
            && validator.isEmpty(msgSolicitud)  && validator.isEmpty(msgRegion)
            && validator.isEmpty(msgFechaInicio)&& validator.isEmpty(msgFechaFin)
            && validator.isEmpty(msgHora)&& validator.isEmpty(msgContacto)) {
          return true
        } else {
          if (!validator.isEmpty(msgDescripcionEventos)) {setMsgDescripcionEvento("Campo invalido/vacio"); setColorDescripcionEvento("red");}
          if (!validator.isEmpty(msgObjetivoEventos)) {setMsgObjetivoEvento("Campo invalido/vacio"); setColorObjetivoEvento("red");}
    
          if (!validator.isEmpty(msgPersonaSolicita)) {setMsgPersonaSolicita("Campo invalido/vacio"); setColorPersonaSolicita("red");}
          if (!validator.isEmpty(msgPersonaResponsable)) {setMsgPersonaResponsable("Campo invalido/vacio"); setColorPersonaResponsable("red");}
          if (!validator.isEmpty(msgSolicitud)) {setMsgSolicitud("Elija opcion valida"); setcolorSolicitud("red");}
          if (!validator.isEmpty(msgRegion)) {setMsgRegion("Elija opcion valida"); setColorRegion("red");}
            
          if (!validator.isEmpty(msgFechaInicio)) {setMsgFechaInicio("Campo invalido/vacio"); setColorFechaIncio("red");}
          if (!validator.isEmpty(msgContacto)) {setMsgContacto("Campo invalido/vacio"); setColorContacto("red");}
          if (!validator.isEmpty(msgFechaFin)) {setMsgFechaFin("Campo invalido/vacio"); setColorFechaFin("red");}
          if (!validator.isEmpty(msgHora)) {setMsgHora("Campo invalido/vacio"); setColorHora("red");}
    
          return false;
        }
      }
    
      function validarDescripcionEvento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, 1, 4, listmsg)
        setMsgDescripcionEvento(result.msg);
        setColorDescripcionEvento(result.color);
        setDescripcionEvento(result.data);
        setValidacion(result.validacion);
      }
    
      function validarObjetivoEvento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, 1, 4, listmsg)
        setMsgObjetivoEvento(result.msg);
        setColorObjetivoEvento(result.color);
        setObjetivoEvento(result.data);
        setValidacion(result.validacion);
      }
    
    
      function validarPersonaSolicita(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, 1, 4, listmsg)
        setMsgPersonaSolicita(result.msg);
        setColorPersonaSolicita(result.color);
        setPersonaSolicita(result.data);
        setValidacion(result.validacion);
      }
    
      function validarPersonaResponsable(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, 1, 4, listmsg)
        setMsgPersonaResponsable(result.msg);
        setColorPersonaResponsable(result.color);
        setPersonaResponsable(result.data);
        setValidacion(result.validacion);
      }
    
      function validarContacto(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosEnteros(entrada, 1, 4, listmsg)
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
        var result = objvalidar.validarFechaInicio(entrada,fechaF, listmsg);
        setMsgFechaInicio(result.msg);
        setColorFechaIncio(result.color);
        setFechaInicio(result.data);
        setFechaFin();
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
        var result = objvalidar.validarCombo(entrada, "-1", listmsg);
        setcolorSolicitud(result.color)
        setMsgSolicitud(result.msg);
        setSolicitud(result.data);
        setValidacion(result.validacion);
      }
    
      function validarAprobacion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "X", listmsg)
        setMsgAprobado(result.msg);
        setAprobado(result.data);
        setValidacion(result.validacion);
      }
    
      function validarRegion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setColorRegion(result.color);
        setMsgRegion(result.msg);
        setRegion(result.data);
        setValidacion(result.validacion);
      }
    return <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0 bg-[#025B93]">
    <div className="w-[90%] mx-auto col-span-3 h-100 bg-white">
    <div>
          <img
            src={MasterStepSVG}
            className="rounded-l-xl h-[100px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
        </div>
        <div className='flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">SOLICITUD DE MATERIALES</h1>
        
    <div className="text-justify mt-3">
          <form className="shadow-xl w-[90%] mx-auto mt-6 p-5 bg-white col-span-2 h-fit w-full">
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Detalles de Solicitud
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
                    <><option value={valor.BODE_NOMBRE}>{valor.BODE_NOMBRE}</option>
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
                    <option value="Ferias">Ferias</option>
                    <option value="Eventos">Eventos</option>
                    <option value="Auspicios">Auspicios</option>
                    <option value="Visitas comerciales/Subenir">Visitas comerciales/Subenir</option>
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
                maxLength={200}
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
                defaultValue={fecha_inicio}
                placeholder="Fecha Inicio"
                className=""
                min={objvalidar.desactivarFechasAnteriores()}
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
                min={objvalidar.desactivarFechasAnteriores()}
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
              />
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
                onChange={validarPersonaResponsable}
                ref={inputPersonaResponsable}
              /><LeyendaError>{msgPersonaResponsable}</LeyendaError>
            </div>

            <div className="w-50 md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorContacto}
                size="regular"
                // name="celular"
                name="contacto"
                outline={true}
                value={contacto}
                maxLength={8}
                // autoComplete="off"
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
              }}
            >
              {"Enviar Solicitud"}
            </Button>
          </div>
          {/*validacion ? <MsgSuccessForm />:<MsgErrorForm />*/}
        </form>
            <CardBody>
            <div className=" overflow-x-auto border border-gray-50 rounded-md ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Nombre
                    </th>
                    <th className="w-1/12 px-2 text-center text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!productos ? <tr>
                    <td><Skeleton count={5} height={40} /></td>
                    <td><Skeleton count={5} height={40} /></td>
                  </tr> : null}
                  {productos?.map((valor) => {

                    return (
                      <tr className="hover:bg-violet-200" key={valor.COMP_CODIGO}>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                          {valor.MATE_NOMBRE}
                        </td>

                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left px-3 py-2" id={"producto"+valor.MATE_CODIGO}>
                          <div className=" space-x-2 flex flex-row justify-center">
                            {
                            <Checkbox {...label} />}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardBody>

          <Form_Solicitud
            showModalForm={showModalForm}
            setShowModalForm={setShowModalForm}
            titulo={showModalTitulo}
            data={typeModal}
            setData={setTypeModal}
            keyword={keyword}
            id_permitido={id_permitido}
          />
          
          </div>
        </div>
        </div>
        </div>
          }
