
/* A collection of helper functions */


/**
 * Formats a date as a string in the format "Year-Month-Day".
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted string.
 */
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero if needed

    return `${year}-${month}-${day}`;
}

/**
 * Checks if the given string is a valid date in the format "Month Day, Year", where:
 * - Month is the full name of the month (e.g. January, February, ...)
 * - Day is a number from 1 to 31
 * - Year is a four-digit number
 * @param {string} dateStr - The date string to be checked.
 * @returns {boolean} true if the date string is valid, false otherwise.
 */
export function isValidDateFormat(dateStr: string): boolean {
    // Regular expression for detecting the format "Month Day, Year"
    const regex = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;
    return regex.test(dateStr);
}

/**
 * Counts the number of lines of text within a specified element.
 * 
 * @param {string} parentElement - The name attribute of the parent element whose height is used for calculation.
 * @param {string} textElement - The name attribute of the text element whose line height is used for calculation.
 * @param {number} index - An index to uniquely identify elements by appending it to their name attributes.
 * @returns {number} The number of lines calculated based on the height of the parent and the line height of the text.
 * Returns 0 if the parent or text element is not found.
 */

export function countLines(parentElement: string, textElement: string, index:number): number {
    var parent = document.querySelector(`[name="${parentElement + index}"]`);
    var text =  document.querySelector(`[name="${textElement + index}"]`);
    if(parent && text) {
        var height = window.getComputedStyle(parent).height.replace('px', '')
        var lineHeight = window.getComputedStyle(text).lineHeight.replace('px', '')
        var lines = parseInt(height) / parseInt(lineHeight)
        return lines
    }
    return 0
}

/**
     * Format the number of data to a more human-readable format.
     * If greater than 10,000 and less than 1,000,000, use 'K data' (e.g. 12.5K data)
     * If greater than 1,000,000 use 'M data' (e.g. 1.2M data)
     * Otherwise, use the number of data (e.g. 500 data)
     * @return {string}
     */
export function formatViews(data: number): string{
    if(data > 10000 && data < 1000000){
        return (data / 1000) + 'K views';
    }
    if(data > 1000000){
        return (data / 1000000) + 'M views';
    }
    return data + ' views';
}

/**
 * Formats a string to a given length, appending an ellipsis if it exceeds the length
 * @param {string} data - A string that needs to be formatted
 * @param {number} maxLength - The maximum length of the string
 * @returns {string} The formatted string
 */
export function formatLength(data: string, maxLength: number): string{
    if(data.length > 15) return data.substring(0, maxLength) + '...'
    return data
}

/**
 * Adjusts the font size of a specified HTML element based on its content length.
 *
 * @param elementID - The ID of the HTML element whose font size is to be adjusted.
 * @param baseFontSize - The initial font size to start from.
 * @param reduceSize - The divisor used to reduce the font size based on the content length.
 */
export function formatElementTextSize(elementID: string, baseFontSize: number, reduceSize: number): void {
    const element = document.getElementById(elementID)
    if(element) element.style.fontSize = baseFontSize - element.innerHTML.length / reduceSize + 'px';
}

/**
 * Generates a random alphanumeric string of the specified length.
 * The string includes uppercase and lowercase letters and digits.
 * 
 * @param {number} length - The length of the random string to be generated.
 * @returns {string} A randomly generated string.
 */

export function generateRandomString(length: number): string {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}