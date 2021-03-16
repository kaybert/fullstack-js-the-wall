// 2xx successfull

const OK = 200
const CREATED = 201

// 3xx redirects

// 4xx Client error 
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405
const DUBLICATED_RESOURCE = 409

// 5xx server error

const INTERNAL_SERVER_ERROR = 500

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    DUBLICATED_RESOURCE,
    INTERNAL_SERVER_ERROR
}