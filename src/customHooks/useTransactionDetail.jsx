import { deleteExpenseMonth, deleteIncomeMonth } from "@/redux/actions/monthTransactionsActions";
import { deleteExpense, deleteIncome } from "@/redux/actions/transactionsActions";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const useTransactionDetail = () => {
  const categories = useSelector((state) => state.others.categories);
  const methods = useSelector((state) => state.others.methods);
  const dispatch = useDispatch();
  const [cookies] = useCookies();

  const handleDetailEs = (transaction) => {
    const findCategory = categories.find(
      (cat) => cat.id === transaction.category_id
    );

    const findMethod = methods.find((met) => met.id === transaction.method_id);

    Swal.fire({
      position: "center",
      title: `
      <p>Categoría: ${findCategory.name.replace(/^\w/, (c) =>
        c.toUpperCase()
      )}</p>
      <p>Método: ${findMethod.name.replace(/^\w/, (c) => c.toUpperCase())}</p>
      <p>Nombre: ${transaction.name}</p>
      <p>Monto: $${transaction.amount}</p>
      <p>Fecha: ${transaction.createdAt.substring(0, 10)}</p>
      `,
      showconfirmButton: true,
      showCloseButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#F11000",
      customClass: {
        title: "text-2xl font-semibold bg-blue-200 p-2",
        closeButton: "text-red-500 hover:text-red-100",
      },
    }).then((result) => {
      
      if (result.isConfirmed) {
        if(transaction.type === 'expense'){
          const { token } = cookies; 
          const data = {
            id: transaction.id,
            token,
          };
          dispatch(
            deleteExpenseMonth(data)
          );
           } [transaction, cookies];
        if(transaction.type === 'income'){
          const { token } = cookies; 
          const data = {
            id: transaction.id,
            token,
          };
          dispatch(
            deleteIncomeMonth(data)
          );
            } [transaction, cookies];

        if(transaction.type === 'expense'){
          const { token } = cookies; 
          const data = {
            ...transaction,
            token,
          };
          dispatch(
            deleteExpense(data)
          );
           } [transaction, cookies];

      if (result.isConfirmed) {
          if (transaction.type === 'income'){
          const { token } = cookies; 
          const data = {
            ...transaction,
            token,
          };
          dispatch(
            deleteIncome(data)
          );
           } [transaction, cookies];
       }
      }
    });
  };

  return {  handleDetailEs };
};

export default useTransactionDetail;