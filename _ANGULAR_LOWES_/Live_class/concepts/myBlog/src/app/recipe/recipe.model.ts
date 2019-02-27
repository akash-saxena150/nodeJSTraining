export class RecipeModel{
    public title:string;
    public content: string;
    public imgPath: string;
    constructor(title: string, content: string, imgPath: string){
        this.title = title;
        this.content = content;
        this.imgPath = imgPath;
    }
}