# Serverless In Actions

## Deploy

### Run whitout Docker

If you want run the app avoiding to use docker, please follow the steps below at the **root app folder**:

* `npm install -g serverless@2.64.1`: Install Serverless framework.
* `npm install`: Install all dependencies.
* `npm run build`: Check if there are errors.
* `serverless dynamodb install`: Install DynamoDb serverless plugin.
* `serverless dynamodb start`: Start DynamoDB locally
* `npm start`: Run the app.