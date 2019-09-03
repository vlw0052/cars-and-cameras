import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasComponent } from './cameras.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CamerasComponent],
  imports: [CommonModule, MatModule, SharedModule],
  exports: [CamerasComponent]
})
export class CamerasModule {}
