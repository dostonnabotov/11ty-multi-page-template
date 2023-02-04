const { DateTime } = require("luxon");

const date = {
  /**
   * Get ISO verion of the date
   * @param {DateTime} date Date
   * @returns {DateTime} E.g. 2022-05-25
   */
  getISO(date) {
    return DateTime.fromJSDate(date, { zone: "utc" }).toISODate();
  },
  /**
   * Get full year
   * @param {DateTime} date Date
   * @returns {DateTime} e.g. 2022
   */
  getFullYear(date) {
    return new Date(date).getFullYear();
  },
  /**
   * Get shortened version of the date
   * @param {DateTime} date Date
   * @returns {DateTime} e.g. 10/14/1983
   */
  getShort(date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_SHORT);
  },
  /**
   * Get medium version of the date
   * @param {DateTime} date Date
   * @returns {DateTime} e.g. Oct 14, 1983
   */
  getMedium(date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  },
  /**
   * Get full version of the date
   * @param {DateTime} date Date
   * @returns {DateTime} e.g. October 14, 1983
   */
  getFull(date) {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
  },
};

module.exports = date;
