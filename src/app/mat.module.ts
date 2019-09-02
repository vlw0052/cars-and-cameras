import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MatModule {}
