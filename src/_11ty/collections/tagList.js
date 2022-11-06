const filterTagList = require("../filters/filterTagList.js");

/**
 * Remove duplicates and filter tags
 * @param {Array} collection List of tags
 * @returns {Array} filtered and duplicates removed tag lists
 */
module.exports = function (collection) {
  let tagSet = new Set();
  collection.getAll().forEach((item) => {
    (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  });

  return filterTagList([...tagSet]);
};
