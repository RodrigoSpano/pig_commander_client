import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeCardEs from './WelcomeCardEs'
import BalanceCardEs from './BalanceCardEs'
import MoneyCardEs from './MoneyCardEs'
import UserCardEs from './UserCardEs'
import { getCategoriesAction, getMaxSpendAction } from '@/redux/actions/otherInfoActions'
import { useCookies } from 'react-cookie'

const StatsContainerEs = () => {
  const user = useSelector(state => state.user)
  const monthBackup = useSelector(state => state.monthTransactions.backup_transactions)
  const savings = useSelector((state) => state.savings.allSavings);
  const categories = useSelector((state) => state.others.categories);
  const maxSpend = useSelector((state) => state.others.maxSpend);

  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (!categories?.length) {
      dispatch(getCategoriesAction(cookies.token))
    }
    if (!maxSpend) {
      dispatch(getMaxSpendAction(cookies.token))
    }
  }, [])

  return (
    <div className="flex select-none">

      <div className=' flex justify-center items-stretch flex-col w-full lg:w-3/4 '>
        <section className='mt-12 mb-2 h-full flex flex-col lg:flex-row md:mt-0'>
          <div className='w-full lg:w-1/2'>
            <WelcomeCardEs user={user} />
          </div>
          <div className='w-full lg:w-1/2'>
            <BalanceCardEs transactions={monthBackup} />
          </div>
        </section>

        <section className='h-full items-center flex flex-col lg:flex-row'>
          <MoneyCardEs title={'Gastos'} type={'expense'} array={monthBackup} />
          <MoneyCardEs title={'Ingresos'} type={'income'} array={monthBackup} />
          <MoneyCardEs title={'Ahorros'} type={'saving'} array={savings} />
        </section>
      </div>

      <div className='hidden lg:w-1/4 lg:block'>
        <UserCardEs user={user} />
      </div>

    </div>
  )
}

export default StatsContainerEs