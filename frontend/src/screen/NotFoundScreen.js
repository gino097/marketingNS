import React from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import {
    faTrash,
    faPencil
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NotFoundScreen = () => {
    return (  
        
    <Card >
        <CardHeader color="blue" contentPosition="none" >
            <div className="w-full flex items-center justify-between">
                <h2 className="text-white text-2xl">Cooperativas</h2>
                <Button
                    color="transparent"
                    buttonType="link"
                    size="lg"
                    style={{ padding: 0 }}
                >
                    Mira más
                </Button>
            </div>
        </CardHeader>
        <CardBody>
            <div className="overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                ID
                            </th>
                            <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                Nombre
                            </th>
                            <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                Salario
                            </th>
                            <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                Ciudad
                            </th>
                            <th className="w-1/12 px-2 text-center text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                1
                            </th>
                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                Dakota Rice
                            </td>
                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                $36,738
                            </td>
                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left">
                                Niger
                            </td>
                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-3 text-left px-3 py-2">
                            <div className='flex flex-row'>
                            <div
                              className="border-2 border-indigo-300 rounded hover:border-indigo-500 text-indigo-300 rounded hover:text-indigo-500  w-9 h-9 grid place-items-center grid-cols-1 m-2 focus:pointer-events-auto cursor-pointer w-8" 
                            >
                              <FontAwesomeIcon icon={faPencil} className="" />
                            </div>
                            <div
                              className="border-2 border-red-300 rounded hover:border-red-500 text-red-300 rounded hover:text-red-500  w-9 h-9 grid place-items-center grid-cols-1 m-2 focus:pointer-events-auto cursor-pointer" 
                            >
                              <FontAwesomeIcon icon={faTrash} className="" />
                            </div>
                            </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </CardBody>
    </Card> );
}
 
export default NotFoundScreen;