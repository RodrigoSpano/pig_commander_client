import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function () {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();

    const initialstate = { password: '', repeatPassword: '' };
    const [credentials, setCredentials] = useState(initialstate);
    const [show, setShow] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

  
    useEffect(() => {
        if (credentials.password && credentials.repeatPassword) {
          setPasswordsMatch(credentials.password === credentials.repeatPassword);
        } 
      }, [credentials.password, credentials.repeatPassword])
      

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentials.email) && (credentials.password === credentials.repeatPassword)) {
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_URI}/recovery/password/${id}`, { password: credentials.password })
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    text: data.message,
                    timer: 1500,
                    showConfirmButton: false
                })
                router.push('/login')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Unexpected error',
                })
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Password',
                text: 'password must have at least 8 characters, one capital letter and one number'
            })
        }    
    }
    
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(credentials.password);
    const inputInvalidPassword = !isPassword;

    return {
        show,
        setShow,
        handleChange,
        handleSubmit,
        credentials,
        inputInvalidPassword,
        passwordsMatch
    }
}