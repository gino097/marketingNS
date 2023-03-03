import Icon from "@material-tailwind/react/Icon";
import React, { Fragment, useEffect, useState } from "react";
import ModalClose from "./ModalClose";
import UseDarkMode from "../hooks/UseDarkMode";

export default function Header() {
  const [typeModal, setTypeModal] = useState({
    cabecera: "",
    cuerpo: "",
    confirmacion: "",
    salida: "",
  });

  const [setTheme, colorTheme] = UseDarkMode();
  const [showModal, setShowModal] = useState(false);
  const modelModal = () => {
    return (
      <ModalClose
        showModal={showModal}
        setShowModal={setShowModal}
        cabecera={typeModal.cabecera}
        cuerpo={typeModal.cuerpo}
        confirmacion={typeModal.confirmacion}
        salida={typeModal.salida}
      />
    );
  };
  
  return (
    <nav className=" flex items-center justify-end flex-wrap text-gray-500 p-1 border-b border-gray-300 bg-colorbg dark:bg-dark  ">
      <ul className="flex">
        <li
          className=" mr-2 px-0 sm:!mr-2 group sm:!px-2"
          onClick={() => setTheme(colorTheme)}
        >
          <a 
            className="sm:-mr-4 inline-block flex bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-indigo-400 hover:text-zinc-50 duration-500 text-gray-500 text-sm items-center hover:no-underline "
            href="#"
          >
            {colorTheme === "dark" ? (
              <Icon name="dark_mode" size="2xl" />
            ) : (
              <Icon name="dark_mode" size="2xl" />
            )}
          </a>
          {colorTheme === "dark" ? (
            <p className="lg:hidden group-hover:block absolute text-white mt-2 bg-rgba-indigo rounded-md p-2 text-xs lg:block hidden z-50">
              Cambiar a tema oscuro
            </p>
          ) : (
            <p className="lg:hidden group-hover:block absolute text-white mt-2 bg-rgba-indigo rounded-md p-2 text-xs lg:block hidden z-50">
              Cambiar a tema claro
            </p>
          )}
        </li>
        {/*<li className="mr-2 px-0 sm:!mr-2 group sm:!px-2">
          <a
            className="inline-block flex bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-indigo-400 hover:text-zinc-50 duration-500 text-gray-500 text-sm items-center hover:no-underline"
            href="#"
          >
            <Icon name="notifications" size="2xl" />
          </a>
          <p className="lg:hidden group-hover:block absolute text-white mt-2 bg-rgba-indigo rounded-md p-2 text-xs lg:block hidden z-50">
            Notificaciones
          </p>
        </li>*/}
        <li className="mr-2 px-0 sm:!mr-2 group sm:!px-2">
          <a
            className="sm:-mr-4 inline-block flex bg-gray-300 rounded-full p-2 cursor-pointer hover:bg-indigo-400 hover:text-zinc-50 duration-500 text-gray-500 text-sm items-center hover:no-underline"
            href="cambiarclave" path="cambiarclave"
          >
            <Icon name="person" size="2xl" />
          </a>
          <p className="lg:hidden group-hover:block absolute text-white mt-2 bg-rgba-indigo rounded-md p-2 text-xs lg:block hidden z-50">
            Cambiar Clave
          </p>
        </li>
        {/* <li className="mr-2 px-0 sm:!mr-2 group sm:!px-2">
          <Dropdown />
          <p className="lg:hidden group-hover:block absolute mt-2 bg-rgba-indigo text-white rounded-md p-2 text-xs lg:block hidden z-50">
            Información
          </p>
        </li> */}
        <li
          className="px-0 sm:!mr-2 group sm:!px-2"
          onClick={(e) => {
            setShowModal(true);
            setTypeModal({
              ...typeModal,
              cabecera: "Cerrar Sesión",
              cuerpo: "Seguro que desea salir?",
              confirmacion: "Salir",
              salida: "Cancelar",
            });
          }}
        >
          <a
            className=" inline-block flex rounded-full p-2 cursor-pointer hover:bg-indigo-400 hover:text-zinc-50 duration-500 text-gray-500 text-sm items-center hover:no-underline"
            href="#"
          >
            <Icon name="logout" size="2xl" />
          </a>
          <p className="lg:hidden group-hover:block absolute mt-2 bg-rgba-indigo text-white rounded-md p-2 text-xs lg:block hidden z-50">
            Salir
          </p>
        </li>
      </ul>
      {modelModal()}
    </nav>
  );
}
