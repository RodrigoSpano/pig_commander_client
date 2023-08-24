import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowUpRight } from "react-icons/hi2";
import ProfessionalSubscriptionImage from '../../../utils/Images/Features Images/ProfessionalSubscription.png';

const ProfessionalSubscriptionEs = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Suscripción Profesional</h2>
                <p className='text-gray-700 dark:text-lightGrey'>
                Explora todo el potencial de Pig Commander con nuestra suscripción premium. Obtén acceso a características adicionales y beneficios exclusivos para llevar tus finanzas al siguiente nivel.
                </p>
                <Link href="/pricing">
                    <p className='flex items-center text-regularPink hover:text-boldPink'>
                        Leer más <span className='ml-1'> <HiArrowUpRight /> </span>
                    </p>
                </Link>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={ProfessionalSubscriptionImage} alt='Savings and Investment' width={400} height={400} />
            </div>
        </>
    )
}

export default ProfessionalSubscriptionEs