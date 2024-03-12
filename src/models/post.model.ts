export class Post {
    _id: string;
    authorId: string;
    groups: string[];
    users: string[];
    isGeneral: boolean;
    title: string;
    content: string;
    url: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || ''
        this.authorId = obj && obj.authorId || ''
        this.groups = obj && obj.groups || []
        this.users = obj && obj.users || []
        this.isGeneral = obj && obj.isGeneral || ''
        this.title = obj && obj.title || ''
        this.content = obj && obj.content || ''
        this.url = obj && obj.url || ''
    }
}