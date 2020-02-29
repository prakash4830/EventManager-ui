import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent} from './components/event-list/event-list.component';
import { AddeventsComponent} from './components/addevents/addevents.component';


const routes: Routes = [
  {
    path:'events',
    component  : EventListComponent
  },{
    path:'addevents',
    component : AddeventsComponent

  }
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
