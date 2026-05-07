// problem 1 solve 
function filterEvenNumbers(numbers: number[]) {
  return numbers.filter(n => n % 2 === 0)
}
const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(result1)


// problem 2 solve  

const reverseString = (str: string): string => {
  return str.split('').reverse().join('')
}
const result2 = reverseString("typescript")
console.log(result2)


// problem 3 solve 
type StringOrNumber = string | number;

const checkType = (StringOrNumber: StringOrNumber) => {
  if (typeof StringOrNumber === 'string') {
    return "string"
  }
  else if (typeof StringOrNumber === "number") {
    return "number"
  }

}
const result = checkType(43)
console.log(result)

// problem 4 solve 
const user = {
  id: 1,
  name: "John Doe",
  age: 21
};

function getProperty<T>(obj: T, key: keyof) {
  return obj[key]
}
getProperty(user, "name");