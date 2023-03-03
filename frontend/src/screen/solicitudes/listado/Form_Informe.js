import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import UpdateDeviceSVG from "../../../../src/assets/recursos_proyecto/imagenes/carga_individual.svg";
import Input from "@material-tailwind/react/Input";
import validator from 'validator';

import { LeyendaError } from "../../../components/form/cssElementsForm";
import {
  clearData,
  updateDispositivos,
  listDispositivosDetails,
  listaRegistros,
} from "../../../actions/solicitudes/dispositivoActions";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

import Alert from "../../../components/Alert";
import { useDispatch, useSelector } from "react-redux";

const Form_Dispositivos = (props) => {

  

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
  const Dispositvo = (credenciales) =>
    dispatch(listDispositivosDetails(credenciales));

  const [initialRender, setInitialRender] = useState(true);

  const dispositivos = useSelector((state) => state.dispositivosDetails);
  const updateDispo = (credenciales) => dispatch(updateDispositivos(credenciales));
  const [funcionamiento, setFuncionamiento] = useState("");
  const [observacion, setObservacion] = useState("");
  const [validacion, setValidacion] = useState(false);
  const selectFuncionamiento = useRef(null);
  const inputObservacion = useRef(null);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const onSubmit = (data) => console.log(data)
  const [msgFuncionamiento, setMsgFuncionamiento] = useState("");

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
      funcionamiento: (funcionamiento===undefined?dispositivos.dispositivos.DISP_VALFUN:funcionamiento),
      observacion: (observacion===undefined?dispositivos.dispositivos.DISP_OBSERV:observacion),
    };
    updateDispo(dispositivoUpdated);
    data.codigo = 0;

    dispatch(listaRegistros({
      keyword,
      pageNumber: pageCurrent,
      pageSize: pageNumberCurrent,
      id_permitido: id_permitido,
    }));

    setShowModalForm(false);
    setFuncionamiento("");
    setObservacion("");
    setMsgFuncionamiento(" ");
  };

  //PARA EL SELECT DE FUNCIONAMIENTO
  var validar_funcionamiento = dispositivos.dispositivos.DISP_VALFUN;
  var funcionamiento_sino = "false";
  var funcionamiento_si = "false";
  var funcionamiento_no = "false";

  if ((validar_funcionamiento === "SI") || (validar_funcionamiento === "Si") || (validar_funcionamiento === "sI") || (validar_funcionamiento === "si")) {
    funcionamiento_si = "true";
  } else if ((validar_funcionamiento === "NO") || (validar_funcionamiento === "No") || (validar_funcionamiento === "nO") || (validar_funcionamiento === "no")) {
    funcionamiento_no = "true";
  } else {
    funcionamiento_sino = "true";
  }

  //VALIDACIONES
  const listmsg = [msgFuncionamiento];
  function validarCampos() {
    if (validator.isEmpty(msgFuncionamiento)) {
      return true;
    } else {
      if (!validator.isEmpty(msgFuncionamiento)) setMsgFuncionamiento("Elija opcion valida");
      return false;
    }
  }

  function validarFuncionamiento(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "X", listmsg)
    setMsgFuncionamiento(result.msg);
    setFuncionamiento(result.data);
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
              setFuncionamiento("");
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
            Detalles dispositivo
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-25 md:w-1/3 px-3 mt-8">
              <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
              bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
              m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="funcionamiento"
                // onChange={(e) => {
                //   setFuncionamiento(e.currentTarget.value);
                // }}
                onChange={validarFuncionamiento}
                value={funcionamiento}
                defaultValue={dispositivos.dispositivos.DISP_VALFUN || ""}
                ref={selectFuncionamiento}
              >
                <option value="X" selected={funcionamiento_sino}>Funcionamiento</option>
                <option value="SI" selected={funcionamiento_si}>SI</option>
                <option value="NO" selected={funcionamiento_no}>NO</option>
              </select><LeyendaError>{msgFuncionamiento}</LeyendaError>
            </div>
            <div className="w-75 md:w-2/3 px-3 mt-8">
              <Input
                type="text"
                color="indigo"
                size="regular"
                outline={true}
                autocomplete="new-password"
                defaultValue={dispositivos.dispositivos.DISP_OBSERV||""}
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
                setFuncionamiento("");
                setObservacion("");
                setMsgFuncionamiento(" ");
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
                // if (funcionamiento !== "") {
                //   await handleSubmit();
                // } else {
                //   setValidacion(true);
                //   setTimeout(() => {
                //     setValidacion(false);
                //   }, [1000]);
                // }

                if (validarCampos() === true) {

                  await handleSubmit();
                } else {
                  setValidacion(true);
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
            Editar Dispositivo
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>En esta sección se podrán editar los siguientes datos:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
            <ul className="list-disc text-xs px-2 ml-1 text-justify">
              <li className="py-1"><b>Paso 1.-</b> Seleccionar si el dispositivo funciona o no</li>
              <li className="py-1"><b>Paso 2.-</b> Ingresar una observación (Opcional)</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form_Dispositivos;