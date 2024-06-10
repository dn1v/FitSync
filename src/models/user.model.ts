export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    connections: string[]
    __t: string



    constructor(obj?: any) {
        console.log('User model:', obj)
        this._id = obj && obj._id || null
        this.firstName = obj && obj.firstName || null
        this.lastName = obj && obj.lastName || null
        this.email = obj && obj.email || null
        this.password = obj && obj.password || null
        this.role = obj && obj.role || null
        this.createdAt = obj && obj.createdAt || new Date()
        this.updatedAt = obj && obj.updatedAt || new Date()
        this.__t = obj && obj.__t || ''
        this.connections = obj && obj.connections || []
    }
}