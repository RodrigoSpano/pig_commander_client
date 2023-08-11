import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeCard from './WelcomeCard'
import BalanceCard from './BalanceCard'
import UserCard from './UserCard'
import MoneyCard from './MoneyCard'
import { getCategoriesAction, getMaxSpendAction } from '@/redux/actions/otherInfoActions'
import { useCookies } from 'react-cookie'

const StatsContainer = () => {
  const user =useSelector(state => state.user)
  const monthBackup = useSelector(state => state.monthTransactions.backup_transactions)
  const savings = useSelector((state) => state.savings.allSavings);
  const categories = useSelector((state) => state.others.categories);
  const maxSpend = useSelector((state) => state.others.maxSpend);

  const dispatch = useDispatch()
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if(!categories?.length){
      dispatch(getCategoriesAction(cookies.token))
    }
    if(!maxSpend){
      dispatch(getMaxSpendAction(cookies.token))
    }
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-2/5 gap-5">
      <WelcomeCard user={user} />
      <BalanceCard transactions={monthBackup} />
      <UserCard user={user}/>
      <MoneyCard title={'Expenses'} type={'expense'} array={monthBackup} />
      <MoneyCard title={'Incomes'} type={'income'} array={monthBackup} />
      <MoneyCard title={'Savings'} type={'saving'} array={savings} />
  </div>
  )
}

export default StatsContainer