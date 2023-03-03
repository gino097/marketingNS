import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listaRegistros,
  informePDF,
} from "../../../actions/solicitudes/dispositivoActions";
import ModalEliminar from "./ModalEliminar";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import Pagination2 from "../../../components/form/Pagination2";
import Form_Crud from "./Form_EditarPlan";
import Form_Autorizar from "./Form_Autorizar";
import Form_Imprimir from "./Form_Informe";
import validator from "validator";

const SolicitudesListScreen = () => {
  const [id_permitido, setIds] = useState([14, 15]);
  let navigate = useNavigate();
  const useData = useSelector((state) => state.userLogin);
  const { error, userInfo } = useData;
  if(!userInfo) {navigate("/login")}
  
  useEffect(() => {
      if (!id_permitido.includes(userInfo.id_perfil)) {
        navigate("/errorRedirectScreen");
      }
  });
  const [typeModal, setTypeModal] = useState({
    cabecera: "",
    cuerpo: "",
    confirmacion: "",
    codigo: null,
    funcion: "eliminar",
  });
  const [showModalTituloI, setShowModalTituloI] = useState("");
  const result = useSelector((state) => state.dispositivosList);
  const { pages, dispositivos } = result;
  const [showModal, setShowModal] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModalForm2, setShowModalForm2] = useState(false);
  const [showModalTitulo, setShowModalTitulo] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);
  const [confirmar, setConfirmar] = useState(new Date());
  const [pageNumberCurrent, setpageNumberCurrent] = useState(5);
  const dispatch = useDispatch();
  const [updatekey, setUpdateKey] = useState(Date.now());
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(
      listaRegistros({
        keyword,
        pageNumber: pageCurrent,
        pageSize: pageNumberCurrent,
        id_permitido: id_permitido,
      })
    );
  }, [dispatch, pageNumberCurrent, pageCurrent, keyword]);
  const modelModal = () => {
    return (
      <ModalEliminar
        showModal={showModal}
        setShowModal={setShowModal}
        cabecera={typeModal.cabecera}
        cuerpo={typeModal.cuerpo}
        codigo={typeModal.codigo}
        confirmacion={typeModal.confirmacion}
        setPageCurrent={setPageCurrent}
        pageCurrent={pageCurrent}
        setUpdateKey={setUpdateKey}
        pageNumberCurrent={pageNumberCurrent}
        id_permitido={id_permitido}
        keyword={keyword}
      />
    );
  };
  return (
    <Fragment>
      <div className="w-full mx-auto col-span-3 h-fit pb-20 dark:!bg-dark">
        <Card className="dark:!bg-dark !rounded-none">
          <CardHeader
            color="white"
            contentPosition="none"
            className="!h-fit !py-5 !px-0 "
          >
            <div className="w-full flex md:justify-between items-baseline flex-col md:flex-row pl-4 dark:bg-dark">
              <h2 className="text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">
                Solicitudes Recibidas
              </h2>
              <div className="my-2 pr-4 flex sm:flex-row flex-col">
                <div className="block relative w-full">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Buscar por Solicitudes"
                    className="appearance-none rounded border border-gray-300 border-b block pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none w-full"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </CardHeader>

          <div className="grid md:grid-cols-botones_crud grid-cols-2 mb-1 gap-y-4 pl-4 pr-4">
            <div className="relative md:col-span-1 col-span-2">
              <select
                onChange={(e) => {
                  setpageNumberCurrent(
                    e.target.options[e.target.selectedIndex].value
                  );
                  setPageCurrent(1);
                }}
                className="appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none"
              >
                <option>5</option>
                <option>10</option>
                <option>50</option>
                <option>100</option>
                <option>1000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <CardBody>
            <div className=" overflow-x-auto border border-gray-50 rounded-md ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                  <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      N° de Solicitud
                    </th>
                  <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Región
                    </th>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Tipo de Solicitud
                    </th>
                    <th className="w-1/12 px-2 text-center text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Objetivo de solicitud
                    </th>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Descripción del evento
                    </th>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Solicitante
                    </th>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Usuario responsable
                    </th>
                    <th className="w-1/12 px-2 text-center text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Estado
                    </th>
                    <th className="w-1/12 px-2 text-center text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                {!dispositivos ? <tr>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                  </tr> : null}
                  {dispositivos?.map((valor) => {
                    if (valor.SOLICI_ESTADO!==null){
                      return (
                        <tr
                          className="hover:bg-violet-200"
                          key={valor.SOLICI_CODE}
                        >
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                            {valor.SOLICI_CODE}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                            {valor.SOLICI_REGIONAL}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                            {valor.SOLICI_SOLICITUD}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2  text-left dark:text-gray-100">
                            {valor.SOLICI_OBJ_EVENTO}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2  text-left dark:text-gray-100">
                            {valor.SOLICI_DESC_EVENTO}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2  text-left dark:text-gray-100">
                            {valor.SOLICI_PERSO_SOLC}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2  text-left dark:text-gray-100">
                            {valor.SOLICI_ESTADO_POR}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left text-slate-100 dark:text-gray-100">
                            {valor.SOLICI_ESTADO === "PENDIENTE" ? (
                              <div className="bg-blue-500 text-center w-30 h-30 rounded px-2 py-1">
                                {valor.SOLICI_ESTADO}
                              </div>
                            ) : valor.SOLICI_ESTADO === "APROBADO" ? (
                              <div className="bg-green-500 text-center w-30 h-30 rounded px-2 py-1">
                                {valor.SOLICI_ESTADO}
                              </div>
                            ): valor.SOLICI_ESTADO === "RECHAZADO" ? (
                              <div className="bg-red-500 text-center w-30 h-30 rounded px-2 py-1">
                                {valor.SOLICI_ESTADO}
                              </div>
                            ):null}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left px-3 py-2">
                            <div className="flex flex-row">
                              <div
                                className="border-2 text-white bg-[#FFB233] border-[#FFB233] rounded hover:border-indigo-500 hover:bg-white rounded hover:!text-indigo-500  w-9 h-9 grid place-items-center grid-cols-1 focus:pointer-events-auto cursor-pointer w-8 mr-2"
                                onClick={(e) => {
                                  dispatch(
                                    informePDF({
                                      codigo: valor.SOLICI_CODE,
                                    })
                                  );
                                  dispatch(
                                    listaRegistros({
                                      keyword: keyword,
                                      pageNumber: pageCurrent,
                                      pageSize: pageNumberCurrent,
                                      id_permitido: id_permitido,
                                    })
                                  );
                                  setShowModalTituloI("Imprimir");
                                  setTypeModal({
                                    codigo: valor.SOLICI_CODE,
                                  });
                                  setConfirmar(new Date());
                                }}
                              >
                                <Icon name="print" size="2xl" />
                              </div>
                              <div
                                className="border-2 text-white bg-blue-700 border-blue-700 rounded hover:border-blue-700 hover:bg-white rounded hover:!text-blue-700  w-9 h-9 grid place-items-center grid-cols-1 focus:pointer-events-auto cursor-pointer w-8 mr-2"
                                
                                onClick={(e) => {
                                  setShowModalTitulo("Aprobar/Rechazar solicitud");
                                  setTypeModal({
                                    codigo: valor.SOLICI_CODE,
                                  });
                                  setConfirmar(new Date());
                                  setShowModalForm(true);
                                }}
                                
                              >
                                <Icon name="edit" size="2xl" />
                              </div>
                              
                              {/*valor.SOLICI_ESTADO === "PENDIENTE" ?
                              <div
                                className="border-2 text-white bg-[#f43f5e] border-[#f43f5e] rounded hover:!text-[#f43f5e] hover:bg-white rounded w-9 h-9 grid place-items-center grid-cols-1 cursor-pointer"
                                onClick={(e) => {
                                  setShowModal(true);
                                  setTypeModal({
                                    ...typeModal,
                                    cabecera: "Rechazar solicitud",
                                    cuerpo: "desea rechazar este registro ?",
                                    confirmacion: "Rechazar solicitud",
                                    codigo: valor.SOLICI_CODE,
                                    funcion: "eliminar",
                                  });
                                }}
                              >
                                <Icon name="delete" size="2xl" />
                              </div>
                              : null*/}
                            </div>
                          </td>
                        </tr>
                      )
                    }
                    /*:null};*/
                  })}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <div className="grid justify-items-center">
          <div>
            <Pagination2
              setPageCurrent={setPageCurrent}
              pageCurrent={pageCurrent}
              pages={pages}
            />
          </div>
        </div>

        {modelModal()}
        {showModalTitulo==="Aprobar/Rechazar solicitud" ? (
          <Form_Crud
            showModalForm={showModalForm}
            setShowModalForm={setShowModalForm}
            titulo={showModalTitulo}
            data={typeModal}
            setData={setTypeModal}
            confirmar={confirmar}
            setUpdateKey={setUpdateKey}
            pageCurrent={pageCurrent}
            pageNumberCurrent={pageNumberCurrent}
            id_permitido={id_permitido}
            keyword={keyword}
          />
        ) : <Form_Autorizar
        showModalForm={showModalForm}
        setShowModalForm={setShowModalForm}
        titulo={showModalTitulo}
        data={typeModal}
        setData={setTypeModal}
        confirmar={confirmar}
        setUpdateKey={setUpdateKey}
        pageCurrent={pageCurrent}
        pageNumberCurrent={pageNumberCurrent}
        id_permitido={id_permitido}
        keyword={keyword}
      />}
      </div>
    </Fragment>
  );
};

export default SolicitudesListScreen;
