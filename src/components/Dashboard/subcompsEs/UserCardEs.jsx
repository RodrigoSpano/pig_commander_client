import React from 'react';
import ProfileComponent from '../../Profile/ProfileComponent';
import { updatePicture } from '@/redux/actions/userActions';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const UserCard = ({ user }) => {
  const [cookies, setCookie] = useCookies();
  const { image } = user;
  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      title: 'Inserta una foto',
      input: 'Imagen',
      preConfirm: (file) => {
        const { token } = cookies;
        const formData = new FormData();
        formData.append('image', file);
        token && dispatch(updatePicture({ formData, token }));
      },
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <motion.div
      className="flex flex-col p-3 justify-between items-center bg-white dark:bg-mediumGrayDarkMode rounded-lg shadow-md h-full box-border"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={cardVariants}
    >
      {/* IMAGE */}
      <div className="p-4 justify-center items-center">
        {image && (
          <motion.img
            src={image}
            alt="Profile Pic"
            className="h-44 xl:h-56 shadow-xl rounded-full cursor-pointer"
            onClick={(e) => handleClick(e)}
          />
        )}
      </div>

      <div className='flex flex-col items-center'>
        {/* NAME */}
        <div className="font-bold text-xl xl:text-2xl">
          {user.name.replace(/^\w/, (c) => c.toUpperCase())}{' '}
          {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}
        </div>
        {/* UPTATE BUTTON */}
        <ProfileComponent user={user} />
      </div>
    </motion.div>
  );
};

export default UserCard;
