import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BoardsComponent } from '../features/boards/boards.component';
import { CalendarComponent } from '../features/calendar/calendar.component';

const routes: Routes = [
  
  { path:'', component: LayoutComponent ,
    children:[{
      path:'boards', component: BoardsComponent
    },
    {
      path:'calendar',component: CalendarComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
