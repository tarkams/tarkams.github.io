export function modulo(n: number, m: number) {
  // handle negative numbers
  return ((n % m) + m) % m;
}

export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
