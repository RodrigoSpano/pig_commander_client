import React from 'react'
import Image from 'next/image';
import Limit from '../../../utils/Images/Features Images/Limit.png';


const LimitPerMonthEs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={Limit} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Límite de Gasto por Mes</h2>
                <p className='text-gray-600'>
                Mantén tus finanzas bajo control estableciendo un límite de gasto por mes. Recibirás notificaciones cuando te acerques a este límite, lo que te ayudará a tomar decisiones más conscientes sobre tus gastos.
                </p>
            </div>
        </>
    )
}

export default LimitPerMonthEs