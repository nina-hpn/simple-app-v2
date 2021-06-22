/**
 * Display the number with 2 digits
 * @param {string | number} number 
 * @returns 
 */
import { API_URL } from "./urls";
export const TwoDecimals = (number) => parseFloat(number).toFixed(2);

export const SeperatePrice = (number) => number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');