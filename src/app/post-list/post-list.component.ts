import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: PostList[] = [
    {
      id: 'p001',
      title: 'Post 1',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, itaque?',
      isLiked: true,
      likeCount: 2
    },
    {
      id: 'p002',
      title: 'Post 2',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, itaque?',
      isLiked: false,
      likeCount: 5
    },
    {
      id: 'p003',
      title: 'Post 3',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, itaque?',
      isLiked: true,
      likeCount: 10
    },
    {
      id: 'p004',
      title: 'Post 4',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, itaque?',
      isLiked: false,
      likeCount: 0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface PostList {
  id: string;
  title: string;
  details: string;
  likeCount: number;
  isLiked: boolean;
}
