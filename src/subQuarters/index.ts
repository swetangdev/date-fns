import toInteger from '../_lib/toInteger/index'
import addQuarters from '../addQuarters/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
export default function subQuarters<DateType extends Date>(
  dirtyDate: DateType | number,
  dirtyAmount: number
): DateType {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}
