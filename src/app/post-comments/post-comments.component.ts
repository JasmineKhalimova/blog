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
    this.getComment();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getComment(id)
      .subscribe(comment => this.comment = comment);
  }

  // add comment
  // add(comment: string): void {
  // comment = comment.trim();
  //   if (!comment) { return; }
  //     this.postService.addComment({ comments } as Comment)
  //       .subscribe(comments => {
  //         this.comments.push(comments);
  //   });
  // }

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
