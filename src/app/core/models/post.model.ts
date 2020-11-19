export class Post{
    constructor(id:string, title: string, description: string, content: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
    }
    id: string;
    title: string;
    description: string;
    content: string;
}