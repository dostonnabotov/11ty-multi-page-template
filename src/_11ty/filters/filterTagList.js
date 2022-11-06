/**
 * Filter tag lists
 * @param {Array} tags tag lists to be filtered
 * @returns {Array} filtered array
 */
module.exports = function (tags) {
  return (tags || []).filter(
    (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
  );
};
