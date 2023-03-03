import React from "react";
import Footer from "../src/components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

/* SCREENS */
import Cooperativa from "./screen/seguridad/usuarios/UsuarioListScreen";
import Bodega from "./screen/configuracion/sucursal/BodegaListScreen";
import Planes from "./screen/configuracion/planes/PlanesListScreen";
import Accesos from "./screen/seguridad/accesos/accesosListScreen";
import Solicitudes from "./screen/solicitudes/listado/solicitudesListScreen";
import CambiarClave from "./screen/seguridad/usuarios/cambiarClaveScreen";
import Reportes from "./screen/reportes/reportesScreen";
import ErrorRedirectScreen from "./screen/seguridad/auth/ErrorRedirectScreen";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotFoundScreen from "./screen/NotFoundScreen";
import Asignaciones from "./screen/asignaciones/asignar/AsignacionesListScreen"
import Productos from "./screen/inventario/productos/ProductoListScreen";

import Dashboard from "./screen/dashboard/Dashboard";
import Dashboarduser from "./screen/dashboard/Dashboard_usuarios_generales";
import { recuperarPassword } from "./actions/seguridad/passwordActions";
const Main = () => {
  return (
    <>
      <div className="w-full dark:bg-dark">
        <div className="md:grid md:grid-cols-principal">
          <div className=" md:col-span-1 absolute md:!static z-50 h-max">
            <Sidebar />
          </div>

          <div className="md:col-span-2 pl-[14%] sm:pl-[10%] md:pl-[0%] overflow-y-auto h-screen">
            <Header />
            <Outlet />
            <Routes>
              <Route exact path="/usuarios" element={<Cooperativa />} />
              <Route exact path="/accesos" element={<Accesos />} />
              <Route exact path="/notfounded" element={<NotFoundScreen />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/dashboarduser" element={<Dashboarduser />} />
              <Route exact path="/sucursal" element={<Bodega />} />
              <Route exact path="/solicitudes" element={<Solicitudes />} />
              <Route exact path="/cambiarclave" element={<CambiarClave />} />
              <Route exact path="/reportes" element={<Reportes />} />
              <Route exact path="/items" element={<Productos />} />
              <Route exact path="/errorRedirectScreen" element={<ErrorRedirectScreen />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
