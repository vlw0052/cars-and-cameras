import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CamerasComponent } from './cameras/cameras.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vehicles'
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'cameras',
    component: CamerasComponent
  },
  {
    path: 'assignments',
    component: AssignmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
