export class Post {
    _id: string;
    authorId: string;
    groups: string[];
    users: string[];
    isGeneral: boolean;
    title: string;
    content: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(obj?: any) {
        this._id = obj && obj._id || ''
        this.authorId = obj && obj.authorId || ''
        this.groups = obj && obj.groups || []
        this.users = obj && obj.users || []
        this.isGeneral = obj && obj.isGeneral || ''
        this.title = obj && obj.title || ''
        this.content = obj && obj.content || ''
        this.url = obj && obj.url || ''
        this.createdAt = obj  && obj.createdAt || new Date()
        this.updatedAt = obj && obj.updatedAt || new Date()
    }
}