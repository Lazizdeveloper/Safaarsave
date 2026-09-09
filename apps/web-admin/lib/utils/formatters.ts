export function formatUZS(amount: number): string {
  return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', maximumFractionDigits: 0 }).format(amount);
}

export function formatTashkentDate(date: Date | string): string {
  return new Date(date).toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });
}
