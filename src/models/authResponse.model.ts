import { Coach } from "./coach.model";
import { Athlete } from "./athlete.model";
import { User } from "./user.model";

export class AuthResponse {
    user: Coach | Athlete | null;
    token: string;

    constructor(obj?: any) {
        this.token = obj?.token || '';
        this.user = obj?.user ? this.createUserInstance(obj.user) : null;
        
    }

    private createUserInstance(userData: any): Coach | Athlete | null {
        switch (userData.__t) {
            case 'Coach':
                return new Coach(userData);
            case 'Athlete':
                return new Athlete(userData);
            default:
                return null;
        }
    }
}
