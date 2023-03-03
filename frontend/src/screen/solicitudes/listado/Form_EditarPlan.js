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
  const Dispositvo = (credenciales) => dispatch(listDispositivosDetails(credenciales));
  const [initialRender, setInitialRender] = useState(true);
  const dispositivos = useSelector((state) => state.dispositivosDetails);
  
  const inputObservacion = useRef(null);
  //const [vEditable, setvEditable] = useState(dispositivos.dispositivos.SOLI_VALORX>0?true:false);
  
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  

  /*useEffect(() => {
    if (data.codigo!==null) {
      Dispositvo(data.codigo);
    }
    setInitialRender(false);
  }, []);*/
  useEffect(() => {
    /*observacion="";
    planes=-1;
    valor="";*/
    dispatch(listDispositivosDetails(data.codigo));
    //setInitialRender(false);
  }, [dispatch, data]);
  useEffect(() => {
    return () => {
      dispatch(clearData());
    };
  }, [initialRender]);
  
  const updateDispo = (credenciales) => dispatch(updateDispositivos(credenciales));
  var [aprobar, setAprobar] = useState();

  const handleSubmit = async () => {
    const dispositivoUpdated = {
      id: data.codigo,
      aprobar: aprobar,
      keyword,
      pageNumber: pageCurrent,
      pageSize: pageNumberCurrent,
      id_permitido: id_permitido,
    };
    updateDispo(dispositivoUpdated);
    data.codigo = 0;
    setShowModalForm(false);
    setAprobar("");
    aprobar=-1;
  };
  const[msgAprobar, setMsgAprobar]=useState(" ");
  const[colorPlanes, setColorPlanes]=useState("indigo");
  const listmsg = [msgAprobar];
  function validarCampos() {
    if (validator.isEmpty(msgAprobar)) {
      return true
    } else {
      if (!validator.isEmpty(msgAprobar)) setMsgAprobar("Elija opcion valida");
      return false;
    }
  }

  function validarPlan(event) {
    const entrada = event.target.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg);
    
    setMsgAprobar(result.msg);
    setColorPlanes(result.color);
    setAprobar(result.data);
    aprobar=result.data;
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
              setAprobar("");
              aprobar=-1;
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
            Aprobar/Rechazar Solicitud
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-75 md:w-2/3 px-3 mt-8">
            <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="aprobar"
                value={aprobar}
                onChange={validarPlan}
              >
                <option value="-1" selected>APROBAR/RECHAZAR</option>
                    <option value="APROBADO">APROBADO</option>
                    <option value="RECHAZADO">RECHAZADO</option>
              </select><LeyendaError>{msgAprobar}</LeyendaError>
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
                setAprobar("");
                aprobar=-1;
                //setData({ ...data, codigo: null });
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
              //disabled={dispositivos.dispositivos.SOLI_VALORX>0?true:false}
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
            Aprobar Solicitud
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>En esta sección se podrán aprobar la solicitud:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
            <ul className="list-disc text-xs px-2 ml-1 text-justify">
              <li className="py-1"><b>Paso 1.-</b> Aseleccionar si se aprueba o no el plan</li>
              <li className="py-1"><b>Paso 2.-</b> Dar click en ACTUALIZAR</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Form_Dispositivos;