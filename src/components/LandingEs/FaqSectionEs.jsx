const FaqSectionEs = () => {
  return (
    <div className='py-8 md:py-16 flex flex-col items-center select-none'>

      <div className='pb-5 text-center'>
        <div className='text-boldPink font-semibold text-lg'>Preguntas Frecuentes</div>
        <div className='text-center'>
          <h1 className='font-bold text-3xl md:text-5xl'>Preguntas</h1>
          <h1 className='font-bold text-3xl md:text-5xl'>Frecuentes</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center aling-center'>
        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem] h-[15.5rem] text-center bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>¿Cómo puedo crear una cuenta?</h3>
            <p className='font-normal text-white'>Para crear una cuenta, simplemente ingresa tu nombre,</p>
            <p className='font-normal text-white'>correo electrónico y contraseña en el formulario de registro. Una vez</p>
            <p className='font-normal text-white'>creada la cuenta, podrás iniciar sesión</p>
            <p className='font-normal text-white'>y comenzar a usar la aplicación.</p>
          </div>
        </div>

        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem] h-[15.5rem] text-center bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>¿Existen límites en las transacciones</h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>que puedo realizar desde mi billetera?</h3>
            <p className='font-normal text-gray-500'>Sí, para garantizar la seguridad y cumplir con regulaciones,</p>
            <p className='font-normal text-gray-500'>establecemos límites en las transacciones diarias.</p>
            <p className='font-normal text-gray-500'>Estos límites pueden variar según tu nivel de </p>
            <p className='font-normal text-gray-500'>verificación de identidad.</p>
          </div>
        </div>
      </div>

       
      
      <div className='flex flex-col md:flex-row justify-center aling-center'>

        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem] h-[15.5rem] text-center  bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>¿Es necesario verificar mi identidad</h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>para usar Pig Commander?</h3>
            <p className='font-normal text-gray-500'>No es necesario verificar tu identidad para usar</p>
            <p className='font-normal text-gray-500'>Pig Commander, ya que no utilizamos datos sensibles.</p>
          </div>
        </div>

         
       

        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem] h-[15.5rem] text-center  bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>¿Qué medidas de seguridad</h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>tienen implementadas?</h3>
            <p className='font-normal text-white'>Nuestra billetera utiliza encriptación de alto nivel</p>
            <p className='font-normal text-white'>para proteger tus datos personales y financieros.</p>
            <p className='font-normal text-white'>También implementamos autenticación de dos factores (2FA)</p>
            <p className='font-normal text-white'>para garantizar una capa adicional de seguridad </p>
            <p className='font-normal text-white'>en tus transacciones.</p>
          </div>
        </div>         

      </div>
      <div className='flex flex-col md:flex-row justify-center aling-center'>
        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem] h-[15.5rem] text-center  bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>¿Existen tarifas por usar la billetera?</h3>
            <p className='font-normal text-white'>El uso básico de la billetera es gratuito.</p>
            <p className='font-normal text-white'>Sin embargo, puedes acceder al Premium</p>
            <p className='font-normal text-white'>donde encontrarás más funcionalidades.</p>
          </div>
        </div>

          

        <div className='m-2'>
          <div className='p-6 rounded-lg w-[33.286rem]  h-[15.5rem] text-center  bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>¿Puedo recuperar mi cuenta si olvido</h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>olvido mi contraseña?</h3>
            <p className='font-normal text-gray-500'>Sí, puedes recuperar tu cuenta si olvidas tu contraseña.</p>
            <p className='font-normal text-gray-500'>Proporcionamos opciones de recuperación,</p>
            <p className='font-normal text-gray-500'>como restablecer la contraseña a través de tu</p>
            <p className='font-normal text-gray-500'>dirección de correo electrónico o número de teléfono verificado.</p>
          </div>
        </div>
      </div>

         

    </div>
  )
}

export default FaqSectionEs;
