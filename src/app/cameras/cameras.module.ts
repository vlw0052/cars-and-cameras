import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasComponent } from './cameras.component';
import { DisplayCameraComponent } from './display-camera.component';
import { MatModule } from '../mat.module';

@NgModule({
  declarations: [CamerasComponent, DisplayCameraComponent],
  imports: [CommonModule, MatModule],
  exports: [CamerasComponent, DisplayCameraComponent]
})
export class CamerasModule {}
