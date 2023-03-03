import Swal from "sweetalert2";

const Toast = () => {
         Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
            color: "white",
            background: "#4caf50",
            iconColor: "white",
            width: "420",
            timerProgressBar: true,
            customClass:
              "!h-13 !py-2 !px-2 !rounded-none !ml-20 !m-50 !w-60 !text-sm sm:!w-80 !mb-10 font-normal sm:!text-base",
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          })
          .fire({
            showCloseButton: true,
            icon: "success",
            title: "Creado correctamente",
          })
}
export default Toast;