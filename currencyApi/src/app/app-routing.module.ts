import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DolarComponent } from './dolar/dolar.component';
import { DolarAustralianoComponent } from './dolar-australiano/dolar-australiano.component';
import { DolarCanadenseComponent } from './dolar-canadense/dolar-canadense.component';
import { EuroComponent } from './euro/euro.component';
import { LibraComponent } from './libra/libra.component';


const routes: Routes = [
  {path:"dolar", component: DolarComponent},
  {path:"dolar-australiano", component: DolarAustralianoComponent},
  {path:"dolar-canadense", component: DolarCanadenseComponent},
  {path:"euro", component: EuroComponent},
  {path:"libra", component: LibraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [DolarComponent, DolarAustralianoComponent, DolarCanadenseComponent,
EuroComponent, LibraComponent]
