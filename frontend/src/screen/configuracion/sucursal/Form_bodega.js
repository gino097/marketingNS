import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import CreateCompanySVG from "../../../assets/recursos_proyecto/imagenes/crear_sucursal.svg";
import Input from "@material-tailwind/react/Input";
import {
  clearData,
  createBodega,
  updateBodega,
  listBodegaDetails,
  listaRegistros,
} from "../../../actions/configuracion/bodegaActions";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form_Bodega = (props) => {
  const {
    showModalForm,
    setShowModalForm,
    titulo,
    data,
    setData,
    setUpdateKey,
    pageCurrent,
    pageNumberCurrent,
    id_permitido,
    keyword,
  } = props;
  const dispatch = useDispatch();
  const Bodega = (credenciales) =>
    dispatch(listBodegaDetails(credenciales));

  const [initialRender, setInitialRender] = useState(true);

  const bodegas = useSelector((state) => state.bodegaDetails);
  const createCoo = (credenciales) => dispatch(createBodega(credenciales));
  const updateCoo = (credenciales) =>{dispatch(updateBodega(credenciales));
    }
  const [nombre, setNombre] = useState(bodegas.bodega.BODE_NOMBRE);
  const [observacion, setObservacion] =useState(bodegas.bodega.BODE_OBSERV);
  const [validacion, setValidacion] = useState(false);
  const inputNombr = useRef(null);
  const inputObservacion = useRef(null);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    if (data.codigo) {
      Bodega(data.codigo);
    }
    setInitialRender(false);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);

  const handleSubmit = async () => {
    if (titulo === "Crear Ciudad") { // TIENE QUE SER IGUAL AL FORMULARIO
      createCoo({
        nombre:nombre,
        observacion:observacion,
        keyword,
        pageNumber: pageCurrent,
        pageSize: pageNumberCurrent,
        id_permitido:id_permitido,
      });
    } else {
      const bodegaUpdated = {
        id: data.codigo,
        nombre:nombre,
        observacion:observacion,
        keyword,
        pageNumber: pageCurrent,
        pageSize: pageNumberCurrent,
        id_permitido:id_permitido,
      };
      updateCoo(bodegaUpdated);
      data.codigo = 0;
    }
    
    setShowModalForm(false);
    setNombre("");
    setObservacion("");
  };
  
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
              setNombre("");
              setObservacion("");
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
            Detalle Ciudad
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                name="nombre"
                autocomplete="new-password"
                outline={true}
                placeholder="Nombre de la ciudad"
                className=""
                defaultValue={titulo==="Editar Ciudad"?(bodegas.bodega.BODE_NOMBRE):""}
                onChange={(e) => {
                  setNombre(e.currentTarget.value);
                }}
                ref={inputNombr}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                outline={true}
                autocomplete="new-password"
                defaultValue={titulo==="Editar Ciudad"?(bodegas.bodega.BODE_OBSERV):""}
                placeholder="Observación"
                className=""
                onChange={(e) => {
                  setObservacion(e.target.value);
                }}
                ref={inputObservacion}
              />
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
                setNombre("");
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
                if (nombre !== "") {
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
              {titulo === "Crear Ciudad" ? "Crear" : "Editar"}
            </Button>
          </div>
          {validacion ? <Alert /> : null}
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
            Crear Ciudad
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>En esta sección se podran crear las ciudades:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
          <ul className="list-disc text-xs px-2 ml-1 text-justify">
            <li className="py-1"><b>Paso 2.-</b> Ingresar el nombre de la ciudad</li>
            <li className="py-1"><b>Paso 1.-</b> Ingresar una observación (Opcional)</li>
          </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Bodega;