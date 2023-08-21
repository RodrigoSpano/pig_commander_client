import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeCard from './WelcomeCard'
import BalanceCard from './BalanceCard'
import MoneyCard from './MoneyCard'
import UserCard from './UserCard'
import { getCategoriesAction, getMaxSpendAction } from '@/redux/actions/otherInfoActions'
import { useCookies } from 'react-cookie'

const StatsContainer = () => {
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
            <WelcomeCard user={user} />
          </div>
          <div className='w-full lg:w-1/2'>
            <BalanceCard transactions={monthBackup} />
          </div>
        </section>

        <section className='h-full items-center flex flex-col lg:flex-row'>
          <MoneyCard title={'Expenses'} type={'expense'} array={monthBackup} />
          <MoneyCard title={'Incomes'} type={'income'} array={monthBackup} />
          <MoneyCard title={'Savings'} type={'saving'} array={savings} />
        </section>
      </div>

      <div className='hidden lg:w-1/4 lg:block'>
        <UserCard user={user} />
      </div>

    </div>
  )
}

export default StatsContainer