import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './components/races/races.component';
import { SeasonComponent } from './components/season/season.component';

const routes: Routes = [
  { path: '', component: SeasonComponent },
  { path: 'season/:id', component: RacesComponent },
  { path: '', component: SeasonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
