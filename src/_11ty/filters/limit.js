/**
 * Slice Array
 * @param {Array} array Array to be sliced
 * @param {Number} n number of items to slice from Array
 * @returns sliced array
 */
module.exports = function (array, n) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  if (n < 0) {
    return array.slice(n);
  }

  return array.slice(0, n);
};
