import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CameraStoreEffects } from './cameras.effects';
import { cameraReducer } from './cameras.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cameras', cameraReducer),
    EffectsModule.forFeature([CameraStoreEffects])
  ],
  providers: [CameraStoreEffects]
})
export class CamerasStoreModule {}
