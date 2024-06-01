import dayjs from "dayjs";

/**
 *
 * @param {Date} date - The date to be converted.
 * @param {number} offset - The timezone offset in hours.
 * @returns {string} The ISO timestamp string in the format "YYYY-MM-DDTHH:mm:ss[Z]".
 */
export const getStandardDate = (date, offset) => {
  return dayjs(date)
    .utcOffset(0, true)
    .utcOffset(-offset * 60, false)
    .format("YYYY-MM-DDTHH:mm:ss[Z]");
};
