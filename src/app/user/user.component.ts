import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from './shared/models/user';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    public confirmDelete: MatDialog,
  ) { }

  ngOnInit() {
    this.setUsers();
  }

  setUsers() {
    this.userService.getBackTables().then((users: User[]) => this.users = users);
  }

  openDialog(user) {
    this.dialog.open(RegistrationComponent, {
      data: {
        user,
        preview: true,
      },
    });
  }

  openConfirmDelete(user) {
    this.confirmDelete.open(ConfirmDeleteComponent, {
      data: {
        user,
      }
    });
  }

}
