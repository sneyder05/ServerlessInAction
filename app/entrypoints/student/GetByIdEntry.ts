import { APIGatewayEvent, } from 'aws-lambda'
import { JoiValidate, } from '../../libs/lambda-joisify'
import { GetStudentByIdController, } from '../../modules/student/controller'
import { IAppError, IEventResponse, } from '../../types'
import { MessageUtils, } from '../../utils'
import { GetStudentById, } from './validations'

export class GetStudentByIdEntry {
  /**
   * Gets a student filtering by ID
   * @author fnavia
   * @since 1.0.0
   * @param event Lambda request event
   * @returns A formatted request response
   */
  @JoiValidate(GetStudentById)
  public static async get(event: APIGatewayEvent): Promise<IEventResponse> {
      try {
        const id: string = event.pathParameters.id

        const result = await GetStudentByIdController.get(id)

        return MessageUtils.success(result)
      } catch (error) {
        return MessageUtils.from(error as IAppError)
      }
  }
}