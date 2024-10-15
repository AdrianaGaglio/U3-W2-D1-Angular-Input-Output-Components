import { Component, Input, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.scss',
})
export class RelatedPostsComponent implements OnInit {
  @Input() featuredPost!: iPost;
  @Input() posts!: iPost[];

  allRelatedPosts: iPost[] = [];
  relatedPosts: iPost[] = [];
  // featuredIndex: number = 0;
  index: number = 0;

  ngOnInit() {
    // prendo i tag del featuredPost
    const tags: string[] = this.featuredPost.tags;
    // per ogni post estraggo i post con tag correlati
    this.posts.forEach((post) => {
      tags.forEach((tag, i) => {
        if (post.tags[i] === tag && post.id !== this.featuredPost.id) {
          this.allRelatedPosts.push(post);
        }
      });
    });
    for (let i = 0; i < 4; i++) {
      const current = this.allRelatedPosts[i];
      if (this.relatedPosts.indexOf(current) === -1) {
        this.relatedPosts.push(current);
      }
    }
  }
}
