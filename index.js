// index.js

// This is required for the test to function properly
// (module.exports placed on lines 5-7 as requested)
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
  const num = Number(amount);
  if (Number.isNaN(num)) return NaN;
  return num * 0.10;
}

function convertToUpperCase(text) {
  if (text === null || text === undefined) return '';
  return String(text).toUpperCase();
}

function findMaximum(num1, num2) {
  const a = Number(num1);
  const b = Number(num2);
  if (Number.isNaN(a) && Number.isNaN(b)) return NaN;
  if (Number.isNaN(a)) return b;
  if (Number.isNaN(b)) return a;
  return a > b ? a : b;
}

function isPalindrome(word) {
  if (word === null || word === undefined) return false;
  const cleaned = String(word).toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const price = Number(originalPrice);
  const pct = Number(discountPercentage);
  if (Number.isNaN(price) || Number.isNaN(pct)) return NaN;
  const discounted = price - price * (pct / 100);
  return Number(discounted.toFixed(2));
}
