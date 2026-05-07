// problem 1 solve 
function filterEvenNumbers(numbers: number[]) {
  return numbers.filter(n => n % 2 === 0)
}
const EvenNum = filterEvenNumbers([1, 2, 3, 4, 5, 6])


// problem 2 solve  

const reverseString = (str: string): string => {
  return str.split('').reverse().join('')
}
const reverse = reverseString("typescript")



// problem 3 solve 
type StringOrNumber = string | number;

const checkType = (StringOrNumber: StringOrNumber) => {
  if (typeof StringOrNumber === 'string') {
    return "String";
  }
  else if (typeof StringOrNumber === "number") {
    return "Number"
  }

}
const result3 = checkType('43')

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




// problem 6 solve 

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");





// problem 7 solve 


function getIntersection(arr1: number[], arr2: number[]) {

  let result: number[] = [];

  for (let item of arr1) {

    if (arr2.includes(item)) {
      result.push(item);
    }

  }

  return result;
}

