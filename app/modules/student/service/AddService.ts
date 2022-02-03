import config from '../../../config'
import { Student, StudentToAdd, } from '../../../domain/dto'
import { AWSUtils, } from '../../../utils'
import * as uuid from 'uuid'

const dynamoDb = AWSUtils.getDynamoDb()

export class AddStudentService {
  /**
   * Adds a student
   * @author fnavia
   * @since 1.0.0
   * @param student Student data to add
   * @returns Student created info
   */
  public static async add(student: StudentToAdd): Promise<Student> {
    const data: Student = { id: uuid.v4(), ...student, }

    await dynamoDb.put({
      TableName: config.dynamo.tables.Student,
      Item: data,
    }).promise()

    return data
  }
}