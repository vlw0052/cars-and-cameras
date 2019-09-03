import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AssignItemComponent } from './assign-item/assign-item.component';

@NgModule({
  declarations: [AssignItemComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [AssignItemComponent]
})
export class SharedModule {}
