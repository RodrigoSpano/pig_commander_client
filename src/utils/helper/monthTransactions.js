
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