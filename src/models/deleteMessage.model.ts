export class ResponseMessage {
    message: string

    constructor(obj?: any) {
        this.message = obj && obj.message
    }
}