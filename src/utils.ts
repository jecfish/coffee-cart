export function currency(value: any) {
  return '$' + parseFloat(value).toFixed(2);
}

export function wait(ms: number, value: any) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}