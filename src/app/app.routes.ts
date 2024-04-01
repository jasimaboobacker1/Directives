import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { DetailsComponent } from './blogs/details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'blogs/details/:name/:birthdate/:age/:occupation/:spouse/:email',
    component: DetailsComponent
  }
];

