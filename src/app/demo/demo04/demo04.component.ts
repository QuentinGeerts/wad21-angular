import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.css']
})
export class Demo04Component implements OnInit {

  isDisabled : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}