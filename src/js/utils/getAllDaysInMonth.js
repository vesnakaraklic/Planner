export default function getAllDaysInMonth(date) {
  const month = new Date(date.getFullYear(), date.getMonth(), 1)
  const dates = []
  while (month.getMonth() === date.getMonth()) {
    dates.push(new Date(month))
    month.setDate(month.getDate() + 1)
  }
  return dates
}
