import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserItemComponent } from './user-item/user-item.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    UserComponent,
    UserItemComponent,
    RegistrationComponent,
    ConfirmDeleteComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
  ],
  exports: [
    UserComponent,
  ],
  entryComponents: [
    RegistrationComponent,
    ConfirmDeleteComponent,
  ],
})
export class UserModule { }
