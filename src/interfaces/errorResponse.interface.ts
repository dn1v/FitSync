export interface ErrorResponse {
    status: number,
    message: string,
    data: { reason: string }
}