import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // @Input() isLike: boolean;
  // @Input() count = 0;

  @Input() post: Post = {} as Post;
  @Output() likeAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggelLike() {
    this.post.isLiked = !this.post.isLiked;
    if (this.post.isLiked) {
      this.post.likeCount++;
    } else {
      this.post.likeCount--;
    }
    this.likeAction.emit(this.post);
  }
}


export interface Post {
  id: string;
  title: string;
  details: string;
  likeCount: number;
  isLiked: boolean;
}
