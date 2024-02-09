/**
 * This function calculate total price of a new order
 * @param {Array} products CartProduct: Array of objects
 * @returns {number} Total price
 */
export const TotalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
    sum += product.price;
  });
  return sum;
};
