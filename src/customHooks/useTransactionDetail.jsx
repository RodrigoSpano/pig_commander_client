import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const useTransactionDetail = () => {
  const categories = useSelector((state) => state.others.categories);
  const methods = useSelector((state) => state.others.methods);

  const handleDetail = (transaction) => {
    const findCategory = categories.find(
      (cat) => cat.id === transaction.category_id
    );

    const findMethod = methods.find(
      (met) => met.id === transaction.method_id
    );

    Swal.fire({
      position: "center",
      title: `
      <p>Category: ${findCategory.name.replace(/^\w/, (c) =>
        c.toUpperCase()
      )}</p>
      <p>Method: ${findMethod.name.replace(/^\w/, (c) => c.toUpperCase())}</p>
      <p>Name: ${transaction.name}</p>
      <p>Amount: $${transaction.amount}</p>
      <p>Date: ${transaction.createdAt.substring(0, 10)}</p>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        title: "text-2xl font-semibold bg-blue-200 p-2",
        closeButton: "text-red-500 hover:text-red-100",
      },
    });
  };

  return { handleDetail };
};

export default useTransactionDetail;
