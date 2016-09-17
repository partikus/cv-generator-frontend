import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Landing } from "./landing";
import { NoContent } from './no-content';
import { CreateCv } from "./create-cv";

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Landing },
  { path: 'home',  component: Home },
  { path: 'createcv',  component: CreateCv },
  { path: '**',    component: NoContent },
];
