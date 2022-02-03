import { Student, } from '../../../domain/dto'
import { NotFoundError, } from '../../../errors'
import { GetStudentByIdService, } from '../service'

export class GetStudentByIdController {
  /**
   * Gets a student filtering by ID
   * @author fnavia
   * @since 1.0.0
   * @param userId Student ID to filter
   * @returns A student model
   */
  public static async get(id: string): Promise<Student> {
    const student = await GetStudentByIdService.get(id)

    if (!student.Item) {
      throw new NotFoundError(`Unable to find student with id '${id}'`)
    }

    return student.Item as Student
  }
}