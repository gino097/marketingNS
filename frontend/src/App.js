import "./App.css";
import Login from "./screen/seguridad/auth/LoginScreen";
import RecuperarClave from "./screen/seguridad/auth/RecupearClaveScreen";
//import ErrorRedirectScreen from "./screen/seguridad/auth/ErrorRedirectScreen";

import Main from "./Main";
import "@material-tailwind/react/tailwind.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./auth/PrivateRoute";
import Formulario1Screen from "./screen/formularios/Formulario1Screen";
import MasterFormScreen from "./screen/formularios/MasterFormScreen";
import SoliFormulario from "./screen/soliMateriales/soliForm";
import ProductListPendientes from "./screen/inventario/productos/ProductListPendientes";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<PrivateRoute/>}>
          <Route exact path="/*" element={<Main/>} />
        </Route>
        
        <Route exact path="/materiales_form" element={<MasterFormScreen/>} />
        <Route exact path="/soli_materiales" element={<SoliFormulario/>} />
        <Route exact path="/formularios" element={<Formulario1Screen/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/recuperarClave" element={<RecuperarClave />} />
        <Route exact path="/soli_pendiente" element={<ProductListPendientes />} />
        {/*<Route exact path="/errorRedirectScreen" element={<ErrorRedirectScreen />} />*/}
      </Routes>
      </Provider>
    </Router>
    
  );
}

export default App;

