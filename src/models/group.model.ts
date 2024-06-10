export class Group {
    _id: string;
    admin: string;
    moderators: string[];
    members: string[];
    posts: string[]
    groupName: string;
    about: string;
    showMembers: boolean;
    showModerators: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(obj?: any) {
        this._id = obj && obj._id || ''
        this.admin = obj && obj.admin || ''
        this.moderators = obj && obj.moderators || []
        this.members = obj && obj.members || []
        this.posts = obj && obj.posts || []
        this.groupName = obj && obj.groupName || ''
        this.showMembers = obj && obj.showMembers || true
        this.showModerators = obj && obj.showModerators || true
        this.about = obj && obj.about || ''
        this.createdAt = obj && obj.createdAt || new Date()
        this.updatedAt = obj && obj.updatedAt || new Date()
    }
}