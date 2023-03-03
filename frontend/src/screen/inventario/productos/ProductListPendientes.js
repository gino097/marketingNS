import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo_login from "../../../assets/recursos_proyecto/LOGOS NS sin slogan-02.png";
import { listaRegistros } from "../../../actions/inventario/productoActions";

import Modal2 from "../../../components/Modal2";
import ModalActivar from "./ModalActivar";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Pagination2 from "../../../components/form/Pagination2";
import Form_Crud from "./Form_Producto";
import { useNavigate } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import {  
  informePDFMostrar
} from "../../../actions/solicitudes/dispositivoActions";

const ProductListPendientes = () => {


  const [id_permitido, setIds] = useState([14, 15, 16, 29]);
  let navigate = useNavigate();
  const useData = useSelector((state) => state.userLogin);
  const { error, userInfo } = useData;
  if (!userInfo) {
    navigate("/login");
  }
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

  const result = useSelector((state) => state.productoList);
  const { pages, productos } = result;
  const [updatekey, setUpdateKey] = useState(Date.now());
  const [keyword, setKeyword] = useState("");
  const [disabled_button, setDisabledButton] = useState(true);
  const [visibility, setvisibility] = useState(false);

  const [queryParametro, setqueryParametro] = useState("");

  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  function getQueryParametro() {
    const parametro = query.get("id");
    setqueryParametro(parametro);
    dispatch(informePDFMostrar({id:parametro}));
  }

  

  return (
    <Fragment>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img
            src={Logo_login}
            loading="lazy"
            className="w-36 ml-4 mb-2"
            alt="tailus logo"
          />
          <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
           
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              SOLICITUD PENDIENTE
            </h2>

            <button onClick={() => getQueryParametro() }>Imprimir</button>
            <p>{queryParametro}</p>
            <div
              className="border-2 text-white bg-[#FFB233] border-[#FFB233] rounded hover:border-indigo-500 hover:bg-white rounded hover:!text-indigo-500  w-9 h-9 grid place-items-center grid-cols-1 focus:pointer-events-auto cursor-pointer w-8 mr-2"
              onClick={(e) => {
                dispatch(
                  listaRegistros({
                    keyword: keyword,
                    pageNumber: pageCurrent,
                    pageSize: pageNumberCurrent,
                    id_permitido: id_permitido,
                  })
                );
                setConfirmar(new Date());
              }}
            >
              <Icon name="print" size="2xl" />
            </div>
            
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              
              <select
                class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="aprobar"
                //value={aprobar}
                //onChange={validarPlan}
              >
                
                <option value="-1" selected>
                  APROBAR/RECHAZAR
                </option>
                
                <option value="APROBADO">APROBADO</option>
                <option value="RECHAZADO">RECHAZADO</option>
              </select>
              
              {/*<LeyendaError>{msgAprobar}</LeyendaError>*/}
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset passwod
              </button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductListPendientes;
