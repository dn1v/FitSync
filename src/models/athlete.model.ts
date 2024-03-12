import { User } from "./user.model";

export class Athlete extends User {
    dateOfBirth: Date;
    sport: string;
    coaches: string[];
    pending: string[];

    constructor(obj?: any) {
        super(obj)
        this.dateOfBirth = obj && obj.dateOfBirth || null;
        this.sport = obj && obj.sport || null;
        this.coaches = obj && obj.coaches || [];
        this.pending = obj && obj.pending || [];

    }
}