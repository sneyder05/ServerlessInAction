import { AWSUtils, } from './utils'

export const test = async () => {
  try {
    const db = AWSUtils.getDynamoDb()

    const record = await db.get({
      TableName: process.env.DYNAMO_STUDENT_TABLE,
      Key: { id: '100100100', },
    }).promise()

    const all = await db.scan({
      TableName: process.env.DYNAMO_STUDENT_TABLE,
    }).promise()

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'It works',
          record,
          all,
        }
      ),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: 'Error',
          error: err.message || 'Unknown',
        }
      ),
    }
  }
}