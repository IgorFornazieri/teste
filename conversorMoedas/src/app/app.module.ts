import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';

import { LibraComponent } from './libra/libra.component';
import { EuroComponent } from './euro/euro.component';
import { DolarAustralianoComponent } from './dolar-australiano/dolar-australiano.component';
import { DolarCanadenseComponent } from './dolar-canadense/dolar-canadense.component';
import { IndexComponent } from './index/index.component';
import { DolarComponent } from './dolar/dolar.component';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    LibraComponent,
    EuroComponent,
    DolarAustralianoComponent,
    DolarCanadenseComponent,
    IndexComponent,
    DolarComponent,
    RoutingComponent,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
