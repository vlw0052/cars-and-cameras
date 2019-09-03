import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../mat.module';

import { AssignItemComponent } from './assign-item/assign-item.component';

@NgModule({
  declarations: [AssignItemComponent],
  imports: [CommonModule, MatModule, ReactiveFormsModule],
  exports: [AssignItemComponent]
})
export class SharedModule {}
