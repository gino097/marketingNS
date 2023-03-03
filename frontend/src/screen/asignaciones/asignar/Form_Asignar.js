import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CreateUserSVG from "../../../assets/recursos_proyecto/imagenes/crear_usuario.svg";
import Input from "@material-tailwind/react/Input";
import { InputCambiosColor, LeyendaError, MensajeErrorForm } from "../../../components/form/cssElementsForm"
import validator from 'validator';
import Select from "react-select";

import {
  listCooperativaDetails,
  createCooperativa,
  clearData,
  updateCooperativa
} from "../../../actions/seguridad/usuarioActions";
import { listaComboUsuarios } from "../../../actions/seguridad/usuarioActions";

import { 
  listaComboPlanes,
  createAsignacion
 } from "../../../actions/planes/planesActions";

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
    //id_permitido
  } = props;
  const dispatch = useDispatch();
  const keyword = "";
  const Cooperativa = (credenciales) =>
    dispatch(listCooperativaDetails(credenciales));

  const [initialRender, setInitialRender] = useState(true);

  const companies = useSelector((state) => state.cooperativaDetails);
  const createCoo = (credenciales) => dispatch(createCooperativa(credenciales));
  const createAsig = (credenciales) => dispatch(createAsignacion(credenciales));
  const updateCoo = (credenciales) => dispatch(updateCooperativa(credenciales));
  const [usuario, setUsuario] = useState("");
  const [plan, setPlan] = useState("");
  const [observacion, setObservacion] = useState("");
  const [validacion, setValidacion] = useState(false);

  //Para mensajes que salen en los input en caso de que tengan error
  const [msgUsuario, setMsgUsuario] = useState(" ");
  const [msgPlanes, setMsgPlanes] = useState(" ");
  //////////////////////////////////////////////////////////////////////

  const inputUsuario = useRef(null);
  const inputPlanes = useRef(null);
  const inputObservacion = useRef(null);

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
    if (titulo === "Crear Asignacion") {
      createAsig({
        usuario,
        plan,
        observacion,
        keyword,
        pageNumber,
        pageNumberCurrent,
        //id_permitido
      });
    } /*else {
      const cooperativaUpdated = {
        id: data.codigo,
        usuario: usuario,
        plan: plan,
        keyword: keyword,
        pageNumber: pageNumber,
        pageNumberCurrent: pageNumberCurrent,
        id_permitido: id_permitido
      };
      updateCoo(cooperativaUpdated);
      data.codigo = 0;
    }*/
    setShowModalForm(false);
    setUsuario("");
    setPlan("");
  };
  const listmsg = [msgUsuario, msgPlanes];
  function validarCampos() {
    //console.log("-"+msgUsuario+"-");
    //console.log("-"+msgPlanes+"-");
    if (validator.isEmpty(msgUsuario) && validator.isEmpty(msgPlanes)) {
      return true
    } else {
      if (!validator.isEmpty(msgUsuario)) setMsgUsuario("Campo invalido/vacio");
      if (!validator.isEmpty(msgPlanes)) setMsgPlanes("Campo invalido/vacio");
      return false;
    }
  }
  function validarUsuario(event) {
    const entrada = event.value;
    var result = objvalidar.validarCombo(entrada, "-1", listmsg)
    setMsgUsuario(result.msg);
    setUsuario(result.data);
    setValidacion(result.validacion);
}
function validarPlanes(event) {
  const entrada = event.value;
  var result = objvalidar.validarCombo(entrada, "-1", listmsg)
  setMsgPlanes(result.msg);
  setPlan(result.data);
  setValidacion(result.validacion);
}
  useEffect(() => {
    dispatch(listaComboUsuarios({}));
}, [dispatch]);
useEffect(() => {
  dispatch(listaComboPlanes({}));
}, [dispatch]);
const result1 = useSelector((state) => state.comboUsuariosList);
const result2 = useSelector((state) => state.comboPlanesList);

const combo_usuarios = result1["combo_usuarios"]
const combo_planes = result2["combo_planes"]

const optionListUser = [];
combo_usuarios?.map((valor) => {
  var valor_label=valor.USUA_NOMBRE+" - "+valor.USUA_CEDULA;
  optionListUser.push({ value: valor.USUA_CODIGO, label: valor_label });
})
    //console.log(optionListUser);
const optionListPlan = [];
combo_planes?.map((valor) => optionListPlan.push({ value: valor.PLAN_CODIGO, label: valor.PLAN_NOMBRE }));
    //console.log(optionListPlan)

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
              setUsuario("");
              setPlan("");
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
            Detalles de Asignación
          </h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div id="div_z_usuario" className="w-full px-2 pl-2 md:w-1/3 mt-3" /*style={{ display: "none" }}*/>
                <Select
                    isSearchable={true}
                    outline={true}
                    id="usuario"
                    name="usuario"
                    placeholder="Usuarios"
                    onChange={validarUsuario}
                    defaultValue={usuario}
                    options={optionListUser}
                /><LeyendaError>{msgUsuario}</LeyendaError>
            </div>
            <div id="div_z_usuario" className="w-full px-2 pl-2 md:w-1/3 mt-3" /*style={{ display: "none" }}*/>
                <Select
                    isSearchable={true}
                    outline={true}
                    id="planes"
                    name="planes"
                    placeholder="Planes"
                    onChange={validarPlanes}
                    defaultValue={plan}
                    options={optionListPlan}
                /><LeyendaError>{msgPlanes}</LeyendaError>
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
                setUsuario("");
                setPlan("");
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
              {titulo === "Crear Asignacion" ? "Crear" : "Editar"}
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
        </div>
      </div>
    </Modal>
  );
};

export default Form_Usuarios;
