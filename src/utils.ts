export function currency(value: any) {
  return '$' + parseFloat(value).toFixed(2);
}

export function wait(ms: number, value: any) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}

export function slowProcessing(results: any) {
  if (results.length >= 7) {
    return results.map((r: any) => {
      const random = Math.random();
      return {
        ...r,
        random,
      };
    })
  }
  return results;
}
