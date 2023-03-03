import React from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import { useDispatch } from "react-redux";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { USER_LOGOUT, USER_DETAILS_RESET } from "../constants/loginConstants";
import { useNavigate } from "react-router-dom";

const ModalClose = (props) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {showModal, setShowModal, cabecera, cuerpo, confirmacion, salida}= props
    return ( 
        <>
        <Modal  size="sm" active={showModal} toggler={() => setShowModal(false)}>
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
                    {salida}
                </Button>

                <Button
                    color="red"
                    onClick={async (e) => {
                        e.preventDefault();
                        localStorage.removeItem("userInfo");
                        dispatch({ type: USER_LOGOUT });
                        dispatch({ type: USER_DETAILS_RESET });
                        dispatch({ type: USER_LOGOUT });
                        navigate("/login");
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
 
export default ModalClose;