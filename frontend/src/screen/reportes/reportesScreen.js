import ReportsSVG from "../../assets/recursos_proyecto/imagenes/reportes.svg";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExcel
} from "../../actions/reportes/reportesActions";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import 'react-loading-skeleton/dist/skeleton.css'
import Button from "@material-tailwind/react/Button";
import { useNavigate } from "react-router-dom";
const ReportesScreen = () => {
  const [id_permitido,setIds]=useState([14, 15, 16, 29]);
  let navigate = useNavigate();
  const useData = useSelector((state) => state.userLogin);
  const { error, userInfo } = useData;
  if(!userInfo) {navigate("/login")}
  useEffect(() => {
    if (!id_permitido.includes(userInfo.id_perfil)) {
      navigate("/errorRedirectScreen");
    }
  });
  const [tipoReport, setTipoReport] = useState(1);
  const [nombreArchivo, setNombreArchivo]= useState("General");
  const dispatch = useDispatch();
  const saveValue = (e) => {
    setTipoReport(e.target.value);
    var valueN=Number(e.target.value)-1;
    var nombre=e.target[valueN].label;
    setNombreArchivo(nombre);
  };
  const getReport = async () => {
    dispatch(getExcel({
      value: Number(tipoReport),
      name: String(nombreArchivo),
      //id_permitido: id_permitido,
    }))
  }
  return (
    <Fragment>
      <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0">
        <div className="w-full mx-auto  col-span-2 h-fit pb-20 dark:!bg-dark">
          <Card className="dark:!bg-dark !rounded-none !shadow-none">
            <CardHeader color="white" contentPosition="none" className="!h-fit !py-4 !px-0 ">
              <div className="w-full flex md:justify-between items-baseline flex-col md:flex-row pl-4 dark:bg-dark">
                <h2 className="text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">Reportes</h2>
                <div className="my-2 pr-4 flex sm:flex-row flex-col">
                  <div className="block relative w-full">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="w-50 md:w-2/2 -my-2">
                <select class="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                  bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                  m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                  name="tipo_reporteg"
                  onChange={saveValue}
                >
                  <option value="1" label="Usuarios">Usuarios</option>
                  <option value="2" label="Productos">Productos</option>
                  <option value="3" label="Solicitudes Aprobadas">Solicitudes Aprobadas</option>
                  <option value="4" label="Solicitudes Pendientes">Solicitudes Pendientes</option>
                  <option value="5" label="Solicitudes Rechazadas">Solicitudes Rechazadas</option>
                  <option value="6" label="Todas las Solicitudes">Todas las Solicitudes</option>
                  <option value="7" label="Productos (La Paz)">Productos (La Paz)</option>
                  <option value="8" label="Productos (Santa Cruz)">Productos (Santa Cruz)</option>
                  <option value="9" label="Productos (Beni)">Productos (Beni)</option>
                  <option value="10" label="Productos (Cochabamba)">Productos (Cochabamba)</option>
                  <option value="11" label="Productos (Potosí)">Productos (Potosí)</option>
                  <option value="12" label="Productos (Oruro)">Productos (Oruro)</option>
                  <option value="13" label="Productos (Tarija)">Productos (Tarija)</option>
                  <option value="14" label="Productos (Chuquisaca)">Productos (Chuquisaca)</option>
                </select>
                <br></br>
              </div>
              <div className="flex flex-row justify-center space-x-3">
                <Button
                  type="submit"
                  className="bg-indigo-300 mb-1 float-center"
                  color="indigo"
                  buttonType="filled"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="light"
                  onClick={getReport}
                >
                  Generar
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full p-5">
          <img
            src={ReportsSVG}
            className="rounded-l-xl object-fill h-[225px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"
          />
          <h2 className="text-gray-700 text-lg font-bold mb-2">
            Mi Reportería
          </h2>
          <p className="text-sm pb-1 text-justify">
            <b>Para descargar un reporte usted debe:</b>
          </p>
          <div className="w-full px-6 py-2 bg-[#DADAF7]">
            <ul className="list-disc text-xs px-2 ml-1 text-justify">
              <li className="py-1"><b>Paso 1.-</b> Seleccionar uno de los reportes</li>
              <li className="py-1"><b>Paso 2.-</b> Dar clic en Generar</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReportesScreen;