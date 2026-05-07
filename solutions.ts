// problem 1 solve 
function filterEvenNumbers(numbers: number[]) {
  return numbers.filter(n => n % 2 === 0)
}
const EvenNum = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(EvenNum)


// problem 2 solve  

const reverseString = (str: string): string => {
  return str.split('').reverse().join('')
}
const reverse = reverseString("typescript")
console.log(reverse)


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

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const result4 = getProperty(user, "name")
console.log(result4);



// problem 5 solve 


interface Book {
  title: string,
  author: string,
  publishedYear: number,

}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
 return {...book, isRead:true}
}
const result5=toggleReadStatus(myBook)

console.log(result5)
