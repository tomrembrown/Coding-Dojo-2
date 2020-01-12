// Just finds remainder of numerator divided by denominator
const findRemainder = (numerator, denominator) => numerator % denominator

// Finds the greatest common denominator (GCD) of two numbers using the
// Euclidian algorithm: https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html
// Note this assumes first number always larger than or equal to second, and
// both numbers are non-zero integers - the numbers are switched in LCM algorithm once
const findGCD = (largestNum, smallestNum) => {
  if (smallestNum === 0) return largestNum
  const remainder = findRemainder(largestNum, smallestNum)
  return findGCD(smallestNum, remainder)
}

// Swaps two numbers - return in an array
const swap = (a, b) => [b, a]

// Sorts max - returns with highest number always first
const sortMax = (a, b) => {
  if (b > a) return swap(a, b)
  else return [a, b]
}

// Finds the least common multiple (LCM). A simple way to get LCM
// is by using GCD: LCM = a / gcd * b ()
// https://stackoverflow.com/questions/3154454/what-is-the-most-efficient-way-to-calculate-the-least-common-multiple-of-two-int
const findLCM = (a, b) => {
  const sortedNumbers = sortMax(a, b)
  const gcd = findGCD(sortedNumbers[0], sortedNumbers[1])
  return (a / gcd) * b
}

module.exports = { findRemainder, findGCD, swap, sortMax, findLCM }
