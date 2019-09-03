import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './store/store.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { CamerasModule } from './cameras/cameras.module';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { DataService } from './services/data.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AssignmentsModule,
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    VehiclesModule,
    CamerasModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
