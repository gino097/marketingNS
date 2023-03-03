import FinalStepSVG from "../../../images/formulario/finalizar.svg";
import Button from "@material-tailwind/react/Button";
import ButtonNS from "../../../components/ButtonNS";

export default function Final() {
  function llamar_master_form() {
    window.location.href = "/materiales_form";
  }
  return <div className='pl-8 flex flex-col'>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300&family=Manjari:wght@100&family=Open+Sans:wght@800&display=swap" rel="stylesheet"/>
    <h1 style={{ color: "#025B93" }} className="text-center pl-2 text-gray-800 text-base font-title font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">
      ¡MUCHAS GRACIAS!
    </h1>
    <div className="text-center mt-2">
      <div className="text-center text-lg pl-2 text-gray-800 font-semibold font-title">
        Los datos fueron registrados de manera exitosa
      </div>
      <div className="text-center text-lg pl-2 text-gray-800 font-semibold font-title">
        Nos pondremos en contacto para coordinar tu solicitud
      </div>
      <div className="text-center">
        <img
          src={FinalStepSVG}
          className="rounded-l-xl object-fill h-[300px] mx-auto"
          loading="lazy"
          height=""
          width="400"
          alt="music mood"
        />
      </div>
      <div className="inline-flex mt-4">
        <ButtonNS
          style={{ background: "#EE7900" }}
          className="text-white py-2 px-8 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 easy-in-out"
          color=""
          buttonType="filled"
          size="regular"
          onClick={llamar_master_form}
        >
          Nuevo Registro
        </ButtonNS>
      </div>
    </div>
  </div>
}