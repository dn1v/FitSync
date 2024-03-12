import { User } from "./user.model";

export class Coach extends User {
    position: string;
    athletes: string[];
    pending: string[];

    constructor(obj?: any) {
        super(obj)
        this.position = obj && obj.position || null
        this.athletes = obj && obj.athletes || []
        this.pending = obj && obj.pending || []
    }
}