import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { JobComponent } from './job/job.component';
import { NewJobComponent } from './new-job/new-job.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'job',
    component: JobComponent
  },
  {
    path: 'new-job',
    component: NewJobComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
