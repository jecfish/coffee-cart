export function currency(value: any) {
  return '$' + parseFloat(value).toFixed(2);
}

export function wait(ms: number, value: any) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}

export function slowProcessing(results: any) {
  if (results.length >= 7) {
    return results.map((r: any) => {
      let random = 0;
      for (let i = 0; i < 1000 * 1000 * 10; i++) {
        random = random * Math.random();
      }
      return {
        ...r,
        random,
      };
    })
  }
  return results;
}