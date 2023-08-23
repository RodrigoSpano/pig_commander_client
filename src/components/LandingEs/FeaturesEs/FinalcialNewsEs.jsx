import React from 'react'
import Image from 'next/image';
import News from '../../../utils/Images/Features Images/News.png';

const FinalcialNewsEs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={News} alt='Savings and Investment' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Noticias Financieras </h2>
                <p className='text-gray-600'>
                Mantente al tanto de las últimas noticias financieras y tendencias que pueden afectar tus decisiones financieras. Nuestra sección de noticias te mantendrá informado para que puedas tomar decisiones financieras inteligentes.
                </p>
            </div>
        </>
    )
}

export default FinalcialNewsEs