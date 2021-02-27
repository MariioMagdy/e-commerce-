import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  child= 5
  @Input() count:number
  @Output() changeCount:EventEmitter<number>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.count);

  }

  increment(){
    this.count++
    this.changeCount.emit(this.count)
  }

}
