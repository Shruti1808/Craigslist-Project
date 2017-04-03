import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JobComponent } from './job/job.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'job',
    component: JobComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
