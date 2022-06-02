export default function getPreviousMonday(date) {
  return date - 7 * 24 * 60 * 60 * 1000
}
