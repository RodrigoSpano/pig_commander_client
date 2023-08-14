
export const getExpensesTotal = (transactions) => {
  let total = 0
  const expenses = transactions?.filter(el => el.type === 'expense')
  expenses?.map(t => {
    total += t.amount
  })
  return total;
}

export const getIncomesTotal = (transactions) => {
  let total = 0
  const incomes = transactions?.filter(el => el.type === 'income')
  incomes?.map(t => {
    total += t.amount
  })
  return total;
}

export const getExpensesTotalWallet = (backup_transactions) => {
  let total = 0
  const expenses = backup_transactions?.filter(el => el.type === 'expense')
  console.log({backup_transactions})
  expenses?.map(t => {
    total += t.amount
  })
  return total;
}

export const getIncomesTotalWallet = (backup_transactions) => {
  let total = 0
  const incomes = backup_transactions?.filter(el => el.type === 'income')
  incomes?.map(t => {
    total += t.amount
  })
  return total;
}