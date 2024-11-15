import { GenericObject, } from './generics'

export interface IEventResponseBody {
  code: string,
  message: string,
  data?: GenericObject
}

export interface IEventResponse {
  statusCode: number,
  body: string
}