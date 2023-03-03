import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import StatusCard from '../../components/StatusCard';
import ChartBar from '../../components/ChartBar';
import PageVisitsCard from '../../components/PageVisitsCard';
import TrafficCard from '../../components/TrafficCard';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import Dashboarduser_img from "../../images/login.svg"

export default function Dashboarduser() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let navigate = useNavigate();

  useEffect(() => {
        if (userInfo.id_perfil !== 14 || userInfo.id_perfil !== 15) {
          navigate("/dashboarduser");
        }
  }, [navigate, userInfo]);
  return (
    <>
      <div className="bg-indigo-500 px-3 md:px-8 h-14 ">
        <h6 className="text-base font-medium leading-tight text-white pt-4 pl-8 font-bold">
          Bienvenido, {userInfo.name} 
        </h6>
      </div>
      <div className="w-full  ">
          <img
            src={Dashboarduser_img}
            className="pl-72 rounded-l-xl object-rigth h-[460px]"
            loading="lazy"
            height=""
            width=""
            alt="music mood"/>
      </div>
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
          {/*<StatusCard
              color="purple"
              icon="group"
              title="Usuarios"
              amount= {dashboard.datos_dashboard?.map((valor) =>valor.USUARIOS)}
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Usuarios Activos"
            />
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Dispositivo"
              amount={dashboardcuadro2.datos_dashboardc2?.map((valor) =>valor.DISPOSITIVOS)}
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Dispositivos activos"
            />
            <StatusCard
              color="orange"
              icon="poll"
              title="Entregar"
              amount={dashboardcuadro3.datos_dashboardc3?.map((valor) =>valor.DISPOSITIVOS)}
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Dispositivos por Entregar"
            />
            <StatusCard
              color="blue"
              icon="paid"
              title="Por Instalar"
              amount={dashboardcuadro4.datos_dashboardc4?.map((valor) =>valor.DISPOSITIVOS)}
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Dispositivos por instalar"
  />*/}
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4">
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 ">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}