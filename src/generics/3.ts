function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { job: 'Engineer' };

const merged = merge(obj1, obj2);
// merged має тип { name: string; age: number; job: string; }
