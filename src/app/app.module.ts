import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { PostsComponent }      from './posts/posts.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    PostCommentsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }