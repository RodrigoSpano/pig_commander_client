import { createExpense, createIncome } from "@/redux/actions/transactionsActions";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import toastMixin from "sweetalert2"; 


export default function () {

    const [formWallet, setFormWallet] = useState({
        name: "",
        amount: "",
        method_id: 1,
        category_id: 1,
    })

    const [focusedNameInput, setFocusedNameInput] = useState(false);
    const [focusedAmountInput, setFocusedAmountInput] = useState(false);
    const [cookies, setCookie] = useCookies();

    const handleChange = (e) => {
        let parsedValue;
        const { name: fieldName, value } = e.target;
        const shouldParseIntValue = ["category_id", "method_id"].includes(fieldName);
        const shouldParseFloatValue = fieldName === "amount";

        if (shouldParseIntValue) {
            parsedValue = parseInt(value);
        } else if (shouldParseFloatValue) {
            parsedValue = parseFloat(value);
        } else {
            parsedValue = value;
        }

        setFormWallet({
            ...formWallet,
            [fieldName]: parsedValue
        });
    };

    const dispatch = useDispatch();

//EXPENSE
    const handleSubmitExpense = useCallback((event) => {
        event.preventDefault();
        const { token } = cookies;
        dispatch(
            createExpense({
                ...formWallet,
                token,
            })
        ) , successExpense();
    }, 
     [formWallet, cookies]);

     
     var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

     const successExpense = (function(){
        toastMixin.fire({
          animation: true,
          title: 'Expense created successfully'
        });
      });


//INCOME 

    const handleSubmitIncome = useCallback((event) => {
        event.preventDefault();
        const { token } = cookies;
        dispatch(
            createIncome({
                ...formWallet,
                token,
            }) 
        ), successIncome();
    }, [formWallet, cookies]);
 
    var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

     const successIncome = (function(){
        toastMixin.fire({
          animation: true,
          title: 'Income created successfully'
        });
      });


  

//VALIDACIONES 
        const isName = formWallet.name.length > 0;
        const isAmount = formWallet.amount > 0; 


        //validaciones de input
        const inputInvalids = !isName || !isAmount;

        //boton disable
        const someFieldEmpty = !isName || !isAmount; 

        const allowNameErrorMessage = () => {
            setFocusedNameInput(true);
        }

        const allowAmountErrorMessage = () => {
            setFocusedAmountInput(true);
        }


    return {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty, 
        allowAmountErrorMessage,
        allowNameErrorMessage,
        focusedAmountInput,
        focusedNameInput,
        handleSubmitExpense,
        handleSubmitIncome,
     }
}