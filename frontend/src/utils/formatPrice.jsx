// formatPrice.jsx - Helper function to format price values consistently

/**
 * This function formats a price value to a standardized currency format.
 * It takes a number (price) and an optional currency symbol (default is "$").
 * The result is a string with the price formatted with commas as thousands separators
 * and two decimal places for cents.
 *
 * @param {number} price - The price to format
 * @param {string} [currencySymbol="$"] - The currency symbol (default is "$")
 * @returns {string} - The formatted price string
 */
const formatPrice = (price, currencySymbol = "$") => {
    // Check if price is a valid number, otherwise return a default error message
    if (isNaN(price) || price === null || price === undefined) {
      return "Invalid Price";
    }
  
    // Format price to have two decimals and add thousands separator
    return `${currencySymbol}${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };
  
  export default formatPrice;
  