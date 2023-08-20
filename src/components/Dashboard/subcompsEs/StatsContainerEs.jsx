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
    <div className="flex justify-between select-none">

      <div className='w-3/4'>
        <section className='flex h-1/2'>
          <div className='w-1/2 '>
            {}
            <WelcomeCardEs user={user} />
          </div>
          <div className='w-1/2'>
            <BalanceCardEs transactions={monthBackup} />
          </div>
        </section>

        <section className='flex justify-between h-1/2 w-full '>
          <MoneyCardEs title={'Gastos'} type={'expense'} array={monthBackup} />
          <MoneyCardEs title={'Ingresos'} type={'income'} array={monthBackup} />
          <MoneyCardEs title={'Ahorros'} type={'saving'} array={savings} />
        </section>
      </div>

      <div className='w-1/4'>
        <section className=''>
          <UserCardEs user={user} />
        </section>
      </div>

    </div>
  )
}

export default StatsContainerEs