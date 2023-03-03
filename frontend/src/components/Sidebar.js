import { useSelector } from "react-redux";
import Icon from "@material-tailwind/react/Icon";
import Sidebar_SubMenu from "./Sidebar_SubMenu";
import items_administrador from "../assets/data/sidebar_items_perfil_administrador.json";
import items_logistica from "../assets/data/sidebar_items_perfil_logistica.json";
import items_administrativo from "../assets/data/sidebar_items_perfil_administrativo.json";
import items_suscriptor from "../assets/data/sidebar_items_perfil_suscriptor.json";
import items_broker from "../assets/data/sidebar_items_perfil_broker.json";
import items_agente from "../assets/data/sidebar_items_perfil_agente.json";
import Logo_sidebar from "../images/logo.png";
import { useState } from "react";

export default function Sidebar() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let items_visualizar;
  if (userInfo.id_perfil === 14 || userInfo.id_perfil === 15) {
    items_visualizar = items_administrador;
  } else if (userInfo.id_perfil === 29) {
    items_visualizar = items_logistica;
  }else if (userInfo.id_perfil === 16) {
    items_visualizar = items_logistica;
  }
  
  //Para el menú
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={` ${open ? "w-56 bg-white" : "w-20 p-3 bg-blue-700"
          }  h-screen pt-2 relative  md:fixed static border-r border-gray-300 overflow-y-auto`}
      >
        <div className="flex gap-x-4 items-center border-b border-gray-300 mt-1 pr-2">
          <div
            className={`cursor-pointer duration-500 ${open ? "pl-2" : "pl-2 text-gray-300"
              }`}
            onClick={() => setOpen(!open)}
          >
            <Icon name="dehaze" size="2x1" />
          </div>
          <h1
            className={`text-gray-700 pb-1  origin-left font-medium text-xl ${!open && "scale-0"
              }`}
          >
            <div className="rounded-lg col-span-1 lg:block hidden">
              <img
                src={Logo_sidebar}
                className="rounded-l-xl object-cover"
                loading="lazy"
                height=""
                width=""
                alt="music mood"
              />
            </div>
          </h1>
        </div>
        <div>
          <ul className="pt-6">
            {
              items_visualizar.map((item, index) => (
                <Sidebar_SubMenu
                  key={index}
                  item={item
                  }
                  abierto={open}
                  setabierto={setOpen}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}