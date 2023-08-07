
export const getExpensesTotal = (transactions) => {
  let total = 0
  const expenses = transactions.filter(el => el.type === 'expense')
  expenses.map(t => {
    total += t.mount
  })
  return total;
}

export const getIncomesTotal = (transactions) => {
  let total = 0
  const expenses = transactions.filter(el => el.type === 'income')
  expenses.map(t => {
    total += t.mount
  })
  return total;
}