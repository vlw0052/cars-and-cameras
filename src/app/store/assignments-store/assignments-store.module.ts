import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { assignmentReducer } from './assignments.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('assignments', assignmentReducer)
  ]
})
export class AssignmentsStoreModule {}
