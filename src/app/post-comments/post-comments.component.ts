import { Component, OnInit } from '@angular/core';
import { Post }         from '../post';
import { PostService }  from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.less']
})
export class PostCommentsComponent implements OnInit {

  comments: Post[];

  // temp comment display
  posts = [];
  addComment(newComment: string) {
    if (newComment) {
      this.posts.push(newComment);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments(): void {
    this.postService.getComments()
    .subscribe(comments => this.comments = comments);
  }
  // add comment
  add(comment: string): void {
  comment = comment.trim();
    if (!comment) { return; }
      this.postService.addComment({ comment } as Post)
        .subscribe(comments => {
          this.comments.push(comments);
    });
  }

  // // save button
  // save(): void {
  //   this.postService.updateComment(this.posts)
  //     .subscribe(() => this.goBack());
  // }

  // go back button
  goBack(): void {
    this.location.back();
  }

}
