import { Student, StudentToAdd, } from '../../../domain/dto'
import { AddStudentService, } from '../service'

export class AddStudentController {
  /**
   * Adds a student
   * @author fnavia
   * @since 1.0.0
   * @param student Student info
   * @returns Student created info
   */
  public static async add(student: StudentToAdd): Promise<Student> {
    return AddStudentService.add(student)
  }
}