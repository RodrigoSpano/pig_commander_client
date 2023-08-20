import { deleteSaving } from "@/redux/actions/savingsActions";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const useDetailSaving = () => {
  const savings = useSelector((state) => state.savings.allSavings);
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  const handleDetailSav = (selectedId) => {
    const selectedSavings = savings.find((saving) => saving.id === selectedId);

    Swal.fire({
      position: "center",
      title: `
                     <p>Name: ${selectedSavings.name}</p>
        <p>Amount: ${selectedSavings.amount}</p>
        <p>Goal: ${selectedSavings.goal}</p>
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
        const data ={
            token,
            id,
        }
        dispatch(deleteSaving(data));
      }
    });
  };
  return { handleDetailSav };
};

export default useDetailSaving;
