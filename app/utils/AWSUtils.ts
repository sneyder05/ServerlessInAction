import { DocumentClient, } from 'aws-sdk/clients/dynamodb'
import AWS from 'aws-sdk'
import config from '../config'
import { APIGatewayEvent } from 'aws-lambda'
import { GenericObject } from '../types'

export class AWSUtils {
  /**
   * Creates a DynamoDB client validating if the app is running as offline mode
   * @author fnavia
   * @since 1.0.0
   * @returns A DynamoDB instance
   */
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

  /**
   * Parses the lambda request body as JSON or returns a default value
   * @author fnavia
   * @since 1.0.0
   * @param event Lambda request event
   * @param defaultValue A default value in case of event body is empty
   * @returns Lambda request body parsed as JSON
   */
   public static parseBodyFromEvent(event: APIGatewayEvent, defaultValue = {}): GenericObject {
    try {
      const body = JSON.parse(event.body)

      return body
    } catch (err) {
      return defaultValue || {}
    }
  }
}