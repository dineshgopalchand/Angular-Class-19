import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  inputValue = 'some initial value';

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(ele: HTMLInputElement) {
    // console.log(event, e);
    console.log('Button Clicked');
    // this.keyupEvent(ele);
  }
  // keyupEvent(e: KeyboardEvent) {
  //   console.log(e);
  //   // if (e.keyCode === 13) {
  //   //   this.inputValue = (e.target as HTMLInputElement).value;
  //   // }

  //   this.inputValue = (e.target as HTMLInputElement).value;

  // }
  // keyupEvent(ele: HTMLInputElement) {
  //   console.log(ele);
  //   ele.value = ele.value.toLocaleUpperCase();
  //   this.inputValue = ele.value;
  // }
  keyupEvent() {
    this.inputValue = this.inputValue.toLocaleUpperCase();
  }

}
