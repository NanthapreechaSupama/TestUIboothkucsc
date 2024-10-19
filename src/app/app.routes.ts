import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonesComponent } from './pages/zones/zones.component';
import { BoothsComponent } from './pages/booths/booths.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BarComponent } from './pages/bar/bar.component';

export const routes: Routes = [
  { path: '', component: ZonesComponent },
  { path: 'booths', component: BoothsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'bar', component: BarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
