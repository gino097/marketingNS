import { useContext, Fragment } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';

import Input from "@material-tailwind/react/Input";

export default function DatosPer() {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    return <div className='flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">SALUD FLEXIBLE</h1>

    </div>
}