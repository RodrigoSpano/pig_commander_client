import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getDate, weldDates } from "@/utils/helper/inversionsFuncs";
import { deleteInversion } from "@/redux/actions/inversionsActions";

const useDetailInv = () => {
  const inversions = useSelector((state) => state.inversions.allInversions);
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  const handleDetailInv = (selectedId) => {
    const selectedInversion = inversions.find((inversion) => inversion.id === selectedId);
      Swal.fire({
        position: "center",
        title: `
          <p>Name:  ${selectedInversion.name}   </p>
          <p>Started on:${weldDates(getDate(selectedInversion.started_on))}  </p>
          <p>Finished on: ${weldDates(getDate(selectedInversion.finish_at))}  </p>
          <p>Invested:${selectedInversion.amount}  </p>
          <p>Interest: ${selectedInversion.earning}  </p>
          `,
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: "Delete",
        confirmButtonColor: "#F11000",
        customClass: {
          title: "text-2xl font-semibold bg-blue-200 p-2",
          closeButton: "text-red-500 hover:text-red-100",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const { token } = cookies;
          const id = parseInt(selectedId)
          const data = {
            token,
            id,
          }
          dispatch(deleteInversion(data));
        }
      });
    
  };

  return { handleDetailInv };
};
export default useDetailInv;