import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  preview = new EventEmitter<User>();

  @Output()
  delete = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  openPreview() {
    this.preview.emit(this.user);
  }

  openConfirmDelete() {
    this.delete.emit(this.user);
  }

}
