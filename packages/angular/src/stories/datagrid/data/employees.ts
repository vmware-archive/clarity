import { FIRST_NAMES, LAST_NAMES, ROLES } from './seed-data';

export interface Employee {
  name: string;
  role: string;
  id: number;
}

export class EmployeeGenerator {
  public static generateSeedData(count: number): Employee[] {
    /**
     * The goal here is to generate a large array of items exactly the same way each time.
     */
    return Array.from(Array(count).keys()).map(key => ({
      name: `${FIRST_NAMES[key]} ${LAST_NAMES[key]}`,
      role: ROLES[key % 10],
      id: key,
    }));
  }
}
