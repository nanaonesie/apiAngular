import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor(
    private backend: BackendService,
  ) { }

  getBackTables() {
    return new Promise((resolve, reject) => {
      this.backend.getUsers()
        .subscribe((users: User[]) => {
          console.log(`Fetched ${users.length} users.`);
          resolve(users);
        }, err => {
          reject(err);
        });
    });
  }

  setUser(user: User) {
    return new Promise((resolve, reject) => {
      this.backend.setUser(user)
        .subscribe((newUser: User) => {
          console.log(`Save ${newUser.nom} user.`);
          resolve(user);
        }, err => {
          reject(err);
        });
    });
  }

  updateUser(user: User) {
    return new Promise((resolve, reject) => {
      this.backend.updateUser(user)
        .subscribe((newUser: User) => {
          console.log(`Update ${newUser.id} user.`);
          resolve(user);
        }, err => {
          reject(err);
        });
    });
  }

  deleteUser(user: User) {
    return new Promise((resolve, reject) => {
      this.backend.deleteUser(user)
        .subscribe((delUser: User) => {
          console.log(`Delete ${delUser.id} user.`);
          resolve(user);
        }, err => {
          reject(err);
        });
    });
  }
}
