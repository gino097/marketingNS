import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

const Form_ImagenInstalacion = (props) => {
  const {
    showModalForm,
    setShowModalForm,
    titulo,
    data,
    setData,
    setUpdateKey,
  } = props;

  //const InstallationTableSVG = require("./" + data.imagen);

  //PARA DESCARGAR LA IMAGEN
  const download = e => {
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          // link.setAttribute("download", "image.png");
          link.setAttribute("image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Modal
      size="lg"
      className="!w-full !my-0"
      active={showModalForm}
      toggler={() => setShowModalForm(false)}
    >
      <div className="bg-indigo-600 absolute w-full !my-0 top-0 right-0 h-auto ">
        <div className="flex flex-row h-12 text-white text-lg font-bold space-x-4 pt-2 pl-4">
          <p
            className="cursor-pointer"
            onClick={(e) => {
              setShowModalForm(false);
              setData({ ...data, codigo: null });
            }}
          >
            X
          </p>
          <p className=""> {titulo}</p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 grid grid-cols-1 !my-0">
        <form className="shadow-xl w-[100%] mx-auto mt-6 p-5 bg-white col-span-3 w-full align-middle">
          <div className="flex flex-wrap -mx-3 mb-6">
            
          </div>
          <div className="flex flex-row justify-center space-x-3">
            <a className="rounded-lg text-xs my-auto p-3 bg-white border-2 border-black-500 !text-black hover:!bg-gray-300 !transition !duration-500 
              hover:shadow-lg hover:border-white-300"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="gray"
              //href={InstallationTableSVG}
              download
              onClick={e => download(e)}
            >
              <b>DESCARGAR</b>
            </a>
            <Button
              className="bg-white border-2 border-black-500 !text-black hover:!bg-gray-300 !transition !duration-500 
            hover:shadow-lg hover:border-white-300"
              color=""
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="gray"
              onClick={(e) => {
                e.preventDefault();
                setShowModalForm(false);
              }}
            >
              Cerrar
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Form_ImagenInstalacion;