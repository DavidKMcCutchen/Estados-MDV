import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@estados/core-data';
import { EstadoEffects } from './estados/estados.effects';
import { reducers } from '.';
import { NgModule } from '@angular/core';


const store_name = 'Estados Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([EstadoEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})
export class CoreStateModule {}