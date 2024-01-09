export interface IResponse {
    message:string,
    statusCode:number,
    success:Boolean,
    data?:any
}
export interface IErrorResponse extends Error {
    message:string,
    statusCode:number,
    success:Boolean,
    data?:any
}

export interface DataType {
    type?:'SUCCESS'|'BAD_REQUEST'| 'UNAUTHORIZED'|'FORBIDDEN'|'NOT_FOUND'|'ERROR',
    data?:any,
    message?:string,
    status?:number
}