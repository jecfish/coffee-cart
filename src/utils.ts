export function currency(value: any) {
  return '$' + parseFloat(value).toFixed(2);
}