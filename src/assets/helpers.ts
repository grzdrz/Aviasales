export default function formateNumber(number: number) {
  if (number === undefined) return;
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}