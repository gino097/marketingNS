import { Fragment, React, useState, useEffect } from "react";
import ErrorImg from "../../../images/Error.svg"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { } from "@fortawesome/free-solid-svg-icons";
import 'react-loading-skeleton/dist/skeleton.css'
import Logo_login from "../../../assets/recursos_proyecto/LOGOS NS sin slogan-02.png";


const NoAutorizadoPage = () => {
 /* let navigate = useNavigate();

  const useData = useSelector((state) => state.userLogin);
  const { error, userInfo } = useData;

  useEffect(() => {
    if (!error) {
      if (userInfo) {
        if (userInfo.id_perfil === 14 || userInfo.id_perfil === 15) {
          navigate("/dashboard");
        } else {
          navigate("/errorRedirectScreen");
        }
      }
    }
  });*/
  return (
    <Fragment>
      <div className="relative py-3">
        <div className="m-auto md:w-11/12">
          {/*<img
            src={Logo_login}
            loading="lazy"
            className="w-36 ml-4 mb-2"
            alt="tailus logo"
  />*/}
          <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
            <div className="lg:grid lg:grid-cols-login">
              <div className="rounded-lg col-span-1 lg:block hidden">
              <img
                  src={ErrorImg}
                  className="rounded-l-xl object-cover"
                  loading="lazy"
                  height=""
                  width=""
                  alt="music mood"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoAutorizadoPage;
