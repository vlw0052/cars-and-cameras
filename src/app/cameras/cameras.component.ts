import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store/state';
import { Observable } from 'rxjs';
import { CameraStoreSelectors, CameraStoreActions } from '../store';
import { Camera } from '../models';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.sass']
})
export class CamerasComponent implements OnInit {
  cameras$: Observable<Camera[]>;
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.cameras$ = this.store.select(CameraStoreSelectors.selectCameras);
    this.store.dispatch(new CameraStoreActions.LoadCameras());
  }

  getCamera() {}
}
