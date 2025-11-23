export function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
}

export function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }
    return 0;
}

export class Person {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

export type RatedItem = {
  title: string;
  rating: number;
};

export function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

export interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

export function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

export function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];

  const addUnique = (value: T): void => {
    let exists = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(value);
    }
  };

  for (let i = 0; i < array1.length; i++) {
    addUnique(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    addUnique(array2[i]);
  }

  return result;
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

export function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    let lineTotal = product.price * product.quantity;

    if (typeof product.discount === "number" && product.discount > 0) {
      lineTotal = lineTotal * (1 - product.discount / 100);
    }

    return total + lineTotal;
  }, 0);
}
