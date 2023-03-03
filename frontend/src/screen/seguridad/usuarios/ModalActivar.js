import React from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import { useDispatch } from "react-redux";
import { activateCooperativa } from "../../../actions/seguridad/usuarioActions";
import { listaRegistros } from "../../../actions/seguridad/usuarioActions";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

const ModalActivar = (props) => {
    const dispatch = useDispatch();
    const { showModal, setShowModal, cabecera, cuerpo, confirmacion, codigo, setPageCurrent, pageCurrent, setUpdateKey, pageNumberCurrent, id_permitido, keyword } = props
    const handleSubmit = () => {

        dispatch((activateCooperativa(codigo)));
        dispatch(listaRegistros({
            keyword,
            pageNumber: pageCurrent,
            pageSize: pageNumberCurrent,
            id_permitido: id_permitido,
          }));
        //setPageCurrent(1);

    }

    return (
        <>
            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    {cabecera}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        {cuerpo}
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="black"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"

                    >
                        Cerrar
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => {
                            handleSubmit()
                            setShowModal(false)
                            setUpdateKey(new Date())
                        }}
                        ripple="light"

                    >
                        {confirmacion}
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalActivar;