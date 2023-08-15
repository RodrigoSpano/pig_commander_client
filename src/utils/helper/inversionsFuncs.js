export const earnedUpToDate = (finalDate, initialDate, interest, amount) => {
    const interestDecimal = interest / 100;
    const totalTime = (finalDate - initialDate) / (1000 * 3600 * 24);
  
    let sumInterest = 0;
    let actualDate = initialDate;
    
    const chartData = [];
  
    while (actualDate <= finalDate) {
      const timeDay = (actualDate - initialDate) / (1000 * 3600 * 24);
      const dayAmount = amount * Math.pow(1 + interestDecimal, timeDay);
      const dayInterest = dayAmount - amount;
      sumInterest += dayInterest;
  
      const dayNumber = Math.floor(timeDay) + 1; // Day number starting from 1
      chartData.push({
        day: parseInt(dayNumber),
        'total': parseFloat((amount + sumInterest).toFixed(2)),
        'amount': parseFloat(amount.toFixed(2)),
      });
  
      actualDate = new Date(actualDate.getTime() + (24 * 60 * 60 * 1000)); // Avanza un día
    }
  
    return chartData;
  };