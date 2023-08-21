import React from 'react';
import ProfileComponent from '../../Profile/ProfileComponent';
import { updatePicture } from '@/redux/actions/userActions';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const UserCard = ({ user }) => {
  const [cookies, setCookie] = useCookies();
  const { image } = user;
  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      title: 'Insert your photo',
      input: 'file',
      preConfirm: (file) => {
        const { token } = cookies;
        const formData = new FormData();
        formData.append('image', file);
        token && dispatch(updatePicture({ formData, token }));
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white dark:bg-mediumGrayDarkMode rounded-lg shadow-md w-full h-full box-border">

      {/* IMAGE */}
      <div className="">
        {image && (
          <img
            src={image}
            alt="Profile Pic"
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
      <ProfileComponent user={user} />
    </div>
  );
};

export default UserCard;
