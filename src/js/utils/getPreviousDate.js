export default function getPreviousDate(date) {
  let newDate = new Date(date).setDate(new Date(date).getDate() - 1)
  return newDate
}
