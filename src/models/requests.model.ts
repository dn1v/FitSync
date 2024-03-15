export class UserRequests {
    
}

export class UserRequest {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;

    constructor(obj: any) {
        this._id = obj && obj._id || '';
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.role = obj && obj.__t || ''
    }
}