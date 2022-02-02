import { DocumentClient, } from 'aws-sdk/clients/dynamodb'
import AWS from 'aws-sdk'
import config from '../config'

export class AWSUtils {
  public static getDynamoDb(): DocumentClient {
    if (config.app.isOffile) {
      return new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',
        secretAccessKey: 'DEFAULT_SECRET',
      })
    }

    return new AWS.DynamoDB.DocumentClient()
  }
}