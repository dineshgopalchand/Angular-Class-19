import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  inputValue = '';

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(e: MouseEvent) {
    console.log(event, e);
    console.log('Button Clicked');
  }
  keyupEvent(e: KeyboardEvent) {
    this.inputValue = (e.target as HTMLInputElement).value;
  }

}
