import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/user.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user = new User();

  disabled = false;

  edit = false;

  constructor(
    private userService: UserService,

    @Inject(MAT_DIALOG_DATA) public userData: any,
  ) {

    this.user = new User();
    if (userData && userData.user && userData.preview) {
      this.user = userData.user;
      this.disabled = userData.preview;
    }
  }

  ngOnInit() {
  }

  onCancel() {
    console.log('cancel');
  }

  onSave(user: User) {
    (!this.edit) ? this.userService.setUser(user) : this.userService.updateUser(user);
  }

  onEdit() {
    this.disabled = false;
    this.edit = true;
  }

}
