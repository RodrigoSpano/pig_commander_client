import React from 'react'
import Image from 'next/image';
import Budget from '../../../utils/Images/Features Images/Budget.png';

const BudgetEs = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Presupuesto</h2>
                <p className='text-gray-600'>
                Crea y administra tu presupuesto de manera efectiva con la ayuda de Pig Commander. Establece metas financieras realistas y mantén tus finanzas en el camino correcto.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={Budget} alt='Savings and Investment' width={600} height={600} />
            </div>
        </>
    )
}

export default BudgetEs