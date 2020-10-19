const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

function sumTest() {
  result = sum(3,7)
  expected=10
  expect(result).toBe(expected)
}

function subtractTest(params) {

}

function test(title, callback) {
  try {
    callback()
    console.log(`CHECK ${title}`)
  } catch (error) {
    console.error(`x ${title}`)
console.error(error)
  }
}


function expect(actual) {
  return {
    toBe(expected){
      if (actual !== expeccted) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}