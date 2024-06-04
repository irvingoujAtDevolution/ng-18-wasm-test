import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SshComponent } from './ssh/ssh.component';



@NgModule({
  declarations: [
    SshComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SshComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class AppModule { }
