import { useContext, useEffect, useRef, useState } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';
import { useDispatch, useSelector } from "react-redux";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import Skeleton from 'react-loading-skeleton'
import Pagination2 from '../../../components/form/Pagination2';

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Checkbox from '@mui/material/Checkbox';
import {
    listaRegistrosForm
  } from "../../../actions/inventario/productoActions";

import validator from 'validator';
import { LeyendaError, LeyendaErrorNaranja, LeyendaMensaje } from "../../../components/form/cssElementsForm";
import { URL_SERVER } from '../../../constants/serverUrl';

export default function DatosDeclaracion() {
    const { userData, setUserData } = useContext(StepperContext);
    const { datos_declaracion, setDatosDeclaracion } = useContext(StepperContext);
    var {pData, setpData} = useContext(StepperContext);
    const [msgVerificar, setMsgVerificar] = useState("");

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [pageCurrent, setPageCurrent] = useState(1);
    const [pageNumberCurrent, setpageNumberCurrent] = useState(9999);
    const result = useSelector((state) => state.productoList);
    
    const { pages, productos } = result;
    const inputCantidad = useRef(null);
    
    var listaP=new Array();
    var listCantidad= new Array();
    var listProductos= new Array();
    var listPStock= new Array();

    if(datos_declaracion!==true){
        setDatosDeclaracion(false);
    }
    useEffect(() => {
        dispatch(listaRegistrosForm({
          keyword,
          pageNumber: pageCurrent,
          pageSize: pageNumberCurrent,
          ciudad: userData.region==="Potosí"?"Cochabamba":userData.region==="Oruro"?"La Paz":userData.region,
        }));
      }, [dispatch, pageNumberCurrent, pageCurrent, keyword]);

    const objvalidar = require("../../../utils/Validator");
    const [validacion , setValidacion] = useState(false);
    const [listoEnviar, setListoEnviar] = useState(false);
    const [msgCantidad, setMsgCantidad] = useState(" ");
    var ban1;
    var ban2;
    var ban3;
    var auxCant;
    const listmsg=[msgCantidad];
    
    function vaciarPData(){
      pData.map((element)=>{
        element.cantidad=0;
        element.checked=false;
      })
    }
    function bloquearCampos(){
      for(var i=0;i<productos.length;i++){
        document.getElementsByName("Cantidad"+i).disabled=true;
        document.getElementById("btnConfirmar").disabled=true;
      }
    }

    function validarCantidad(){
      var listaCantidades1=new Array(listaP.length);
      var nombreError=new Array();
      var c1=0;// al menos uno es mayor a 0
      var c2=0;// todos son 0
      var c3=0;// al menos uno es menor a 0
      for(var i=0;i<listaP.length;i++){
        if(parseInt(document.getElementsByName("Cantidad"+i)[0].value)>0){
          c1+=1;
          listaCantidades1[i]=parseInt(document.getElementsByName("Cantidad"+i)[0].value);
        } else if(parseInt(document.getElementsByName("Cantidad"+i)[0].value)===0){
          c2+=1;
          listaCantidades1[i]=parseInt(document.getElementsByName("Cantidad"+i)[0].value);
        }
        if(parseInt(document.getElementsByName("Cantidad"+i)[0].value)<0){
          c3+=1;
          listaCantidades1[i]=parseInt(document.getElementsByName("Cantidad"+i)[0].value);
        }
        if(listaP[i].cantidad<parseInt(document.getElementsByName("Cantidad"+i)[0].value)){
          nombreError.push(listaP[i].producto);
        }
      }
      console.log("pData: ", pData);
      console.log("listaCantidades: ", listaCantidades1);
      
        /*for(var i=0; i<list.length;i++){
          if(list[i]>0){
            c1+=1;
        } else if(list[i]===0)c2+=1;
        if(list[i]<0)c3+=1;
    }*/
    console.log(c1, c2, c3);
    if(nombreError.length>0){
      var mensajeVerificar="La cantidad seleccionada de los siguientes productos superan el stock existente: \n"+nombreError.toString()+
      "\nAl momento contamos con el siguiente stock:";
      for(let i=0;i<nombreError.length;i++){
        for(let j=0;j<listaP.length;j++){
          if(listaP[j].producto===nombreError[i]){
            console.log("entro");
            mensajeVerificar+="\n"+listaP[j].producto+": "+listaP[j].cantidad;
          }
        }
      }
      setMsgVerificar(mensajeVerificar);        
      setDatosDeclaracion(false);
    }
    if(c2===listaCantidades1.length){setMensajeValidacion("No ha seleccionado ningún ítem"); setDatosDeclaracion(false);}
    if(c1>0 && c3===0 && nombreError.length===0) {setDatosDeclaracion(true); setMensajeValidacion(""); setUserData({ ...userData, ["productosS"]: pData }); bloquearCampos(); setListoEnviar(true)}
    if(c3>0){setMensajeValidacion("Cantidad ingresada no valida");setDatosDeclaracion(false);}
  }
    
    function obtenerDatosTabla(e){
      var nombreError=new Array();
      var ban1=0;
      var ban2=0;
      var ban3=0;
      for(var i=0;i<listaP.length;i++){
        if(document.getElementsByName("Cantidad"+i)[0].value!=="-1"){
          listaCantidades[i]=parseInt(document.getElementsByName("Cantidad"+i)[0].value);
        }
        if(listaP[i].cantidad<parseInt(document.getElementsByName("Cantidad"+i)[0].value)){
          nombreError.push(listaP[i].producto);
        }
        //console.log(document.getElementsByName("Check"+i)[0].checked);
        //console.log(document.getElementsByName("Cantidad"+i)[0].value);
        //console.log(document.getElementsByName("Cantidad"+i)[0].value);
        //console.log(document.getElementsByName("Cantidad"+i)[0].value);
      }
      //console.log(nombreError);
      if(nombreError.length>0){
        setMsgVerificar("La cantidad seleccionada de los siguientes productos superan el stock existente: \n"+nombreError.toString());        
        //setDatosDeclaracion(false);
      }
      else{
        setMsgVerificar("");
      }
      for(var i=0;i<listaP.length;i++){
        if(listaCheks[i]===false) ban1+=1;
        if(listaCheks[i]===true && listaCantidades[i]===0) ban2+=1;
        if(listaCheks[i]===true && listaCantidades[i]>0) ban3+=1;
      }
      if(ban1===listaP.length){setMensajeValidacion("No ha seleccionado ningún ítem"); setDatosDeclaracion(false);}
      else if(ban2>0){setMensajeValidacion("Uno o más ítems seleccionados sin cantidad"); setDatosDeclaracion(false);}
      else if(ban3>0 && nombreError.length===0){setMensajeValidacion(""); setDatosDeclaracion(true);setUserData({ ...userData, ["productosS"]: pData });}
      else if(ban3>0 && nombreError.length>0){setMensajeValidacion("");setDatosDeclaracion(false); }
      
      /*console.log(listaCheks);
      console.log(listaCantidades);
      console.log(listaNombres);
      console.log(listaCodigos);
      console.log(userData);*/
    }
    const [mensajeValidacion, setMensajeValidacion]=useState("");

    pData=new Array();

    productos?.map((valor) => {
      listaP.push({"id":valor.MATE_CODIGO,"producto":valor.MATE_NOMBRE, "cantidad":valor.MATE_STOCK});
      pData.push({"id":valor.MATE_CODIGO,"producto":valor.MATE_NOMBRE, "cantidad":0, "tipoP":valor.MATE_TIPO});
      listCantidad.push(0);
      listProductos.push(0);
    });
    var listaCheks=new Array(listaP.length);
    var listaCantidades=new Array(listaP.length);
    var listaNombres=new Array(listaP.length);
    var listaCodigos=new Array(listaP.length);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    var c=(-1);
    var c1=(-1);
    return <div className='flex flex-col'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&family=Manjari:wght@100&family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold font-title text-2xl pt-3 md:text-2xl dark:text-gray-100">SOLICITUD DE MATERIALES</h1>
        <div className="text-justify mt-3">
            {/* APARTADO 4.1 */}
            <CardBody>
            <div className=" overflow-x-auto border bg-gray-50 border-gray-50 rounded-md ">
              <table className="items-center w-full bg-transparent border-collapse" id="productosTable">
                <thead bgcolor="#045c94">
                  <tr>
                    <th className="px-2 text-slate-100 align-middle border-b border-solid border-slate-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-slate-100">
                      Nombre
                    </th>
                    <th className="px-2 text-slate-100 align-middle border-b border-solid border-slate-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-slate-100">
                      Foto
                    </th>
                    <th className="w-1/12 px-2 text-center text-slate-100 align-middle border-b border-solid border-slate-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-slate-100" id="items" name="items">
                      Cantidad
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-gray-50' >
                  {!productos ? <tr>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                  </tr> : null}
                  {productos?.map((valor) => {
                    c+=1;

                    /*listaP.push({"id":valor.MATE_CODIGO,"producto":valor.MATE_NOMBRE, "cantidad":valor.MATE_STOCK});
                    pData.push({"id":valor.MATE_CODIGO,"producto":valor.MATE_NOMBRE, "cantidad":0, "checked":false, "tipoP":valor.MATE_TIPO});
                    listCantidad.push(0);
                    listProductos.push(0);*/
                  
                    //listaP.push({"id":valor.MATE_CODIGO,"producto":valor.MATE_NOMBRE, "cantidad":0, "checked":false});
                    //indice = listaP.findIndex(element => element.id===valor.MATE_CODIGO);
                    return (
                      <tr className="hover:bg-gray-300" key={valor.MATE_CODIGO}>
                        <td className="border-b border-pink-700 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100" name={"Nombre"+c} value={valor.MATE_NOMBRE}>
                          {valor.MATE_NOMBRE}
                        </td>
                        <td className="border-b border-pink-700 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100">
                        <img
                            src={URL_SERVER+'/'+valor.MATE_IMG}
                            alt="foto"
                            className="w-10 h-10 rounded-full"
                            width="380px" height="380px"  
                          />
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100" value={valor.MATE_NOMBRE}>
                          <Input
                          id={c}
                          //id={valor.MATE_CODIGO}
                          name={"Cantidad"+c}
                          error={false}
                          //color={pData[c].color}
                          outline={true}
                          maxLength={8}
                          type="number"
                          min={0}
                          //disabled={false}
                          disabled={listoEnviar}
                          defaultValue={0}
                          onChange={(e)=>{
                            const id=parseInt(e.target.id);
                            var auxdataC=parseInt(e.target.value);
                            pData[id].cantidad=auxdataC;
                            listCantidad[id]=auxdataC;
                            if(validator.isNumeric(e.target.value)){
                              e.target.value=e.target.value;
                            }else e.target.value=0;
                            //validarCantidad();
                          }}
                          ref={inputCantidad}
                          />
                        </td>


                        {/*<td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-2 text-left px-3 py-2">
                          <div className=" space-x-2 flex flex-row justify-center">
                            {
                            <Checkbox {...label} 
                              id={c}
                              //id={valor.MATE_CODIGO}
                              name={"Check"+c}
                              //onChange={validarCheck}
                              disabled={listoEnviar}
                              onChange={(e)=>{
                                const id=parseInt(e.target.id);
                                if(e.target.checked===true){
                                  pData[id].checked=true;
                                  listProductos[id]=pData[id].id;
                                  document.getElementById(String(id)).disabled=false;
                                }else{
                                  pData[id].checked=false;
                                  pData[id].cantidad=0;
                                  listProductos[id]=pData[id].checked;
                                  //listCantidad[id]=parseInt(pData[id].cantidad);
                                  document.getElementById(String(id)).disabled=true;
                                  document.getElementById(String(id)).value=0;
                                }
                              }}
                            />
                            }
                          </div>
                        </td>*/}
                      </tr>
                    );
                  })}
                  {/*console.log(listaP)*/}
                </tbody>
              </table>
              
            </div>
            </CardBody>
            <div className="grid justify-items-center">
              <div>
                <Pagination2
                  setPageCurrent={setPageCurrent}
                  pageCurrent={pageCurrent}
                  pages={pages}
                />
              </div>
            </div>
            
              <div class="form-group row justify-content-center me-4">
                <table>
                <td>
                <div class="col-sm-2 px-4">
                  <button 
                  class="btnConfRei"
                    id='btnConfirmar'
                    onClick={async (e) => {
                      //e.preventDefault();
                      //obtenerDatosTabla(e);
                      validarCantidad()
                      //setDatosDeclaracion(true);
                      //comprobarCantidad(e);
                      }}
                    >
                    Confirmar Productos
                  </button>
                  </div>
                  </td>
                  <td></td>
                  <td>
                  <div class="col-sm-2">
                    <button class="btnConfRei" id='btnReiniciar'
                      onClick={async (e) => {
                      e.preventDefault();
                      delete userData.productosS;
                      vaciarPData();
                      //console.log("desde reiniciar: ", pData);
                      document.getElementById("btnConfirmar").disabled=false;
                      setListoEnviar(false);
                      setDatosDeclaracion(false);
                      setMsgVerificar("");
                      setMensajeValidacion("");
                      dispatch(listaRegistrosForm({
                        keyword,
                        pageNumber: pageCurrent,
                        pageSize: pageNumberCurrent,
                        ciudad: userData.region,
                      }));
                      }}
                      >
                      Reiniciar Seleccion
                    </button>
                  </div>
                  </td>
                  <td><div><LeyendaMensaje>Siempre dar click en "Confirmar Producto" antes de enviar</LeyendaMensaje></div></td>
                  </table><LeyendaErrorNaranja>{msgVerificar}</LeyendaErrorNaranja>
                  <LeyendaMensaje>{mensajeValidacion}</LeyendaMensaje>
                  
                  <div className=" overflow-x-auto border bg-gray-50 border-gray-50 rounded-md " hidden={msgVerificar===""?"true":"false"}>
              <table className="items-center w-full bg-transparent border-collapse" id="productosTable">
                <thead className=" border bg-blue-900 border-gray-50 rounded-md border-collapse">
                  <tr>
                    <th className="px-2 text-slate-100 align-middle border-b border-solid border-slate-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-slate-100">
                      Nombre
                    </th>
                    <th className="w-1/12 px-2 text-center text-slate-100 align-middle border-b border-solid border-slate-200 py-3 text-sm whitespace-nowrap font-bold text-left dark:text-slate-100" id="items" name="items">
                      Cantidad
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-gray-50' >
                  {!productos ? <tr>
                    <td><Skeleton count={8} height={40} /></td>
                    <td><Skeleton count={8} height={40} /></td>
                  </tr> : null}
                  {/*listPStock?.map((valor) => {
                    c1+=1;
                    return (
                      <tr className="hover:bg-gray-300" key={valor.id}>
                        <td className="border-b border-pink-700 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100" value={valor.MATE_NOMBRE}>
                          {valor.producto}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 text-left dark:text-gray-100" value={valor.MATE_NOMBRE}>
                          <Input
                          id={c1}
                          //id={valor.MATE_CODIGO}
                          color="blue"
                          outline={true}
                          maxLength={8}
                          type="number"
                          min={0}
                          disabled={true}
                          //disabled={listoEnviar}
                          defaultValue={valor.cantidad}
                          ref={inputCantidad}
                          />
                        </td>
                      </tr>
                    );
                  })*/}
                </tbody>
              </table>
              
            </div>
              </div>
            </div>
            </div>
}