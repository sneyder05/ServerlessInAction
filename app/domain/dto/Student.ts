export type Student = {
  id: string,
  name: string,
  lastName: string,
  age: number,
  phoneNumber: string,
  gender?: string
}

export type StudentToAdd = Omit<Student, 'id'>