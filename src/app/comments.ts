export interface Comment {
    id: number;
    postId: number;
    parent_id: number;
    date: Date;
    content: string;
  }
  export class Comment{
    id: number;
    postId: number;
    parent_id: number;
    date: Date;
    content: string;
  
    constructor(id, postId, parent_id, date, content){
      this.id = id;
      this.postId = postId;
      this.parent_id = parent_id;
      this.date = date;
      this.content = content;
    }
  }