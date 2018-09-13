/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  let truncatedString = '';
  let result = '';

  if (str.length > 0) {
    if (length === 0 && replacer.length > 0) {
      truncatedString = str.substring((str.length - replacer.length),length);
      result = truncatedString.concat(replacer)
    } else if (length >= str && length > 0 ) {
      result = str;
    }
  } else {
    return result = str;
  }
  return result;
};

export default truncate;
