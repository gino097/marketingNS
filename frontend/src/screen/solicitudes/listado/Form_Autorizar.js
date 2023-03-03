import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import UpdateDeviceSVG from "../../../../src/assets/recursos_proyecto/imagenes/carga_individual.svg";
import Input from "@material-tailwind/react/Input";
import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";
import {
  clearData,
  updateEmisionPoliza,
  listDispositivosDetails,
} from "../../../actions/solicitudes/dispositivoActions";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import Alert from "../../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
const Form_Autorizar = (props) => {
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
    id_permitido,
    keyword,
  } = props;
  const dispatch = useDispatch();
  const Dispositvo = (credenciales) => dispatch(listDispositivosDetails(credenciales));
  const [initialRender, setInitialRender] = useState(true);
  const dispositivos = useSelector((state) => state.dispositivosDetails);
  const updateDispo = (credenciales) => dispatch(updateEmisionPoliza(credenciales));
  const [observacion, setObservacion] = useState(dispositivos.dispositivos.SOLI_PLANOBSERVACION);
  const [valor, setValor] = useState(dispositivos.dispositivos.SOLI_VALORX);
  const [planes, setPlanes] = useState(dispositivos.dispositivos.PLAN_CODIGO||-1);
  const inputObservacion = useRef(null);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  

  useEffect(() => {
    if (data.codigo) {
      Dispositvo(data.codigo);
    }
    setInitialRender(false);
  }, []);
  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);

  const handleSubmit = async () => {
    const dispositivoUpdated = {
      id: data.codigo,
      observacion: (observacion===undefined?dispositivos.dispositivos.SOLI_PLANOBSERVACION:observacion),
      keyword,
      pageNumber: pageCurrent,
      pageSize: pageNumberCurrent,
      id_permitido: id_permitido,
    };
    updateDispo(dispositivoUpdated);
    data.codigo = 0;

    setShowModalForm(false);
    setObservacion("");
  };
  function validarCampos() {
    return true;
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
        <form className="shadow-xl w-[90%] mx-auto mt-6 p-5 bg-white col-span-2 w-full">
          <h2 className="text-gray-700 text-lg font-bold mb-2">
          Enviar a Emisión Automática
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-100 md:w-2/3 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                outline={true}
                autocomplete="new-password"
                defaultValue={dispositivos.dispositivos.SOLI_PLANOBSERVACION||""}
                placeholder="Observación (Opcional)"
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
                }
                setUpdateKey(new Date());
              }}
            >
              Actualizar
            </Button>
          </div>
        </form>
        <div className="w-full p-5 pt-8">
          <img
            src={UpdateDeviceSVG}
            className="rounded-l-xl object-fill h-[225px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Enviar a Emisión Automática
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>En esta sección se podrán cambiar el estado de Emisión:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
            <ul className="list-disc text-xs px-2 ml-1 text-justify">
              <li className="py-1"><b>Paso 1.-</b> Ingresar una observación</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Form_Autorizar;