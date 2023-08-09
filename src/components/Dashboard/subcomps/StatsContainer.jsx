import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WelcomeCard from './WelcomeCard'
import BalanceCard from './BalanceCard'
import UserCard from './UserCard'
import MoneyCard from './MoneyCard'
import { getCategoriesAction, getMaxSpendAction } from '@/redux/actions/otherInfoActions'

const StatsContainer = () => {
  const user =useSelector(state => state.user)
  const monthTransactions = useSelector(state => state.monthTransactions.transactions)
  const savings = useSelector((state) => state.savings.allSavings);
  const categories = useSelector((state) => state.others.categories);
  const maxSpend = useSelector((state) => state.others.maxSpend);

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!categories.length){
      dispatch(getCategoriesAction(token))
    }
    if(!maxSpend){
      dispatch(getMaxSpendAction(token))
    }
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-2/5 gap-5">
      <WelcomeCard user={user} />
      <BalanceCard transactions={monthTransactions} />
      <UserCard user={user}/>
      <MoneyCard title={'Expenses'} type={'expense'} array={monthTransactions} />
      <MoneyCard title={'Incomes'} type={'income'} array={monthTransactions} />
      <MoneyCard title={'Savings'} type={'saving'} array={savings} />
  </div>
  )
}

export default StatsContainer