import React from "react";
import Icon from "@material-tailwind/react/Icon";
import { useState } from "react";

const AlertTable = (props) => {
    const { showModal2, setShowModal2, cuerpo, icono, color } = props
    const [open, setOpen] = useState(false);
    //console.log("show",showModal2,"open",open);
    return (
        <>
            <div className={`absolute left-0 bottom-0 z-50 pl-20 m-5 
            ${showModal2 === open && "hidden"}`}>
                <div className={`flex items-center bg-${color}-500 gap-4 px-2 py-2 shadow-md mr-2`}>
                    <div className={`bg-white rounded-full pt-1 px-1 w-8 h-8 text-${color}-500`}>
                        <Icon name={icono} size='2x1' />
                    </div>
                    <div className="text-white">
                        {cuerpo}
                    </div>
                    <div onClick={() => setOpen(true)} className="text-white pt-1 cursor-pointer">
                        <Icon name="close" size='2x1' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlertTable;