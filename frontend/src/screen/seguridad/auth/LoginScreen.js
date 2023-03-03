import { Fragment, React, useState, useEffect } from "react";
import Login_image from "../../../images/login.svg";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../../components/form/Input";
import 'react-loading-skeleton/dist/skeleton.css'
import Logo_login from "../../../assets/recursos_proyecto/LOGOS NS sin slogan-02.png";

import {
  faFacebookSquare,
  faTwitter,
  faTiktok,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import { login } from "../../../actions/seguridad/loginActions";
import AlertTable from "../../../components/Alerttable";

const LoginScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [correo, guardarCorreo] = useState("");
  const [password, guardarPassword] = useState("");

  const [alert, guardarAlert] = useState(false);
  const useData = useSelector((state) => state.userLogin);
  const { error, userInfo } = useData;
  const [clickeado, setClickeado] = useState(false);

  const agregarProducto = (credenciales) => dispatch(login(credenciales));

  useEffect(() => {
    if (!error) {
      if (userInfo) {
        if (userInfo.id_perfil === 14 || userInfo.id_perfil === 15) {
          navigate("/dashboard");
        } else {
          navigate("/dashboarduser");
        }
      }
    } else {
      guardarAlert(true);
      setTimeout(() => {
        guardarAlert(false);
      }, 2000);
    }
  }, [navigate, userInfo, error]);

  const submitNuevoProducto = async (e) => {
    e.preventDefault();
    agregarProducto({
      correo,
      password,
    });
  };



  return (
    <Fragment>
      <div className="relative py-3">
        <div className="m-auto md:w-11/12">
          <img
            src={Logo_login}
            loading="lazy"
            className="w-36 ml-4 mb-2"
            alt="tailus logo"
          />
          <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
            <div className="lg:grid lg:grid-cols-login ">
              <div className="rounded-lg col-span-1 lg:block hidden ">
                <img
                  src={Login_image}
                  className=" rounded-l-xl object-cover -mt-1 h-[500px]"
                  loading="lazy"
                  height=""
                  width=""
                  alt="music mood"
                />
              </div>
              <div className="px-10 pt-5 pb-2 sm:px-16">
                <h2 className="mb-3 text-xl text-cyan-900 font-bold text-center">
                  Inicio de Sesión
                </h2>
                <form action="" className="space-y-3 pt-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Usuario
                    </label>
                    <Input
                      type="text"
                      name={"cedula"}
                      id="email"
                      autocomplete="new-password"
                      data={correo}
                      setData={guardarCorreo}
                      classes="block  w-full px-4 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
                              focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="pwd" className="text-gray-700">
                        Contraseña
                      </label>
                      {/*<button id="btnRecClvace" className="p-2 -mr-2" type="reset" onClick={async (e) => {navigate("/recuperarClave")}}>
                        <span className="text-sm text-sky-500">
                          ¿Olvidó su contraseña?
                        </span>
                        </button>*/}
                    </div>
                    <Input
                      type={"password"}
                      name={"pwd"}
                      id="pwd"
                      data={password}
                      autocomplete="new-password"
                      setData={guardarPassword}
                      classes="block  w-full px-4 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
                      focus:ring-2 focus:ring-sky-300 focus:outline-none
                      invalid:ring-2 invalid:ring-red-400"
                    />
                    {/*<div className="pt-3">
                      <input
                        type="checkbox"
                        className="checked:bg-blue-600 checked:border-transparent "
                      />
                      <label className="ml-2">Recordarme</label>
</div>*/}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-6 rounded-md bg-indigo-600
                                        focus:bg-indigo-700 active:bg-indigo-500"
                    onClick={submitNuevoProducto}
                  >
                    <span className="text-white">Continuar</span>
                  </button>
                  {/* <p className="border-t pt-6 text-sm">
                    No te has registrado?
                    <a href="#" className="text-sky-500 ml-2">
                      Registrate
                    </a>
                    <div
                    role="hidden"
                    className="mt-12 border-t border-t-4 border-gray border-opacity-50"
                  >
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-600 bg-white">
                      Or
                    </span>
                  </div>
                  </p>  */}

                  <div className="text-center">
                    <div className="w-10 inline-block">
                      <a href="https://www.facebook.com/NacionalSegurosBolivia" target="_blank">
                        <FontAwesomeIcon
                          icon={faFacebookSquare}
                          className="text-3xl text-indigo-600"
                        />
                      </a>
                    </div>
                    <div className="w-10 inline-block">
                      <a href="https://www.instagram.com/nacionalsegurosbolivia/" target="_blank">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-3xl text-indigo-600"
                        />
                      </a>
                    </div>
                    <div className="w-10 inline-block">
                      <a href="https://www.linkedin.com/company/nacional-seguros/" target="_blank">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="text-3xl text-indigo-600"
                        />
                      </a>
                    </div>
                    <div className="w-10 inline-block">
                      <a href="https://www.youtube.com/channel/UCNpBdvVjWgcqaOI6_FgiSvg/featured" target="_blank">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className="text-3xl text-indigo-600"
                        />
                      </a>
                    </div>
                    <div className="w-10 inline-block">
                      <a href="https://www.tiktok.com/@nacionalsegurosbolivia?_d=secCgsIARCbDRgBIAMoARI%2BCjzTF1htCwFn7hYpsZBLsyDhYOOPiHx85Lnqnz3xMYBt%2BehXrym4Ot5ETlzqNSq7CHT2IcLGLUfyIqOtyNsaAA%3D%3D&language=es&sec_uid=MS4wLjABAAAAdRlabWzdxYYWXogwERU9KpMLB1LrOUAUEpZA7KXIumL6zfUSzwm-L8plpueChAiB&sec_user_id=MS4wLjABAAAAmQYQiccp4PDLZC1uSKnzWoE2RZvk7cF3IPj6MNB-h9RKVREcGlYyxzrxAvSqCtOh&share_app_name=musically&share_author_id=6865315168919192582&share_link_id=3703b983-d415-486c-9a57-178e533263ce&timestamp=1607548299&u_code=d8gi96238cmd43&user_id=6743797021507453957&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp&_r=1" target="_blank">
                        <FontAwesomeIcon
                          icon={faTiktok}
                          className="text-3xl text-indigo-600"
                        />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center space-x-4 px-3 pt-3">
            <span>&copy; Desarrollado por Idrix Technology S.A.</span>
            {/*<a href="#" className="text-sm hover:text-sky-900">
              Contacto
            </a>
            <a href="#" className="text-sm hover:text-sky-900">
              Privacy & Terms
                </a>*/}
          </div>
        </div>
      </div>
      {alert && (
        <AlertTable
          cuerpo="Ha ocurrido un error"
          icono="error"
          color="red"
          showModal2={true}
        />
      )}
    </Fragment>
  );
};

export default LoginScreen;
