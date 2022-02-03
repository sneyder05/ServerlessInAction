import Joi from 'joi'
import { Segments, } from '../../../libs/lambda-joisify/types'

export default Joi.object({
  [Segments.Body]: {
    name: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    age: Joi.number().positive().min(5),
    phoneNumber: Joi.string().min(10).max(15),
    gender: Joi.string().min(1).max(3),
  },
}).unknown()