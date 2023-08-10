import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const useTransactionDetail = () => {
  const categories = useSelector(state => state.others.categories)
  
  const handleDetail = (transaction) => { //todo => mapear categorias para traer nombre de la categoria
    const findCategory = categories.find(cat => cat.id === transaction.category_id)
    console.log(transaction)
    Swal.fire({
      position: 'center',
      title: `<p>Category: ${findCategory.name.replace(/^\w/, (c) => c.toUpperCase())}</p>
              <p>Name: ${transaction.name}</p>
              <p>Amount: $${transaction.amount}</p>
              <p>Date: ${transaction.createdAt.substring(0, 10)}</p>`,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        title: 'text-2xl font-semibold bg-blue-200 p-2',
        closeButton: 'text-red-500 hover:text-red-100',
      }
    })
  }

  return { handleDetail };
}

export default useTransactionDetail;
