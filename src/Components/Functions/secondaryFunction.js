export const totalPriceItems = (order) => {
  const countTopping =
    order.topping && order.topping.filter((item) => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping;

  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);
