import { useState } from "react";
import Icon from '@material-tailwind/react/Icon';
import { NavLink } from "react-router-dom";

export default function Sidebar_SubMenu({
  item,
  abierto,
  setabierto,
  nivel
}) {
  const [open, setOpen] = useState(false);

  {/*padres con hijos*/}
  if (item.childrens) {
    return (
      <details className={`flex cursor-pointer duration-500 text-gray-700 text-sm items-center gap-x-4 
      ${item.index === 0 && "bg-light-white"
        } `}>
        <summary className={`list-none`}>
          <li className={`flex p-2 cursor-pointer duration-500  text-sm items-center
          ${abierto ? "hover:bg-gray-300 hover:!text-colorbo" : "text-gray-300"
            }`
          } onClick={() => setabierto(1)}>
            <Icon name={item.icon} size='2x1' className="flex-none" />
            <p className={` ${!abierto && "hidden duration-400"} pl-2 duration-400 grow`}>{item.title}</p>
          </li>
        </summary>
        <div className={` ${!abierto && "hidden duration-400"} ml-4`}>
          {item.childrens.map((child, index) =>
            <Sidebar_SubMenu key={index} item={child} abierto={1} setabierto={setOpen} />
          )}
        </div>
      </details>
    )
  } else {
    return (
      <NavLink to={`${item.path}`} exact="True" className={({ isActive }) => (isActive ? `flex text-colorbo ${abierto ? "bg-gray-300 hover:bg-gray-300 hover:no-underline" : "hover:no-underline"}` :
        `flex duration-500 items-center hover:no-underline} ${abierto ? "hover:bg-gray-300 hover:no-underline text-gray-700 " : "hover:no-underline"}`)}>
        <li
          key={item.index}
          className={`flex p-2 cursor-pointer text-sm items-center 
              ${item.index === 0 && "bg-light-white"
            } ${abierto ? "hover:!text-colorbo" : "text-gray-300"
            }`}
          onClick={() => setabierto(1)}>
          <Icon name={item.icon} size='2x1' />
          <span className={` ${!abierto && "hidden duration-400"} origin-left duration-200  pl-2`}
          >
            {item.title}
          </span>
        </li>
      </NavLink>
    )
  }
}