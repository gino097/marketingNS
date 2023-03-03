import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    cooperativaCreateReducer,
    cooperativaDeleteReducer,
    cooperativaDetailsReducer,
    cooperativaListReducer,
    cooperativaUpdateReducer
} from "./reducers/seguridad/usuarioReducer";

import {
    bodegaCreateReducer,
    bodegaDeleteReducer,
    bodegaDetailsReducer,
    bodegaListReducer,
    bodegaUpdateReducer
} from "./reducers/configuracion/bodegaReducer";

import {
    planCreateReducer,
    planDeleteReducer,
    planDetailsReducer,
    planListReducer,
    planUpdateReducer
} from "./reducers/configuracion/planesReducer";

import {
    asignacionesCreateReducer,
    asignacionesDeleteReducer,
    asignacionesDetailsReducer,
    asignacionesListReducer,
    asignacionesUpdateReducer
} from "./reducers/planes/asignacionesReducer";

import {
    dispositivosCreateReducer,
    dispositivosDeleteReducer,
    dispositivosDetailsReducer,
    dispositivosListReducer,
    dispositivosUpdateReducer
} from "./reducers/solicitudes/dispositivosReducer";

import {
    userLoginReducer
} from "./reducers/seguridad/loginReducer";

import {
    perfilListReducer,
    perfilCreateReducer,
    perfilDetailsReducer,
    perfilUpdateReducer,
    perfilDeleteReducer
} from "./reducers/seguridad/perfilReducer";
import {
    supervisorListReducer,
    supervisorCreateReducer,
    supervisorDetailsReducer,
    supervisorUpdateReducer,
    supervisorDeleteReducer
} from "./reducers/seguridad/supervisorReducer";
import {
    regionListReducer
} from "./reducers/seguridad/regionReducer";

import {
    claveUpdateReducer
} from "./reducers/seguridad/claveReducer";
import {
    sucursalesListReducer
} from "./reducers/solicitudes/sucursalesReducer";

import {
    accesosListReducer
} from "./reducers/seguridad/accesosReducer";

import {
    comboUsuariosListReducer
} from "./reducers/formulario/comboDispositivosReducer";

import {
    comboPlanesListReducer
} from "./reducers/planes/comboPlanesReducer";

import {
    comboDispositivosListReducer
} from "./reducers/solicitudes/comboDispositivosReducer";

import {
    comboUsuariosTallerListReducer
} from "./reducers/solicitudes/comboUsuariosTallerReducer";

import {
    dashboardCuadro2Reducer,
    dashboardCuadro3Reducer,
    dashboardCuadro4Reducer,
    dashboardListReducer,
    dashboardLineDataReducer
} from "./reducers/dashboard/dashboardReducer";

import {
    reportesCreateReducer,
    reportesDeleteReducer,
    reportesDetailsReducer,
    reportesListReducer,
    reportesUpdateReducer
} from "./reducers/reportes/reportesReducer";

import {
    solicitudCreateReducer
} from "./reducers/formulario/solicitudReducer";

import {
    solicitudMCreateReducer
} from "./reducers/solicitudesM/solicitudMaterialesReducer";

import { comboCiudadesListReducer } from "./reducers/formulario/comboCiudadesReducer";

import {
    productoCreateReducer,
    productoDeleteReducer,
    productoDetailsReducer,
    productoListReducer,
    productoUpdateReducer
} from "./reducers/inventario/productoReducer";

const reducer = combineReducers({
    userLogin: userLoginReducer,

    cooperativaList: cooperativaListReducer,
    cooperativaCreate: cooperativaCreateReducer,
    cooperativaDetails: cooperativaDetailsReducer,
    cooperativaUpdate: cooperativaUpdateReducer,
    cooperativaDelete: cooperativaDeleteReducer,

    bodegaList: bodegaListReducer,
    bodegaCreate: bodegaCreateReducer,
    bodegaDetails: bodegaDetailsReducer,
    bodegaUpdate: bodegaUpdateReducer,
    bodegaDelete: bodegaDeleteReducer,

    planList: planListReducer,
    planCreate: planCreateReducer,
    planDetails: planDetailsReducer,
    planUpdate: planUpdateReducer,
    planDelete: planDeleteReducer,

    asignacionesList: asignacionesListReducer,
    asignacionesCreate: asignacionesCreateReducer,
    asignacionesDetails: asignacionesDetailsReducer,
    asignacionesUpdate: asignacionesUpdateReducer,
    asignacionesDelete: asignacionesDeleteReducer,

    dispositivosList: dispositivosListReducer,
    dispositivosCreate: dispositivosCreateReducer,
    dispositivosDetails: dispositivosDetailsReducer,
    dispositivosUpdate: dispositivosUpdateReducer,
    dispositivosDelete: dispositivosDeleteReducer,

    perfilList: perfilListReducer,
    perfilCreate: perfilCreateReducer,
    perfilDetails: perfilDetailsReducer,
    perfilUpdate: perfilUpdateReducer,
    perfilDelete: perfilDeleteReducer,

    supervisorList: supervisorListReducer,
    supervisorCreate: supervisorCreateReducer,
    supervisorDetails: supervisorDetailsReducer,
    supervisorUpdate: supervisorUpdateReducer,
    supervisorDelete: supervisorDeleteReducer,

    regionList: regionListReducer,

    claveUpdate: claveUpdateReducer,

    sucursalesList: sucursalesListReducer,

    comboDispositivosList: comboDispositivosListReducer,

    comboUsuariosList: comboUsuariosListReducer,

    comboPlanesList: comboPlanesListReducer,

    comboCiudadesList: comboCiudadesListReducer,
    
    comboUsuariosTallerList: comboUsuariosTallerListReducer,

    dashboardList: dashboardListReducer,
    dashboardCuadro2: dashboardCuadro2Reducer,
    dashboardCuadro3: dashboardCuadro3Reducer,
    dashboardCuadro4: dashboardCuadro4Reducer,
    dashboardLineData: dashboardLineDataReducer,

    accesosList: accesosListReducer,

    reportesList: reportesListReducer,
    reportesCreate: reportesCreateReducer,
    reportesDetails: reportesDetailsReducer,
    reportesUpdate: reportesUpdateReducer,
    reportesDelete: reportesDeleteReducer,

    solicitudCreate: solicitudCreateReducer,

    productoList: productoListReducer,
    productoCreate: productoCreateReducer,
    productoDetails: productoDetailsReducer,
    productoUpdate: productoUpdateReducer,
    productoDelete: productoDeleteReducer,

    solicitudMCreate: solicitudMCreateReducer

});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;