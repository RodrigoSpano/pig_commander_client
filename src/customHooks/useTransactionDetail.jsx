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
      html: `
      <div class= 'grid  grid-cols-4 grid-rows-5 gap-5 '>

        <div class='col-span-4 p-4 rounded-lg border text-center m-2 border-red-700 '> 
          <h1 class='text-strongPink font-bold'>${transaction.type.toUpperCase()} DETAIL</h1>
          <p class='text-sm text-gray-400 font-bold'>Date: ${transaction.createdAt.substring(0, 10)}</p>
        </div>
        
        <div class='col-span-2 p-4 rounded-lg border m-2'>
          <h2 class='text-left font-semibold text-strongPink'>Name</h2>
          <hr class='w-20 font-bold'></hr> 
          <p class='my-2'>${transaction.name}</p>
        </div>

        
        <div class='col-span-2 p-4 rounded-lg border m-2'>
          <h2 class='text-left font-semibold text-strongPink'>Amount</h2>
          <hr class='w-20'></hr>
          <p class='my-2'>$${transaction.amount}</p>
        </div>

        <div class='col-span-2 p-4 rounded-lg border m-2'>
          <h2 class='text-left font-semibold text-strongPink'>Category</h2>
          <hr class='w-20'></hr>
          <p class='my-2'>${findCategory.name.replace(/^\w/, (c) =>c.toUpperCase())}</p>
        </div>

        <div class='col-span-2 p-4 rounded-lg border m-2'>
          <h2 class='text-left font-semibold text-strongPink'>Method</h2>
          <hr class='w-20'></hr>
          <p class='my-2'>${findMethod.name.replace(/^\w/, (c) => c.toUpperCase())}</p>
        </div>

      </div>
      `,
      showconfirmButton: true,
      showCloseButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#F11000",
      customClass: {
        title: " flex text-2xl font-semibold bg-blue-200 p-2 text-left",
        closeButton: "text-strongPink hover:text-lightPink",
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

  const handleDetail = (transaction) => {
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
      <p>Method: ${findMethod.name.replace(/^\w/, (c) => c.toUpperCase())}</p>
      <p>Name: ${transaction.name}</p>
      <p>Amount: $${transaction.amount}</p>
      <p>Date: ${transaction.createdAt.substring(0, 10)}</p>
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

  return { handleDetail, handleDetailEs };
};

export default useTransactionDetail;