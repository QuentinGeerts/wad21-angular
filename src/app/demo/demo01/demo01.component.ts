import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css']
})
export class Demo01Component implements OnInit {

  maVariable1 : string  = "Hello les WAD21 !"
  maVariable2 : number  = 25
  maVariable3 : boolean  = false

  constructor() { }

  ngOnInit(): void {
  }

}
