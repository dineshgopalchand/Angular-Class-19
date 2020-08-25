import { Component, OnInit } from '@angular/core';
import { Post } from '../favorite/favorite.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Post[] = [
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

  likeFunction(e: Post) {
    // console.log('like event happened', e);
    console.log('is liked', e.isLiked);
    console.log('count', e.likeCount);
    console.log('ID', e.id);

  }

}

