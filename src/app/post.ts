export interface Post {
  id: number;
  title: string;
  author: string;
  publish_date: Date;
  slug: string;
  description: string;
  content: string;
  comment: string;
}
export class Post{
  id: number;
  title: string;
  author: string;
  publish_date: Date;
  slug: string;
  description: string;
  content: string;
  comment: string;

  constructor(id,title, author, publish_date, slug, description, content, comment){
    this.id = id;
    this.title = title;
    this.author = author;
    this.publish_date = publish_date;
    this.slug = slug;
    this.description = description;
    this.content = content;
    this.comment = comment;
  }
}