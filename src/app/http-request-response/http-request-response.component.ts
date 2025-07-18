import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-request-response',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './http-request-response.component.html',
  styleUrl: './http-request-response.component.css'
})
export class HttpRequestResponseComponent implements OnInit {
  posts: Post[] = [];
  newPost: Partial<Post> = { title: "", body: "", userId: 1 };
  editingPost: Post | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  submitPost() {
    this.postService.addPost(this.newPost).subscribe((createdPost) => {
      this.posts.unshift(createdPost);
      this.newPost = { title: "", body: "", userId: 1 };
    });
  }

  edit(post: Post) {
    this.editingPost = { ...post };
  }

  updatePost() {
    if (this.editingPost) {
      this.postService.updatePost(this.editingPost).subscribe((updatedPost) => {
        const idx = this.posts.findIndex((p) => p.id === updatedPost.id);
        if (idx > -1) this.posts[idx] = updatedPost;
        this.editingPost = null;
      });
    }
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter((p) => p.id !== postId);
    });
  }
}
