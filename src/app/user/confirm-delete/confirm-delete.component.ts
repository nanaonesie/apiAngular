import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/models/user';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,

    @Inject(MAT_DIALOG_DATA) public userData: any,
  ) {
    if (userData) {
      console.log(userData);
      this.user = userData.user;
    }
  }

  ngOnInit() {
  }

  confirmDelete() {
    this.userService.deleteUser(this.user);
  }

}
