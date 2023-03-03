import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from '@material-tailwind/react/Icon';
import CardStatus from '@material-tailwind/react/CardStatus';
import StatusCard from '../../components/StatusCard';
import ChartLine from '../../components/ChartLine';
import ChartLine2 from '../../components/ChartLine2';
import ChartBar from '../../components/ChartBar';
import { useNavigate } from "react-router-dom";
import PageVisitsCard from '../../components/PageVisitsCard';
import TrafficCard from '../../components/TrafficCard';
import Footer from '../../components/Footer';
import Dashboarduser_img from "../../assets/recursos_proyecto/unDraw/DASHBOARD.svg"

import {
  listDashboardSoliPendientes,
  listDashboardCuadro2,
  listDashboardCuadro3,
  listDashboardCuadro4,
  lineChartDataSoli
} from "../../actions/dashboard/dashboardActions";

export default function Dashboard() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  if(!userInfo) {navigate("/login")}
  
  useEffect(() => {
        if (userInfo.id_perfil === 14 || userInfo.id_perfil === 15) {
          navigate("/dashboard");
        } else {
          navigate("/dashboarduser");
        }
  }, [navigate, userInfo]);
  
  useEffect(() => {
    dispatch(listDashboardSoliPendientes({}));
  }, [dispatch]);
  useEffect(() => {
    dispatch(listDashboardCuadro2({}));
  }, [dispatch]);
  useEffect(() => {
    dispatch(listDashboardCuadro3({}));
  }, [dispatch]);
  useEffect(() => {
    dispatch(listDashboardCuadro4({}));
  }, [dispatch]);
  useEffect(() => {
    dispatch(lineChartDataSoli({}));
  }, [dispatch]);
  const dashboard = useSelector((state) => state.dashboardList);
  const dashboardcuadro2 = useSelector((state) => state.dashboardCuadro2);
  const dashboardcuadro3 = useSelector((state) => state.dashboardCuadro3);
  const dashboardcuadro4 = useSelector((state) => state.dashboardCuadro4);
  const dashboardLineData = useSelector((state) => state.dashboardLineData);
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-800 to-blue-800 px-3 md:px-8 h-14 ">
        <h6 className="text-base font-medium leading-tight text-white pt-4 pl-8 font-bold">
          Bienvenido, {userInfo.name} 
        </h6>
      </div>
      {/*<div className="w-full  ">
          <img
            src={Dashboarduser_img}
            className="pl-72 rounded-l-xl object-rigth h-[460px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"/>
  </div>*/}
  <br></br><br></br>
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
          <div className="px-3 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                  <div className="flex flex-wrap border-b border-gray-200">
                      <div className="bg-gradient-to-tr from-rose-600 to-rose-700 -mt-10 mb-0 rounded-xl text-white grid items-center px-7 h-20 shadow-lg-rose shadow-2xl shadow-rose-800/40">
                          <Icon name={"event"} size="3xl" color="white" />
                      </div>

                      <CardStatus title={"Pendientes"} amount={dashboard.datos_dashboard?.map((valor) =>valor.PENDIENTES)} />
                  </div>
                  <div className='text-sm text-gray-700 pt-4 flex items-center '>
                      <span className='text-gray-500 ml-1 mr-2'>Solicitudes pendientes</span>
                  </div>
              </div>
            </div>
            <div className="px-3 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                  <div className="flex flex-wrap border-b border-gray-200">
                      <div className="bg-gradient-to-tr from-orange-600 to-orange-700 -mt-10 mb-0 rounded-xl text-white grid items-center px-7 h-20 shadow-lg-orange shadow-2xl shadow-orange-800/40">
                          <Icon name={"event_available"} size="3xl" color="white" />
                      </div>

                      <CardStatus title={"Aprobadas"} amount={dashboardcuadro2.datos_dashboardc2?.map((valor) =>valor.APROBADAS)} />
                  </div>
                  <div className='text-sm text-gray-700 pt-4 flex items-center '>
                      <span className='text-gray-500 ml-1 mr-2'>Solicitudes Aprobadas</span>
                  </div>
              </div>
            </div>
            <div className="px-3 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                  <div className="flex flex-wrap border-b border-gray-200">
                      <div className="bg-gradient-to-tr from-teal-600 to-teal-700 -mt-10 mb-0 rounded-xl text-white grid items-center px-7 h-20 shadow-lg-teal shadow-2xl shadow-teal-800/40">
                          <Icon name={"event_busy"} size="3xl" color="white" />
                      </div>

                      <CardStatus title={"Rechazadas"} amount={dashboardcuadro3.datos_dashboardc3?.map((valor) =>valor.RECHAZADAS)} />
                  </div>
                  <div className='text-sm text-gray-700 pt-4 flex items-center '>
                      <span className='text-gray-500 ml-1 mr-2'>Solicitudes Rechazadas</span>
                  </div>
              </div>
            </div>
            <div className="px-3 mb-10">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
                  <div className="flex flex-wrap border-b border-gray-200">
                      <div className="bg-gradient-to-tr from-indigo-900 to-indigo-700 -mt-10 mb-0 rounded-xl text-white grid items-center px-7 h-20 shadow-lg-indigo shadow-2xl shadow-indigo-800/40">
                          <Icon name={"event_note"} size="3xl" color="white" />
                      </div>

                      <CardStatus title={"Solicitudes"} amount={dashboardcuadro4.datos_dashboardc4?.map((valor) =>valor.SOLICITUDES)} />
                  </div>
                  <div className='text-sm text-gray-700 pt-4 flex items-center '>
                      <span className='text-gray-500 ml-1 mr-2'>Total de Solicitudes</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
          <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
            <ChartBar solicitudes={dashboardLineData.datos_linedata}/>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
            <ChartLine2 solicitudes={dashboardLineData.datos_linedata}/>
            </div>
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
            <ChartLine 
              aprobadas={dashboardcuadro2.datos_dashboardc2?.map((valor) =>valor.APROBADAS)}
              rechazadas={dashboardcuadro3.datos_dashboardc3?.map((valor) =>valor.RECHAZADAS)}/>
            </div>
          </div>
        </div>
      </div>
     {/*<div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4">
              <ChartLine2
               />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 ">
            <ChartLine
              aprobadas={dashboardcuadro2.datos_dashboardc2?.map((valor) =>valor.APROBADAS)}
              rechazadas={dashboardcuadro3.datos_dashboardc3?.map((valor) =>valor.RECHAZADAS)}
               />
            </div>
          </div>
        </div>
      </div>*/}
      <Footer />
    </>
  );
}
