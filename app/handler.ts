export const test = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'It works',
        input: {},
      }
    ),
  }
}