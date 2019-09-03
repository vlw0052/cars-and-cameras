import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasComponent } from './cameras.component';
import { DisplayCameraComponent } from './display-camera.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CamerasComponent, DisplayCameraComponent],
  imports: [CommonModule, MatModule, SharedModule],
  exports: [CamerasComponent, DisplayCameraComponent]
})
export class CamerasModule {}
