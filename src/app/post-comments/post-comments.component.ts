import { Component, OnInit, Input } from '@angular/core';
import { PostService }  from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Comment } from '../comments';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.less']
})

export class PostCommentsComponent implements OnInit {

  @Input() comment: Comment;
  comments = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getComment();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getComment(id)
      .subscribe(comment => this.comment = comment);
  }

  // add comment
  add(content: string): void {
    content = content.trim();
    if (!content) { return; }
    this.postService.addComment({ content } as Comment)
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }
    //Delete comment
    delete(comment: Comment): void {
      this.comments = this.comments.filter(h => h !== comment);
      this.postService.deleteHero(comment).subscribe();
    }

  // go back button
  goBack(): void {
    this.location.back();
  }

}
