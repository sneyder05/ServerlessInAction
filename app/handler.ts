import { AWSUtils, } from './utils'

export const test = async () => {
  try {
    const db = AWSUtils.getDynamoDb()
    console.log('🧨🧨  ~ file: handler.ts ~ line 6 ~ test ~ db', db)

    const record = await db.get({
      TableName: 'DemoTable',
      Key: { id: '123', },
    }).promise()

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'It works',
          record,
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