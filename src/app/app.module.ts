import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { reducers } from './core/store';
import { TabsEffects } from './core/store/tabs/tabs.effects';
import { ChartAreaModule } from './modules/chart-area/chart-area.module';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { TabsBarModule } from './modules/tabs-bar/tabs-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    HeaderModule,
    ChartAreaModule,
    TabsBarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    SidebarModule,
    EffectsModule.forRoot([TabsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
