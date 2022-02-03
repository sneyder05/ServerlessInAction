import { APIGatewayEvent, } from 'aws-lambda'
import { StudentToAdd, } from '../../domain/dto'
import { JoiValidate, } from '../../libs/lambda-joisify'
import { AddStudentController, } from '../../modules/student/controller'
import { GenericObject, IAppError, IEventResponse, } from '../../types'
import { AWSUtils, MessageUtils, } from '../../utils'
import { AddStudent, } from './validations'

export class AddStudentEntry {
  /**
   * Add a student
   * @author fnavia
   * @since 1.0.0
   * @param event Lambda request event
   * @returns A formatted request response
   */
  @JoiValidate(AddStudent)
  public static async add(event: APIGatewayEvent): Promise<IEventResponse> {
      try {
        const studentData = this.parseStudentData(AWSUtils.parseBodyFromEvent(event))

        const student = await AddStudentController.add(studentData)

        return MessageUtils.success({ student, })
      } catch (error) {
        return MessageUtils.from(error as IAppError)
      }
  }

  /**
   * Parses the lambda request payload into Student
   * @author fnavia
   * @since 1.0.0
   * @param data Student payload
   * @returns A formmatted student type
   */
  private static parseStudentData(data: GenericObject): StudentToAdd {
    const studentData: StudentToAdd = {
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      phoneNumber: data.phoneNumber,
      gender: data.gender ?? '',
    }

    return studentData
  }
}