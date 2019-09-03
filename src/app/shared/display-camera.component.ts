import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store/state';
import { CameraStoreSelectors } from '../store';
import { Camera } from '../models';

@Component({
  selector: 'display-camera',
  template: `
    <p *ngIf="camera">Camera - {{ camera.deviceNo }}</p>
  `
})
export class DisplayCameraComponent implements OnInit {
  @Input() id: number;
  camera: Camera = null;
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store
      .select(CameraStoreSelectors.selectCameraById(this.id))
      .subscribe(cam => {
        this.camera = cam;
      });
  }
}
