import dayjs from "dayjs";

/**
 *
 * @param {string} timestamp - The ISO timestamp to be converted.
 * @param {number} offset - The timezone offset in hours.
 * @returns {string} The human-readable date string in the format "YYYY-MM-DD HH:mm:ss".
 */
export const getHumanDate = (timestamp, offset) => {
  return dayjs(timestamp)
    .utcOffset(offset * 60, false)
    .format("YYYY-MM-DD HH:mm:ss");
};
