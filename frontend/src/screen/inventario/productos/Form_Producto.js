import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CreateUserSVG from "../../../assets/recursos_proyecto/imagenes/crear_usuario.svg";
import Input from "@material-tailwind/react/Input";
import convertName from './cClaveAleatoria';
import {
  InputCambiosColor,
  LeyendaError,
  MensajeErrorForm,
} from "../../../components/form/cssElementsForm";
import validator from "validator";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

import {
  listProdcutoDetails,
  listaComboRegion,
  createProducto,
  clearData,
  updateProducto,
  updateProductoImg,
} from "../../../actions/inventario/productoActions";

import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import MsgErrorForm from "../../../components/MsgErrorForm";
import MsgSuccessForm from "../../../components/MsgSuccessForm";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { process_image } from "./resizeImg";

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
    id_permitido,
  } = props;
  const dispatch = useDispatch();
  const keyword = "";
  const Producto = (credenciales) =>
    dispatch(listProdcutoDetails(credenciales));
  useEffect(() => {
    dispatch(listaComboRegion({}));
  }, [dispatch, keyword]);

  const [initialRender, setInitialRender] = useState(true);

  const companies = useSelector((state) => state.productoDetails);
  const createPro = (credenciales, parametros) => dispatch(createProducto(credenciales, parametros));
  const updatePro = (credenciales) => dispatch(updateProducto(credenciales));
  const updateImg = (credenciales, parametros) => dispatch(updateProductoImg(credenciales, parametros));
  const [codigoP, setcodigoP] = useState("");
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ciudad, setRegion] = useState("");
  const [tipoItem, setTipoItem] = useState("");
  const [validacion, setValidacion] = useState(false);
  const [foto, setFoto] = useState("");
  
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [filenameF, setFileNameF] = useState("");

  useEffect(() => {
    if (titulo === "Modificar Item") {
      setNombre(companies.producto.MATE_NOMBRE);
      setStock(companies.producto.MATE_STOCK);
      setcodigoP(companies.producto.MATE_CODIGOP);

    }
  }, [setNombre, setStock, setcodigoP, companies, titulo]);

  //COMBO REGIONES
  const result_region = useSelector((state) => state.regionList);
  const regiones = result_region["regiones"];

  //Para mensajes que salen en los input en caso de que tengan error
  const [msgNombres, setMsgNombres] = useState(
    titulo === "Crear Item" ? " " : ""
  );
  const [msgStock, setMsgStock] = useState(
    titulo === "Crear Item" ? " " : ""
  );
  const [msgCategoria, setMsgCategoria] = useState(
    titulo === "Crear Item" ? " " : ""
  );;
  const [msgRegion, setMsgRegion] = useState(
    titulo === "Crear Item" ? " " : ""
  );;
  const [msgFoto, setMsgFoto] = useState(" ");
  const [msgTipoItem, setMsgTipoItem] = useState(
    titulo === "Crear Item" ? " " : ""
  );;
  const [msgCodigoP, setMsgCodigoP] = useState(
    titulo === "Crear Item" ? " " : ""
  );;
  //Sirve para mostrar el mensaje de error en el input de la foto
  //////////////////////////////////////////////////////////////////////

  const [colorNombres, setColorNombres] = useState("indigo");
  const [colorCategoria, setColorCategoria] = useState("indigo");
  const [colorStock, setColorStock] = useState("indigo");
  const [colorCodigoP, setColorCodigoP] = useState("indigo");

  const inputNombre = useRef(null);
  const inputCodigoP = useRef(null);
  const inputStock = useRef(null);
  const selectCategoria = useRef(null);
  const selectRegion = useRef(null);
  const selectTipoItem = useRef(null);
  const inputFoto = useRef(null); // ---------------------------------------------

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    if (data.codigo) {
      Producto(data.codigo);
    }
    setInitialRender(false);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);

  const handleSubmit = async () => {

    var parametros;
    const formData = new FormData();
    

    if (titulo === "Crear Item") {
      formData.append('file', file);
      formData.append("fileName", filenameF);
      formData.append("codigoP", codigoP);
      formData.append("nombre", nombre);
      formData.append("stock", stock);
      formData.append("categoria", categoria);
      formData.append("ciudad", ciudad);
      formData.append("tipoItem", tipoItem);
      
      //console.log(formData.entries())
      /*for (var key of formData.entries()) {//imprime el formData (no s epuede imprimir por console)
        console.log(key[0] + ', ' + key[1]);
      }*/
      parametros={
        keyword:keyword,
        pageNumber:pageNumber,
        pageNumberCurrent:pageNumberCurrent,
        id_permitido:id_permitido
      }
      createPro(formData, parametros);
    } else if (titulo === "Modificar Item") {
      const productoUpdated = {
        id: data.codigo,
        nombre: nombre,
        stock: stock,
        codigoP: codigoP,
        categoria: categoria,
        ciudad: ciudad,
        tipoItem: tipoItem,
        keyword: keyword,
        pageNumber: pageNumber,
        pageNumberCurrent: pageNumberCurrent,
        id_permitido: id_permitido,
      };
      updatePro(productoUpdated);
      data.codigo = 0;
    } else if (titulo === "Modificar imagen") {
      formData.append("filename", filenameF);
      formData.append("file", file);
      parametros={
        id:data.codigo,
        id_permitido:id_permitido,
        keyword:keyword,
        pageNumber:pageNumber,
        pageNumberCurrent:pageNumberCurrent
      }
      for (var key of formData.entries()) {//imprime el formData (no s epuede imprimir por console)
        console.log(key[0] + ', ' + key[1]);
      }
      updateImg(formData, parametros);
      data.codigo = 0;
    }
    setShowModalForm(false);
    setcodigoP("");
    setNombre("");
    setStock("");
    setTipoItem("");
    setCategoria("");
    setRegion("");
    setFile(null);
    setFile();
    setFileName("");
    setFileNameF("");
  };
  const listmsg = [
    msgCodigoP,
    msgNombres,
    msgCategoria,
    msgRegion,
    msgTipoItem,
    msgStock,
    msgFoto,
  ];
  function validarCampos() {
    if (
      validator.isEmpty(msgNombres) &&
      validator.isEmpty(msgStock) &&
      validator.isEmpty(msgCategoria) &&
      validator.isEmpty(msgRegion) &&
      validator.isEmpty(msgFoto) &&
      validator.isEmpty(msgCodigoP) &&
      validator.isEmpty(msgTipoItem)
    ) {
      return true;
    } else {
      if (!validator.isEmpty(msgNombres)) setMsgNombres("Campo invalido/vacio");
      if (!validator.isEmpty(msgStock)) setMsgStock("Campo invalido/vacio");
      if (!validator.isEmpty(msgCategoria)) setMsgCategoria("Elija opcion valida");
      if (!validator.isEmpty(msgRegion)) setMsgRegion("Elija opcion valida");
      if (!validator.isEmpty(msgTipoItem)) setMsgTipoItem("Elija opcion valida");
      if (!validator.isEmpty(msgFoto)) setMsgFoto("Campo invalido/vacio");
      if (!validator.isEmpty(msgCodigoP)) setMsgCodigoP("Campo invalido/vacio");
      return false;
    }
  }
  function validarCamposModificar() {
    if (
      validator.isEmpty(msgNombres) &&
      validator.isEmpty(msgStock) &&
      validator.isEmpty(msgCodigoP)
    ) {
      return true;
    } else {
      if (!validator.isEmpty(msgNombres)) setMsgNombres("Campo invalido/vacio");
      if (!validator.isEmpty(msgStock)) setMsgStock("Campo invalido/vacio");
      if (!validator.isEmpty(msgCodigoP)) setMsgCodigoP("Campo invalido/vacio");
      return false;
    }
  }
  function validarCamposModificarImg() {
    if (validator.isEmpty(msgFoto)) {
      return true;
    } else {
      if (!validator.isEmpty(msgFoto)) setMsgNombres("Campo invalido/vacio");
      return false;
    }
  }
  function validarCodigoP(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacioMayus(entrada, listmsg);
    setMsgCodigoP(result.msg);
    setColorCodigoP(result.color);
    setcodigoP(result.data);
    setValidacion(result.validacion);
  }
  function validarCodigoPModificar(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacioMayus(entrada, listmsg);
    setMsgCodigoP(result.msg);
    setColorCodigoP(result.color);
    setcodigoP(result.data);
    setValidacion(result.validacion);
  }
  function validarNombres(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg);
    setMsgNombres(result.msg);
    setColorNombres(result.color);
    setNombre(result.data);
    setValidacion(result.validacion);
  }
  function validarStock(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosEnteros(entrada, listmsg);
    setMsgStock(result.msg);
    setColorStock(result.color);
    setStock(result.data);
    setValidacion(result.validacion);
  }
  function validarNombresModificar(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarVacio(entrada, listmsg);
    setMsgNombres(result.msg);
    setColorNombres(result.color);
    setNombre(result.data);
    setValidacion(result.validacion);
  }
  function validarStockModificar(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarNumerosEnteros(entrada, listmsg);
    setMsgStock(result.msg);
    setColorStock(result.color);
    setStock(result.data);
    setValidacion(result.validacion);
  }
  function validarCategoria(event) {
    const entrada = event;
    //const listCategoria = event.split(',');
    var result = objvalidar.validarMultiSelect(entrada, listmsg);
    setMsgCategoria(result.msg);
    setCategoria(result.data);
    setValidacion(result.validacion);
  }
  function validarRegion(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg);
    setMsgRegion(result.msg);
    setRegion(result.data);
    setValidacion(result.validacion);
  }
  function validarTipoItem(event) {
      const entrada = event.target.value;
      var result = objvalidar.validarCombo(entrada, "-1", listmsg);
      setMsgTipoItem(result.msg);
      setTipoItem(result.data);
      setValidacion(result.validacion);
    }

  const saveFile = (e) => {
    var result = objvalidar.validarArchivo(e, listmsg);
    setFile(result.file);
    const aux = convertName.randomico(32, 2) + (result.filename.replaceAll(" ",""));
    setFileNameF(aux);

    setFileName(aux);
    setMsgFoto(result.msg);
  };


  const optionsSoli = [
    { label: "Ferias", value: "Ferias" },
    { label: "Eventos", value: "Eventos" },
    { label: "Auspicios", value: "Auspicios" },
    { label: "Visitas comerciales/Subenir", value: "Visitas comerciales/Subenir" },
  ];

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
              setcodigoP("");
              setNombre("");
              setCategoria("");
              setRegion("");
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
          <div className="flex flex-wrap -mx-3 mb-6">
            {titulo === "Crear Item" || titulo === "Modificar Item" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <Input
                  type="text"
                  color={colorCodigoP}
                  size="regular"
                  name="codigo"
                  outline={true}
                  placeholder="Codigo"
                  className=""
                  autocomplete="new-password"
                  value={codigoP}
                  maxLength={500}
                  defaultValue={""}
                  onChange={
                    titulo === "Crear Item"
                      ? validarCodigoP
                      : validarCodigoPModificar
                  }
                  ref={inputCodigoP}
                />
                <LeyendaError>{msgCodigoP}</LeyendaError>
              </div>
            ) : null}
            {titulo === "Crear Item" || titulo === "Modificar Item" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <Input
                  type="text"
                  color={colorNombres}
                  size="regular"
                  name="nombre"
                  outline={true}
                  placeholder="Nombre"
                  className=""
                  autocomplete="new-password"
                  value={nombre}
                  maxLength={500}
                  defaultValue={""}
                  onChange={
                    titulo === "Crear Item"
                      ? validarNombres
                      : validarNombresModificar
                  }
                  ref={inputNombre}
                />
                <LeyendaError>{msgNombres}</LeyendaError>
              </div>
            ) : null}
            {titulo === "Crear Item" || titulo === "Modificar Item" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <Input
                  type="text"
                  color={colorStock}
                  size="regular"
                  name="stock"
                  outline={true}
                  placeholder="Stock"
                  className=""
                  autocomplete="new-password"
                  value={stock}
                  maxLength={500}
                  defaultValue={""}
                  onChange={
                    titulo === "Crear Item"
                      ? validarStock
                      : validarStockModificar
                  }
                  ref={inputStock}
                />
                <LeyendaError>{msgStock}</LeyendaError>
              </div>
            ) : null}
            {titulo !== "Modificar imagen" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <MultiSelect
                  class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="categoria"
                  color={colorCategoria}
                  onChange={validarCategoria}
                  ref={selectCategoria}
                  placeholder={"Categoria"}
                  value={categoria}
                  //disabled={titulo === "Modificar imagen" ? true : false}
                  options={optionsSoli}
                />
                <LeyendaError>{msgCategoria}</LeyendaError>
              </div>
            ) : null}
            {titulo !== "Modificar imagen" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <select
                  class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="region"
                  onChange={validarRegion}
                  //disabled={titulo==="Modificar producto"?true:false}
                  ref={selectRegion}
                >
                  <option value={/*titulo==="Modificar Item"?companies.producto.MATE_CODIGOP:*/"-1"} selected>
                    Ciudad
                  </option>
                  {regiones?.map((valor) => (
                    <>
                      <option id={valor.BODE_CODIGO} value={valor.BODE_NOMBRE}>
                        {valor.BODE_NOMBRE}
                      </option>
                    </>
                  ))}
                </select>
                <LeyendaError>{msgRegion}</LeyendaError>
              </div>
            ) : null}
            {titulo !== "Modificar imagen" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                <select
                  class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="tipo_item"
                  onChange={validarTipoItem}
                  //disabled={titulo==="Modificar producto"?true:false}
                  ref={selectTipoItem}
                >
                  <option value="-1" selected>
                    Tipo de item
                  </option>
                    <>
                      <option value="stock">Merchandising / Papelería</option>
                      <option value="fecha">Material de marca</option>
                    </>
                </select>
                <LeyendaError>{msgTipoItem}</LeyendaError>
              </div>
            ) : null}
            {titulo === "Crear Item" || titulo === "Modificar imagen" ? (
              <div className="w-50 md:w-1/2 px-3 mt-8">
                {/*<input
              type="file"
              // color={colorNombres}
              name="foto"
              id="foto"
              //accept="image/jpg, image/jpeg"
              className=""
              onChange={(e) => validarFoto(e)}>
              </input>
              <LeyendaError>{msgRegion}</LeyendaError>*/}
                <Input
                  type="file"
                  accept="image/*"
                  // color={colorNombres}
                  // size="regular"
                  name="foto"
                  id="foto"
                  //accept="image/jpg, image/jpeg"
                  // outline={true}
                  className=""
                  // autocomplete="new-password"
                  // defaultValue={""}
                  onChange={saveFile}
                  ref={inputFoto}
                />
                <LeyendaError>{msgFoto}</LeyendaError>
              </div>
            ) : null}
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
                setcodigoP("");
                setNombre("");
                setStock("");
                setCategoria("");
                setRegion("");
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
                if (titulo === "Modificar Item") {
                  if (validarCamposModificar() === true) await handleSubmit();
                  else {
                    setValidacion(false);
                  }
                }
                if (titulo === "Modificar imagen") {
                  if (validarCamposModificarImg() === true)
                    await handleSubmit();
                  else {
                    setValidacion(false);
                  }
                } else {
                  if (validarCampos() === true) {
                    await handleSubmit();
                    //setValidacion(true);
                  } else {
                    setValidacion(false);
                  }
                }

                setUpdateKey(new Date());
              }}
            >
              {titulo === "Crear Item" ? "Crear" : "Editar"}
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
            Campos de nuevo Item
          </h2>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
          <ul className="list-disc text-xs px-2 ml-1 text-justify">
            {titulo==="Crear Item" || titulo==="Modificar Item"?<li className="py-1"><b>Codigo.-</b> Codigo personalizado para el Item</li>:null}
            {titulo==="Crear Item" || titulo==="Modificar Item"?<li className="py-1"><b>Nombre.-</b> Nombre del Item</li>:null}
            {titulo==="Crear Item" || titulo==="Modificar Item"?<li className="py-1"><b>Stock.-</b> Stock del Item</li>:null}
            {titulo==="Crear Item"?<li className="py-1"><b>Categoria.-</b> Categorias del Item (seleccionar minimo una categoria)</li>:null}
            {titulo==="Crear Item" || titulo==="Modificar imagen"?<li className="py-1"><b>Imagen.-</b> Imagen del Item</li>:null}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Usuarios;
