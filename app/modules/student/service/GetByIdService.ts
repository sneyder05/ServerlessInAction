import { DocumentClient, } from 'aws-sdk/clients/dynamodb'
import config from '../../../config'
import { AWSUtils, } from '../../../utils'

const dynamoDb = AWSUtils.getDynamoDb()

export class GetStudentByIdService {
  /**
   * Gets a student filtering by ID
   * @author fnavia
   * @since 1.0.0
   * @param id Student ID to filter
   * @returns A DynamoDB user object
   */
  public static async get(id: string): Promise<DocumentClient.GetItemOutput> {
    const query = {
      TableName: config.dynamo.tables.Student,
      Key: { id, },
    }

    const student = await dynamoDb.get(query).promise()

    return student
  }
}