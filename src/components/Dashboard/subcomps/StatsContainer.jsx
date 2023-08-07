import React from 'react'
import { useSelector } from 'react-redux'
import WelcomeCard from './WelcomeCard'
import BalanceCard from './BalanceCard'
import UserCard from './UserCard'
import MoneyCard from './MoneyCard'

const StatsContainer = () => {
  const user =useSelector(state => state.user)
  const monthTransactions =useSelector(state => state.monthTransactions.transactions)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-2/5 gap-5">
      <WelcomeCard user={user} />
      <BalanceCard transactions={monthTransactions} />
      <UserCard user={user}/>
      <MoneyCard title={'Expenses'} type={'expense'} transactions={monthTransactions} />
      <MoneyCard title={'Incomes'} type={'income'} transactions={monthTransactions} />
      <MoneyCard title={'Savings'} type={'saving'} transactions={monthTransactions} />
  </div>
  )
}

export default StatsContainer