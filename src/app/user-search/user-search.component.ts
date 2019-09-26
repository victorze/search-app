import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  @Output() user = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  send(user: string) {
    this.user.emit(user)
  }

}
