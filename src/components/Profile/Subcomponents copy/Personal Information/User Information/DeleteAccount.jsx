import { deleteUser } from "@/redux/actions/userActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function DeleteAccount() {
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookie] = useCookies();
  const router = useRouter();

  const handleDeleteAccount = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your account has been deleted.", "success");
      dispatch(deleteUser(cookies.token));
      removeCookie("token", { path: "/" });
      router.push("/login");
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <div className="text-gray-700 text-lg dark:text-red-500 cursor-pointer font-semibold">
          <button onClick={handleDeleteAccount}>Eliminar cuenta</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
