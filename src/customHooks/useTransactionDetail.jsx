import Swal from 'sweetalert2';

const useTransactionDetail = () => {

  const handelDetail = (transaction) => { //todo => mapear categorias para traer nombre de la categoria
    Swal.fire({
      position: 'center',
      title: `<p>${transaction.category}</p>
              <p>${transaction.name}</p>
              <p>${transaction.mount}</p>
              <p>${transaction.createdAt}</p>`,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        title: 'text-2xl font-semibold bg-blue-200 p-2',
        closeButton: 'text-red-500 hover:text-red-100',
      },
    })
  }

  return { handelDetail };
}

export default useTransactionDetail;
