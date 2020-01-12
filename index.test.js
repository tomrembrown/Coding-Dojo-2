const { findRemainder, findGCD, swap, sortMax, findLCM } = require('./index')

test('finds remainder of 4 divided by 2 to be 0', () => {
  expect(findRemainder(4, 2)).toBe(0)
})

test('finds remainder of 8 divided by 3 to be 2', () => {
  expect(findRemainder(8, 3)).toBe(2)
})

test('finds remainder of 4 divided by 3 to be 1', () => {
  expect(findRemainder(4, 3)).toBe(1)
})

test('finds GCD of 3 and 0 to be 3', () => {
  expect(findGCD(3, 0)).toBe(3)
})

test('finds GCD of 0 and 0 to be 0', () => {
  expect(findGCD(0, 0)).toBe(0)
})

test('finds GCD of 56 and 42 to be 14', () => {
  expect(findGCD(56, 42)).toBe(14)
})

test('finds GCD of 461952 and 116298 to be 18', () => {
  expect(findGCD(461952, 116298)).toBe(18)
})

test('finds GCD of 314080416 and 7966496 to be 32', () => {
  expect(findGCD(314080416, 7966496)).toBe(32)
})

test('finds GCD of 314080416 and 7966496 to be 32', () => {
  expect(findGCD(314080416, 7966496)).toBe(32)
})

test('finds GCD of 45296490 and 24826148 to be 526', () => {
  expect(findGCD(45296490, 24826148)).toBe(526)
})

test('Swap 1 and 2 to be [2, 1]', () => {
  expect(swap(1, 2)).toEqual([2, 1])
})

test('Sorts max of 3 and 1 to be [3, 1]', () => {
  expect(sortMax(3, 1)).toEqual([3, 1])
})

test('Sorts max of 5 and 10 to be [10, 5]', () => {
  expect(sortMax(5, 10)).toEqual([10, 5])
})

test('Sorts max of 0 and 0 to be [0,0]', () => {
  expect(sortMax(0, 0)).toEqual([0, 0])
})

test('LCM of 21 and 6 to be 42', () => {
  expect(findLCM(21, 6)).toBe(42)
})

test('LCM of 4 and 12 to be 12', () => {
  expect(findLCM(4, 12)).toBe(12)
})

test('LCM of 39 and 43 to be 1677', () => {
  expect(findLCM(39, 43)).toBe(1677)
})

test('LCM of 1 and 20 to be 20', () => {
  expect(findLCM(1, 20)).toBe(20)
})

test('finds LCM of 45296490 and 24826148 to be 2137903735020', () => {
  expect(findLCM(45296490, 24826148)).toBe(2137903735020)
})
