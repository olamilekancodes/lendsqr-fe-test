export const formatAmount = (amount: number | string): string => {
  const num = Number(amount);
  if (isNaN(num)) return "₦0.00";

  return `₦${num.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
