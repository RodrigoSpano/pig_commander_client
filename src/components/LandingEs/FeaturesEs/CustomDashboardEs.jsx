import React from 'react'
import Image from 'next/image';
import CustomDashboardImage from '../../../utils/Images/Features Images/CustomDashboard.png';

const CustomDashboardEs = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={CustomDashboardImage} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Panel de Control Personalizado</h2>
                <p className='text-gray-600'>
                Accede a un panel de control personalizado que te brindará una vista completa de tus finanzas de un solo vistazo. Gráficos interactivos te proporcionarán una representación visual y comprensible de tus hábitos de gasto y ahorro.
                </p>
            </div>
        </>
    )
}

export default CustomDashboardEs