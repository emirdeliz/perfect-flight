export const formatNumberAsCurrency = (
  value?: number,
  ignoreCurrencySign?: boolean
) => {
  const formatter = new Intl.NumberFormat('en-us', {
    style: ignoreCurrencySign ? 'decimal' : 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const valueAsNumber =
    Number.isFinite(value) || Number.isNaN(value) ? value || 0 : 0;
  return formatter.format(valueAsNumber);
};

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
