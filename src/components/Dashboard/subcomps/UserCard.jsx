import { updatePicture } from "@/redux/actions/userActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [localImage, setLocalImage] = useState(null);
  const image = user.image;

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Envia la imagen al backend para actualizarla
  const handleSubmit = () => {
    if (image) {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("image", image);
      token && dispatch(updatePicture({ formData, token }));
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
      <div>
        {image && (
          <img
            // * Si image es de tipo file se crea una URL temporal para que el usuario pueda ver su imagen
            src={image instanceof File ? URL.createObjectURL(image) : image}
            alt="Profile Pic"
            className="w-[120px] h-[120px] rounded-full mx-auto flex items-center justify-center cursor-pointer"
          />
        )}
        <input type="file" onChange={(e) => handleChange(e)} />
      </div>
      <button
        onClick={handleSubmit}
        className="cursor-pointer border-5px-solid"
      >
        Subir
      </button>
      <span className="text-24 font-bold">
        {user.name.replace(/^\w/, (c) => c.toUpperCase())}{" "}
        {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
      </span>
    </div>
  );
};

export default UserCard;

//!BASE64
// const UserCard = ({ user }) => {
//   const [image, setImage] = useState(null);
//   const dispatch = useDispatch();

//   //* Cargar la imagen seleccionada
//   function previewFiles(file) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//   }

//   // Maneja el evento del input de archivo para cargar la imagen
//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file) previewFiles(file);
//   };

//   // Envia la imagen al backend para actualizarla
//   const handleSubmit = () => {
//     if (image) {
//       const token = localStorage.getItem("token");
//       token && dispatch(updatePicture({ image, token }));
//     }
//   };
//   return (
//     <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
//       <div>
//         <img
//           src={image}
//           alt="Profile Pic"
//           className="w-[120px] h-[120px] rounded-full mx-auto flex items-center justify-center cursor-pointer"
//         />
//         <input type="file" onChange={(e) => handleChange(e)} />
//       </div>
//       <button onClick={handleSubmit} className="cursor-pointer border">
//         Subir
//       </button>
//       <span className="text-24 font-bold">
//         {user.name.replace(/^\w/, (c) => c.toUpperCase())}{" "}
//         {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
//       </span>
//     </div>
//   );
// };

// export default UserCard;

//! SWEET ALERT
// import { updatePicture } from "@/redux/actions/userActions";
// import React from "react";
// import { useDispatch } from "react-redux";
// import Swal from "sweetalert2";

// const UserCard = ({ user }) => {
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     console.log(e.target.files);
//     Swal.fire({
//       title: "Insert your photo",
//       input: "file",
//       preConfirm: (file) => {
//         const token = localStorage.getItem("token");
//         token && dispatch(updatePicture(file, token));
//       },
//     });
//   };
//   return (
//     <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
//       <div
//         className="w-[120px] h-[120px] rounded-full mx-auto bg-gray-950 flex items-center justify-center cursor-pointer"
//         onClick={handleClick}
//       />
//       <span className="text-24 font-bold">
//         {user.name.replace(/^\w/, (c) => c.toUpperCase())}{" "}
//         {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
//       </span>
//     </div>
//   );
// };

// export default UserCard;
