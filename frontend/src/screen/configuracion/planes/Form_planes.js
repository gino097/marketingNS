import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import CreateCompanySVG from "../../../assets/recursos_proyecto/imagenes/crear_sucursal.svg";
import Input from "@material-tailwind/react/Input";
import {
  clearData,
  createPlan,
  updatePlan,
  listPlanesDetails,
  listaRegistros,
} from "../../../actions/configuracion/planesActions";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

const Form_Planes = (props) => {
  const objvalidar = require("../../../utils/Validator");
  const {
    showModalForm,
    setShowModalForm,
    titulo,
    data,
    setData,
    setUpdateKey,
    pageCurrent,
    pageNumberCurrent,
    //id_permitido,
    keyword,
  } = props;
  const dispatch = useDispatch();
  const Planes = (credenciales) =>
    dispatch(listPlanesDetails(credenciales));

  const [initialRender, setInitialRender] = useState(true);

  const planes = useSelector((state) => state.planDetails);
  const createP = (credenciales) => dispatch(createPlan(credenciales));
  const updateP = (credenciales) => dispatch(updatePlan(credenciales));

  const [nombre, setNombre] = useState(titulo==="Editar Plan"?planes.plan.PLAN_NOMBRE:"");
  const [tipo, setTipo] =useState(titulo==="Editar Plan"?planes.plan.PLAN_TIPOXX:"");
  const [siglas, setSiglas] =useState(titulo==="Editar Plan"?planes.plan.PLAN_SIGLAS:"");
  const [categoria, setCategoria] =useState(titulo==="Editar Plan"?planes.plan.PLAN_CATEGORIA:"");

  const [validacion, setValidacion] = useState(false);
  const inputNombr = useRef(null);
  const inputTipo = useRef(null);
  const inputsiglas = useRef(null);
  const inputcategoria = useRef(null);

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const onSubmit = (data) => console.log(data)
  useEffect(() => {
    if (data.codigo) {
      Planes(data.codigo);
    }
    setInitialRender(false);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);

  const handleSubmit = async () => {
    if (titulo === "Crear Plan") { // TIENE QUE SER IGUAL AL FORMULARIO
      createP({
        nombre:nombre,
        siglas: siglas,
        tipo:tipo,
        valor:0,
        categoria: categoria,
        estado: "ACTIVO",
        keyword,
        pageNumber: pageCurrent,
        pageSize: pageNumberCurrent,
      });
    } else {
      const planUpdated = {
        id: data.codigo,
        nombre: nombre,
        siglas: siglas,
        tipo: tipo,
        categoria:categoria,
        keyword,
        pageNumber: pageCurrent,
        pageSize: pageNumberCurrent,
      };
      updateP(planUpdated);
      data.codigo = 0;
    }
    setShowModalForm(false);
    setNombre("");
    setTipo("");
    setSiglas("");
    setCategoria("");
  };

  const [msgNombre, setMsgNombre] = useState(titulo === "Crear Plan"?" ":"");
  const [msgTipo, setMsgTipo] = useState(titulo === "Crear Plan"?" ":"");
  const [msgSiglas, setMsgSiglas] = useState(titulo === "Crear Plan"?" ":"");
  const [msgCategoria, setMsgCategoria] = useState(titulo === "Crear Plan"?" ":"");

  const [colorNombre, setColorNombre] = useState("indigo");
  const [colorSiglas, setColorSiglas] = useState("indigo");
  const [colorTipo, setColorTipo] = useState("indigo");
  const [colorCategoria, setColorCategoria] = useState("indigo");

  const listmsg = [msgNombre, msgTipo, msgSiglas, msgCategoria];

  function validarCampos() {
    if (validator.isEmpty(msgNombre) && validator.isEmpty(msgTipo)
      && validator.isEmpty(msgSiglas) && validator.isEmpty(msgCategoria)) {
      return true
    } else {
      if (!validator.isEmpty(msgNombre)) setMsgNombre("Campo invalido/vacio");
      if (!validator.isEmpty(msgTipo)) setMsgTipo("Elija opción valida");
      if (!validator.isEmpty(msgSiglas)) setMsgSiglas("Campo invalido/vacio");
      if (!validator.isEmpty(msgCategoria)) setMsgCategoria("Elija opción valida");
      return false;
    }
  }
  function validarNombre(event) {
    const entrada = event.target.value;
    if(titulo === "Crear Plan"){
      var result = objvalidar.validarVacio(entrada, listmsg)
      setColorNombre(result.color);
      setMsgNombre(result.msg);
      setNombre(result.data);
    }
    else{
      setNombre(entrada)
    }
  }
  function validarSiglas(event) {
    const entrada = event.target.value;
    if(titulo === "Crear Plan"){
      var result = objvalidar.validarSoloLetrasMinMax(entrada.toUpperCase(),1,3, listmsg)
      setColorSiglas(result.color);
      setMsgSiglas(result.msg);
      setSiglas(result.data);
    }
    else{
      setSiglas(entrada)
    }
  }
  function validarTipo(event) {
    const entrada = event.target.value;
    if(titulo === "Crear Plan"){
      var result = objvalidar.validarCombo(entrada, "-1", listmsg);
      setColorTipo(result.color)
      setMsgTipo(result.msg);
      setTipo(result.data);
    }
    else{
      setTipo(entrada)
    }
  }
  function validarCategoria(event) {
    const entrada = event.target.value;
    if(titulo === "Crear Plan"){
      var result = objvalidar.validarSoloLetras(entrada, listmsg)
      setColorCategoria(result.color);
      setMsgCategoria(result.msg);
      setCategoria(result.data);
    }
    else{
      setCategoria(entrada)
    }
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
              setNombre("");
              setTipo("");
              setSiglas("");
              setCategoria("");
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
            Detalles de Plan
          </h2>
          
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorNombre}
                size="regular"
                name="nombre"
                autocomplete="new-password"
                outline={true}
                maxLength={200}
                placeholder="Nombre del Plan"
                className=""
                defaultValue={titulo==="Editar Plan"?planes.plan.PLAN_NOMBRE:nombre}
                //defaultValue={titulo==="Editar Plan"?planes.plan.PLAN_NOMBRE:""}
                onChange={validarNombre}
                ref={inputNombr}
              /><LeyendaError>{msgNombre}</LeyendaError>
            </div>
            <div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color={colorSiglas}
                size="regular"
                outline={true}
                autocomplete="new-password"
                //value={siglas}
                maxLength={3}
                //defaultValue={planes.plan.PLAN_SIGLAS||""}
                defaultValue={titulo==="Editar Plan"?(planes.plan.PLAN_SIGLAS):siglas}
                placeholder="Siglas"
                className=""
                onChange={validarSiglas}
                ref={inputsiglas}
              /><LeyendaError>{msgSiglas}</LeyendaError>
            </div>
            <div className="w-full md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="genero"
                color={colorTipo}
                onChange={validarTipo}
                value={titulo==="Editar Plan"?(planes.plan.PLAN_TIPOXX):tipo}
                //defaultValue={planes.plan.PLAN_TIPOXX||""}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Corporativa">Corporativa</option>
                <option value="Familiar">Familiar</option>
                <option value="Individual">Individual</option>
              </select><LeyendaError>{msgTipo}</LeyendaError>
            </div>  
            <div className="w-full md:w-1/2 px-3 mt-8">
              <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="categoria"
                color={colorCategoria}
                onChange={validarCategoria}
                value={titulo==="Editar Plan"?(planes.plan.PLAN_CATEGORIA):categoria}
                //defaultValue={planes.plan.PLAN_TIPOXX||""}
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="SALUD FLEXIBLE">SALUD FLEXIBLE</option>
                <option value="SALUD FLEXIBLE MUNDIAL">SALUD FLEXIBLE MUNDIAL</option>
              </select><LeyendaError>{msgCategoria}</LeyendaError>
            </div>  
            {/*<div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                outline={true}
                autocomplete="new-password"
                //value={valor}
                defaultValue={titulo==="Editar Plan"?(planes.plan.PLAN_VALORX):""}
                placeholder="Valor de plan"
                className=""
                onChange={(e) => {
                  setValor(e.target.value);
                  setValidacion(true)
                }}
                ref={inputTipo}
              />
              </div>*/}
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
                setNombre("");
                setTipo("");
                setSiglas("");
                setCategoria("");
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
                  setValidacion(true);
                  setTimeout(() => {
                    setValidacion(false);
                  }, [1000]);
                }
                setUpdateKey(new Date());
              }}
            >
              {titulo === "Crear Plan" ? "Crear" : "Editar"}
            </Button>
          </div>
        </form>
        <div className="w-full p-5 pt-8">
          <img
            src={CreateCompanySVG}
            className="rounded-l-xl object-fill h-[225px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            {titulo}
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>En esta sección se podran crear/editar los planes:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
          <ul className="list-disc text-xs px-2 ml-1 text-justify">
            <li className="py-1"><b>Paso 1.-</b> Ingresar el nombre del plan</li>
            <li className="py-1"><b>Paso 2.-</b> Ingresar las siglas del plan</li>
            <li className="py-1"><b>Paso 3.-</b> Seleccionar tipo de plan</li>
            <li className="py-1"><b>Paso 4.-</b> Ingresar la categoria del producto</li>
          </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Planes;