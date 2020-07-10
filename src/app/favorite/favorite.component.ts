import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isLike: boolean;
  @Input() count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggelLike() {
    this.isLike = !this.isLike;
    if (this.isLike) {
      this.count++;
    } else {
      this.count--;
    }
  }
}
