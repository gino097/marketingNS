import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listaRegistros,
} from "../../../actions/planes/planesActions";


import Modal2Asignacion from "../../../components/Modal2Asignacion";
import ModalActivar from "./ModalActivar";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Pagination2 from "../../../components/form/Pagination2";
import Form_Crud from "./Form_Asignar";
import { useNavigate } from "react-router-dom";
import Button from "@material-tailwind/react/Button";

const CooperativaListScreen = () => {

  const [id_permitido,setIds]=useState([14, 15, 25]);
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

  const [showModal, setShowModal] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalTitulo, setShowModalTitulo] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);
  const [confirmar, setConfirmar] = useState(new Date());

  const [pageNumberCurrent, setpageNumberCurrent] = useState(5);
  const dispatch = useDispatch();

  const result = useSelector((state) => state.asignacionesList);
  //console.log(result);
  const { pages, asignaciones } = result;
  const [updatekey, setUpdateKey] = useState(Date.now());
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(listaRegistros({
      keyword,
      pageNumber: pageCurrent,
      pageSize: pageNumberCurrent,
      //id_permitido: id_permitido
    }));

  }, [dispatch, pageNumberCurrent, pageCurrent, keyword, id_permitido]);



  const modelModal = () => {
    if(typeModal.funcion==="activar"){
      return (
        <ModalActivar
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
          //id_permitido={id_permitido}
          keyword={keyword}
        />
      );
    }else{
      return (
      <Modal2Asignacion
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
        //id_permitido={id_permitido}
        keyword={keyword}
      />
    );
    }
    
  };
  
//console.log(result1)
  return (
    <Fragment>
      <div className="w-full mx-top  col-span-3 h-fit pb-20 dark:!bg-dark">
        <Card className="dark:!bg-dark !rounded-none">
          <CardHeader color="white" contentPosition="none" className="!h-fit !py-5 !px-0 ">
            <div className="w-full flex md:justify-between items-baseline flex-col md:flex-row pl-4 dark:bg-dark">
              <h2 className="text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">Asignaciones</h2>
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
                    placeholder="Buscar en usuarios"
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
                <option>20</option>
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
            <div
              onClick={(e) => {
                setShowModalForm(true);
                setShowModalTitulo("Crear Asignacion");
              }}
              className="md:ml-auto flex place-items-center md:col-span-1 col-span-2 bg-gradient-to-tr from-[#6C63FE] to-[#6C63FE] hover:drop-shadow-lg p-2 text-sm rounded-md cursor-pointer text-white"
            >
              <div className=" w-9 h-5 grid place-items-center grid-cols-1">
                <Icon name="loupe" size="2x1" />
              </div>
              <h3 className="pr-2">Crear Asignacion</h3>
            </div>
          </div>

          <CardBody>
            <div className=" overflow-x-auto border border-gray-50 rounded-md ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Nombre
                    </th>
                    <th className="px-2 text-gray-700 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-gray-100">
                      Plan
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
                  {!asignaciones ? <tr>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                  </tr> : null}
                  {asignaciones?.map((valor) => {
                    return (
                      <tr className="hover:bg-violet-200" key={valor.ASIG_CODIGO}>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                          {valor.USUA_NOMBRE} - {valor.USUA_CEDULA}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2  text-left dark:text-gray-100">
                          {valor.PLAN_NOMBRE}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left text-slate-100 dark:text-gray-100">
                          {valor.ASIG_ESTADO === "ACTIVO" ? (
                            <div className="bg-colorac text-center w-30 h-30 rounded px-2 py-1">
                              Activo
                            </div>
                          ) : (
                            <div className="bg-red-500 text-center w-30 h-30 rounded px-2 py-1">
                              Inactivo
                            </div>
                          )}
                        </td>

                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left px-3 py-2">
                          <div className=" space-x-2 flex flex-row justify-center">
                            {/* <div
                              className="border-2 text-white bg-indigo-500 border-indigo-500 rounded hover:border-indigo-500 hover:bg-white rounded hover:!text-indigo-500  w-9 h-9 grid place-items-center grid-cols-1 focus:pointer-events-auto cursor-pointer w-8 mr-2"
                              onClick={(e) => {
                                setShowModalTitulo("Editar Usuario");
                                setTypeModal({
                                  codigo: valor.USUA_CODIGO,
                                });
                                setConfirmar(new Date());
                                setShowModalForm(true);
                              }}
                            >
                              <Icon name="edit" size="2xl" />
                            </div> */}
                            {valor.ASIG_ESTADO==="INACTIVO"?
                            <div
                            className=" border-2 text-white bg-[#1AC80C] border-[#1AC80C] rounded hover:!text-[#1AC80C] hover:bg-white rounded w-9 h-9 grid place-items-center grid-cols-1 cursor-pointer"
                            onClick={(e) => {
                              setShowModal(true);
                              setTypeModal({
                                ...typeModal,
                                cabecera: "Activa asignacion",
                                cuerpo: "desea activar este registro ?",
                                confirmacion: "activar asignacion",
                                codigo: valor.ASIG_CODIGO,
                                funcion: "activar",
                              });
                              dispatch(listaRegistros({
                                keyword,
                                pageNumber: pageCurrent,
                                pageSize: pageNumberCurrent,
                                id_permitido: id_permitido,
                              }));
                            }}
                          >
                            <Icon name="check" size="2xl"/>
                            
                          </div>:
                          <div
                          className="border-2  text-white bg-[#C73866] border-[#C73866] rounded hover:!text-[#C73866] hover:bg-white rounded w-9 h-9 grid place-items-center grid-cols-1 cursor-pointer"
                            onClick={(e) => {
                              setShowModal(true);
                              setTypeModal({
                                ...typeModal,
                                cabecera: "Eliminar asignacion",
                                cuerpo: "desea eliminar este registro ?",
                                confirmacion: "borrar asignacion",
                                codigo: valor.ASIG_CODIGO,
                                funcion: "eliminar",
                              });
                              dispatch(listaRegistros({
                                keyword,
                                pageNumber: pageCurrent,
                                pageSize: pageNumberCurrent,
                                //id_permitido: id_permitido,
                              }));
                            }}
                          >
                            <Icon name="delete" size="2xl" disabled={true}/>
                          </div>}
                            
                          </div>
                        </td>
                      </tr>
                    );
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
        {showModalForm ? (
          <Form_Crud
            showModalForm={showModalForm}
            setShowModalForm={setShowModalForm}
            titulo={showModalTitulo}
            data={typeModal}
            setData={setTypeModal}
            confirmar={confirmar}
            setUpdateKey={setUpdateKey}
            pageNumber={pageCurrent}
            pageNumberCurrent={pageNumberCurrent}
            keyword={keyword}
            //id_permitido={id_permitido}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default CooperativaListScreen;
