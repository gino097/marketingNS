import React, { useEffect, Fragment, useRef, useState, useLayoutEffect } from "react";
import RegisterPolicySVG from "../../assets/recursos_proyecto/unDraw/my_documents.svg";
import Input from "@material-tailwind/react/Input";
import validator from 'validator';
import { LeyendaError } from "../../components/form/cssElementsForm";
import Select from "react-select";
import AsyncSelect from "react-select";
import ReactSelect from "react-select";
import Button from "@material-tailwind/react/Button";
import Alert from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import StepperControl from "../../components/StepperControl";
import Stepper from "../../components/Stepper";
import datosPer from "../../components/steps/datosPer";
import datosUIF from "../../components/steps/datosUIF";
import planEle from "../../components/steps/planEle"; 
import declaJurada from "../../components/steps/declaJurada";

const Form_RegistrarPoliza = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps =[
    "Account Information",
    "Personal Details",
    "Complete"
  
  ];
  const displayStep =(step) => {
    switch (step) {
      case 1:
        return <datosPer />
      case 2:
        return <datosUIF />
      case 3:
        return <declaJurada />
      case 4:
        return <planEle/>

        default:
    }
  }


  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
       <Stepper
        steps ={steps}
        currentStep={currentStep}
       />
      </div>
      {/* Navegacion controles*/}

      <StepperControl />

    </div>
    /*
    <Fragment>
      <div className="app">
      </div>
      <div className="w-full grid lg:grid-cols-3 grid grid-cols-1  !my-0 ">
        <form className="w-[90%] mx-auto pl-8 bg-white col-span-2 h-fit w-full" autoComplete="off">
          <h2 className=" pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">Solicitud de seguro y delcaraci??n personal de salud</h2>
          <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">SALUD FLEXIBLE</h1>
          <div className="flex flex-wrap -mx-4 mb-1 space-x-28  pl-9 ">
          <div className="w-48 md:w-1/2 mt-3 -px-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Fecha de solicitud"
                outline={true}
                placeholder="Fecha de Solicitud"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-48 md:w-1/2 -px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Lugar"
                outline={true}
                placeholder="Lugar"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-48 md:w-1/2 -px-3 mt-3 pl-3  sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Intermediario"
                outline={true}
                placeholder="Intermediario"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>

            <h3 className=" pl-6 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-1xl pt-3 md:text-2xl dark:text-gray-100">OBSERVACIONES IMPORTANTES</h3>
            <div>
              <p className="text-justify -pl-2 pr-9">
              "S??rvase llenar este formulario. Haga sus declaraciones con toda tranquilidad y franqueza, si tiene alguna enfermedad, manifi??stela de 
              forma clara y detallada. La falta de declaraci??n completa y verdadera llevar?? a una evaluaci??n equivocada de su salud. En todo caso, 
              una declaraci??n aut??ntica nunca ser?? discutida por la Compa????a que tom?? conocimiento del riesgo aceptado." 
              </p>
            </div>



            <div className="mt-3">
            <h2>
              1. Datos del:
            </h2>
            <div class="flex justify-left space-x-10  mt-2 -ml-5 ">
                          <label class="inline-flex items-center px-5 ">
                            <input type="radio" class="form-radio w-4 h-4" name="Dato1" value="tomador"/>
                            <span class="ml-2 ">Tomador</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="Dato1" value="tutiAse"/>
                            <span class="ml-2">Titular Asegurado</span>
                          </label>
                   
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="Dato1" value="DepeAse"/>
                            <span class="ml-2 ">Dependiente Asegurado</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="Dato1" value="Conyu"/>
                            <span class="ml-2">Conyuge</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="Dato1" value="Hijo"/>
                            <span class="ml-2">Hijo</span>
                          </label>
                      </div>
                      </div>
                      <div className="flex flex-wrap  mb-1 space-x-2  px-6">
            <div className="w-80 md:w-1/2 mt-3 sm:-ml-3 md:-ml-6 ">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Nombres y apellidos"
                outline={true}
                placeholder="Nombres y apellidos"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2  mt-3  sm:-ml-3 md:-ml-6 ">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Lugar de nacimiento"
                outline={true}
                placeholder="Lugar de nacimiento"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="flex flex-wrap mt-2 mb-1 space-x-2 px-6">

            <div className="w-80 md:w-1/2  mt-3  sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Fecha de nacimiento"
                outline={true}
                placeholder="Fecha de nacimiento D/M/A"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2  mt-3  sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Edad"
                outline={true}
                placeholder="Edad"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
          </div>
            <div className="mt-3">
            <h3>Genero</h3>
            <div class="flex justify-left space-x-6 mt-2 -ml-5 ">
                  <label class="inline-flex items-center px-5 ">
                  <input type="radio" class="form-radio w-4 h-4" name="gene" value="masc"/>
                  <span class="ml-2 ">Masculino</span>
                  </label>
                  <label class="inline-flex items-center ">
                  <input type="radio" class="form-radio w-4 h-4" name="gene" value="feme"/>
                <span class="ml-2">Femenino</span>
               </label>
              </div>
            </div>
          <div className="flex flex-wrap px-1 mb-2">
            <div className="w-full md:w-1/3 mt-3 pl-2  pr-3 sm:-ml-3 md:-ml-6 md:pr-1">
              <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-600 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="Estado civil"
              >
                <option value="-1">Estado civil</option>
                <option value="ENTREGA EN OFICINA">Casado(a)</option>
                <option value="ENTREGA AL TALLER">Conviviente</option>
                <option value="ENTREGA AL COMERCIAL">Divorciado(a)</option>
                <option value="ENTREGA AL TALLER">Soltero(a)</option>
                <option value="ENTREGA AL TALLER">Viudo(a)</option>        
              </select>
            </div>
            <div id="combo_estado_civil" className="w-66 md:w-2/3 px-3 mt-8" hidden>
              <select data-mdb-filter="true" className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-700
                bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                name="usuario_taller"
              >
                <option value="-1">Estado</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap -space-x-1">
          <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Ocupaci??n"
                outline={true}
                placeholder="Ocupaci??n"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Nacionalidad"
                outline={true}
                placeholder="Nacionalidad"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="flex flex-wrap -space-x-1">
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="C??dula de identidad"
                outline={true}
                placeholder="C??dula de identidad"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Ciudad"
                outline={true}
                placeholder="Ciudad"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="flex flex-wrap -space-x-1">
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="NIT"
                outline={true}
                placeholder="N.I.T"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="mt-3 -ml-3">
            </div>
            
            <div className="w-80 md:w-1/2  mt-3 pl-4 px-2 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Barrio"
                outline={true}
                placeholder="Direcci??n de la residencia habitual o domicilio legal"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
          </div>



          <div className="text-justify">
            <h2 className="-ml-3 mt-3 pr-9">
            2. DATOS DEL UIF
            </h2>
            <div className="flex flex-wrap -space-x-1">
            <div className="w-80  md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Nombre del c??nyuge"
                outline={true}
                placeholder="Nombre del c??nyuge"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Profesi??n"
                outline={true}
                placeholder="Profesi??n"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="flex flex-wrap -space-x-1">
              <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Cargo actual"
                outline={true}
                placeholder="Cargo actual"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
              </div>
              <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Pa??s de recidencia"
                outline={true}
                placeholder="Pa??s de residencia"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
              </div>
              </div>
              <div className="flex flex-wrap -space-x-1">
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Lugar de trabajo"
                outline={true}
                placeholder="Lugar de trabajo"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Fecha de ingreso"
                outline={true}
                placeholder="Fecha de ingreso"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="flex flex-wrap -space-x-1">
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Ingreso anual"
                outline={true}
                placeholder="Ingreso anual"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Direcci??n comercial"
                outline={true}
                placeholder="Direcci??n comercial"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mt-3 pl-3 mb-2 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Referencias personales y/o Bancarias y/o Comerciales"
                outline={true}
                placeholder="Referencias personales y/o Bancarias y/o Comerciales"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
          </div>

          
          
          <h2>
            3. DATOS DEL PLAN ELEGIDO
            </h2>
            <div className="flex flex-wrap -space-x-1">
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Plan"
                outline={true}
                placeholder="Plan"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            <div className="w-80 md:w-1/2 px-3 mt-3 pl-3 sm:-ml-3 md:-ml-6">
              <Input
                type="text"
                color={"indigo"}
                size="regular"
                name="Valor Asegurado"
                outline={true}
                placeholder="Valor Asegurado"
                className=""
                defaultValue={""}
                maxLength={20}
                autocomplete="new-password"
              />
            </div>
            </div>
          <div className="text-justify ">
              <h2 className="mt-3">4. DECLARACI??N JURADADE SALUD</h2>
                  <h3 className="px-3 text-sm mt-2"> 4.1 De acuerdo a su conocimiento:</h3>
                </div>
                <div className="px-4 text-sm mt-2 ">
                <p className="w-3/4">
                4.1.1 ??Tiene contratado alg??n Seguro nacional o internacional en otra Compa????a? Si su respuesta fuera
                    positiva, indique en qu?? Compa????a y el tiempode servicio.
                </p>
                <div class="flex justify-end -my-10  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalA" value="contrato"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalA" value="contrato2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                <div class="flex flex-wrap mt-7 mb-1 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-3 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-quirur">
                        Compa??ia
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-grid-quirur" type="text" placeholder=""/>
                    </div>
                    <div class="w-48 md:w-1/2 px-1 pl-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fecha">
                      Tiempo de servicio
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fecha" type="text" placeholder=""/>
                    </div>
                </div>
                <p className="w-3/4 mt-4">
                4.1.2 ??Ha sido usted rechazado alguna vez para un seguro de salud o en alguna renovaci??n
                   o rehabilitaci??n del mismo?
                    </p>
                    <div class="flex justify-end -my-14 -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalB" value="reno"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalB" value="reno2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                <p className="w-3/4 py-12 ">
                4.1.3 ??Cu??l es el parentesco familiar que lo une con el titular asegurado y/o dependiente asegurado?
                    </p>
                    <div class="flex flex-wrap mb-1 ">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-3 md:mb-0 ">
                      <label class=" -mt-9 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-paren">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-paren" type="text" placeholder=""/>
                    </div>
                    </div>

                <p className="w-3/4 mt-3 ">
                4.1.4 ??Practica Ud. alguno de los siguientes deportes: Paracaidismo,Andinismo, Monta??ismo,Alas Delta,
                    Buceo, Carreras de Velocidad (Auto/Moto), Salto El??stico u otro?
                    </p>
                    <div class="flex justify-end -my-9  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalD" value="depo"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalD" value="depo2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                    <p className="w-3/4 mt-9 mb-3">
                      4.1.5 Indique detalladamente lo siguiente:
                    </p>
                  <div class="flex flex-wrap -mx-3 mb-1 space-x-40">
                    <div class="w-48 md:w-1/2 px-3 mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Estatura">
                        Estatura
                      </label>
                    <input class=" pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-Estatura" type="text" placeholder="mts"/>
                    </div>
                  <div class="w-48 md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-peso">
                      Peso
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-peso" type="text" placeholder="Kg"/>
                    </div>
                  </div>
                  <p>
                    4.1.6 Su preci??n arterial es:
                  </p>
                  <div class="flex justify-left space-x-20 mb-3 mt-2 ">
                          <label class="inline-flex items-center px-2 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalF" value="arte1"/>
                            <span class="ml-2 ">Alta</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalF" value="arte2"/>
                            <span class="ml-2">Baja</span>
                          </label>
                   
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalF" value="arte3"/>
                            <span class="ml-2 ">Normal</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalF" value="arte4"/>
                            <span class="ml-2">Ignora</span>
                          </label>
                      </div>
                  <p>
                  4.1.7 ??Fuma usted?
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalG" value="diario"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalG" value="diario2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="flex justify-left my-3 space-x-20 mb-4 pl-2">
                          <label class="inline-flex items-center  ">
                            <input type="radio" class="form-radio w-4 h-4" name="diario" value="mas5"/>
                            <span class="ml-2 ">Menos de 5 cigarrillos al d??a</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="diario" value="menos5"/>
                            <span class="ml-2">Mas de 5 cigarrillos al d??a</span>
                          </label>
                      </div>
          

                    <p>
                  4.1.8 ??Dej?? de fumar? 
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalH" value="fumar"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalH" value="fumar2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class=" w-full md:w-1/2  mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fuma">
                      ??Cu??nto fumaba diariamente?
                      </label>
                      <div class="flex justify-left my-3 space-x-20 mb-4 pl-2 ">
                          <label class="inline-flex items-center  ">
                            <input type="radio" class="form-radio w-4 h-4" name="diario" value="mas5"/>
                            <span class="ml-2 ">Menos de 5 cigarrillos al d??a</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="diario" value="menos5"/>
                            <span class="ml-2">Mas de 5 cigarrillos al d??a</span>
                          </label>
                      </div>
                      </div>
                    <p className="mt-3">
                      4.1.9. ??Ingiere usted vino, licores, cerveza u otras bebidas alcoh??licas?
                    </p>
                    <div class="flex justify-end -my-5 -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalI" value="vino"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalI" value="vino2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class=" w-full md:w-1/2 mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-frecuencia">
                      Frecuencia
                      </label>
                      <div class="flex justify-left my-3 px-1 space-x-20 mb-4  ">
                          <label class="inline-flex items-center  ">
                            <input type="radio" class="form-radio w-4 h-4" name="bebidas" value="frecuente"/>
                            <span class="ml-2">Frecuentemente</span>
                          </label>
                          <label class="inline-flex items-center px-20 ">
                            <input type="radio" class="form-radio w-4 h-4" name="bebidas" value="ocasional"/>
                            <span class="ml-2">Ocasionalmente y/o en eventos sociales</span>
                          </label>
                      </div>
                      </div>
                    <p className="mt-3">
                      4.1.10. ??Ha recibido o est?? recibiendo tratamiento por alcoholismo y/o drogadicci??n?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalJ" value="drog"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalJ" value="drog2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class=" w-96 md:w-1/2 mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fuma">
                      Especifique
                      </label>
                    <input class="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-fuma" type="text" placeholder=""/>
                    </div>
                    <p className="mt-3">
                      4.1.11. ??En los ??ltimos 5 a??os se ha practicado alg??n examen?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalK" value="exa"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalK" value="exa2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <p className="mb-2">??Cuales?:</p>                                  
                  <div class="flex space-x-20 mb-4">
                      <div class="  flex items-center mr-4  ">
                          <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sangre</label>
                      </div>
                      <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orina</label>
                      </div>
                      <div class="flex items-center mr-4">
                          <input id="inline-3-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="inline-3-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Electrocardiograma</label>
                      </div>
                      <div class="flex items-center mr-4">
                          <input id="inline-4-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="inline-4-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rayos X</label>
                      </div>
                      <div class="flex items-center mr-4">
                          <input id="inline-5-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="inline-5-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Otros</label>
                      </div>
                  </div>
                    <div class="flex flex-wrap -mx-3 mb-1 space-x-20">
                    <div class="w-48 md:w-1/2 px-3 mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Estatura">
                        Resultados
                      </label>
                    <input class=" pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-Estatura" type="text" placeholder=""/>
                    </div>
                  <div class="w-48 md:w-1/2 px-2 ">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-peso">
                      Motivo
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-peso" type="text" placeholder=""/>
                    </div>
                    <div class="w-48 md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-peso">
                      Fecha
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-peso" type="text" placeholder="DD/MM/AA"/>
                    </div>
                  </div>
                  <p className="w-3/4 mt-3 mb-3">
                    4.1.12 ??Ha sido hospitalizado?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalL" value="hospitalizado"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalL" value="hospitalizado2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                  <div class="flex flex-wrap -mx-3 mb-2 space-x-20">
                    <div class="w-48 md:w-1/2 px-3 mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Diagnostico">
                        Diagn??stico
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-Diagnostico" type="text" placeholder=""/>
                    </div>
                  <div class="w-48 md:w-1/2 px-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fecha">
                      Fecha
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fecha" type="text" placeholder="DD/MM/AA"/>
                    </div>
                  </div>
                  <p>
                  4.1.13. ??Ha sufrido alg??n accidente que haya requerido ser tratado por m??dico?
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalM" value="sufrido"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalM" value="sufrido2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class="  pt-1 w-2/5  md:w-1/2  mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-acci">
                       DETALLAR
                      </label>
                    <input class="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-acci" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.1.14. ??Ha sido sometido a intervenci??n quir??rgica?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalN" value="inter"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalN" value="inter2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class="flex flex-wrap  mb-2 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-quirur">
                        Especifique
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-grid-quirur" type="text" placeholder=""/>
                    </div>
                  <div class="w-48 md:w-1/2 px-1 pl-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fecha">
                      Fecha
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fecha" type="text" placeholder="DD/MM/AA"/>
                    </div>
                  </div>
                  <p>
                  4.1.15. ??Tiene Ud. hospitalizaci??n pendiente? 
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal??" value="hosp"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal??" value="hosp2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                  <div class="flex flex-wrap  mb-2 mt-3">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-pendiente">
                        Indicar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-grid-pendiente" type="text" placeholder=""/>
                    </div>
                    </div>
                  <p className="w-4/5 mt-3">
                  4.1.16. ??Est?? Ud. actualmente sometido a alg??n tratamiento o terapia o tomando medicamentos de cualquier tipo?
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalO" value="tratamiento"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalO" value="tratamiento2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class="flex flex-wrap  mt-4 mb-2 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-quirur">
                        Especifique
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-grid-quirur" type="text" placeholder=""/>
                    </div>
                  <div class="w-48 md:w-1/2 px-1 pl-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fecha">
                      Fecha
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fecha" type="text" placeholder="DD/MM/AA"/>
                    </div>
                  </div>
                  <h3>4.2. Ha padecido o tiene conocimiento de sufrir de: </h3>
                  <p className="mt-2">
                  4.2.1 ??V??rtigos, convulsiones, epilepsia, par??lisis, enfermedades mentales, dolores de cabeza severos
                    o jaquecas?
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalP" value="vertigo"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalP" value="vertigo2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                 <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-vertigo">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-vertigo" type="text" placeholder=""/>
                    </div>
                  <p>
                  4.2.2. ??Tos cr??nica, enfisema, cansancio al caminar o cualquier otra enfermedad de los pulmones o 
                      sistema respiratorio?
                  </p>
                  <div class="flex justify-end -my-5  -space-x-1 mb-3">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalQ" value="cronica"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalQ" value="cronica2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>

                 <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-tos">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-tos" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.2.3. ??Presi??n alta, soplos en el coraz??n, arritmias u otra enfermedad del coraz??n?
                    </p>
                        <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalR" value="soplos"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literalR" value="soplos2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-7 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-alta">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-alta" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.2.4. ??C??lculo en el ri????n, pr??stata o v??as urinarias, o cualquier otra enfermedad relacionada a la vejiga y v??as urinarias?
                    </p>
                        <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.4" value="calculo"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.4" value="calculo"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-7 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-calculo">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-calculo" type="text" placeholder=""/>
                    </div>
                    <p className="text-justify w-4/5">
                    4.2.5. ??Artritis, reumatismo, columna, huesos, m??sculos o extremidades o cualquier otra enfermedad relacionada con las articulaciones?
                    </p>
                        <div class="flex justify-end -my-5 -space-x-1 -mt-10">
                          <label class="inline-flex items-center px-3  ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.5" value="artrits"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.5" value="artritis2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-11 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-artritis">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-artritis" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.2.6. ??Hemofilia, alteraciones de coagulaci??n, hemorragias persistentes o cualquier otra enfermedad de la sangre?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.6" value="hemo"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.6" value="hemo2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-7 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-hemo">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-hemo" type="text" placeholder=""/>
                    </div>    
                    <p>
                    4.2.7. ??Bocio, colesterol elevado, enfermedad de las gl??ndulas endocrinas?
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.7" value="bocio"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.7" value="bocio2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-7 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-bocio">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-bocio" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.2.8. ??C??ncer, quistes, ??lceras varicosas u otras enfermedades de igual naturaleza, hernias de cualquier tipo?  
                    </p>  
                    <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.8" value="herni"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.8" value="herni2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="w-1/3  pr-16 md:w-1/2 mb-6 mt-7 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-herni">
                        Detallar
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-herni" type="text" placeholder=""/>
                    </div>
                    <p>
                    4.2.9. ??El S??ndrome de Inmunodeficiencia Adquirida, SIDA? si la respuesta es si, se despliega la 4.2.10
                    </p>
                    <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.9" value="sindro"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.9" value="sindro2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <p className="mt-10 px-2">
                      4.2.10. ??Se ha realizado el test diagn??stico de SIDA?
                      </p>
                      <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.10" value="Stest"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.2.10" value="Stest2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="flex flex-wrap  px-2 mt-7 mb-2 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-diag">
                        Resultado
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-diag" type="text" placeholder=""/>
                    </div>
                  <div class="w-48 md:w-1/2 px-1 pl-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fecha">
                      Fecha
                    </label>
                    <input class="pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fecha" type="text" placeholder="DD/MM/AA"/>
                    </div>
                  </div>
                    <h3 className="-px-2"> 4.3.??Tiene Ud. alguna anormalidad de constituci??n, deformaci??n, amputaci??n u otro defecto f??sico?</h3>
                    <div class="flex justify-end -my-5  -space-x-1">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.3" value="defec"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.3" value="defec2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="flex flex-wrap  px-2 mt-7 mb-2 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-defec">
                        Detallar
                      </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-defec" type="text" placeholder=""/>
                     </div>
                    </div>
                    <h3 className="text-justify w-4/5"> 4.4. ??Tiene Ud. conocimiento de padecer alguna enfermedad o lesi??n a la que no se haya aludido directamente en este cuestionario?</h3>
                    <div class="flex justify-end -my-5 -space-x-1 -mt-9">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.4" value="pade"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.4" value="pade2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="flex flex-wrap  px-2 mt-11 mb-2 space-x-7">
                    <div class="w-1/3  pr-16 md:w-1/2   mb-6 md:mb-0 ">
                      <label class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-pade">
                        Detallar
                      </label>
                      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-pade" type="text" placeholder=""/>
                     </div>
                    </div>
                    <h3>
                    4.5.Cuando se trate de mujer
                    </h3>
                    <p className="px-3 mt-2">
                    ??Se encuentra embarazada?
                    </p>
                    <div class="flex justify-end -my-5 -space-x-1 -mt-4">
                          <label class="inline-flex items-center px-3 ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.5" value="emba"/>
                            <span class="ml-2 ">Si</span>
                          </label>
                          <label class="inline-flex items-center ">
                            <input type="radio" class="form-radio w-4 h-4" name="literal4.5" value="emba2"/>
                            <span class="ml-2">No</span>
                          </label>
                      </div>
                      <div class="flex flex-row mt-7  mb-1 ">
                    <div class="basis-1/4 md:w-1/2 px-2  mb-5 md:mb-0 -space-x-2">
                      <label class="  block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-meses">
                        cuantos meses esta de embarazo 
                      </label>
                    <input class=" pl-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2  leading-tight focus:outline-none focus:bg-white" id="grid-meses" type="text" placeholder=""/>
                    </div>
                  <div class="basis-1/4  md:w-1/2 -px-3  ">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-evo">
                    ??su embarazo ha evolucionado sin problemas?
                    </label>
                    <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-evo" type="text" placeholder=""/>
                    </div>
                    <div class="basis-1/3 md:w-1/2 mt-4 space-x-9 ">
                    <label class="pl-10 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-partos">
                    ??Cu??ntos partos o ces??reas ha tenido?
                    </label>
                    <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-partos" type="text" placeholder=""/>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4  mb-1 ">
                  <div class="basis-1/2 md:w-1/2 -pl-6">
                    <label class="  block uppercase tracking-normal text-gray-700 text-xs font-bold mb-2" for="grid-ultimoP">
                    Partos: Fecha del ??ltimo
                    </label>
                    <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ultimoP" type="text" placeholder=""/>
                    </div>
                    <div class="basis-1/3 md:w-1/2  space-x-9">
                    <label class=" pl-9 block uppercase tracking-normal text-gray-700 text-xs font-bold mb-2" for="grid-cesarea">
                    Ces??reas: Fecha de la ??ltima
                    </label>
                    <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cesarea" type="text" placeholder=""/>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 mb-1 space-x-9 ">
                    <div class="basis-1/2 md:w-1/2 ">
                    <label class=" block uppercase tracking-noraml text-gray-700 text-xs font-bold mb-2" for="grid-papan">
                    ??Cu??ndo se realiz?? el ??ltimo Papanicolaou? Fecha
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-papan" type="text" placeholder=""/>
                    </div>
                    <div class="basis-1/3 md:w-1/2 ">
                    <label class=" block uppercase tracking-normal text-gray-700 text-xs font-bold mb-2" for="grid-resultado">
                    Resultado
                    </label>
                    <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-presultado" type="text" placeholder=""/>
                    </div>
                    </div>
                </div>
                

        </form>
        
      </div>
      
    </Fragment>
    */ 
  );
 
};

export default Form_RegistrarPoliza;