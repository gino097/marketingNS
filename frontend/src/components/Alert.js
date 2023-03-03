import React from "react";
import {
    faExclamationCircle
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Alert = (props) => {
    return (
        <>
        <div className="w-full bg-red-500 text-center rounded-md text-white">
            <FontAwesomeIcon icon={faExclamationCircle} className="" />
            <p>Lo sentimos hubo un error</p>
        </div>
    </>
     );
}
 
export default Alert;