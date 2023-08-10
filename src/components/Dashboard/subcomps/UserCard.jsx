import ProfileComponent from "@/components/Profile/ProfileComponent";
import { updatePicture } from "@/redux/actions/userActions";
import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UserCard = ({ user }) => {
  const [cookies, setCookie] = useCookies();
  const { image } = user;
  const dispatch = useDispatch();
  const handleClick = () => {
    Swal.fire({
      title: "Insert your photo",
      input: "file",
      preConfirm: (file) => {
        const { token } = cookies;
        const formData = new FormData();
        formData.append("image", file);
        token && dispatch(updatePicture({ formData, token }));
      },
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
      <div>
        <ProfileComponent user={user} />
        {image && (
          <img
            src={image}
            alt="Profile Pic"
            className="w-[120px] h-[120px] rounded-full mx-auto flex items-center justify-center cursor-pointer"
            onClick={(e) => handleClick(e)}
          />
        )}
      </div>
      <span className="text-24 font-bold">
        {user.name.replace(/^\w/, (c) => c.toUpperCase())}{" "}
        {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
      </span>
    </div>
  );
};

export default UserCard;
