import React from 'react';
import ProfileComponentEs from '../../Profile/ProfileComponentEs';
import { updatePicture } from '@/redux/actions/userActions';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const UserCardEs = ({ user }) => {
  const [cookies, setCookie] = useCookies();
  const { image } = user;
  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      title: 'Ingresa tu foto',
      input: 'archivo',
      preConfirm: (file) => {
        const { token } = cookies;
        const formData = new FormData();
        formData.append('imagen', file);
        token && dispatch(updatePicture({ formData, token }));
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-md w-full h-full box-border">

      {/* IMAGE */}
      <div className="">
        {image && (
          <img
            src={image}
            alt="Foto de Perfil"
            className="h-32 lg:h-48 rounded-full object-cover cursor-pointer"
            onClick={(e) => handleClick(e)}
          />
        )}
      </div>

      {/* NAME */}
      <span className="text-lg font-bold">
        {user.name.replace(/^\w/, (c) => c.toUpperCase())}{' '}
        {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
      </span>

      {/* UPTATE BUTTON */}
      <ProfileComponentEs user={user} />
    </div>
  );
};

export default UserCardEs;