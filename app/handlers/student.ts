import { APIGatewayEvent, Handler, } from 'aws-lambda'
import { AddStudentEntry, GetStudentByIdEntry, } from '../entrypoints/student'
import { IEventResponse, } from '../types'

/**
 * Gets a student
 * @author fnavia
 * @since 1.0.0
 * @param event Lambda request payload
 * @returns A formatted request response
 */
export const get: Handler = async (event: APIGatewayEvent): Promise<IEventResponse> => {
  return GetStudentByIdEntry.get(event)
}

/**
 * Adds a student
 * @author fnavia
 * @since 1.0.0
 * @param event Lambda request payload
 * @returns A formatted request response
 */
export const add: Handler = async (event: APIGatewayEvent): Promise<IEventResponse> => {
  return AddStudentEntry.add(event)
}