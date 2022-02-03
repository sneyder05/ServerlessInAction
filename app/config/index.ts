export default {
  app: {
    isOffile: process.env.IS_OFFLINE === 'true',
  },
  dynamo: {
    tables: {
      Student: process.env.DYNAMO_STUDENT_TABLE,
    },
  },
}