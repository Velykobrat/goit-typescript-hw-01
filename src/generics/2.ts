type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

// generics для типізації параметрів функції
function compare<T extends AllType, U extends AllType>(top: Pick<T, 'name' | 'color'>, bottom: Pick<U, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// Приклад використання
const topObject = { name: 'Top', color: 'Red', position: 0, weight: 0 };
const bottomObject = { name: 'Bottom', color: 'Blue', position: 1, weight: 2 };

const result = compare(topObject, bottomObject);
